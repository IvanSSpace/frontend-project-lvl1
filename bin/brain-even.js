#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';

console.log('Welcome to the Brain Games!');
const user = readlineSync.question('May I have your name? ');
console.log(`Hello, ${user}!`);

// lowLvlApp();// Приветствие игры и пользователя

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const braineven = () => {
  for (let i = 0; i < 3; i += 1) {
    const namberR = getRandomInt(100);
    console.log(`Question: ${namberR}`);

    const inputYN = readlineSync.question('Your answer: ');

    if (namberR % 2 === 0) {
      if (inputYN === 'yes') {
        console.log('Correct!');
      } else {
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
        console.log(`Let's try again, ${user}`);
        return;// не break тк выход нужен чтобы после функции не выполнялось сообщение о победе
      }
    }

    if (namberR % 2 !== 0) {
      if (inputYN === 'no') {
        console.log('Correct!');
      } else {
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
        console.log(`Let's try again, ${user}`);
        return;
      }
    }
  }
};
braineven();
console.log(`Congratulations, ${user}`);
