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

// function noAlert() {
//     return 5;
//     alert("This won't appear");
// }
// noAlert();