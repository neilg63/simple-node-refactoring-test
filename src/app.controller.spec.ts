import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService, AppInfo } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return the correct AppInfo object', () => {
      const expected: AppInfo = {
        message: 'Welcome to the Survey API',
        uri: '/survey/results',
      };
      expect(appController.getHello()).toEqual(expected);
    });
  });
});
