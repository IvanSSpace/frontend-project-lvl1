#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */
import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
// eslint-disable-next-line import/no-named-as-default-member
import name from '../scr/cli.js';// почему-то говорит про ошибку в импорте

console.log('brain-even');
console.log();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const braineven = () => {
  for (let i = 0; i < 3; i += 1) {
    const namberR = getRandomInt(1, 100);
    console.log(`Question: ${namberR}`);

    const inputYN = readlineSync.question('Your answer: ');

    if (namberR % 2 === 0) {
      if (inputYN === 'yes') {
        console.log('Correct!');
      } else {
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
        console.log(`Let's try again, ${name}`);
        return;// не break тк выход нужен чтобы после функции не выполнялось сообщение о победе
      }
    }

    if (namberR % 2 !== 0) {
      if (inputYN === 'no') {
        console.log('Correct!');
      } else {
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
        console.log(`Let's try again, ${name}`);
        return;
      }
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

braineven();
