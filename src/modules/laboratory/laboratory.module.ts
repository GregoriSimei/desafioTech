import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/shared/NestModules/global.module';
import { LaboratoryRepository } from './repositories/LaboratoryRepository';
import { CrudController } from './useCases/crud/crud.controller';
import { CreateLaboratoryService } from './useCases/crud/services/create.aboratory.service';

@Module({
  imports: [GlobalModule],
  controllers: [CrudController],
  providers: [
    CreateLaboratoryService,
    {
      provide: 'REPOSITORY_LABORATORY',
      useClass: LaboratoryRepository,
    },
  ],
})
export class LaboratoryModule {}
