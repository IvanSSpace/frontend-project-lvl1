import getRandomInt from '../modRandom.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';

const calculate = (firstNum, lastNum, operator) => {
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

const generateRoundData = () => {
  const firstNum = getRandomInt(1, 10);
  const lastNum = getRandomInt(1, 10);
  const operator = arrSigns[getRandomInt(0, arrSigns.length - 1)];

  const answer = calculate(firstNum, lastNum, operator);

  const question = `${firstNum} ${operator} ${lastNum}`;
  return [question, String(answer)];
};

const braincalc = () => {
  gameEngine(rules, generateRoundData);
};

export default braincalc;
