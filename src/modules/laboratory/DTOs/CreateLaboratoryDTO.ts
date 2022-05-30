import { ApiProperty } from '@nestjs/swagger';

export class CreateLaboratoryDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  phone: string;
}
