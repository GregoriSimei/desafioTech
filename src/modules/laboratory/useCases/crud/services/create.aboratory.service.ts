import { Inject, Injectable } from '@nestjs/common';
import { CreateLaboratoryDTO } from 'src/modules/laboratory/DTOs/CreateLaboratoryDTO';
import { LaboratoryDTO } from 'src/modules/laboratory/DTOs/LaboratoryDTO';
import { ILaboratoryRepository } from 'src/modules/laboratory/repositories/ILaboratoryRepository';

@Injectable()
export class CreateLaboratoryService {
  constructor(
    @Inject('REPOSITORY_LABORATORY')
    private userRepository: ILaboratoryRepository,
  ) {}

  async createLaboratory(
    laboratoryToCreate: CreateLaboratoryDTO,
  ): Promise<LaboratoryDTO> {
    return null;
  }
}
