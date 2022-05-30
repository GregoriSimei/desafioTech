import { ILaboratory } from 'src/database/models/ILaboratory';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
