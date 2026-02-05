const user = {
  name: "KT",
  age: 22,

  greet: function () {
    console.log("Hello, I am " + this.name);
  },

  birthday() {
    this.age++;
    console.log("Age:", this.age);
  }
};

user.greet();
user.birthday();

// this outside object
function show() {
  console.log(this);
}
show();
