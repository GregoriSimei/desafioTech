import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/shared/NestModules/global.module';
import { ExamRepository } from './repositories/ExamRepository';
import { LaboratoryRepository } from './repositories/LaboratoryRepository';
import { CrudLaboratoryController } from './useCases/crud/crud.controller';
import { CreateLaboratoryService } from './useCases/crud/services/create.aboratory.service';
import { DeleteLaboratoryService } from './useCases/crud/services/delete.laboratory.service';
import { FindLaboratoryService } from './useCases/crud/services/find.laboratory.service';
import { UpdateLaboratoryService } from './useCases/crud/services/update.laboratory.service';
import { CrudExamController } from './useCases/crudExam/crud.exam.controller';
import { CreateExamService } from './useCases/crudExam/services/create.exam.service';
import { FindExamService } from './useCases/crudExam/services/find.exam.service';

@Module({
  imports: [GlobalModule],
  controllers: [CrudLaboratoryController, CrudExamController],
  providers: [
    CreateLaboratoryService,
    UpdateLaboratoryService,
    FindLaboratoryService,
    DeleteLaboratoryService,
    CreateExamService,
    FindExamService,
    {
      provide: 'REPOSITORY_LABORATORY',
      useClass: LaboratoryRepository,
    },
    {
      provide: 'REPOSITORY_EXAM',
      useClass: ExamRepository,
    },
  ],
})
export class LaboratoryModule {}
