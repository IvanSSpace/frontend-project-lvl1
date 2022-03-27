#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */
import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
// eslint-disable-next-line import/no-named-as-default-member
import { startSay, name } from '../scr/cli.js';// почему-то говорит про ошибку в импорте

const braincalc = () => {
  console.log('brain-calc');
  console.log();
  startSay();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 10);// 1
    const num2 = getRandomInt(1, 10);// 2
    const arr = ['+', '-', '*'];// 3 знавка
    const counter = arr[getRandomInt(0, 2)];// рандом знака 1 по 3 по индексу

    let resultStr = 0;

    switch (counter) {
      case '+':
        resultStr = num1 + num2;
        break;
      case '-':
        resultStr = num1 - num2;
        break;
      case '*':
        resultStr = num1 * num2;
        break;
      default:
    }
    console.log(`Question: ${num1} ${counter} ${num2}`);
    const resultUser = Number(readlineSync.question('Your answer: '));

    if (resultStr === resultUser) {
      console.log('Correct!');
    } else {
      console.log(`${resultUser} is wrong answer ;(. Correct answer was ${resultStr}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default braincalc;
