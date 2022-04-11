import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('Answer "yes" if given number is prime. Otherwise answer "no".');
const logics = () => {
  const randomNum = getRandomInt(3, 10);

  let inputSystem = 'yes';
  for (let i = 2; i < randomNum; i += 1) {
    if (randomNum % i === 0) {
      inputSystem = 'no';
      break;
    }
  }
  const unit = (`${randomNum}`);
  return [unit, inputSystem];
};

const brainprime = () => {
  indexStart(leson, logics);
};

export default brainprime;
