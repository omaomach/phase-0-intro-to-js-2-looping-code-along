// for (let age = 23;age < 30; age++) {
//     console.log(`I am ${age} years old. Happy birthday to me`);
// }

// const gifts = ['teddy bear', 'drone','doll'];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//     return gifts;
// }
// wrapGifts(gifts);


function writeCards (arrayOfNames, eventName) {
    const messages = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        const message = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }
    return messages;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"],'surprise'));


// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

// function plantGarden() {
//     let keepWorking = true;
//     while (keepWorking) {
//         chooseSeedLocation();
//         plantSeed();
//         waterSeed();
//         keepWorking = checkForMoreSeeds();
//     }

// }

// let count = 5;
// while (count <= 10) {
//     count++;
// }
// console.log(count++);

function countDown(number) {
    for (let i = number; i >= 0;i--) {
        console.log(i);
    }
}



console.log(countDown(10));
