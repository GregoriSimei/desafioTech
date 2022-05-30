import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ExamDTO } from '../DTO/ExamDTO';
import { IExamRepository } from './IExamRepository';

export class ExamRepository implements IExamRepository {
  constructor(
    @Inject('TYPEORM_ENTITY_EXAM')
    private examRepository: Repository<ExamDTO>,
  ) {}

  async findAll(): Promise<ExamDTO[]> {
    return this.examRepository.find({});
  }
  async update(exam: ExamDTO): Promise<ExamDTO> {
    await this.examRepository.update(exam.id, exam);
    return this.examRepository.findOneBy({ id: exam.id });
  }
  async remove(examId: number): Promise<void> {
    await this.examRepository.delete(examId);
  }

  async findById(examId: number): Promise<ExamDTO> {
    return this.examRepository.findOneBy({ id: examId });
  }
}
