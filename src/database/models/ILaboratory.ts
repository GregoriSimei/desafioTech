import { IExam } from './IExam';

export interface ILaboratory {
  name: string;
  street: string;
  phone: string;
  exams: IExam[];
}
