const number = prompt("참가자 몇 명?");
const $button = document.getElementById("button");
const $input = document.getElementById("input");
const $word = document.getElementById("word");
const $order = document.getElementById("order");

let word;
let nextWord;

// button

const onClickButton = () => {
    console.log("버튼 클릭");
};

$button.addEventListener('click', onClickButton);


// input

const onInput = (event) => {
    console.log(event.target.value);
};

$input.addEventListener('input', onInput);