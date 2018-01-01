// /*
// ====== Variable Declarations ======
// */
//
// const currentTime = new Date();
//
// var hourHandAngle = getAngle(currentTime, 'hour');
// var minuteHandAngle = getAngle(currentTime, 'minute');
// var secondHandAngle =getAngle(currentTime, 'second');
//
// // Degree increment out of 360 each second by hour, minute, and second
// const hourHandIncrement = 8 / 1000;
// const minuteHandIncrement = 1 / 10;
// const secondHandIncrement = 6;
//
// const hourHand = document.querySelector('.hour-hand')
// const minuteHand = document.querySelector('.min-hand')
// const secondHand = document.querySelector('.second-hand');
//
// /*
// ======= Functions =======
// */
//
// function getAngle(currentTime, angleType) {
//   if (angleType === 'hour') {
//     return currentTime.getHours() / 24 * 360
//   }
//   else if (angleType === 'minute') {
//     return currentTime.getMinutes() / 60 * 360;
//   }
//   else {
//     return currentTime.getSeconds() / 60 * 360;
//   }
// }
//
// function rotateHand(hand, angle) {
//   return hand.style.transform = `rotate(${angle}deg)`;
// }
//
// function getDegreeRotation(angle, increment) {
//   return angle + increment;
// }
//
// (function rotateHands() {
//   hourHandAngle = getDegreeRotation(hourHandAngle, hourHandIncrement);
//   minuteHandAngle = getDegreeRotation(minuteHandAngle, minuteHandIncrement);
//   secondHandAngle = getDegreeRotation(secondHandAngle, secondHandIncrement);
//
//   rotateHand(hourHand, hourHandAngle);
//   rotateHand(minuteHand, minuteHandAngle);
//   rotateHand(secondHand, secondHandAngle);
//
//   setTimeout(rotateHands, 1000);
// })();

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function getTime(currentTime, handType) {
  if (handType === 'hour') { return currentTime.getHour() }
  if (handType === 'minute') { return currentTime.getMinute() }
  if (handType === 'second') { return currentTime.getSeconds() }
}

function getDegree(time, handType) {
  if (handType === 'hour') { return (time / 43200) * 360 + 90 }
  if (handType === 'minute') { return (time / 3600) * 360 + 90 }
  if (handType === 'second') {return (time / 60) * 360 + 90 }
}

function setRotation(hand, degree) {
  hand.style.transform = `rotate(${degree}deg)`;
}

function rotateHands() {
  const currentTime = new Date();

  const seconds = getTime(currentTime, 'second');
  const secondsDegree = getDegree(seconds, 'second')

  setRotation(secondHand, secondsDegree);
}

setInterval(rotateHands, 1000);
