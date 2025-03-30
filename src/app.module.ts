import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TempModule } from './temp/temp.module';
import { DbModule } from './db/db.module';
import { LoggerMiddleware } from './logger.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UsuarioModule, TempModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); 
  }
}
