import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const primeFunc = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const logics = () => {
  const randomNum = getRandomInt(3, 10);

  const inputSystem = primeFunc(randomNum) ? 'yes' : 'no';

  const unit = (`${randomNum}`);
  return [unit, inputSystem];
};

const brainprime = () => {
  indexStart(leson, logics);
};

export default brainprime;
