import getRandomInt from '../scr/modRandom.js';
import startgreetings from '../scr/index.js';

console.log('brain-calc');
startSay();
console.log('What is the result of the expression?');

const braincalc = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const arr = ['+', '-', '*'];
  const counter = arr[getRandomInt(0, 2)];

  let inputSystem = 0;

  switch (counter) {
    case '+':
      inputSystem = num1 + num2;
      break;
    case '-':
      inputSystem = num1 - num2;
      break;
    case '*':
      inputSystem = num1 * num2;
      break;
    default:
  }
  String(inputSystem);
  const unit = (`${num1} ${counter} ${num2}`);
  return (unit, inputSystem);
};

const startcalc = () => {
  braincalc();
}