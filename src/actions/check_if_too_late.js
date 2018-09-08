import toTimeArr from '../util/to_time_arr';

export default function() {
  const timeArr = toTimeArr(this.maxHrsOnSetTime);

  const beforeEarliestNextEnd = timeArr[2] === 'PM' || parseInt(timeArr[0]) < 5;
  const afterTenPm =
    timeArr[2] === 'PM' && parseInt(timeArr[0]) > 9 && parseInt(timeArr[1]) > 0;
  const afterMidnight = timeArr[2] === 'AM';
  const afterTwelveThirty =
    timeArr[2] === 'AM' &&
    ((timeArr[0] === '12' && parseInt(timeArr[1]) > 30) || timeArr[0] !== '12');

  this.isOnSetTooLong =
    (this.school === 'inSession' && (afterTenPm || afterMidnight)) ||
    (this.school === 'notInSession' && afterTwelveThirty);
}
