let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
const sum = document.getElementById("sum-el");

function add() {
	sum.textContent = num1 + num2;
}

function subtract() {
	sum.textContent = num1>num2?num1-num2:num2-num1;
}

function divide() {
	sum.textContent = num1 / num2;
}

function multiply() {
	sum.textContent = num1 * num2;
}


