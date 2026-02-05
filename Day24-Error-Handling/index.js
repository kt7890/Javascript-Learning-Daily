function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    console.log(a / b);
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Operation finished");
  }
}

divide(10, 2);
divide(10, 0);
