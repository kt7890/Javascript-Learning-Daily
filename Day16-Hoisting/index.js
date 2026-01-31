// Day 17 - Event Bubbling & Capturing

// Bubbling: event goes from child -> parent
// Capturing: event goes from parent -> child

const parent = {
    name: "Parent",
    handleClick() {
        console.log("Parent clicked");
    }
};

const child = {
    name: "Child",
    handleClick() {
        console.log("Child clicked");
    }
};

// Simulating bubbling order
console.log("---- Bubbling ----");
child.handleClick();
parent.handleClick();

// Simulating capturing order
console.log("---- Capturing ----");
parent.handleClick();
child.handleClick();


// Real DOM explanation (important for interviews)
/*
element.addEventListener("click", handler, false);
→ Bubbling phase (default)

element.addEventListener("click", handler, true);
→ Capturing phase
*/
