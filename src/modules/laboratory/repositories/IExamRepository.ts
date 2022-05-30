import { ExamDTO } from '../DTOs/ExamDTO';

export interface IExamRepository {
  create(laboratoryId: number, exam: ExamDTO): Promise<ExamDTO>;
  update(laboratoryId: number, exam: ExamDTO): Promise<ExamDTO>;
  findAll(laboratoryId: number): Promise<ExamDTO[]>;
  findById(examId: number): Promise<ExamDTO>;
  remove(examId: number): Promise<void>;
}
