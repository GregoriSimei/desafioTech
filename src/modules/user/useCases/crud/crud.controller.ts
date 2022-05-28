import { Controller, Get } from '@nestjs/common';
import { CreateService } from './services/create.user.service';

@Controller()
export class CrudController {
  constructor(private readonly createService: CreateService) {}

  @Get()
  getHello(): string {
    return this.createService.getHello();
  }
}
