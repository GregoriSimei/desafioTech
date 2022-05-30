import { ApiProperty } from '@nestjs/swagger';

export class UpdateLaboratoryDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  street?: string;

  @ApiProperty()
  phone?: string;
}
