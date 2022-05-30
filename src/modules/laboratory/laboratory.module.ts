import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/shared/NestModules/global.module';
import { LaboratoryRepository } from './repositories/LaboratoryRepository';
import { CrudLaboratoryController } from './useCases/crud/crud.controller';
import { CreateLaboratoryService } from './useCases/crud/services/create.aboratory.service';
import { DeleteLaboratoryService } from './useCases/crud/services/delete.laboratory.service';
import { FindLaboratoryService } from './useCases/crud/services/find.laboratory.service';
import { UpdateLaboratoryService } from './useCases/crud/services/update.laboratory.service';

@Module({
  imports: [GlobalModule],
  controllers: [CrudLaboratoryController],
  providers: [
    CreateLaboratoryService,
    UpdateLaboratoryService,
    FindLaboratoryService,
    DeleteLaboratoryService,
    {
      provide: 'REPOSITORY_LABORATORY',
      useClass: LaboratoryRepository,
    },
  ],
})
export class LaboratoryModule {}
