import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyController } from './survey.controller';

@Module({
  imports: [],
  controllers: [AppController, SurveyController],
  providers: [AppService],
})
export class AppModule {}
