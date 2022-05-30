import { ApiProperty } from '@nestjs/swagger';

export class UpdateExamDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  status?: boolean;
}
