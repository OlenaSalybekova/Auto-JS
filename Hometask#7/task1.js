function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback(number);
  } else {
    oddCallback(number);
  }
}
function handleEven(number) {
  console.log(`${number} - is even`);
}
function handleOdd(number) {
  console.log(`${number} - is odd`);
}
handleNum(6, handleEven, handleOdd);
handleNum(9, handleEven, handleOdd);
