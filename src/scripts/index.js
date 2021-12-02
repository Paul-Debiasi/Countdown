// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

let end = new Date("12/24/2021 12:00 PM");

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

const li = document.querySelectorAll("li");

console.log(li);

li.forEach((item) => {
  item.style.cssText = "list-style: none;";
});

const ul = document.querySelector(".timer");

ul.style.cssText = "display:flex; flex-direction: column";

function showRemaining() {
  const now = new Date();
  let distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerText = "EXPIRED!";

    return;
  }

  let days = Math.floor(distance / _day);
  let hours = Math.floor((distance % _day) / _hour);
  let minutes = Math.floor((distance % _hour) / _minute);
  let seconds = Math.floor((distance % _minute) / _second);

  const daysCounter = document.getElementsByClassName("days")[0];
  daysCounter.innerText = `Days: ${days}`;

  const hoursCounter = document.getElementsByClassName("hours")[0];
  hoursCounter.innerText = `Hours: ${hours}`;

  const minutesCounter = document.getElementsByClassName("minutes")[0];
  minutesCounter.innerText = `Minutes: ${minutes}`;
  const secondsCounter = document.getElementsByClassName("seconds")[0];
  secondsCounter.innerText = `Seconds: ${seconds}`;
  //   console.log("secondsCounter", secondsCounter.innerText);
  return daysCounter, hoursCounter, minutesCounter, secondsCounter;
}

timer = setInterval(showRemaining, 1000);
