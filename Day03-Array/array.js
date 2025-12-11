// ---------------------------------------------
// DAY 03 - ARRAYS PRACTICE PROJECT
// ---------------------------------------------

// Initial array
let items = ["Item1", "Item2", "Item3", "Item4"];

console.log("Initial Items:", items);

// ---------------------------------------------
// 1. Add elements (push)
// ---------------------------------------------
items.push("NewItem");
console.log("\nAfter push('NewItem'):", items);

// ---------------------------------------------
// 2. Remove last element (pop)
// ---------------------------------------------
items.pop();
console.log("After pop():", items);

// ---------------------------------------------
// 3. Add element at start (unshift)
// ---------------------------------------------
items.unshift("StartItem");
console.log("\nAfter unshift('StartItem'):", items);

// ---------------------------------------------
// 4. Remove first element (shift)
// ---------------------------------------------
items.shift();
console.log("After shift():", items);

// ---------------------------------------------
// 5. Check if element exists (includes)
// ---------------------------------------------
console.log("\nDoes array include 'Item2'?", items.includes("Item2"));

// ---------------------------------------------
// 6. Find index of an element (indexOf)
// ---------------------------------------------
console.log("Index of 'Item3':", items.indexOf("Item3"));

// ---------------------------------------------
// 7. Slice (copy portion)
// ---------------------------------------------
let slicedPart = items.slice(1, 3);
console.log("\nSlice (1,3):", slicedPart);

// ---------------------------------------------
// 8. Splice (remove/insert)
// ---------------------------------------------
items.splice(2, 1, "InsertedItem");
console.log("After splice:", items);

// ---------------------------------------------
// 9. Loop - for loop
// ---------------------------------------------
console.log("\nLoop using for:");
for (let i = 0; i < items.length; i++) {
    console.log(i, items[i]);
}

// ---------------------------------------------
// 10. Loop - for..of loop
// ---------------------------------------------
console.log("\nLoop using for...of:");
for (let element of items) {
    console.log(element);
}

// ---------------------------------------------
// 11. Sorting
// ---------------------------------------------
let sorted = [...items].sort();
console.log("\nSorted:", sorted);

// ---------------------------------------------
// 12. Reverse
// ---------------------------------------------
let reversed = [...items].reverse();
console.log("Reversed:", reversed);

// ---------------------------------------------
// 13. Filter items starting with 'I'
// ---------------------------------------------
let filtered = items.filter(x => x.startsWith("I"));
console.log("\nFiltered items:", filtered);

// ---------------------------------------------
// 14. Map - convert items to uppercase
// ---------------------------------------------
let uppercased = items.map(x => x.toUpperCase());
console.log("Uppercase items:", uppercased);

// ---------------------------------------------
// 15. Array of objects example
// ---------------------------------------------
let productList = [
    { name: "ProductA", price: 120 },
    { name: "ProductB", price: 90 },
    { name: "ProductC", price: 150 },
    { name: "ProductD", price: 110 }
];

console.log("\nProduct List:", productList);

// Filter expensive products
let expensive = productList.filter(p => p.price > 100);
console.log("\nExpensive Products:", expensive);

// Only names
let productNames = productList.map(p => p.name);
console.log("Product Names:", productNames);

// Sort by price (High -> Low)
let sortedByPrice = [...productList].sort((a, b) => b.price - a.price);
console.log("\nSorted by price (High to Low):", sortedByPrice);

// ---------------------------------------------
// END
// ---------------------------------------------
