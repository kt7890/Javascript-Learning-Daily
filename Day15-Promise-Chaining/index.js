// Day 15 - Promise Chaining

function stepOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve(10);
        }, 1000);
    });
}

function stepTwo(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve(value * 2);
        }, 1000);
    });
}

function stepThree(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve(value + 5);
        }, 1000);
    });
}

// Promise chaining
stepOne()
    .then(result1 => {
        return stepTwo(result1);
    })
    .then(result2 => {
        return stepThree(result2);
    })
    .then(finalResult => {
        console.log("Final Result:", finalResult);
    })
    .catch(error => {
        console.log("Error:", error);
    });
