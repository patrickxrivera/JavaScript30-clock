// get current time and place clock hands accordingly
// rotate hands every second

var hourHandAngle = 90;
var minuteHandAngle = 90;
var secondHandAngle = 90;

const hourHandIncrement = 8 / 1000;
const minuteHandIncrement = 1 / 10;
const secondHandIncrement = 6;

const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand');

(function rotateHands() {
  hourHandAngle = getDegreeRotation(hourHandAngle, hourHandIncrement);
  minuteHandAngle = getDegreeRotation(minuteHandAngle, minuteHandIncrement);
  secondHandAngle = getDegreeRotation(secondHandAngle, secondHandIncrement);

  rotateHand(hourHand, hourHandAngle);
  rotateHand(minuteHand, minuteHandAngle);
  rotateHand(secondHand, secondHandAngle);

  setTimeout(rotateHands, 1000);
})();

function getDegreeRotation(angle, increment) {
  return angle + increment;
}

function rotateHand(hand, angle) {
  return hand.style.transform = `rotate(${angle}deg)`;
}
