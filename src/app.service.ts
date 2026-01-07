import { Injectable } from '@nestjs/common';

export interface AppInfo {
  message: string;
  uri: string;
}

@Injectable()
export class AppService {
  getHello(): AppInfo {
    return {
      message: 'Welcome to the Survey API',
      uri: '/survey/results',
    };
  }
}
