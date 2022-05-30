import { ApiProperty } from '@nestjs/swagger';
import { ExamDTO } from './ExamDTO';

export class LaboratoryDTO {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  exams?: ExamDTO[];

  @ApiProperty()
  created_at?: Date;

  @ApiProperty()
  updated_at?: Date;
}
