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
.main-body {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-body,
h1,
li,
form,
input,
label {
  font-family: 'Nanum Gothic', sans-serif;
}

main {
  box-shadow: 0 1.2rem 3rem 0 rgba(0, 0, 0, 0.19),
    0 0.8rem 2rem 0 rgba(0, 0, 0, 0.24);
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: #fff;
}

h1 {
  font-size: 2rem;
}

li {
  list-style-type: disc;
  margin-left: 1.5rem;
  line-height: 1;
}

form {
  display: flex;
}

input {
  font-size: 1rem;
  border-radius: 0.1rem;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.16),
    0 0.1rem 0.2rem rgba(0, 0, 0, 0.32);
  border: none;
  padding: 0 0 0 0.25rem;
  background-color: #eee;
}

input:hover {
  background-color: #ccc;
}

.red {
  background-color: #f97c7c;
  border-radius: 0.1rem;
}

#start-time-container {
  line-height: 1;
  margin: 0 0 1rem 0;
}

#result {
  height: 4.8rem;
}

/* Radio styling adapted from here: https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */

.container {
  display: block;
  position: relative;
  padding: 0 0.5rem 0 1.5rem;
  margin-bottom: 0.6rem;
  cursor: pointer;
  font-size: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  background-color: #eee;
  border-radius: 50%;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.16),
    0 0.1rem 0.2rem rgba(0, 0, 0, 0.32);
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  top: 0.44rem;
  left: 0.44rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: white;
}

@font-face {
  font-family: 'Nanum Gothic';
  src: url('../assets/NanumGothic-Regular.ttf');
  font-weight: normal;
  font-style: normal;
}
</style>
