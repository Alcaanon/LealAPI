import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ClientModule } from './client/client.module';
import { IonicCorsMiddleware } from 'middlewares/ionic-cors.middleware';
import { LoggerMiddleware } from 'middlewares/ionic-logs.middleware'; 
import { LoginErrorsMiddleware } from 'middlewares/login-errors.middleware';

@Module({imports: [
  ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
  }),
  ClientModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    IonicCorsMiddleware,
    LoggerMiddleware,
    LoginErrorsMiddleware,
  ],
  exports: [
    PrismaService
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IonicCorsMiddleware).forRoutes('*');
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(LoginErrorsMiddleware).forRoutes('/login'); 
  }
}