import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
import { startSay, name } from '../scr/cli.js';

const braincalc = () => {
  console.log('brain-calc');
  startSay();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const arr = ['+', '-', '*'];
    const counter = arr[getRandomInt(0, 2)];

    let inputSystem = 0;

    switch (counter) {
      case '+':
        inputSystem = num1 + num2;
        break;
      case '-':
        inputSystem = num1 - num2;
        break;
      case '*':
        inputSystem = num1 * num2;
        break;
      default:
    }
    console.log(`Question: ${num1} ${counter} ${num2}`);
    const inputUser = Number(readlineSync.question('Your answer: '));

    if (inputSystem === inputUser) {
      console.log('Correct!');
    } else {
      console.log(`${inputUser} is wrong answer ;(. Correct answer was ${inputSystem}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default braincalc;
