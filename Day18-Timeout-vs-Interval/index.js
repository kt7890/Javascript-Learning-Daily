// Day 18 - setTimeout vs setInterval

// setTimeout -> runs once after delay
setTimeout(() => {
    console.log("This runs once after 2 seconds");
}, 2000);


// setInterval -> runs repeatedly after every delay
let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log("Interval count:", count);

    if (count === 3) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);


// setTimeout inside setInterval (interview trick)
function repeatWithTimeout() {
    setTimeout(() => {
        console.log("Repeated using setTimeout");
        repeatWithTimeout();
    }, 1000);
}

// Uncomment to test
// repeatWithTimeout();
