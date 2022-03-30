const recomBtn = document.getElementById("pw-recom-btn");
const resultUl = document.getElementById("result-ul");
const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers = "0123456789";
const lowers = "abcdefghijklmnopqrstuvwxyz"; 
const specialChars = "!@#$%^&*()";
const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const NUMBER_OF_PASSWORD = 4;

let passwords = [];

recomBtn.addEventListener('click', () => {
    passwords = [];
    for(let i = 0; i < NUMBER_OF_PASSWORD; i++) {
        passwords.push(recomPassword());
        render(passwords);
    }
})

function recomPassword() {
    while (true) {
        newPassword = "";
        passwordLength = Math.floor(Math.random()*9+8);

        for(let i = 0; i < passwordLength; i++) {
            randomChar = Math.floor(Math.random() * chars.length);
            newPassword += chars.substring(randomChar, randomChar +1);
        }

        if (validatePassword(newPassword)) {
            break;
        }
    }

    return newPassword;
}

function validatePassword(password) {

    password = Array.from(password);

    let number = password.some(n => {
        return numbers.includes(n);
    });

    let lower = password.some(n => {
        return lowers.includes(n);
    });

    let upper = password.some(n => {
        return uppers.includes(n);
    });

    let specialChar = password.some(n => {
        return specialChars.includes(n);
    });

    return number && lower && upper && specialChar;
}

function render(lists) {
    let listItems = "";

    for(let i = 0; i < lists.length; i++) {
        listItems += `
            <li>
                <input id="password${i}" type="text" value="${lists[i]}" onclick="copy(${i})" readOnly>
            </li>
        `;
    }

    resultUl.innerHTML = listItems;
}

function copy(i) {
    whatToCopy = document.getElementById("password" + i);
    whatToCopy.select();
    document.execCommand('copy');
    alert("복사됨.");
}