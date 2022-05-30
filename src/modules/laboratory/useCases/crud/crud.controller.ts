import { Controller, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { BadRequest } from 'src/shared/DTO/BadRequest';
import { ErrorModel } from 'src/config/errors/ErrorModel';
import { LaboratoryDTO } from '../../DTOs/LaboratoryDTO';
import { CreateLaboratoryDTO } from '../../DTOs/CreateLaboratoryDTO';
import { CreateLaboratoryService } from './services/create.aboratory.service';

@Controller()
@ApiTags('Laboratory: CRUD')
@ApiResponse({ type: BadRequest, status: 400 })
@ApiResponse({ type: ErrorModel, status: 500 })
export class CrudController {
  constructor(private readonly createUserService: CreateLaboratoryService) {}

  @Post()
  @ApiBody({ type: CreateLaboratoryDTO })
  @ApiResponse({ type: LaboratoryDTO, status: 201 })
  async createLaboratory(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const body: CreateLaboratoryDTO = request.body;

    const responseData = await this.createUserService.createLaboratory(body);

    return response.status(201).json(responseData);
  }
}
