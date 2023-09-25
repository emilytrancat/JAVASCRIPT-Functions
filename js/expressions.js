// // function expression or anonymous function example below:
// const getRandomNumber = function(upper) {
//     const randomNumber = Math.floor(Math.random() * upper ) +1;
//     return randomNumber;
// };
// getRandomNumber(10);


console.log( getRandomNumber(10) );
function getRandomNumber(upper) {
    const randomNumber = Math.floor(Math.random() * upper ) +1;
    return randomNumber;
}