import { AnswerRow } from './answer.row';

export class CompletionRow {
  constructor(
    public type: string,
    public count: number,
    public total: number,
  ) {}

  /*
  To be implemented
  */
  calcPercentage(): number {
    return -1;
  }
}

export interface ProgressSet {
  [key: string]: number;
}

export interface Details {
  status: string;
  surveyId: number;
  answers: AnswerRow[];
  progress: ProgressSet;
}
