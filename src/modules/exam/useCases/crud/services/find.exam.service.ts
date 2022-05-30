import { Inject, Injectable } from '@nestjs/common';
import { ExamDTO } from 'src/modules/exam/DTO/ExamDTO';
import { IExamRepository } from 'src/modules/exam/repositories/IExamRepository';

@Injectable()
export class FindExamService {
  constructor(
    @Inject('REPOSITORY_EXAM')
    private examRepository: IExamRepository,
  ) {}

  async findExam(): Promise<ExamDTO[]> {
    return this.examRepository.findAll();
  }
}
