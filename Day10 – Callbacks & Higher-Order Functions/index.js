// Day 10 - Callbacks & Higher Order Functions

// A callback is a function passed into another function

function greet(name, callback) {
    console.log("Hello", name);
    callback();
}

function sayBye() {
    console.log("Goodbye 👋");
}

greet("KT", sayBye);


// Higher Order Function
// A function that takes another function as argument

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log("Add:", calculate(5, 3, add));
console.log("Multiply:", calculate(5, 3, multiply));


// Callback with array method
const numbers = [1, 2, 3, 4];

numbers.forEach(function (num) {
    console.log("Number:", num);
});
