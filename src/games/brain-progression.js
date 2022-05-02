import getRandomInt from '../modRandom.js';
import gameEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (progressionLength, progressionStart, progressionStep) => {
  const result = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(progressionStart + (progressionStep * i));
  }
  return result;
};

const generateRoundData = () => {
  const progressionLength = getRandomInt(5, 10);
  const progressionStart = getRandomInt(1, 10);
  const progressionStep = getRandomInt(1, 6);

  const progression = generateProgression(progressionLength, progressionStart, progressionStep);
  const question = progression;
  const hiddenIndex = getRandomInt(0, progressionLength);
  const answer = question[hiddenIndex];
  question[hiddenIndex] = '..';

  return [question.join(' '), String(answer)];
};

const brainprogression = () => {
  gameEngine(rules, generateRoundData);
};

export default brainprogression;
