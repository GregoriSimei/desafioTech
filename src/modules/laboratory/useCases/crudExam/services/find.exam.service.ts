import { Inject, Injectable } from '@nestjs/common';
import { ExamDTO } from 'src/modules/laboratory/DTOs/ExamDTO';
import { IExamRepository } from 'src/modules/laboratory/repositories/IExamRepository';
import { ILaboratoryRepository } from 'src/modules/laboratory/repositories/ILaboratoryRepository';
import { BadRequest } from 'src/shared/DTO/BadRequest';

@Injectable()
export class FindExamService {
  constructor(
    @Inject('REPOSITORY_LABORATORY')
    private laboratoryRepository: ILaboratoryRepository,
    @Inject('REPOSITORY_EXAM')
    private examRepository: IExamRepository,
  ) {}

  async findExam(
    laboratoryId: number,
    examId: number,
  ): Promise<ExamDTO | ExamDTO[]> {
    await this.checkIfLaboratoryExist(laboratoryId);

    const response = examId
      ? await this.examRepository.findById(laboratoryId, examId)
      : await this.examRepository.findAll(laboratoryId);

    return response;
  }

  private async checkIfLaboratoryExist(laboratoryId: number) {
    const laboratoryExist = await this.laboratoryRepository.findById(
      laboratoryId,
    );
    if (!laboratoryExist) throw new BadRequest("Laboratory don't exist.");
  }
}
