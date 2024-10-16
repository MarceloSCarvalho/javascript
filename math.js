function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return a / b;
}

function square(a) {
  return a ** 2;
}
export { add, divide, subtract, multiply, square };
