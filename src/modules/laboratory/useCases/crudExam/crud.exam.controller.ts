import { Controller, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { BadRequest } from 'src/shared/DTO/BadRequest';
import { ErrorModel } from 'src/config/errors/ErrorModel';
import { CreateExamDTO } from '../../DTOs/CreateExamDTO';
import { CreateExamService } from './services/create.exam.service';
import { ExamDTO } from '../../DTOs/ExamDTO';

@Controller(':laboratoryId/exam')
@ApiTags('exam: CRUD')
@ApiResponse({ type: BadRequest, status: 400 })
@ApiResponse({ type: ErrorModel, status: 500 })
export class CrudExamController {
  constructor(private readonly createExamService: CreateExamService) {}

  @Post()
  @ApiBody({ type: CreateExamDTO })
  @ApiResponse({ type: ExamDTO, status: 201 })
  async createLaboratory(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const laboratoryId: number = request.params
      .laboratoryId as unknown as number;
    const body: CreateExamDTO = request.body;

    const responseData = await this.createExamService.createExam(
      laboratoryId,
      body,
    );

    return response.status(201).json(responseData);
  }
}
