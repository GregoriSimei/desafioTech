import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LaboratoryDTO } from '../DTOs/LaboratoryDTO';
import { ILaboratoryRepository } from './ILaboratoryRepository';

@Injectable()
export class LaboratoryRepository implements ILaboratoryRepository {
  constructor(
    @Inject('TYPEORM_ENTITY_LABORATORY')
    private laboratoryRepository: Repository<LaboratoryDTO>,
  ) {}

  create(laboratory: LaboratoryDTO): Promise<LaboratoryDTO> {
    return this.laboratoryRepository.save(laboratory);
  }

  async update(laboratory: LaboratoryDTO): Promise<LaboratoryDTO> {
    await this.laboratoryRepository.update(laboratory.id, laboratory);
    return this.findById(laboratory.id);
  }

  async findAll(): Promise<LaboratoryDTO[]> {
    return this.laboratoryRepository.find({ relations: ['exams'] });
  }

  async findById(laboratoryId: number): Promise<LaboratoryDTO> {
    return this.laboratoryRepository.findOne({
      relations: ['exams'],
      where: {
        id: laboratoryId,
      },
    });
  }

  async remove(laboratoryId: number): Promise<void> {
    await this.laboratoryRepository.delete(laboratoryId);
  }
}
