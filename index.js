// Code your solutions in this file
for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(arr, event) {
    let newArray = []
    for (let i = 0; i <arr.length; i++) {
        let message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        newArray.push(message);
        console.log(i)
    }
    return newArray;
}

function countDown(x) {
    let counter = x
    while (counter >= 0){
        console.log(counter)
        counter --
    }
};