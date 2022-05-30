import { IExam } from 'src/database/models/IExam';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Laboratory } from './laboratory.entity';

@Entity('exams')
export class Exam implements IExam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @ManyToOne(() => Laboratory, (laboratory) => laboratory.exams)
  laboratory: Laboratory;
}
