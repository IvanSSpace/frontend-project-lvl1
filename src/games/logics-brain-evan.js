import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenTest = (number) => ((number % 2 === 0));
const logics = () => {
  const unit = getRandomInt(0, 100);
  const inputSystem = (evenTest(unit)) ? 'yes' : 'no';
  return [unit, inputSystem];
};

const braineven = () => {
  indexStart(leson, logics);
};

export default braineven;
