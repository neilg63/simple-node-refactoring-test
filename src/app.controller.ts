import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as appInterface from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): appInterface.AppInfo {
    return this.appService.getHello();
  }
}
