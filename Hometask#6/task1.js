function calculateArea(width, height) {
  const area = width * height;
  return area;
}
const result = calculateArea(10, 5);
console.log(`${result}`);

function calculateArea1(width, height) {
  return width * height;
}
console.log(`Function declaration: ${calculateArea1(5, 10)}`);

const calculateArea2 = function (width, height) {
  return width * height;
};
console.log(`Function expression: ${calculateArea2(5, 10)}`);

const calculateArea3 = (width, height) => width * height;
console.log(`Arrow function: ${calculateArea3(5, 10)}`);
