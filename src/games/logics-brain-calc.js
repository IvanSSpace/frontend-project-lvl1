import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('What is the result of the expression?');

const calcuFunc = (num1, num2, counter) => {
  switch (counter) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Eslint remove consistent-return');
  }
};

const arrSigns = ['+', '-', '*'];

const logics = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const counter = arrSigns[getRandomInt(0, arrSigns.length - 1)];

  const inputSystem = calcuFunc(num1, num2, counter);

  const unit = (`${num1} ${counter} ${num2}`);
  return [unit, String(inputSystem)];
};

const braincalc = () => {
  indexStart(leson, logics);
};

export default braincalc;
