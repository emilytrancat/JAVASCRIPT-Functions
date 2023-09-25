// ACTIVATE THIS: <input type="text" id="info" value="My info"> IN THE <MAIN> OF HTML TO SEE EXAMPLE:
function isFieldEmpty() {
    const field = document.querySelector('#info');
    if (!field.value) {
        return true;
    } else {
        return false;
    }
}

const fieldTest = isFieldEmpty();

if (fieldTest) {
    alert('Please provide your information.');
}


// ANOTHER EXAMPLE ON HOW RETURNS SHOULD BE LAST:
// function noAlert() {
//     return 5;
//     alert("This won't appear");
// }
// noAlert();

// function noAlert() {
//     alert("This will appear");
//     return 5;
// }
// noAlert();