import getRandomInt from '../scr/modRandom.js';
import indexStart from '../scr/index.js';

const nameGame = ('brain-progression');
const leson = ('What number is missing in the progression?');
const logics = () => {
  const array = [];
  const maxProgress = getRandomInt(2, 9);
  for (let i = 0; i < 10; i += 1) {
    array.push(maxProgress * (i + 1));
  }
  const stelsNum = getRandomInt(0, 9);
  const inputSystem = (array[stelsNum]);
  array[stelsNum] = '..';

  const unit = (`${array}`);
  return [unit, inputSystem];
};

const brainprogression = () => {
  indexStart(nameGame, leson, logics);
};

export default brainprogression;
