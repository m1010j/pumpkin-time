import toTimeArr from '../util/to_time_arr';

export default (startTimeArr, time) => {
  const hour = (parseInt(startTimeArr[0]) + time) % 24;
  let newTime;
  if (hour > 11) {
    newTime =
      (hour === 12 ? 12 : hour % 12).toString() +
      ':' +
      startTimeArr.slice(1, 2).join(':') +
      ' PM';
  } else {
    newTime =
      hour.toString() + ':' + startTimeArr.slice(1, 2).join(':') + ' AM';
  }

  const newTimeArr = toTimeArr(newTime);
  if (newTimeArr[2] === 'AM' && newTimeArr[0] === '0') {
    newTimeArr[0] = '12';
    newTime = newTimeArr.slice(0, 2).join(':') + ' AM';
  }

  return newTime;
};
