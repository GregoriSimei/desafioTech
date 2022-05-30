import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { BadRequest } from 'src/shared/DTO/BadRequest';
import { ErrorModel } from 'src/config/errors/ErrorModel';
import { LaboratoryDTO } from '../../DTOs/LaboratoryDTO';
import { CreateLaboratoryDTO } from '../../DTOs/CreateLaboratoryDTO';
import { CreateLaboratoryService } from './services/create.aboratory.service';
import { UpdateLaboratoryDTO } from '../../DTOs/UpdateLaboratoryDTO';
import { UpdateLaboratoryService } from './services/update.laboratory.service';
import { FindLaboratoryService } from './services/find.laboratory.service';
import { DeleteLaboratoryService } from './services/delete.laboratory.service';

@Controller()
@ApiTags('Laboratory: CRUD')
@ApiResponse({ type: BadRequest, status: 400 })
@ApiResponse({ type: ErrorModel, status: 500 })
export class CrudLaboratoryController {
  constructor(
    private readonly createLaboratoryService: CreateLaboratoryService,
    private readonly updateLaboratoryService: UpdateLaboratoryService,
    private readonly findLaboratoryService: FindLaboratoryService,
    private readonly deleteLaboratoryService: DeleteLaboratoryService,
  ) {}

  @Post()
  @ApiBody({ type: CreateLaboratoryDTO })
  @ApiResponse({ type: LaboratoryDTO, status: 201 })
  async createLaboratory(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const body: CreateLaboratoryDTO = request.body;

    const responseData = await this.createLaboratoryService.createLaboratory(
      body,
    );

    return response.status(201).json(responseData);
  }

  @Put()
  @ApiBody({ type: UpdateLaboratoryDTO })
  @ApiResponse({ type: LaboratoryDTO, status: 200 })
  async updateLaboratory(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const body: UpdateLaboratoryDTO = request.body;

    const responseData = await this.updateLaboratoryService.updateLaboratory(
      body,
    );

    return response.status(200).json(responseData);
  }

  @Get()
  @ApiQuery({ name: 'id', required: false })
  @ApiResponse({ type: LaboratoryDTO, status: 200 })
  async getLaboratory(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const laboratoryId: number = request.query.id as unknown as number;

    const responseData = await this.findLaboratoryService.getLaboratory(
      laboratoryId,
    );

    return response.status(200).json(responseData);
  }

  @Delete()
  @ApiQuery({ name: 'id' })
  @ApiResponse({ status: 200 })
  async deleteLaboratory(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const laboratoryId: number = request.query.id as unknown as number;

    const responseData = await this.deleteLaboratoryService.deleteLaboratory(
      laboratoryId,
    );

    return response.status(200).json(responseData);
  }
}
