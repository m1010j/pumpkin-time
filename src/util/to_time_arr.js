export default timeStr => {
  if (!timeStr) return [];
  if (!timeStr.length) return [];
  return timeStr
    .split(' ')[0]
    .split(':')
    .concat(timeStr.split(' ')[1]);
};
