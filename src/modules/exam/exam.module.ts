import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/shared/NestModules/global.module';
import { ExamRepository } from './repositories/ExamRepository';
import { CrudExamController } from './useCases/crud/crud.exam.controller';
import { DeleteExamService } from './useCases/crud/services/delete.exam.service';
import { FindExamService } from './useCases/crud/services/find.exam.service';
import { UpdateExamService } from './useCases/crud/services/update.exam.service';

@Module({
  imports: [GlobalModule],
  controllers: [CrudExamController],
  providers: [
    FindExamService,
    UpdateExamService,
    DeleteExamService,
    {
      provide: 'REPOSITORY_EXAM',
      useClass: ExamRepository,
    },
  ],
})
export class ExamModule {}
