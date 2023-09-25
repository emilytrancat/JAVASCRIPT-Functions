// Global Scope
const person = 'Emily';

function greeting() {
    // Function Scope
    const person = 'Poopoo';
    alert(`Hi, ${person}!`);
}

// function greeting2() {
//     let person = 'Mimi';
//     alert(`Good morning, ${person}!`);
// }

greeting();
alert(`Hi, ${person}!`);
greeting();
// greeting2();