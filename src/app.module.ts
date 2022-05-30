import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { Routes } from './app.routes';
import { LaboratoryModule } from './modules/laboratory/laboratory.module';
import { UserModule } from './modules/user/user.module';
import { EnsureAuthenticated } from './shared/middlewares/EnsureAuthenticated';
import { GlobalModule } from './shared/NestModules/global.module';

@Module({
  imports: [GlobalModule, UserModule, LaboratoryModule, Routes],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EnsureAuthenticated)
      .exclude(
        { path: '/desafiotech/user', method: RequestMethod.POST },
        { path: '/desafiotech/user/login', method: RequestMethod.ALL },
      )
      .forRoutes('/desafiotech');
  }
}
