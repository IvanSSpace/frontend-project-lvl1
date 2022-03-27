#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */
import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
// eslint-disable-next-line import/no-named-as-default-member
import name from '../scr/cli.js';// почему-то говорит про ошибку в импорте

console.log('brain-calc');
console.log();

console.log('What is the result of the expression?');

// const braincalc = () => {
//   for (let i = 0; i < 3; i += 1) {
//     const nam1 = getRandomInt(1, 25);
//     const nam2 = getRandomInt(1, 25);

//     const arr = ['+', '-', '*'];
//     const sign = arr.getRandomInt(0, 2);

//     const StrRes = arr;
//     console.log(`Question: ${namberOne} ${sign} ${namberTwo}`);
//   }
// };
