import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Routes } from './app.routes';
import { UserModule } from './modules/user/user.module';
import { EnsureAuthenticated } from './shared/middlewares/EnsureAuthenticated';
import { GlobalModule } from './shared/NestModules/global.module';

@Module({
  imports: [GlobalModule, UserModule, Routes],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EnsureAuthenticated)
      .exclude('/desafiotech/login')
      .forRoutes('/desafiotech');
  }
}
