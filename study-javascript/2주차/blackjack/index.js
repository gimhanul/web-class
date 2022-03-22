// let num = 3;

// if (num == "3") {
//     console.log("hi");
// } else {
//     console.log("bye");
// }

let message = '';
let sum = 0;
let cards = [];

let hasBlackJack = false;
let isAlive = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

let player = {
    playerName: 'Hanul',
    playerChips: 145
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];

    isAlive = true;
    sum = firstCard + secondCard;

    playerEl.textContent = player.playerName + ": $" + player.playerChips;
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards:";
    for(let c = 0; c < cards.length; c++) {
        cardEl.textContent += " " + cards[c];
    }

    if (sum < 21) {
        message = "더 ㄱ?";
    } else if (sum === 21) {
        message = "승리";
        hasBlackJack = true;
    } else {
        message = "팹애";
        isAlive = false;
    }
    
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
    
}

function getRandomCard() {
    let card = Math.floor(Math.random()*13+1);
    
    // 11 12 13 -> 10
    // 1 -> 11

    if (card >= 11) {
        card = 10;
    } else if (card == 1) {
        card = 11;
    }

    return card;
}