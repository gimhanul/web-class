let person = {
    name: "김한울",
    age: 17,
    id: 1206
}

let info = document.getElementById("info");

function logData() {
    info.textContent = `저는 ${person.id} ${person.name}이고 나이는 ${person.age}입니다.`;
}

logData();