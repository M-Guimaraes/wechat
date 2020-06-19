
const getRadom = (min,max) => {
  return Math.random() * (max - min) + min;
}

export { getRadom }