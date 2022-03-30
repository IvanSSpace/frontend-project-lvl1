import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
import { startSay, name } from '../scr/cli.js';

const brainprime = () => {
  console.log('brain-prime');
  console.log();

  startSay();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(3, 10);

    let inputSystem = 'yes';
    for (let v = 2; v < randomNum; v += 1) {
      if (randomNum % v === 0) {
        inputSystem = 'no';
        break;
      }
    }

    console.log(`Question: ${randomNum}`);
    const inputUser = readlineSync.question('Your answer: ');

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

export default brainprime;
