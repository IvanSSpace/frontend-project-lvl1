#!/usr/bin/env node
import readlineSync from 'readline-sync';

let name = '';
const startSay = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};

export { startSay, name };
