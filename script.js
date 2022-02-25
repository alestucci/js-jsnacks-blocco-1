const selectionMenu = document.getElementById("script-selector");
const cancelBtn = document.getElementById("cancel");

let sum = 0;

selectionMenu.addEventListener("change", function () {
	switch (selectionMenu.value) {
		/*
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/
		case "bigger-number":
			const numberOne = parseInt(prompt("Inserisci il primo numero"));
			const numberTwo = parseInt(prompt("Inserisci il secondo numero"));
			let output1 = document.querySelector(".snack");

			console.log(output1);

			if (numberOne > numberTwo) {
				output1.innerHTML = "Il numero maggiore è " + numberOne;
			} else if (numberOne < numberTwo) {
				output1.innerHTML = "Il numero maggiore è " + numberTwo;
			} else {
				output1.innerHTML = "I numeri sono uguali";
			}
			break;
		/*
Snack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/
		case "longer-word":
			const word1 = prompt("Inserisci la prima parola");
			const word2 = prompt("Inserisci la seconda parola");
			let output2 = document.querySelector(".snack");

			if (word1.length > word2.length) {
				// alert(word2 + ' - ' + word1);
				output2.innerHTML = word2 + " " + word1;
			} else if (word1.length < word2.length) {
				// alert(word1 + ' - ' + word2);
				output2.innerHTML = word1 + " " + word2;
			} else {
				// alert('Le parole ' + word1 + ' e ' + word2 + ' hanno la stessa lunghezza');
				output2.innerHTML =
					"Le parole " + word1 + " e " + word2 + " hanno la stessa lunghezza";
			}
			break;

		/*
Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
(provatelo anche senza array)*/

		// CON ARRAY

		/*let array = [];
let output = document.querySelector('.snack');

for (let index = 0; index < 10; index++) {
const numberPrompt = parseInt(prompt('Inserisci il ' + (index+1) + 'o numero'));
array.push(numberPrompt);
}

let sum = 0;
for (let i = 0; i < array.length; i++) {
sum += array[i];
}

output.innerHTML = 'Il risultato della somma è ' + sum;*/

		// SENZA ARRAY
		case "value-sum":
			let output3 = document.querySelector(".snack");

			for (let index = 0; index < 10; index++) {
				const numberPrompt = parseInt(
					prompt("Inserisci il " + (index + 1) + "o numero")
				);
				sum += numberPrompt;
			}

			output3.innerHTML = "Il risultato della somma è " + sum;
			break;

		/*
Snack 4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.*/

		case "guests-check":
			const arrayGuests = [
				"Reygan",
				"Divine",
				"Griselle",
				"Sanaii",
				"Eyana",
				"Kamoria",
				"Baylee",
				"Prescott",
				"Dheer",
				"Arielis",
				"Tatiyana",
				"Hutton",
				"Pheonix",
				"Rakel",
				"Vinay",
				"Shelden",
				"Ranyah",
				"Nayah",
				"Evelio",
				"Abigayl",
			];
			const guest = prompt("Inserire il nome dell'invitato");
			// console.log(guest.toLowerCase());
			let output4 = document.querySelector(".snack");

			let check = false;

			for (let index = 0; index < arrayGuests.length; index++) {
				// console.log(index);
				// console.log(arrayGuests[index].toLowerCase());
				// console.log(guest.toLowerCase() == arrayGuests[index].toLowerCase());
				if (guest.toLowerCase() == arrayGuests[index].toLowerCase()) {
					check = true;
				}
			}
			if (check) {
				output4.innerHTML = "La persona è presente nell'elenco degli invitati";
			} else {
				output4.innerHTML =
					"La persona NON è presente nell'elenco degli invitati";
			}
			break;

		/*
Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

		case "odd-number":
			let array = [];
			let output5 = document.querySelector(".snack");

			for (let index = 0; index < 6; index++) {
				const numberPrompt = parseInt(
					prompt("Inserisci il " + (index + 1) + "o numero")
				);
				if (numberPrompt % 2 == 1) {
					array.push(numberPrompt);
					console.log(array);
				}
			}

			output5.innerHTML = array;
			break;

		/*
Snack 6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/
		case "digit-sum":
			const userInputString = prompt("Inserisci un numero di 4 cifre");
			let output6 = document.querySelector(".snack");

			for (
				let indexString = 0;
				indexString < userInputString.length;
				indexString++
			) {
				sum += parseInt(userInputString[indexString]);
			}

			output6.innerHTML = sum;
			break;
	}
});

cancelBtn.addEventListener('click', function(){
	selectionMenu.value = "";
	document.querySelector('.snack').innerHTML = "";
});