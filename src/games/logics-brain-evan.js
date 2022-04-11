import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('Answer "yes" if the number is even, otherwise answer "no".');
const arrYN = ['yes', 'no'];
const logics = () => {
  const randomNum = getRandomInt(1, 100);
  const unit = (`${randomNum}`);
  const inputSystem = arrYN[randomNum % 2];
  return [unit, inputSystem];
};

const braineven = () => {
  indexStart(leson, logics);
};

export default braineven;
