import getRandomInt from '../scr/modRandom.js';
import indexStart from '../scr/index.js';

const nameGame = ('brain-gcd');
const leson = ('Find the greatest common divisor of given numbers.');

const logics = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  let inputSystem = 0;
  const unit = (`${num1} ${num2}`);

  for (let i = num1; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      inputSystem = i;
      break;
    }
  }
  return [unit, inputSystem];
};

const braingcd = () => {
  indexStart(nameGame, leson, logics);
};

export default braingcd;
