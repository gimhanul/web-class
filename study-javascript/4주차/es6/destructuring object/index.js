const player = {
    name: "gimhanul",
    club: "Bamdoliro",
    address: {
        city: "Pyeongtaek"
    }
};

console.log(player.address.city);

// destructuring object 접근지시자 안 쓰고 접근 삽가능
const { name, club, address: {city}} = player;

console.log(`${name} plays for ${club}`);
console.log(`${name} lives in ${city}`);


// ------

let fullName = ["Hanul", "Gim"];
console.log(fullName[1]);

let [firstName, lastName] = ["Hanul", "Gim"];
console.log(firstName);