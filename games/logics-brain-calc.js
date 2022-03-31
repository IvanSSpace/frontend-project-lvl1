import getRandomInt from '../scr/modRandom.js';
import indexStart from '../scr/index.js';

const nameGame = ('brain-calc');
const leson = ('What is the result of the expression?');

const braincalc = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const arr = ['+', '-', '*'];
  const counter = arr[getRandomInt(0, 2)];

  let inputSystem = 0;

  switch (counter) {
    case '+':
      inputSystem = num1 + num2;
      break;
    case '-':
      inputSystem = num1 - num2;
      break;
    case '*':
      inputSystem = num1 * num2;
      break;
    default:
  }
  String(inputSystem);
  const unit = (`${num1} ${counter} ${num2}`);
  return [unit, inputSystem];// возврат задания и ответа скрипта
};

const braincalcRun = () => {
  indexStart(nameGame, leson, braincalc);
};

export default braincalcRun;
