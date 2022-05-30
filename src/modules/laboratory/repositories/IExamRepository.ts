import { ExamDTO } from '../DTOs/ExamDTO';

export interface IExamRepository {
  create(laboratoryId: number, exam: ExamDTO): Promise<ExamDTO>;
  findAll(laboratoryId: number): Promise<ExamDTO[]>;
  findById(laboratoryId: number, examId: number): Promise<ExamDTO>;
}
