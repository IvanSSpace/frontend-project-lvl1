#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
import { startSay, name } from '../scr/cli.js';

const braingcd = () => {
  console.log('brain-gcd');
  startSay();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    let Maxnum = 0;
    let zxc = 0;
    if (num1 < num2) { Maxnum = num1; } else { Maxnum = num2; } // находим наибольшее
    console.log(`Question: ${num1} ${num2}`);
    for (let v = Maxnum; v > 0; v -= 1) {
      if (num1 % v === 0 && num2 % v === 0) {
        // eslint-disable-next-line no-unused-vars
        zxc = v;
        break;
      }
    }
    const resultUser = Number(readlineSync.question('Your answer: '));
    if (resultUser === zxc) {
      console.log('Correct!');
    } else {
      console.log(`${resultUser} is wrong answer ;(. Correct answer was ${zxc}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
braingcd();
