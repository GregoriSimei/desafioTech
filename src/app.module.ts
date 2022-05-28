import { Module } from '@nestjs/common';
import { Routes } from './app.routes';
import { UserModule } from './modules/user/user.module';
import { GlobalModule } from './shared/NestModules/global.module';

@Module({
  imports: [GlobalModule, UserModule, Routes],
  controllers: [],
  providers: [],
})
export class AppModule {}
