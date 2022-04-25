import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = 'What number is missing in the progression?';

const progressionFunc = (progressionLength, progressionStart, progressionStep) => {
  const result = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(progressionStart + (progressionStep * i));
  }
  return result;
};

const logics = () => {
  const progressionLength = getRandomInt(5, 10);
  const progressionStart = getRandomInt(1, 10);
  const progressionStep = getRandomInt(1, 6);

  const unit = progressionFunc(progressionLength, progressionStart, progressionStep);

  const stelsIndex = getRandomInt(0, progressionLength);
  const inputSystem = unit[stelsIndex];
  unit[stelsIndex] = '..';

  return [unit.join(' '), String(inputSystem)];
};

const brainprogression = () => {
  indexStart(leson, logics);
};

export default brainprogression;
