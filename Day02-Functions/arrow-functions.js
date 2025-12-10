// ----------------------------
// ARROW FUNCTIONS
// ----------------------------

const hello = () => console.log("Hello from Arrow Function");
hello();

const square = n => n*n;
console.log("Square:", square(6));

const sum = (a,b) => {
    return a + b;
};
console.log("Sum:", sum(7,8));

// Implicit return
const product = (x,y) => x*y;
console.log("Product:", product(4,5));
