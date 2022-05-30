import { Inject, Injectable } from '@nestjs/common';
import { CreateLaboratoryDTO } from 'src/modules/laboratory/DTOs/CreateLaboratoryDTO';
import { LaboratoryDTO } from 'src/modules/laboratory/DTOs/LaboratoryDTO';
import { ILaboratoryRepository } from 'src/modules/laboratory/repositories/ILaboratoryRepository';
import { BadRequest } from 'src/shared/DTO/BadRequest';

@Injectable()
export class CreateLaboratoryService {
  constructor(
    @Inject('REPOSITORY_LABORATORY')
    private laboratoryRepository: ILaboratoryRepository,
  ) {}

  async createLaboratory(
    laboratoryToCreate: CreateLaboratoryDTO,
  ): Promise<LaboratoryDTO> {
    await this.checkLaboratoryPropertiesToCreate(laboratoryToCreate);

    const laboratoryCreated = await this.laboratoryRepository.create(
      laboratoryToCreate,
    );

    return laboratoryCreated;
  }

  async checkLaboratoryPropertiesToCreate(
    laboratory: LaboratoryDTO,
  ): Promise<void> {
    if (!Boolean(laboratory.name))
      throw new BadRequest('Field name is required.');
    if (!Boolean(laboratory.phone))
      throw new BadRequest('Field phone is required.');
    if (!Boolean(laboratory.street))
      throw new BadRequest('Field street is required.');
  }
}
