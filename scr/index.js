import readlineSync from 'readline-sync';

const indexStart = (nameGame, leson, braincalc) => {
  console.log(` ${nameGame} `);
  console.log();
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(` ${leson} `);
  for (let i = 0; i < 2; i += 1) {
    const [unit, imput] = braincalc();
    console.log(`Questions: ${unit}`);
    const inputUser = (readlineSync.question('Your answer: '));
    if (inputUser === inputSystem) {
      console.log('Correct!');
    } else {
      console.log(`${inputUser} is wrong answer ;(. Correct answer was ${inputSystem}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
export default indexStart;
