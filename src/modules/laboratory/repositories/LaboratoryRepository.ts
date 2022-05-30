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
    throw new Error('Method not implemented.');
  }
  update(laboratory: LaboratoryDTO): Promise<LaboratoryDTO> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<LaboratoryDTO[]> {
    throw new Error('Method not implemented.');
  }
  findById(laboratoryId: string): Promise<LaboratoryDTO> {
    throw new Error('Method not implemented.');
  }
  remove(laboratoryId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
