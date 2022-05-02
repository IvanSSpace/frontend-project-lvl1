import getRandomInt from '../modRandom.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (isDivided) => ((isDivided % 2 === 0));

const generateRoundData = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const braineven = () => {
  gameEngine(rules, generateRoundData);
};

export default braineven;
