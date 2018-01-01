const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function getDegree(time, max) {
  return (time / max) * 360 + 90;
}

function setRotation(hand, degree) {
  hand.style.transform = `rotate(${degree}deg)`;
}

setInterval(() => {
  const now = new Date();

  const hours = now.getHours();
  const hoursDegree = getDegree(hours, 24);
  setRotation(hourHand, hoursDegree);

  const minutes = now.getMinutes();
  const minutesDegree = getDegree(minutes, 60)
  setRotation(minuteHand, minutesDegree);

  const seconds = now.getSeconds();
  const secondsDegree = getDegree(seconds, 60)
  setRotation(secondHand, secondsDegree);
}, 1000); // 1000ms === 1s
