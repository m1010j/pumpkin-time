export default timeStr => {
  return timeStr
    .split(' ')[0]
    .split(':')
    .concat(timeStr.split(' ')[1]);
};
