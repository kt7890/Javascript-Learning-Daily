// Day 19 - Truthy & Falsy Values

// Falsy values in JavaScript (ONLY THESE 6)
const falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach(value => {
    if (!value) {
        console.log("Falsy:", value);
    }
});

// Everything else is truthy
const truthyValues = [
    true,
    1,
    "0",
    "false",
    [],
    {},
    function () {}
];

truthyValues.forEach(value => {
    if (value) {
        console.log("Truthy:", value);
    }
});


// Practical examples

// 1️⃣ Conditional check
let username = "";
if (username) {
    console.log("Username exists");
} else {
    console.log("Username missing"); // runs
}

// 2️⃣ Default values (common JS pattern)
let count = 0;
let result = count || 10;
console.log("Result:", result); // 10 (because 0 is falsy)

// Safer alternative
let safeResult = count ?? 10;
console.log("Safe Result:", safeResult); // 0
