import { Test, TestingModule } from '@nestjs/testing';
import { CrudController } from '../crud.controller';
import { CreateService } from '../services/create.user.service';

describe('CrudController', () => {
  let appController: CrudController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CrudController],
      providers: [CreateService],
    }).compile();

    appController = app.get<CrudController>(CrudController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
