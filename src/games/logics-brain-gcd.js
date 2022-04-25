import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('Find the greatest common divisor of given numbers.');

const nodRecurseFunc = (num1, num2) => (num1 !== 0 ? nodRecurseFunc(num2 % num1, num1) : num2);

const logics = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const unit = (`${num1} ${num2}`);
  const inputSystem = nodRecurseFunc(num1, num2);

  return [unit, String(inputSystem)];
};

const braingcd = () => {
  indexStart(leson, logics);
};

export default braingcd;
