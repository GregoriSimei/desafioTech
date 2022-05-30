import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/shared/NestModules/global.module';
import { LaboratoryRepository } from './repositories/LaboratoryRepository';

@Module({
  imports: [GlobalModule],
  controllers: [],
  providers: [
    {
      provide: 'REPOSITORY_LABORATORY',
      useClass: LaboratoryRepository,
    },
  ],
})
export class UserModule {}
