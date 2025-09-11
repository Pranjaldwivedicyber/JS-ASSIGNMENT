
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));

if (age < 18) {
    alert(`Hey ${name}, you’re a teen!`);
} else if (age >= 18 && age <= 60) {
    alert(`Welcome ${name}, you’re an adult!`);
} else {
    alert(`Hello ${name}, you’re a senior citizen!`);
}
