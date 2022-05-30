import { Inject, Injectable } from '@nestjs/common';
import { ILaboratoryRepository } from 'src/modules/laboratory/repositories/ILaboratoryRepository';

@Injectable()
export class DeleteLaboratoryService {
  constructor(
    @Inject('REPOSITORY_LABORATORY')
    private laboratoryRepository: ILaboratoryRepository,
  ) {}

  async deleteLaboratory(laboratoryId: number): Promise<void> {
    await this.laboratoryRepository.remove(laboratoryId);
  }
}
