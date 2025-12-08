// ----------------------------
// Assignment Operators
// ----------------------------

let a = 3;
let result = (100 + 50) * a;  // 450
console.log("result:", result);

let sum = 5 + 2;              // 7
console.log("sum:", sum);

let text = "Hello" + " " + "JS"; // "Hello JS"
console.log("text:", text);

// += example
let x = 10;
x += 5;  // same as x = x + 5
console.log("x after += :", x);


// ----------------------------
// Comparison Operators
// ----------------------------

let y = 5;
console.log(y > 3);      // true
console.log(y === "5");  // false (strict equality checks type)
console.log(y == "5");   // true   (loose equality)


// ----------------------------
// Logical Operators
// ----------------------------

let z = 7;
if (z > 0 && z < 10) {
  console.log("z is between 1 and 9");
}


// ----------------------------
// Control Flow (if/else + ternary)
// ----------------------------

let age = 20;

let status = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary result:", status);

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


// ----------------------------
// Switch Case
// ----------------------------

let day = "Tue";

switch(day) {
  case "Mon":
    console.log("Monday");
    break;
  case "Tue":
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}
