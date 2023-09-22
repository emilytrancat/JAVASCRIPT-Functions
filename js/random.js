// How to call a function:

// function alertRandomNumber() {
//     const randomNumber = Math.floor( Math.random() * 6 ) +1;
//     alert(randomNumber);
// }
// alertRandomNumber();
// alertRandomNumber();
// alertRandomNumber();


// How to return a function:

function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6 ) +1;
    return randomNumber;
}
const dieRoll = getRandomNumber();
// console.log( getRandomNumber() );