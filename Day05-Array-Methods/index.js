// Day 05 - Array Methods: map, filter, reduce

const numbers = [1, 2, 3, 4, 5];

// map → transforms each element
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// filter → selects elements based on condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// reduce → reduces array to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);
