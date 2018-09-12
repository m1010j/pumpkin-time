import maxWorkHrsRules from '../rules/max_work_hrs_rules';
import maxHrsOnSetRules from '../rules/max_hrs_on_set_rules';
import calculate from '../util/calculate';

export default function() {
  if (this.startTime && this.age && this.jurisdiction && this.school) {
    setResponse.call(this, () => {
      this.maxWorkHrs =
        maxWorkHrsRules[this.jurisdiction][this.school][this.age];

      const startTimeArr = this.startTime.split(':');
      this.lunchTime = calculate(startTimeArr, 6);

      this.maxHrsOnSet =
        maxHrsOnSetRules[this.jurisdiction][this.school][this.age];
      this.maxHrsOnSetTime = calculate(startTimeArr, this.maxHrsOnSet);
    });
  } else if (
    this.maxWorkHrs &&
    this.lunchTime &&
    this.maxHrsOnSetTime &&
    this.maxHrsOnSet
  ) {
    setResponse.call(this, () => {
      this.maxWorkHrs = null;
      this.lunchTime = null;
      this.maxHrsOnSetTime = null;
      this.maxHrsOnSet = null;
    });
  }
}

function setResponse(callback) {
  this.loading = true;
  this.isBlurry = true;
  setTimeout(() => {
    callback();
    setTimeout(() => {
      this.isBlurry = false;
    }, 100);
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }, 500);
}
