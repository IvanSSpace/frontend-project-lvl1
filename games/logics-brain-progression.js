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

    const stelsNum = getRandomInt(0, 9); // скрытый индекс
    const trueNum = Number(array[stelsNum]);// запись правильного ответа
    array[stelsNum] = '..'; // скрываем число

    console.log(`Question: ${array}`);
    const resultUser = Number(readlineSync.question('Your answer: '));
    if (resultUser === trueNum) {
      console.log('Correct!');
    } else {
      console.log(`${resultUser} is wrong answer ;(. Correct answer was ${trueNum}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainprogression;
