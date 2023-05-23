import { dateTimeToMarkdown } from '.';

describe('date-utils', () => {
  it('should correctly format date and time to markdown in English', () => {
    const date = new Date('2023-05-18T11:30:00.000Z');
    const expectedResult = '**Thursday, May 18 at 5:00 PM**';
    expect(dateTimeToMarkdown(date, 'en')).toEqual(expectedResult);
  });

  it('should correctly format date and time to markdown in German', () => {
    const date = new Date('2023-05-18T11:30:00.000Z');
    const expectedResult = '**Donnerstag, 18. Mai um 17:00**';
    expect(dateTimeToMarkdown(date, 'de')).toEqual(expectedResult);
  });
});
