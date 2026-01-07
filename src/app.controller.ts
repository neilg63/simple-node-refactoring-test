import { Controller, Get } from '@nestjs/common';
import * as appService from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: appService.AppService) {}

  @Get()
  getHello(): appService.AppInfo {
    return this.appService.getHello();
  }
}
