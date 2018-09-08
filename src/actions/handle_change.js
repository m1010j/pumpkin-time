import maxWorkHrsRules from '../rules/max_work_hrs_rules';
import maxHrsOnSetRules from '../rules/max_hrs_on_set_rules';
import calculate from '../util/calculate';

export default function() {
  if (this.age && this.jurisdiction) {
    const school = this.inSession ? 'inSession' : 'notInSession';
    this.maxWorkHrs = maxWorkHrsRules[this.jurisdiction][school][this.age];

    const startTimeArr = this.startTime.split(':');
    this.lunchTime = calculate(startTimeArr, 6);

    this.maxHrsOnSet = maxHrsOnSetRules[this.jurisdiction][school][this.age];
    this.maxHrsOnSetTime = calculate(startTimeArr, this.maxHrsOnSet);
  }
}
