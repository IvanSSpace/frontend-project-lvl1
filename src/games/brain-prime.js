import getRandomInt from '../modRandom.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return true;
    }
  }
  return false;
};

const generateRoundData = () => {
  const randomNum = getRandomInt(3, 10);
  const answer = isPrime(randomNum) ? 'no' : 'yes';

  const question = randomNum;
  return [question, answer];
};

const brainprime = () => {
  gameEngine(rules, generateRoundData);
};

export default brainprime;
