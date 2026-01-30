// Day 11 - Closures


function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        console.log("Count:", count);
    }

    return innerFunction;
}

const counter = outerFunction();
counter(); // 1
counter(); // 2
counter(); // 3


// Example 2: Closure with parameters
function greet(message) {
    return function(name) {
        console.log(message + ", " + name);
    };
}

const sayHello = greet("Hello");
sayHello("KT");
sayHello("World");


// Example 3: Practical use case
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
