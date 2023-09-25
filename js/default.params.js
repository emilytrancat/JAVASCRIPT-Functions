function sayGreeting (greeting = 'Howdy', name = 'student') {
    return `${greeting}, ${name}!`;
}

/* in the console, you can type: sayGreeting( undefined, 'Emily'); to get the default greeting and have a custom name. Type
sayGreeting(); on its own to get default greeting and default name. */


// BELOW shows how functions are normally written and clarified at the END. In the above example, mr guil clarified the parameters FIRST.
// function sayGreeting(name) {
//     return `Good morning, ${name}`;
// }
// alert( sayGreeting('Emily') );


// GOAL: Assign the unit parameter a default value:
function getArea(width, length, unit = 'sq ft') {
    const area = width * length;
    return `${area} ${unit}`;
}