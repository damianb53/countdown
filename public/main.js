import firebaseInit from "./firebase.js";
firebaseInit();

const newYears = new Date(`1 Jan ${new Date().getFullYear() + 1}`);

const format = (n) => (n < 10 ? `0${n}` : `${n}`);

const getSeconds = (date) => Math.floor(date / 1000);
const getMinutes = (date) => Math.floor(date / 1000 / 60);
const getHours = (date) => Math.floor(date / 1000 / 60 / 60);
const getDays = (date) => Math.floor(date / 1000 / 60 / 60 / 24);

function countdown() {
  const left = new Date(newYears - new Date());

  seconds.innerHTML = format(getSeconds(left) % 60);
  minutes.innerHTML = format(getMinutes(left) % 60);
  hours.innerHTML = format(getHours(left) % 24);
  days.innerHTML = format(getDays(left) % 365);
}

countdown();
setInterval(countdown, 1000);
