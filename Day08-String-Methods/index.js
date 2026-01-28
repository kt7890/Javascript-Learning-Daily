// Day 08 - String Methods

const text = "  JavaScript is Awesome  ";

// length
console.log("Length:", text.length);

// trim
const trimmedText = text.trim();
console.log("Trimmed:", trimmedText);

// toUpperCase & toLowerCase
console.log("Uppercase:", trimmedText.toUpperCase());
console.log("Lowercase:", trimmedText.toLowerCase());

// includes
console.log("Includes 'Script':", trimmedText.includes("Script"));

// startsWith & endsWith
console.log("Starts with 'Java':", trimmedText.startsWith("Java"));
console.log("Ends with 'Awesome':", trimmedText.endsWith("Awesome"));

// replace
const replacedText = trimmedText.replace("Awesome", "Powerful");
console.log("Replaced:", replacedText);

// split
const words = trimmedText.split(" ");
console.log("Words Array:", words);
