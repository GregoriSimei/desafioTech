import { Inject, Injectable } from '@nestjs/common';
import { LaboratoryDTO } from 'src/modules/laboratory/DTOs/LaboratoryDTO';
import { ILaboratoryRepository } from 'src/modules/laboratory/repositories/ILaboratoryRepository';

@Injectable()
export class FindLaboratoryService {
  constructor(
    @Inject('REPOSITORY_LABORATORY')
    private laboratoryRepository: ILaboratoryRepository,
  ) {}

  async getLaboratory(
    laboratoryId: number,
  ): Promise<LaboratoryDTO | LaboratoryDTO[]> {
    const response = laboratoryId
      ? await this.laboratoryRepository.findById(laboratoryId)
      : await this.laboratoryRepository.findAll();

    return response;
  }
}
