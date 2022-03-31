import getRandomInt from '../scr/modRandom.js';
import indexStart from '../scr/index.js';

const nameGame = ('brain-gcd');
const leson = ('Find the greatest common divisor of given numbers.');

const logics = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  let inputSystem = 0;
  const unit = (`${num1} ${num2}`);

  for (let v = num1; v > 0; v -= 1) {
    if (num1 % v === 0 && num2 % v === 0) {
      inputSystem = v;
      break;
    }
  }
  return [unit, inputSystem];
};

const braingcd = () => {
  indexStart(nameGame, leson, logics);
};

export default braingcd;
