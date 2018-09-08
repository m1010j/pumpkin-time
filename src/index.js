import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

import handleChange from './actions/handle_change';
import checkIfTooLate from './actions/check_if_too_late';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      startTime: '08:00',
      jurisdiction: null,
      age: null,
      inSession: false,
      maxWorkHrs: null,
      lunchTime: null,
      maxHrsOnSetTime: null,
      maxHrsOnSet: null,
      isOnSetTooLong: false,
    },
    watch: {
      jurisdiction: handleChange,
      age: handleChange,
      inSession: handleChange,
      startTime: handleChange,
      maxHrsOnSetTime: checkIfTooLate,
    },
  });
  window.app = app;
});
