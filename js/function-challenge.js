/** 
 * Returns a random number between two numbers.
 * 
 * @param {number} lower - The lowest number value.
 * @param {number} higher - The highest number value.
 * @return {number} The random number value.
 */

// Call the function and pass it different values.
/* Mistakes: try and not make the function name and variables inside the function to have the same name- it can be confusing. For EX
you made the function below have "function answer(x,x)" and the math.floor stuff to have a "const answer".. also, make sure you have a
keyword (const, let, var) ASSIGNED to the Math.floor stuff. Don't just put it bland in there!!!
*/


function finalAnswer(lower = 1, higher = 6) {
    if ( isNaN(lower) || isNaN(higher) ) {
        throw Error ('Both arguments must be numbers.');
    }
    const answer = Math.floor( Math.random() * (higher - lower + 1) ) + lower;
    return answer;
    // can also do: return Math.floor( Math.random() * (higher - lower + 1) ) + lower;
}
console.log( finalAnswer(100,900));
console.log( `${finalAnswer(1,10)} is a random number between 1 and 10`);
console.log (finalAnswer (8, "twenty"));
// console.log (finalAnswer (undefined, undefined)); put this in the console to use default values, which are 1 and 6. 
