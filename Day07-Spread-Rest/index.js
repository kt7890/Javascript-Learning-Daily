// Day 07 - Spread & Rest Operators

// 🔹 Spread Operator (...)
// Used to expand elements

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

// Merge arrays
const mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray);

// Copy array
const copyArray = [...arr1];
console.log("Copied Array:", copyArray);

// Spread with objects
const user = { name: "KT", age: 22 };
const updatedUser = { ...user, role: "Student" };
console.log("Updated User:", updatedUser);


// 🔹 Rest Operator (...)
// Used to collect remaining elements

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("Sum:", sum(1, 2, 3, 4));
