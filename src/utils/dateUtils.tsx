import dayjs from 'dayjs';
export const FormatDate = (
  date: string,
  format: 'YYYY/MM/DD' | 'YYYY-MM-DD' | string,
) => {
  if (date) {
    return dayjs(date).format(format);
  } else {
    return 'Invalid Date';
  }
};
