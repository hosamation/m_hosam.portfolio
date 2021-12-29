// Creat Countdown Timer
let countDownDate = new Date('Dec 31, 2022 23:59:59').getTime();
let counter = setInterval (() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDifference = countDownDate - dateNow;

  // Get Time Units 
  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDifference < 0) {
    clearInterval(counter);
  }
}, 1000);

// Animate Width On Scroll
let progressSpans = document.querySelectorAll('.progress span'),
    section = document.querySelector('.my-skills');

// Increase Numbers On Scrolling 
let nums = document.querySelectorAll('.statistics .number'),
    statisticsSect = document.querySelector('.statistics'),
    started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Statistics Increase Number 
  if (window.scrollY >= statisticsSect.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}