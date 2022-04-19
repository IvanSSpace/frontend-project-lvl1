import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('What is the result of the expression?');

const calculate = (num1, num2, counter) => {
  let result = 0;
  switch (counter) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }
  return result;
};

const logics = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const arrSigns = ['+', '-', '*'];
  const counter = arrSigns[getRandomInt(0, 2)];

  const inputSystem = calculate(num1, num2, counter);

  const unit = (`${num1} ${counter} ${num2}`);
  return [unit, String(inputSystem)];
};

const braincalc = () => {
  indexStart(leson, logics);
};

export default braincalc;
