import { Interval } from 'src/data/enum/interval.enum';

export const GetExpression = (interval: string) => {
  switch (interval) {
    case Interval.HOURLY:
      return '0 * * * *';
    case Interval.DAILY:
      return '0 0 * * *';
    case Interval.WEEKLY:
      return '0 0 * * 0';
    case Interval.MONTHLY:
      return '0 0 1 * *';
  }
};
