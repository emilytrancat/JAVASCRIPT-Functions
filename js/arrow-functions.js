const getrandomNumber = (upper) => {
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
};

// put this in the console to check: getrandomNumber(12);

const getArea = (width, length, unit) => {
    const area = width * length;
    return `${area} ${unit}`;
};