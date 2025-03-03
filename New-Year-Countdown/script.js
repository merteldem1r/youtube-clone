const daysHtml = document.getElementById("days");
const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");
const currentYearHtml = document.getElementById("currentYear");

// set current year
const currentYear = new Date().getFullYear();
currentYearHtml.innerHTML = currentYear;

const newYearDate = new Date(`${currentYear + 1}/01/01, 00:00`).getTime();

const checkValue = (value) => (value < 10 ? "0" + value : value);

const countdown = () => {
  const currentDate = new Date().getTime();
  const timeLeft = newYearDate - currentDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const daysLeft = parseInt(timeLeft / days);
  const hoursLeft = parseInt((timeLeft % days) / hours);
  const minutesLeft = parseInt((timeLeft % hours) / minutes);
  const secondsLeft = parseInt((timeLeft % minutes) / seconds);

  daysHtml.innerHTML = checkValue(daysLeft);
  hoursHtml.innerHTML = checkValue(hoursLeft);
  minutesHtml.innerHTML = checkValue(minutesLeft);
  secondsHtml.innerHTML = checkValue(secondsLeft);
};

setInterval(countdown, 1000);
