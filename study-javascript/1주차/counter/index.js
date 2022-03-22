// document.getElementById("count-el").innerText = 2
// console.log("hello world!")

// let variable = "15";
// let plusVairable = 12;
// console.log(variable + plusVairable);

// let man = 10;
// let woman = 5;
// let nanumi = man>woman?woman:man;
// console.log(man / nanumi + ":" + woman / nanumi);

// let variable = 0;
// variable += 5;
// console.log(variable);

// function hello() {
//     console.log("hello");
// }

// hello();

// function countDown(num) {
//     for(let i = 0; i < num; i++) {
//         console.log(i);
//     }
// }

// countDown(5)

// function hey() {
//     console.log("clicked!");
// }

let cnt = 0;

function pluss() {
    document.getElementById("count-el").innerText = ++cnt;
}

function save() {
    document.getElementById("bye").textContent += cnt + " - ";
    cnt = 0;
}