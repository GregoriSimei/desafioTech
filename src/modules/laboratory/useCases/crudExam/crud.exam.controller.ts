import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { BadRequest } from 'src/shared/DTO/BadRequest';
import { ErrorModel } from 'src/config/errors/ErrorModel';
import { CreateExamDTO } from '../../DTOs/CreateExamDTO';
import { CreateExamService } from './services/create.exam.service';
import { ExamDTO } from '../../DTOs/ExamDTO';
import { FindExamService } from './services/find.exam.service';

@Controller(':laboratoryId/exam')
@ApiTags('exam: CRUD')
@ApiResponse({ type: BadRequest, status: 400 })
@ApiResponse({ type: ErrorModel, status: 500 })
export class CrudExamController {
  constructor(
    private readonly createExamService: CreateExamService,
    private readonly findExamService: FindExamService,
  ) {}

  @Post()
  @ApiBody({ type: CreateExamDTO })
  @ApiResponse({ type: ExamDTO, status: 201 })
  async createExam(
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

  @Get()
  @ApiQuery({ name: 'id', required: false })
  @ApiResponse({ type: ExamDTO, status: 200 })
  async getExam(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const laboratoryId: number = request.params
      .laboratoryId as unknown as number;
    const examId: number = request.query.id as unknown as number;

    const responseData = await this.findExamService.findExam(
      laboratoryId,
      examId,
    );

    return response.status(200).json(responseData);
  }
}
