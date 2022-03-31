import getRandomInt from '../scr/modRandom.js';
import indexStart from '../scr/index.js';

const nameGame = ('brain-prime');
const leson = ('Answer "yes" if given number is prime. Otherwise answer "no".');
const logics = () => {
  const randomNum = getRandomInt(3, 10);

  let inputSystem = 'yes';
  for (let v = 2; v < randomNum; v += 1) {
    if (randomNum % v === 0) {
      inputSystem = 'no';
      break;
    }
  }
  const unit = (`${randomNum}`);
  return [unit, inputSystem];
};

const brainprime = () => {
  indexStart(nameGame, leson, logics);
};

export default brainprime;
