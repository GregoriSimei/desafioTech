import { LaboratoryDTO } from '../DTOs/LaboratoryDTO';

export interface ILaboratoryRepository {
  create(laboratory: LaboratoryDTO): Promise<LaboratoryDTO>;
  update(laboratory: LaboratoryDTO): Promise<LaboratoryDTO>;
  findAll(): Promise<LaboratoryDTO[]>;
  findById(laboratoryId: number): Promise<LaboratoryDTO>;
  remove(laboratoryId: number): Promise<void>;
}
