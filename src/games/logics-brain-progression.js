import getRandomInt from '../modRandom.js';
import indexStart from '../index.js';

const leson = 'What number is missing in the progression?';

// const getProgression = (firstMemberProgression, progressionStep, numberOfTheGuessNumber) => {
const getProgression = (progressionLength, progressionStart, progressionStep) => {
  const result = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(progressionStart + (progressionStep * i));
  }
  //   if (numberOfTheGuessNumber === i) {
  //     result.push('..');
  //   } else {
  //     result.push(`${result}`);
  //   }
  // }
  // const progressionToString = progression.join(' ');
  // return progressionToString;
  return result;
};

const logics = () => {
  const progressionLength = getRandomInt(5, 10);// длина
  const progressionStart = getRandomInt(1, 10);// старт
  const progressionStep = getRandomInt(1, 10);// шаг
  const unit = getProgression(progressionLength, progressionStart, progressionStep);

  // прячем число const stelsNum =
  const stelsIndex = getRandomInt(0, progressionLength);// индекс спрятанного числа
  // const stelsString = '..'; // создание спрятанного числа
  const inputSystem = unit[stelsIndex];
  unit[stelsIndex] = '..';

  return [unit.join(), String(inputSystem)];
};

// const progression = () => {
//   const result = [];
//   const levlProgress = getRandomInt(1, 6);// нарастание
//   for (let i = 0; i < getRandomInt(5, 15); i += 1) { // длина прогрессии
//     result.push(levlProgress * (i + 1)); // пушит в константу с массивом числа
//   }
//   return result; // возвращает массив с числами
// };

// const leson = ('What number is missing in the progression?');
// const logics = () => {
//   const array = progression();
//   // const stelsNum = getRandomInt(0, [array.length]);
//   // const inputSystem = (array[stelsNum]);
//   // array[stelsNum] = '..';
//      const stelsNum = getRandomInt(0,array.length);
//      const inputSystem = array
//   const inputSystem = 1;

//   const unit = (`${array}`);
//   return [unit, String(inputSystem)];
// };

const brainprogression = () => {
  indexStart(leson, logics);
};

export default brainprogression;
