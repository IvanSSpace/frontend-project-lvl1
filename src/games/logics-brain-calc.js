import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('What is the result of the expression?');

const logics = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const arrSigns = ['+', '-', '*'];
  const counter = arrSigns[getRandomInt(0, 2)];

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
  const unit = (`${num1} ${counter} ${num2}`);
  return [unit, String(inputSystem)];
};

const braincalc = () => {
  indexStart(leson, logics);
};

export default braincalc;