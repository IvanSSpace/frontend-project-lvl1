import readlineSync from 'readline-sync';

const indexStart = (leson, logics) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${leson}`);

  for (let i = 0; i < 3; i += 1) {
    const [unit, inputSystem] = logics();
    console.log(`Question: ${unit}`);
    const inputUser = (readlineSync.question('Your answer: '));
    if (inputUser !== inputSystem) {
      console.log(`${inputUser} is wrong answer ;(. Correct answer was ${inputSystem}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default indexStart;
