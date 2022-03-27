import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
import { startSay, name } from '../scr/cli.js';

const braineven = () => {
  console.log('brain-even');
  console.log();

  startSay();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const arr = ['yes', 'no'];
  for (let i = 0; i < 3; i += 1) {
    const namberR = getRandomInt(1, 100);
    console.log(`Question: ${namberR}`);

    const inputYN = readlineSync.question('Your answer: ');
    if (inputYN === arr[namberR % 2]) console.log('Correct!');
    else {
      console.log(` ${inputYN} is wrong answer ;(. Correct answer was ${arr[namberR % 2]}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default braineven;
