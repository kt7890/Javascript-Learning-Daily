// Day 14 - Async / Await

// A function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received successfully!");
        }, 2000);
    });
}

// Using async / await
async function getData() {
    try {
        console.log("Fetching data...");
        const result = await fetchData(); // waits here
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Done");
    }
}

getData();
