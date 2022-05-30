import { IExam } from 'src/database/models/IExam';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
