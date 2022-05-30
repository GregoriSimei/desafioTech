import { ApiProperty } from '@nestjs/swagger';
import { LaboratoryDTO } from './LaboratoryDTO';

export class ExamDTO {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  laboratory?: LaboratoryDTO;

  @ApiProperty()
  created_at?: Date;

  @ApiProperty()
  updated_at?: Date;
}
