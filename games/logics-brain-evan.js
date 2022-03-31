import getRandomInt from '../scr/modRandom.js';
import indexStart from '../scr/index.js';

const nameGame = ('brain-even');
const leson = ('Answer "yes" if the number is even, otherwise answer "no".');
const arrYN = ['yes', 'no'];
const logics = () => {
  const randomNum = getRandomInt(1, 100);
  const unit = (`${randomNum}`);
  const inputSystem = arrYN[randomNum % 2];
  return [unit, inputSystem];
};

const braineven = () => {
  indexStart(nameGame, leson, logics);
};

export default braineven;
