import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // console.log(process.env); // Exibe o valor da variável de ambiente DB_HOST
 
  // Configurar o CORS
  const corsOptions: CorsOptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Authorization,Content-Type',
  };
  app.enableCors(corsOptions);

  await app.listen(port, "0.0.0.0");
}
bootstrap();
