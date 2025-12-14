// ---------------------------------------------
// Day 04 - Objects in JavaScript
// ---------------------------------------------

// Basic object
let user = {
    name: "User1",
    age: 22,
    isActive: true
};

console.log("User:", user);

// Access properties
console.log("Name:", user.name);
console.log("Age:", user["age"]);

// Add new property
user.email = "user1@example.com";
console.log("After adding email:", user);

// Update property
user.age = 23;
console.log("Updated age:", user);

// Delete property
delete user.isActive;
console.log("After delete:", user);

// ---------------------------------------------
// Object with method
// ---------------------------------------------
let product = {
    title: "Product A",
    price: 999,
    getDetails: function () {
        return `${this.title} costs ₹${this.price}`;
    }
};

console.log(product.getDetails());

// ---------------------------------------------
// Array of Objects (real-world example)
// ---------------------------------------------
let products = [
    { id: 1, name: "ProductA", price: 500 },
    { id: 2, name: "ProductB", price: 1200 },
    { id: 3, name: "ProductC", price: 800 }
];

// Loop through objects
products.forEach(p => {
    console.log(p.name, p.price);
});

// Filter
let expensiveProducts = products.filter(p => p.price > 700);
console.log("Expensive products:", expensiveProducts);

// Map
let productNames = products.map(p => p.name);
console.log("Product names:", productNames);

// Find
let foundProduct = products.find(p => p.id === 2);
console.log("Found product:", foundProduct);

// ---------------------------------------------
// End
// ---------------------------------------------
