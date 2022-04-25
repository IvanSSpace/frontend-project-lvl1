import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('Find the greatest common divisor of given numbers.');

const nodRecurseFunc = (first, last) => (first !== 0 ? nodRecurseFunc(last % first, first) : last);

const logics = () => {
  const firstNum = getRandomInt(1, 20);
  const LastNum = getRandomInt(1, 20);
  const unit = `${firstNum} ${LastNum}`;
  const inputSystem = nodRecurseFunc(firstNum, LastNum);

  return [unit, String(inputSystem)];
};

const braingcd = () => {
  indexStart(leson, logics);
};

export default braingcd;
