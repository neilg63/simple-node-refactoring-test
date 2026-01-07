import { AnswerRow } from './answer.row';

export class CompletionRow {
  percentage: number = 0;

  constructor(
    public type: string,
    public count: number,
    public total: number,
  ) {
    this.percentage = this.calcPercentage();
  }

  calcPercentage(): number {
    return (this.count / this.total) * 100;
  }
}

export interface CompletionSet {
  [key: string]: CompletionRow;
}

export interface Details {
  status: string;
  surveyId: number;
  answers: AnswerRow[];
  completions: CompletionSet;
}
