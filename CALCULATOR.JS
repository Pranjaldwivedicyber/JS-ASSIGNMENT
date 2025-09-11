let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt("Choose operation: add, sub, mul, div");

let result;

if (operation === "add") {
    result = num1 + num2;
} else if (operation === "sub") {
    result = num1 - num2;
} else if (operation === "mul") {
    result = num1 * num2;
} else if (operation === "div") {
    result = num1 / num2;
} else {
    alert("Invalid operation!");
}

if (result !== undefined) {
    alert("Result is: " + result);
}