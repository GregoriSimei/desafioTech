import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalModule } from './shared/NestModules/global.module';

@Module({
  imports: [GlobalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
