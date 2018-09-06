document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#app',
    data: {
      startTime: '08:00',
      jurisdiction: null,
      age: null,
      inSession: null,
      results: [],
    },
  });
  window.app = app;
});
