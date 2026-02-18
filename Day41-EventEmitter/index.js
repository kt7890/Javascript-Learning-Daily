class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach(listener => {
      listener(...args);
    });
  }

  off(eventName, listenerToRemove) {
    if (!this.events[eventName]) return;

    this.events[eventName] = this.events[eventName].filter(
      listener => listener !== listenerToRemove
    );
  }
}

// Usage
const emitter = new EventEmitter();

function greet(name) {
  console.log("Hello", name);
}

emitter.on("welcome", greet);
emitter.emit("welcome", "KT");

emitter.off("welcome", greet);
emitter.emit("welcome", "KT"); // nothing happens
