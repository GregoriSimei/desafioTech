import { ExamDTO } from '../DTO/ExamDTO';

export interface IExamRepository {
  findAll(): Promise<ExamDTO[]>;
  findById(examId: number): Promise<ExamDTO>;
  update(exam: ExamDTO): Promise<ExamDTO>;
  remove(examId: number): Promise<void>;
}
