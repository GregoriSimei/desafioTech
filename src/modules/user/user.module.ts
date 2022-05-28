import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/shared/NestModules/global.module';
import { CrudController } from './useCases/crud/crud.controller';
import { CreateService } from './useCases/crud/services/create.user.service';

@Module({
  imports: [GlobalModule],
  controllers: [CrudController],
  providers: [CreateService],
})
export class UserModule {}
