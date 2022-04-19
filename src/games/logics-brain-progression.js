import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = 'What number is missing in the progression?';

// const getProgression = (firstMemberProgression, progressionStep, numberOfTheGuessNumber) => {
const getProgression = (progressionLength, progressionStart, progressionStep) => {
  const result = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(progressionStart + (progressionStep * i));
  }
  return result;
};

const logics = () => {
  const progressionLength = getRandomInt(5, 10);
  const progressionStart = getRandomInt(1, 10);
  const progressionStep = getRandomInt(1, 10);
  const unit = getProgression(progressionLength, progressionStart, progressionStep);

  const stelsIndex = getRandomInt(0, progressionLength);
  // const stelsString = '..'; // создание спрятанного числа
  const inputSystem = unit[stelsIndex];
  unit[stelsIndex] = '..';

  return [unit.join(' '), inputSystem];
};

const brainprogression = () => {
  indexStart(leson, logics);
};

export default brainprogression;
