let contacts = ["Aeran", "Daeun"];
// let personalFriends = ["Soohyun", "Soogyeong", "Taeyoung", "Yulim"];
let personalFriends = ["Soohyun", ...contacts, "Soogyeong", "Taeyoung", "Yulim"];
console.log(personalFriends);

let person = {
    name: "Hanul",
    age: "18",
    city: "Pyeongtaek"
}

let employee = {
    ...person,
    salary: 1000,
    position: "Software Developer"
}

console.log(employee);