<template>
  <div id="app">
    <PumpkinTime />
  </div>
</template>

<script>
import PumpkinTime from './components/PumpkinTime.vue';

export default {
  name: 'app',
  components: {
    PumpkinTime,
  },
};
</script>

<style>
html {
  font-size: 3em;
  background-color: #ffeed7;
}
</style>
