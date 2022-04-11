function getRandomInt(min, max) {
  const cast = min + Math.random() * (max + 1 - min);
  return Math.floor(cast);
}
export default getRandomInt;
