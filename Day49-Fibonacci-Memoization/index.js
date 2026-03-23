function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];

  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Test
console.log(fibonacci(6));   // 8
console.log(fibonacci(10));  // 55