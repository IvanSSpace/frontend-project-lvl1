import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenFunc = (isDivided) => ((isDivided % 2 === 0));

const logics = () => {
  const unit = getRandomInt(0, 100);
  const inputSystem = (evenFunc(unit)) ? 'yes' : 'no';
  return [unit, inputSystem];
};

const braineven = () => {
  indexStart(leson, logics);
};

export default braineven;
