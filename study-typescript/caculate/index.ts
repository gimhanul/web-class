// Using typeof

const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement;
export const screen = document.querySelector(".screen");

function addNumbers(a: number, b: number) {
  screen.innerHTML = (a + b).toString();
}

button.addEventListener("click", () =>
  addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);
