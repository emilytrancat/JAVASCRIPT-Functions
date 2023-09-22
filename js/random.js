// HOW TO CALL A FUNCTION:

// function alertRandomNumber() {
//     const randomNumber = Math.floor( Math.random() * 6 ) +1;
//     alert(randomNumber);
// }
// alertRandomNumber();
// alertRandomNumber();
// alertRandomNumber();


// // HOW TO RETURN A FUNCTION:

// function getRandomNumber() {
//     const randomNumber = Math.floor( Math.random() * 6 ) +1;
//     return randomNumber;
// }
// const dieRoll = getRandomNumber();
// // console.log( getRandomNumber() );


function getRandomNumber(upper) {
    const randomNumber = Math.floor( Math.random() * upper ) +1;
    return randomNumber;
}
console.log( getRandomNumber(6) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(1000) );
console.log( getRandomNumber(21) );