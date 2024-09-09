import { Interval } from 'src/data/enum/interval.enum';

export const NextDate = (interval: string): Date => {
  const now = new Date();
  const nextDate = new Date(now);
  console.log('next date interval: ', interval);

  switch (interval) {
    case Interval.HOURLY:
      nextDate.setHours(nextDate.getHours() + 1);
      break;

    case Interval.DAILY:
      nextDate.setDate(nextDate.getDate() + 1);
      break;

    case Interval.WEEKLY:
      nextDate.setDate(nextDate.getDate() + 7);
      break;

    case Interval.MONTHLY:
      if (nextDate.getMonth() === 11) {
        nextDate.setMonth(0);
        nextDate.setFullYear(nextDate.getFullYear() + 1);
      } else {
        nextDate.setMonth(nextDate.getMonth() + 1);
      }
      break;

    default:
      throw new Error(`Unsupported interval: ${interval}`);
  }

  return nextDate;
};
