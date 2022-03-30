const OUTSIDE_PRICE = 30000;
const INSIDE_PRICE = 40000;
const STEAM_PRICE = 20000;

const washOutsideBtn = document.getElementById("wash-outside-btn");
const washInsideBtn = document.getElementById("wash-inside-btn");
const steamBtn = document.getElementById("steam-btn");
const resetBtn = document.getElementById("reset-btn");
const receiptUl = document.getElementById("receipt-ul");

let sum = 0;
let numberOfWashOutside = 0;
let numberOfWashInside = 0;
let numberOfSteam = 0;

washOutsideBtn.addEventListener('click', () => {
    numberOfWashOutside++;
    render();
})

washInsideBtn.addEventListener('click', () => {
    numberOfWashInside++;
    render();
})

steamBtn.addEventListener('click', () => {
    numberOfSteam++;
    render();
})

resetBtn.addEventListener('click', () => {
    numberOfWashOutside = 0;
    numberOfWashInside = 0;
    numberOfSteam = 0;
    sum = 0;
    render();
})

function render() {
    listitems = "";
    sum = 0;
    let temp = 0;

    if (numberOfWashOutside) {
        temp = OUTSIDE_PRICE * numberOfWashOutside;
        console.log(temp);

        listitems += `
            <li>
            차량 외부 손세차 &nbsp; ${OUTSIDE_PRICE} &nbsp; ${numberOfWashOutside} &nbsp; ${temp}
            </li>
        `;

        sum += temp;
    }

    if (numberOfWashInside) {
        temp = INSIDE_PRICE * numberOfWashInside;
        console.log(temp);

        listitems += `
            <li>
            차량 내부 손세차 &nbsp; ${INSIDE_PRICE} &nbsp; ${numberOfWashInside} &nbsp; ${temp}
            </li>
        `;

        sum += temp;
    }

    if (numberOfSteam) {
        temp = STEAM_PRICE * numberOfSteam;
        console.log(temp);

        listitems += `
            <li>
            스팀 세차 &nbsp; ${STEAM_PRICE} &nbsp; ${numberOfSteam} &nbsp; ${temp}
            </li>
        `;

        sum += temp;
    }

    if (listitems !== "") {
        listitems += `
            <li>
                합계: &nbsp; &nbsp; &nbsp; ${sum}
        `;
    }

    receiptUl.innerHTML = listitems;

}