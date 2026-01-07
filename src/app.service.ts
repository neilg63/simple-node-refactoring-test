import { Injectable } from '@nestjs/common';
import { AppInfo } from './app.interface';

@Injectable()
export class AppService {
  getHello(): AppInfo {
    return { message: 'Welcome to the Survey API', uri: '/survey/results' };
  }
}
