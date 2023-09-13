import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoginErrorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      const statusCode = res.statusCode;
      if (statusCode >= 400 && statusCode < 500) {
        let errorCode = '';

        // Verifique o código de status e atribua o código apropriado
        if (statusCode === 401) {
          errorCode = 'Erro de senha'; // Por exemplo, você pode usar 401 para erros de senha
        } else if (statusCode === 404) {
          errorCode = 'Erro de Email não registrado'; // Por exemplo, você pode usar 404 para usuário não encontrado
        } else {
          errorCode = 'Outro erro de login'; // Código genérico para outros erros
        }

        console.log(`Erro de login: ${errorCode}`);
      }
    });

    next();
  }
}
