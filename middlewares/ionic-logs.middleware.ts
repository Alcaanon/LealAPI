import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Rota: ${req.method} ${req.originalUrl} - Timestamp: ${new Date().toISOString()}`);
    next();
  }
}
