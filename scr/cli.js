import readlineSync from 'readline-sync';

const startSay = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};

export default startSay;
