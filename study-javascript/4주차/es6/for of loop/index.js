let incomes = [62000, 67000, 75000];
let total = 0;

// for (let i = 0; i < incomes.length; i++) {
//     total += incomes[i]; 
// }

for (const income of incomes) {
    console.log(income);
    total += income;
}

alert(total);

let info = "BSSM is one of the best schools in Busan!";

for (const c of info) {
    console.log(c);
}