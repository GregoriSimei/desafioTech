import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ExamDTO } from '../DTOs/ExamDTO';
import { LaboratoryDTO } from '../DTOs/LaboratoryDTO';
import { IExamRepository } from './IExamRepository';

export class ExamRepository implements IExamRepository {
  constructor(
    @Inject('TYPEORM_ENTITY_LABORATORY')
    private laboratoryRepository: Repository<LaboratoryDTO>,
    @Inject('TYPEORM_ENTITY_EXAM')
    private examRepository: Repository<ExamDTO>,
  ) {}

  private async findLaboratory(laboratoryId: number): Promise<LaboratoryDTO> {
    return this.laboratoryRepository.findOne({
      relations: ['exams'],
      where: {
        id: laboratoryId,
      },
    });
  }

  async create(laboratoryId: number, exam: ExamDTO): Promise<ExamDTO> {
    const laboratory = await this.findLaboratory(laboratoryId);
    exam.laboratory = laboratory;
    const examCreated = await this.examRepository.save(exam);
    delete examCreated.laboratory;
    return examCreated;
  }

  async findAll(laboratoryId: number): Promise<ExamDTO[]> {
    const laboratory = await this.findLaboratory(laboratoryId);
    return laboratory.exams;
  }

  async findById(laboratoryId: number, examId: number): Promise<ExamDTO> {
    const laboratory = await this.findLaboratory(laboratoryId);
    return laboratory.exams.find((it) => it.id == examId);
  }
}
