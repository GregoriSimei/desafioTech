import { IExam } from 'src/database/models/IExam';
import { ILaboratory } from 'src/database/models/ILaboratory';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exam } from './exam.entity';

@Entity('laboratories')
export class Laboratory implements ILaboratory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  street: string;

  @Column()
  phone: string;

  @OneToMany(() => Exam, (exam) => exam.laboratory)
  exams: Exam[];
}
