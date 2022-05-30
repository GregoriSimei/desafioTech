import { Inject, Injectable } from '@nestjs/common';
import { LaboratoryDTO } from 'src/modules/laboratory/DTOs/LaboratoryDTO';
import { UpdateLaboratoryDTO } from 'src/modules/laboratory/DTOs/UpdateLaboratoryDTO';
import { ILaboratoryRepository } from 'src/modules/laboratory/repositories/ILaboratoryRepository';
import { BadRequest } from 'src/shared/DTO/BadRequest';

@Injectable()
export class UpdateLaboratoryService {
  constructor(
    @Inject('REPOSITORY_LABORATORY')
    private laboratoryRepository: ILaboratoryRepository,
  ) {}

  async updateLaboratory(
    laboratoryToUpdate: UpdateLaboratoryDTO,
  ): Promise<LaboratoryDTO> {
    await this.checkLaboratoryPropertiesToUpdate(laboratoryToUpdate);

    const { id } = laboratoryToUpdate;

    const laboratoryExist = await this.laboratoryRepository.findById(id);

    if (!laboratoryExist) throw new BadRequest("Laboratory don't exist.");

    const newLaboratoryState = { ...laboratoryExist, ...laboratoryToUpdate };

    const laboratoryUpdated = await this.laboratoryRepository.update(
      newLaboratoryState,
    );

    return laboratoryUpdated;
  }

  async checkLaboratoryPropertiesToUpdate(
    laboratory: UpdateLaboratoryDTO,
  ): Promise<void> {
    if (!Boolean(laboratory.id)) throw new BadRequest('Field id is required.');
  }
}
