Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const uniqueKey = Symbol();

  context[uniqueKey] = this;
  const result = context[uniqueKey](...args);

  delete context[uniqueKey];
  return result;
};

// Test
function greet(age) {
  return `Hi I'm ${this.name}, age ${age}`;
}

const person = { name: "KT" };

console.log(greet.myCall(person, 22));




Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const uniqueKey = Symbol();

  context[uniqueKey] = this;
  const result = context[uniqueKey](...args);

  delete context[uniqueKey];
  return result;
};

console.log(greet.myApply(person, [22]));




Function.prototype.myBind = function (context, ...args) {
  const fn = this;

  return function (...newArgs) {
    return fn.myCall(context, ...args, ...newArgs);
  };
};

const boundGreet = greet.myBind(person);
console.log(boundGreet(22));
