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

  async update(laboratoryId: number, exam: ExamDTO): Promise<ExamDTO> {
    throw new Error('Method not implemented.');
  }

  async findAll(laboratoryId: number): Promise<ExamDTO[]> {
    throw new Error('Method not implemented.');
  }

  async findById(examId: number): Promise<ExamDTO> {
    throw new Error('Method not implemented.');
  }

  async remove(examId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
