import getRandomInt from '../modRandom.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findNOD = (first, last) => (first !== 0 ? findNOD(last % first, first) : last);

const generateRoundData = () => {
  const firstNum = getRandomInt(1, 20);
  const lastNum = getRandomInt(1, 20);
  const question = `${firstNum} ${lastNum}`;
  const answer = findNOD(firstNum, lastNum);

  return [question, String(answer)];
};

const braingcd = () => {
  gameEngine(rules, generateRoundData);
};

export default braingcd;
