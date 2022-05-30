import { ApiProperty } from '@nestjs/swagger';

export class CreateExamDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: boolean;
}
