import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('Answer "yes" if the number is even, otherwise answer "no".');

const evenTest = (num) => num % 2 === 0;

const logics = () => {
  const randomNum = getRandomInt(1, 100);
  const unit = randomNum;
  const inputSystem = evenTest(unit) ? 'yes' : 'no';
  return [unit, inputSystem];
};

const braineven = () => {
  indexStart(leson, logics);
};

export default braineven;
