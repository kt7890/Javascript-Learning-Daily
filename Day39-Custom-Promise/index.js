class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.handlers = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.value = value;
      this.handlers.forEach((handler) => handler(this.value));
    };

    try {
      executor(resolve);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  then(callback) {
    if (this.state === "fulfilled") {
      callback(this.value);
    } else {
      this.handlers.push(callback);
    }
    return this;
  }
}

// Usage
const promise = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("Done!");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});
