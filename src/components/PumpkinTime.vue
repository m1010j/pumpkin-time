<template>
  <div class="main-body">
    <h1>Pumpkin Time</h1>
      <main>
        <div id="start-time-container">
          <label for="start-time">Start time:
            <input type="time" id="start-time" />
          </label>
        </div>
        <form class='radio' id="jurisdiction-form">
          <p>Jurisdiction:&nbsp;</p>
          <label class="container" for="ny">
            <input name="jurisdiction" type="radio" id="ny"> NY
            <span class="checkmark"></span>
          </label>
          <label class="container" for="ca">
            <input name="jurisdiction" type="radio" id="ca"> CA
            <span class="checkmark"></span>
          </label>
          <label class="container" for="sag">
            <input name="jurisdiction" type="radio" id="sag"> SAG
            <span class="checkmark"></span>
          </label>
        </form>
        <form class='radio' id="age-form">
          <p>Age:&nbsp;</p>
          <label class="container" for="sixToEight">
            <input name="age" type="radio" id="sixToEight"> 6-8 years
            <span class="checkmark"></span>
          </label>
          <label class="container" for="nineToFifteen">
            <input name="age" type="radio" id="nineToFifteen"> 9-15 years
            <span class="checkmark"></span>
          </label>
          <label class="container" for="sixteenToSeventeen">
            <input name="age" type="radio" id="sixteenToSeventeen"> 16-17 years
            <span class="checkmark"></span>
          </label>
        </form>
        <form class='radio' id="school-form">
          <p>School in session?&nbsp;</p>
          <label class="container" for="inSession">
            <input name="school" type="radio" id="inSession"> Yes
            <span class="checkmark"></span>
          </label>
          <label class="container" for="notInSession">
            <input name="school" type="radio" id="notInSession"> No
            <span class="checkmark"></span>
          </label>
        </form>
        <div id="result"></div>
      </main>
  </div>
</template>

<script>
export default {
  name: 'PumpkinTime',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/pumpkin_time.css';
</style>
