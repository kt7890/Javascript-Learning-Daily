class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    const removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return removed;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Test
const minStack = new MinStack();

minStack.push(5);
minStack.push(2);
minStack.push(10);
minStack.push(1);

console.log(minStack.getMin()); // 1
minStack.pop();
console.log(minStack.getMin()); // 2
console.log(minStack.top());    // 10