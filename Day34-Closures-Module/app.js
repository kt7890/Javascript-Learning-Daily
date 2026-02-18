function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      console.log("Count:", count);
    },

    decrement() {
      count--;
      console.log("Count:", count);
    },

    getValue() {
      return count;
    }
  };
}

const counter1 = createCounter();
counter1.increment(); // 1
counter1.increment(); // 2
counter1.decrement(); // 1

const counter2 = createCounter();
counter2.increment(); // separate instance
