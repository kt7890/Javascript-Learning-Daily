// store data
localStorage.setItem("name", "KT");
localStorage.setItem("age", 22);

// get data
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);

// remove one item
localStorage.removeItem("age");

// clear all
// localStorage.clear();
