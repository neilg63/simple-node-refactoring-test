/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Test, TestingModule } from '@nestjs/testing';
import { SurveyController } from './survey.controller';
import { Details } from './completion.row';
import { createResponse } from 'node-mocks-http';

describe('SurveyController', () => {
  let controller: SurveyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyController],
    }).compile();

    controller = module.get<SurveyController>(SurveyController);
  });

  it('should return the correct survey results', () => {

    const res = createResponse();

    controller.renderResults(res);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const jsonResponse = res._getJSONData() as Details;

    // 1. There are at least 2 completion categories as keys of "completions".
    expect(Object.keys(jsonResponse.completions).length).toBeGreaterThanOrEqual(2);

    // 2. Both have percentages > 0.
    for (const key in jsonResponse.completions) {
      expect(jsonResponse.completions[key].percentage).toBeGreaterThan(0);
    }

    // 3. The percentage for the personal category is > 33 and < 34.
    expect(jsonResponse.completions.personal.percentage).toBeGreaterThan(33);
    expect(jsonResponse.completions.personal.percentage).toBeLessThan(34);

    // 4. The percentage for the career category is > 22 and < 23.
    expect(jsonResponse.completions.career.percentage).toBeGreaterThan(22);
    expect(jsonResponse.completions.career.percentage).toBeLessThan(23);
  });
});
