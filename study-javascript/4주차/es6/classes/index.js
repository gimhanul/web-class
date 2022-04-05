class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = "LOUD NOISE") {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static return10() {
        return 10;
    }
}

class Cat extends Animal {
    constructor(tail, type = "cat", legs = 4) {
        super(type, legs);
        this.tail = tail;
    }

    makeNoise(sound = "meow") {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}, tail: ${this.tail}`;
    }
}

let dog = new Animal("dog", 4);
console.log(dog.legs);
dog.makeNoise("Bark! Bark!");
console.log(dog.metaData);
console.log(Animal.return10());

let cat = new Cat(1);
cat.makeNoise();
console.log(cat.metaData);