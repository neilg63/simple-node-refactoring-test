import { Controller, Get, Res } from '@nestjs/common';
import express from 'express';
import { SurveyResult } from './survey.result';
import { CompletionRow, Details } from './completion.row';

@Controller('survey')
export class SurveyController {
  @Get('results')
  renderResults(@Res() res: express.Response) {
    const surveyId = 4; //. hardcoded for demo purposes would come from the URL Path
    const userId = 209; //. hardcoded for demo purposes. would come from auth context
    const answers = SurveyResult.getAnswers(surveyId, userId);
    const completions = SurveyResult.getCompletionResults(surveyId, userId);

    const statusKey = completions.length === 2 ? 'success' : 'invalid';

    if (completions.length < 2) {
      return res.status(404).json({ status: statusKey, surveyId, answers });
    }

    const details: Details = {
      status: statusKey,
      surveyId,
      answers,
      completions: {},
    };

    completions.forEach((completion: CompletionRow) => {
      details.completions[completion.type] = completion;
    });

    return res.status(200).json(details);
  }
}
