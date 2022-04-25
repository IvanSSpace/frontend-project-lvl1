import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('What is the result of the expression?');

const calcuFunc = (firstNum, lastNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + lastNum;
    case '-':
      return firstNum - lastNum;
    case '*':
      return firstNum * lastNum;
    default:
      throw new Error('Eslint remove consistent-return');
  }
};

const arrSigns = ['+', '-', '*'];

const logics = () => {
  const firstNum = getRandomInt(1, 10);
  const lastNum = getRandomInt(1, 10);
  const operator = arrSigns[getRandomInt(0, arrSigns.length - 1)];

  const inputSystem = calcuFunc(firstNum, lastNum, operator);

  const unit = `${firstNum} ${operator} ${lastNum}`;
  return [unit, String(inputSystem)];
};

const braincalc = () => {
  indexStart(leson, logics);
};

export default braincalc;
