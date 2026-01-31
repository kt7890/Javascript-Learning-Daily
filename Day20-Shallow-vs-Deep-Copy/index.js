// Day 20 - Shallow vs Deep Copy

// Original object
const user = {
    name: "KT",
    address: {
        city: "Varanasi",
        pin: 221001
    }
};

// 🔹 Shallow Copy
const shallowCopy = { ...user };

// Change nested property
shallowCopy.address.city = "Delhi";

console.log("Original after shallow copy change:", user.address.city);
// ❌ Changed in original too (problem)


// 🔹 Deep Copy (Method 1: JSON)
const deepCopy1 = JSON.parse(JSON.stringify(user));
deepCopy1.address.city = "Mumbai";

console.log("Original after deep copy (JSON):", user.address.city);
// ✅ Original not affected


// 🔹 Deep Copy (Method 2: structuredClone) [Modern JS]
const deepCopy2 = structuredClone(user);
deepCopy2.address.city = "Pune";

console.log("Original after structuredClone:", user.address.city);


// 🔹 Shallow Copy with Arrays
const arr = [1, 2, [3, 4]];
const shallowArr = [...arr];

shallowArr[2][0] = 99;
console.log("Original array:", arr); // ❌ affected
