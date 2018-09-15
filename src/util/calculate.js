import dayjs from 'dayjs';

export default (startTime, time) => {
  const dateString = new Date().toISOString().split('T')[0];
  const date = dayjs(`${dateString}T${startTime}`);
  const newDate = date.add(time, 'hours');
  const newTime = newDate.format('h:mm A');

  return newTime;
};
