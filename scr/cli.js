#!/usr/bin/env node
import readlineSync from 'readline-sync';

const nameOur = '';
const lowLvlApp = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your answer: ');
  // eslint-disable-next-line no-const-assign
  nameOur = name; // для того что бы модно было использовать в brain-even
  console.log(`Hello, ${name}!`);
};
export { lowLvlApp, nameOur };
