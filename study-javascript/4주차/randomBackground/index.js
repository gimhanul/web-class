const colorCodeEl = document.getElementById("color-code-el");
const colorNameEl = document.getElementById("color-name-el");
const body = document.body;
const colorChangeBtn = document.getElementById("color-change-btn");

colorChangeBtn.addEventListener('click', () => {
    let randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    colorCodeEl.innerText = randomColor;
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
