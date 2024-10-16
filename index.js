import { add, divide } from "./math.js";

console.log(add(2, 3)); // Outputs: 5
console.log("hello world!");

try {
  const e = divide(10, 7); // Outputs: 5
  console.log(`divisão: ${e}`);
} catch (error) {
  console.error("Error:", error.message);
}

const m = multiply(10, 7); // Outputs:
console.log(`multiplicação: ${e})`);
