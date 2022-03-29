import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
import { startSay, name } from '../scr/cli.js';

const braingcd = () => {
  console.log('brain-gcd');
  startSay();
  console.log('Find the greatest common divisor of given numbers.');

  let num1 = 0;
  let num2 = 0;
  let result = 0;
  for (let i = 0; i < 3; i += 1) {
    num1 = getRandomInt(1, 20);
    num2 = getRandomInt(1, 20);
    result = 0;

    console.log(`Question: ${num1} ${num2}`);

    for (let v = num1; v > 0; v -= 1) {
      if (num1 % v === 0 && num2 % v === 0) {
        // eslint-disable-next-line no-unused-vars
        result = v;
        break;
      }
    }

    const resultUser = Number(readlineSync.question('Your answer: '));

    if (resultUser === result) {
      console.log('Correct!');
    } else {
      console.log(`${resultUser} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default braingcd;
