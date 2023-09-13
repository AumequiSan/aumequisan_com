/* Altera cor do CSS */

function colorShadow (cor) {
    return `"filter: drop-shadow(-0.65em 0.65em 0px ${cor});"`
}

function backgroundColor (cor) {
    return `"background-color: ${cor}"`
}


console.log(colorShadow('blue'))

console.log(backgroundColor('blue'))