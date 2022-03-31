import getRandomInt from '../scr/modRandom.js';
import indexStart from '../scr/index.js';

const nameGame = ('brain-progression');
const leson = ('What number is missing in the progression?');
const logics = () => {
  const array = [];
  const randomNum = getRandomInt(2, 9);// рандомим исло с которой начнется и будет прогрессий
  for (let v = 0; v < 10; v += 1) {
    array.push(randomNum * (v + 1));
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
