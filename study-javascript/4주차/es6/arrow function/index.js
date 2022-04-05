// function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast.";
}

// anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch.";
}

// arrow function
const dinnerMenu = (food) => {
    return `I'm going to eat a ${food} for dinner.`
}

// short arrow function (only one line, only one parameter)
const dinnerMenuShort = food => `I'm going to eat a ${food} for dinner.`;

console.log(dinnerMenuShort("치킨마요덮밥"));