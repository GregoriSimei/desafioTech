import { Inject, Injectable } from '@nestjs/common';
import { ExamDTO } from 'src/modules/exam/DTO/ExamDTO';
import { UpdateExamDTO } from 'src/modules/exam/DTO/UpdateExamDTO';
import { IExamRepository } from 'src/modules/exam/repositories/IExamRepository';
import { BadRequest } from 'src/shared/DTO/BadRequest';

@Injectable()
export class UpdateExamService {
  constructor(
    @Inject('REPOSITORY_EXAM')
    private examRepository: IExamRepository,
  ) {}

  async updateExam(examToUpdate: UpdateExamDTO): Promise<ExamDTO> {
    const examExist = await this.examRepository.findById(examToUpdate.id);

    if (!examExist) throw new BadRequest("Exam don't exist.");

    const newExam = { ...examExist, ...examToUpdate };

    const updatedExam = await this.examRepository.update(newExam);

    return updatedExam;
  }
}
