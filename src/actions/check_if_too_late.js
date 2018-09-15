import isAfter from 'date-fns/is_after';

export default function() {
  const inSession = this.school === 'inSession';
  const notInSession = this.school === 'notInSession';

  const afterTenPm = isAfter(
    this.maxHrsOnSetTime,
    new Date(1988, 6, 26, 22, 0)
  );
  const afterTwelveThirty = isAfter(
    this.maxHrsOnSetTime,
    new Date(1988, 6, 27, 0, 30)
  );

  this.isOnSetTooLong =
    (inSession && afterTenPm) || (!inSession && afterTwelveThirty);
}
