const user = {
  name: "KT",
  age: 22,
  skills: ["JS", "HTML", "CSS"]
};

// object → JSON
const jsonData = JSON.stringify(user);
console.log(jsonData);

// JSON → object
const parsedData = JSON.parse(jsonData);
console.log(parsedData);
console.log(parsedData.name);
