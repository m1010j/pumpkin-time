import addHours from 'date-fns/add_hours';
import format from 'date-fns/format';

export default (startTimeArr, time) => {
  const newDate = addHours(new Date(1988, 6, 26, ...startTimeArr), time);

  return format(newDate, 'h:mm A');
};
