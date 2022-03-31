import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
import { startSay, name } from '../scr/cli.js';

const brainprogression = () => {
  console.log('brain-even');
  console.log();
  startSay();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const array = [];
    const randomNum = getRandomInt(2, 9);
    for (let v = 0; v < 10; v += 1) {
      array.push(randomNum * (v + 1));
    }

    const stelsNum = getRandomInt(0, 9);
    const inputSystem = Number(array[stelsNum]);
    array[stelsNum] = '..';

    console.log(`Question: ${array}`);
    const inputUser = Number(readlineSync.question('Your answer: '));
    if (inputUser === inputSystem) {
      console.log('Correct!');
    } else {
      console.log(`${inputUser} is wrong answer ;(. Correct answer was ${inputSystem}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainprogression;
