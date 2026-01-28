// Day 06 - Destructuring in JavaScript

// Array Destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// Skipping values
const [first, , third] = numbers;
console.log("first:", first);
console.log("third:", third);

// Object Destructuring
const user = {
    name: "KT",
    age: 22,
    role: "Student"
};

const { name, age } = user;
console.log("Name:", name);
console.log("Age:", age);

// Renaming variables
const { role: position } = user;
console.log("Position:", position);
