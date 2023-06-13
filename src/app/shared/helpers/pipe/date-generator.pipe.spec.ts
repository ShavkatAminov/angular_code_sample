import { DateGeneratorPipe } from './date-generator.pipe';

describe('DateGeneratorPipe', () => {
  it('create an instance', () => {
    const pipe = new DateGeneratorPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('now')).toEqual(new Date());
    let date = new Date();
    date.setDate(1);
    expect(pipe.transform('currentMonthStart')).toEqual(date);
  });
});
