import readlineSync from 'readline-sync';

let name = '';
const greetings = () => {
  console.log();
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};

const comparisonAnswers = () => {
  if (inputSystem === inputUser) {
    console.log('Correct!');
  } else {
    console.log(`${inputUser} is wrong answer ;(. Correct answer was ${inputSystem}.`);
    console.log(`Let's try again, ${name}`);
    return;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
};

export { greetings, comparisonAnswers, name };
