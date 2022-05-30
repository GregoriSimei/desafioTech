import { Inject, Injectable } from '@nestjs/common';
import { IExamRepository } from 'src/modules/exam/repositories/IExamRepository';

@Injectable()
export class DeleteExamService {
  constructor(
    @Inject('REPOSITORY_EXAM')
    private examRepository: IExamRepository,
  ) {}

  async deleteExam(examId: number): Promise<void> {
    await this.examRepository.remove(examId);
  }
}
