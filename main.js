function getRandomIntInclusive(min,max) {
    min = Math.ceil (min);
    max = Math.floor (max);
    return Math.floor (Math.random() * (max - min + 1) + min)
}

const scelta = prompt ('Pari o Dispari?')
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'))
const numeroPC = getRandomIntInclusive(1, 5)
const somma = numeroUtente + numeroPC
console.log (somma)

function isEven(num) {
    return num % 2 === 0 
}

function isOdd(num) {
    return num % 2 === 1
}

if( (scelta === 'pari' && isEven(somma)) || (scelta === 'dispari' && isOdd(somma))) {
    console.log ('hai vinto')
} else {
    console.log ('hai perso')
}
    
