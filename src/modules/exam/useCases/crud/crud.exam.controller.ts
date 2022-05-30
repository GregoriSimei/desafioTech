import { Controller, Delete, Get, Put, Req, Res } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { BadRequest } from 'src/shared/DTO/BadRequest';
import { ErrorModel } from 'src/config/errors/ErrorModel';
import { UpdateExamDTO } from '../../DTO/UpdateExamDTO';
import { ExamDTO } from 'src/modules/laboratory/DTOs/ExamDTO';
import { UpdateExamService } from './services/update.exam.service';
import { DeleteExamService } from './services/delete.exam.service';
import { FindExamService } from './services/find.exam.service';

@Controller()
@ApiTags('exam: CRUD')
@ApiResponse({ type: BadRequest, status: 400 })
@ApiResponse({ type: ErrorModel, status: 500 })
export class CrudExamController {
  constructor(
    private readonly updateExamService: UpdateExamService,
    private readonly findExamService: FindExamService,
    private readonly deleteExamService: DeleteExamService,
  ) {}

  @Put()
  @ApiBody({ type: UpdateExamDTO })
  @ApiResponse({ type: ExamDTO, status: 201 })
  async createExam(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const body: UpdateExamDTO = request.body;

    const responseData = await this.updateExamService.updateExam(body);

    return response.status(201).json(responseData);
  }

  @Get()
  @ApiResponse({ type: ExamDTO, status: 200 })
  async getExam(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const responseData = await this.findExamService.findExam();

    return response.status(200).json(responseData);
  }

  @Delete()
  @ApiQuery({ name: 'id' })
  @ApiResponse({ status: 200 })
  async deleteExam(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const examId: number = request.query.id as unknown as number;

    const responseData = await this.deleteExamService.deleteExam(examId);

    return response.status(200).json(responseData);
  }
}
