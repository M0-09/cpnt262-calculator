"use strict";

// operators (Array)
const operators = [`+`, `-`, `*`, `/`];

// {key:operator, value:function} => object
const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};
// access command-line arguments in Node.js
const args = process.argv.slice(2);

// arguments
const operand1 = parseFloat(args[0]);
const operator = args[1];
const operand2 = parseFloat(args[2]);

// validating inputs
if (args.length !== 3) {
  console.error("Usage: node calculator.js <operand1> <operator> <operand2>");
  process.exit(1);
}

if (isNaN(operand1) || isNaN(operand2)) {
  console.error("Both operands must be numbers");
  process.exit(1);
}
// validating operator
if (!operators.includes(operator)) {
  console.error("Valid operators are +, -, *, /");
  process.exit(1);
}

// functions declarations

// addition
function add(a, b) {
  return a + b;
}

// subtraction
function subtract(a, b) {
  return a - b;
}

// multiplication
function multiply(a, b) {
  return a * b;
}

// division
function divide(a, b) {
  if (b === 0) {
    console.error("Error: Division by zero is not allowed");
    process.exit(1);
  }
  return a / b;
}

// main function to run the calculator
function runCalculator() {
  const result = operations[operator](operand1, operand2);
  console.log(`Result: ${result}`);
}

runCalculator();
