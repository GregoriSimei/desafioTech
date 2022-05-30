import { Inject, Injectable } from '@nestjs/common';
import { CreateExamDTO } from 'src/modules/laboratory/DTOs/CreateExamDTO';
import { ExamDTO } from 'src/modules/laboratory/DTOs/ExamDTO';
import { IExamRepository } from 'src/modules/laboratory/repositories/IExamRepository';
import { ILaboratoryRepository } from 'src/modules/laboratory/repositories/ILaboratoryRepository';
import { BadRequest } from 'src/shared/DTO/BadRequest';

@Injectable()
export class CreateExamService {
  constructor(
    @Inject('REPOSITORY_LABORATORY')
    private laboratoryRepository: ILaboratoryRepository,
    @Inject('REPOSITORY_EXAM')
    private examRepository: IExamRepository,
  ) {}

  async createExam(
    laboratoryId: number,
    examToCreate: CreateExamDTO,
  ): Promise<ExamDTO> {
    await this.checkIfLaboratoryExist(laboratoryId);
    await this.checkExamPropertiesToCreate(examToCreate);

    const examCreated = await this.examRepository.create(
      laboratoryId,
      examToCreate,
    );

    return examCreated;
  }

  private async checkIfLaboratoryExist(laboratoryId: number) {
    const laboratoryExist = await this.laboratoryRepository.findById(
      laboratoryId,
    );
    if (!laboratoryExist) throw new BadRequest("Laboratory don't exist.");
  }

  private async checkExamPropertiesToCreate(
    exam: CreateExamDTO,
  ): Promise<void> {
    if (!Boolean(exam.name)) throw new BadRequest('Field name is required.');
    if (!Boolean(exam.description))
      throw new BadRequest('Field descriptiom is required.');
    if (!Boolean(exam.status))
      throw new BadRequest('Field status is required.');
  }
}
