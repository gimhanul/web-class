fruits = [];

// push 끝에 삽입
fruits.push("banana");
fruits.push("apple");
fruits.push("pineapple");
fruits.push("strawberry");
fruits.push("orange")

printAll();

// pop 마지막으로 넣은 것 삭제
fruits.pop();
printAll();

// shift 처음으로 넣은 것 삭제
fruits.shift();
printAll();

// unshift 배열에 들어있는 개체의 개수 출력
fruits.unshift();
printAll();

function printAll() {
    for(let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}