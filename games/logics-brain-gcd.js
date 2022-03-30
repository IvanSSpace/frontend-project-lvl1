import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
import { startSay, name } from '../scr/cli.js';

const braingcd = () => {
  console.log('brain-gcd');
  startSay();
  console.log('Find the greatest common divisor of given numbers.');

  let num1 = 0;
  let num2 = 0;
  let inputSystem = 0;
  for (let i = 0; i < 3; i += 1) {
    num1 = getRandomInt(1, 20);
    num2 = getRandomInt(1, 20);
    inputSystem = 0;

    console.log(`Question: ${num1} ${num2}`);

    for (let v = num1; v > 0; v -= 1) {
      if (num1 % v === 0 && num2 % v === 0) {
        inputSystem = v;
        break;
      }
    }

    const inputUser = Number(readlineSync.question('Your answer: '));

    if (inputUser === inputSystem) {
      console.log('Correct!');
    } else {
      console.log(`${inputUser} is wrong answer ;(. Correct answer was ${inputSystem}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default braingcd;
