/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { AnswerRow } from './answer.row';
import { CompletionRow } from './completion.row';

export class SurveyResult {
  static getCompletionResults(
    _surveyId = 0,
    _userId: number = 0,
  ): CompletionRow[] {
    return [
      new CompletionRow('personal', 1, 3),
      new CompletionRow('career', 2, 9),
    ];
  }

  static getAnswers(
    _surveyId: number = 0,
    _userId: number = 0,
  ): AnswerRow[] {
    return [
      new AnswerRow(1, 'Jane Blogger', 'personal'),
      new AnswerRow(4, 'Lead API Developer', 'career'),
      new AnswerRow(7, 'Python', 'career'),
    ];
  }
}