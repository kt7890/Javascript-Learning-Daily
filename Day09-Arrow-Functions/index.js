// Day 09 - Arrow Functions & this

// Normal function
function normalFunc() {
    console.log("Normal function this:", this);
}

// Arrow function
const arrowFunc = () => {
    console.log("Arrow function this:", this);
};

normalFunc();
arrowFunc();


// this inside object
const user = {
    name: "KT",

    normalMethod: function () {
        console.log("Normal method:", this.name);
    },

    arrowMethod: () => {
        console.log("Arrow method:", this.name);
    }
};

user.normalMethod();   // works
user.arrowMethod();    // undefined


// Arrow function as callback
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);
