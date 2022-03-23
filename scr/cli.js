#!/usr/bin/env node
import readlineSync from 'readline-sync';

const lowLvlApp = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};
export default lowLvlApp;
