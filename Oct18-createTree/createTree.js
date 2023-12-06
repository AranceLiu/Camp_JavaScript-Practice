function createTree(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1));
  }
  for (let j = 1; j <= 2; j++) {
    console.log(" ".repeat(n - 1) + "*");
  }
}

createTree(9);
