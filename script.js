/*
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

// const numberOne = parseInt(prompt('Inserisci il primo numero'));
// const numberTwo = parseInt(prompt('Inserisci il secondo numero'));
// let output = document.querySelector('.snack');
// console.log(output);

// if (numberOne > numberTwo) {
//     output.innerHTML = 'Il numero maggiore è ' + numberOne;
// } else if (numberOne < numberTwo) {
//     output.innerHTML = 'Il numero maggiore è ' + numberTwo;
// } else {
//     output.innerHTML = 'I numeri sono uguali';
// }

/*
Snack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const word1 = prompt('Inserisci la prima parola');
const word2 = prompt('Inserisci la seconda parola');
let output = document.querySelector('.snack');

if (word1.length > word2.length) {
    // alert(word2 + ' - ' + word1);
    output.innerHTML = word2 + ' ' + word1;
} else if (word1.length < word2.length) {
    // alert(word1 + ' - ' + word2);
    output.innerHTML = word1 + ' ' + word2;
} else {
    // alert('Le parole ' + word1 + ' e ' + word2 + ' hanno la stessa lunghezza');
    output.innerHTML = 'Le parole ' + word1 + ' e ' + word2 + ' hanno la stessa lunghezza';
}

/*Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
(provatelo anche senza array)
Snack 4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
Snack 6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/