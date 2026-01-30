// Day 13 - Promises (Basics)

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // change to false to test reject

    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Consuming a Promise
myPromise
    .then(result => {
        console.log("Then:", result);
    })
    .catch(error => {
        console.log("Catch:", error);
    })
    .finally(() => {
        console.log("Finally: Promise completed");
    });


// Realistic example with setTimeout
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched from server");
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log(data);
    });
