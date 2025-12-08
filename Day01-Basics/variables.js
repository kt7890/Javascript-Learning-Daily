// ----------------------------
// Variables in JavaScript
// ----------------------------

// var (old way - function scoped, re-declarable)
var a = 10;
var a = 20; // allowed
console.log("var example:", a);

// let (modern - block scoped, NOT re-declarable in same block)
let b = 30;
// let b = 40 ❌ error
b = 35;
console.log("let example:", b);

// const (constant value - cannot reassign)
const pi = 3.14;
// pi = 3.15 ❌ error
console.log("const example:", pi);

// dynamic typing
let dynamic = 5;
dynamic = "Hello JS";
console.log("Dynamic variable:", dynamic);
