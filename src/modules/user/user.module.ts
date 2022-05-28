import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/shared/NestModules/global.module';
import { UserRepository } from './repositories/UserRepository';
import { CrudController } from './useCases/crud/crud.controller';
import { CreateUserService } from './useCases/crud/services/create.user.service';

@Module({
  imports: [GlobalModule],
  controllers: [CrudController],
  providers: [
    CreateUserService,
    {
      provide: 'REPOSITORY_USER',
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
