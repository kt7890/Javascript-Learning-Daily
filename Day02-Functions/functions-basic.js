// ----------------------------
// BASIC FUNCTIONS
// ----------------------------

// simple function
function greet(){
    console.log("Hello JavaScript!");
}
greet();

// function with parameter
function welcome(name){
    console.log(`Welcome, ${name}!`);
}
welcome("KT");

// return value
function add(a, b){
    return a + b;
}
console.log("Add:", add(5,7));

// default parameter
function mul(a, b = 2){
    return a*b;
}
console.log("Multiply:", mul(5));
console.log("Multiply:", mul(5,4));
