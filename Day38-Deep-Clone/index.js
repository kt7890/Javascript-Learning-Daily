function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }

  return copy;
}

// Test
const original = {
  name: "KT",
  skills: ["JS", "Java"],
  details: {
    age: 22,
    active: true
  }
};

const cloned = deepClone(original);

cloned.details.age = 30;

console.log(original.details.age); // 22 (unchanged)
console.log(cloned.details.age);   // 30
