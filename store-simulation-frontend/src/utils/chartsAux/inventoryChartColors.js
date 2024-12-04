// Obtenido de https://css-tricks.com/snippets/javascript/random-hex-color/

function getRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

// console.log(getRandomColor()); // Example output: #3e2f1b

export default getRandomColor