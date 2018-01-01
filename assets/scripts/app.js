const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function getTime(currentTime, handType) {
  if (handType === 'hour') { return currentTime.getHours() }
  if (handType === 'minute') { return currentTime.getMinutes() }
  if (handType === 'second') { return currentTime.getSeconds() }
}

function getDegree(time, handType) {
  if (handType === 'hour') { return (time / 12) * 360 + 90 }
  if (handType === 'minute') { return (time / 60) * 360 + 90 }
  if (handType === 'second') {return (time / 60) * 360 + 90 }
}

function setRotation(hand, degree) {
  hand.style.transform = `rotate(${degree}deg)`;
}

function rotateHands() {
  const currentTime = new Date();

  const hours = getTime(currentTime, 'hour');
  const hoursDegree = getDegree(hours, 'hour');
  setRotation(hourHand, hoursDegree);

  const minutes = getTime(currentTime, 'minute');
  const minutesDegree = getDegree(minutes, 'minute')
  setRotation(minuteHand, minutesDegree);

  const seconds = getTime(currentTime, 'second');
  const secondsDegree = getDegree(seconds, 'second')
  setRotation(secondHand, secondsDegree);
}

setInterval(rotateHands, 1000);
