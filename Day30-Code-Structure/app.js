// Data
let numbers = [1, 2, 3, 4, 5];

// Logic
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

function getSquares(arr) {
  return arr.map(num => num * num);
}

// Output
function display(data) {
  console.log(data);
}

// Execution
const evens = getEvenNumbers(numbers);
const squares = getSquares(numbers);

display(evens);
display(squares);
