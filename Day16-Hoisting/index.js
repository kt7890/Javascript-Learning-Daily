// Day 16 - Hoisting

// 1️⃣ Function hoisting
sayHello();

function sayHello() {
    console.log("Hello from function!");
}

// 2️⃣ Variable hoisting with var
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// 3️⃣ let & const are hoisted but in TDZ
// console.log(b); // ❌ ReferenceError
let b = 20;

// console.log(c); // ❌ ReferenceError
const c = 30;

// 4️⃣ Function expression is NOT hoisted
// greet(); // ❌ TypeError
const greet = function () {
    console.log("Hello from function expression");
};

greet();
