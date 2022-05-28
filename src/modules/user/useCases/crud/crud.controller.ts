import { Controller, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserService } from './services/create.user.service';
import { Request, Response } from 'express';
import { CreateUserDTO } from '../../DTOs/CreateUserDTO';

@Controller()
@ApiTags('User: CRUD')
export class CrudController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async createUser(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const body: CreateUserDTO = request.body;

    const responseData = await this.createUserService.createUser(body);

    return response.status(201).json(responseData);
  }
}
