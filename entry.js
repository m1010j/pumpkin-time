document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      startTime: '08:00',
      jurisdiction: null,
      age: null,
      school: null,
      maxWorkHrs: null,
      lunchTime: null,
      maxHrsOnSetTime: null,
      maxHrsOnSet: null,
      isOnSetTooLong: false,
    },
    watch: {
      jurisdiction: handleChange,
      age: handleChange,
      school: handleChange,
      startTime: handleChange,
      maxHrsOnSetTime: checkIfTooLate,
    },
  });
});

const handleChange = function() {
  if (this.age && this.school && this.jurisdiction) {
    this.maxWorkHrs = maxWorkHrsRules[this.jurisdiction][this.school][this.age];

    const startTimeArr = this.startTime.split(':');
    this.lunchTime = calculate(startTimeArr, 6);

    this.maxHrsOnSet =
      maxHrsOnSetRules[this.jurisdiction][this.school][this.age];
    this.maxHrsOnSetTime = calculate(startTimeArr, this.maxHrsOnSet);
  }
};

const checkIfTooLate = function() {
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
};

const maxHrsOnSetRules = {
  ny: {
    inSession: {
      sixToEight: 8,
      nineToFifteen: 9,
      sixteenToSeventeen: 10,
    },
    notInSession: {
      sixToEight: 8,
      nineToFifteen: 9,
      sixteenToSeventeen: 10,
    },
  },
  ca: {
    inSession: {
      sixToEight: 8,
      nineToFifteen: 9,
      sixteenToSeventeen: 10,
    },
    notInSession: {
      sixToEight: 8,
      nineToFifteen: 9,
      sixteenToSeventeen: 10,
    },
  },
  sag: {
    inSession: {
      sixToEight: 8,
      nineToFifteen: 9,
      sixteenToSeventeen: 10,
    },
    notInSession: {
      sixToEight: 8,
      nineToFifteen: 9,
      sixteenToSeventeen: 10,
    },
  },
};

const maxWorkHrsRules = {
  ny: {
    inSession: {
      sixToEight: 4,
      nineToFifteen: 5,
      sixteenToSeventeen: 6,
    },
    notInSession: {
      sixToEight: 6,
      nineToFifteen: 7,
      sixteenToSeventeen: 9,
    },
  },
  ca: {
    inSession: {
      sixToEight: 4,
      nineToFifteen: 5,
      sixteenToSeventeen: 6,
    },
    notInSession: {
      sixToEight: 6,
      nineToFifteen: 7,
      sixteenToSeventeen: 8,
    },
  },
  sag: {
    inSession: {
      sixToEight: 5,
      nineToFifteen: 5,
      sixteenToSeventeen: 6,
    },
    notInSession: {
      sixToEight: 6,
      nineToFifteen: 7,
      sixteenToSeventeen: 8,
    },
  },
};

const calculate = (startTimeArr, time) => {
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

const toTimeArr = timeStr => {
  return timeStr
    .split(' ')[0]
    .split(':')
    .concat(timeStr.split(' ')[1]);
};
