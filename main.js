function palindroma(){
    const word = prompt("Inserisci una parola");
    console.log (word)
    const chars = word.split ('')
    console.log (chars)
    const charsRev = chars.reverse()
    console.log (charsRev)
    const wordRev = charsRev.join('')
    console.log (wordRev)

    return word === wordRev
}

let isPalindroma = palindroma ()

if (isPalindroma === true) {
    console.log ('Parola Palindroma')
} else {
    console.log ('Parola non Palindroma')
}
