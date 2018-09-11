import Vue from 'vue';

import handleChange from './actions/handle_change';
import checkIfTooLate from './actions/check_if_too_late';

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
      loading: false,
    },
    watch: {
      jurisdiction: handleChange,
      age: handleChange,
      school: handleChange,
      startTime: handleChange,
      maxHrsOnSetTime: checkIfTooLate,
    },
  });
  window.app = app;
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('Service Worker Registered');
  });
}
