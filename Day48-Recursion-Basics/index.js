function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function countdown(n) {
  if (n < 1) {
    return;
  }

  console.log(n);
  countdown(n - 1);
}

// Test
console.log(factorial(5)); // 120
countdown(5);