/*
====== Variable Declarations ======
*/

const currentTime = new Date();

var hourHandAngle = getAngle(currentTime, 'hour');
var minuteHandAngle = getAngle(currentTime, 'minute');
var secondHandAngle =getAngle(currentTime, 'second');

// Degree increment out of 360 each second by hour, minute, and second
const hourHandIncrement = 8 / 1000;
const minuteHandIncrement = 1 / 10;
const secondHandIncrement = 6;

const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand');

/*
======= Functions =======
*/

function getAngle(currentTime, angleType) {
  if (angleType === 'hour') {
    return currentTime.getHours() / 24 * 360
  }
  else if (angleType === 'minute') {
    return currentTime.getMinutes() / 60 * 360;
  }
  else {
    return currentTime.getSeconds() / 60 * 360;
  }
}


function rotateHand(hand, angle) {
  return hand.style.transform = `rotate(${angle}deg)`;
}

function getDegreeRotation(angle, increment) {
  return angle + increment;
}

(function rotateHands() {
  hourHandAngle = getDegreeRotation(hourHandAngle, hourHandIncrement);
  minuteHandAngle = getDegreeRotation(minuteHandAngle, minuteHandIncrement);
  secondHandAngle = getDegreeRotation(secondHandAngle, secondHandIncrement);

  rotateHand(hourHand, hourHandAngle);
  rotateHand(minuteHand, minuteHandAngle);
  rotateHand(secondHand, secondHandAngle);

  setTimeout(rotateHands, 1000);
})();
