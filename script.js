const selectionMenu = document.getElementById("script-selector");
const cancelBtn = document.getElementById("cancel");

let sum = 0;

selectionMenu.addEventListener("change", function () {
	switch (selectionMenu.value) {
		/*
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

		case "bigger-number":
			const numberOne = parseInt(prompt("Inserisci il primo numero"));
			const numberTwo = parseInt(prompt("Inserisci il secondo numero"));
			let output1 = document.querySelector(".snack");
			output1.innerHTML = "";
			//console.log(output1);

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
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

		case "longer-word":
			const word1 = prompt("Inserisci la prima parola");
			const word2 = prompt("Inserisci la seconda parola");
			let output2 = document.querySelector(".snack");
			output2.innerHTML = "";

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
(provatelo anche senza array)
*/

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
			output3.innerHTML = "";
			sum = 0;
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
no alla festa.
*/

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
			output4.innerHTML = "";

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
se è dispari inseriscilo nell’array.
*/

		case "odd-number":
			let array = [];
			let output5 = document.querySelector(".snack");
			output5.innerHTML = "";

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
			output6.innerHTML = "";

			sum = 0;

			for (
				let indexString = 0;
				indexString < userInputString.length;
				indexString++
			) {
				sum += parseInt(userInputString[indexString]);
			}

			output6.innerHTML = sum;
			break;

		/*
Snack 1.9
Calcola la somma e la media dei primi 10 numeri.
*/

		case "ten-sum":
			let output19 = document.querySelector(".snack");
			output19.innerHTML = "";

			let number = 0;
			let media = 0;
			sum = 0;

			while (number <= 10) {
				sum += number;
				number++;
			}

			media = sum / (number - 1);

			output19.innerHTML =
				"La somma dei primi " +
				(number - 1) +
				" numeri è: " +
				sum +
				", la media è " +
				media +
				".";
			break;

		/*
Snack 2.1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

		case "five-value-sum-for":
			let output21For = document.querySelector(".snack");
			output21For.innerHTML = "";

			sum = 0;
			for (let index = 0; index < 5; index++) {
				const numberPrompt = parseInt(
					prompt("Inserisci il " + (index + 1) + "o numero")
				);
				sum += numberPrompt;
			}

			output21For.innerHTML = "Il risultato della somma è " + sum;
			break;

		case "five-value-sum-while":
			let output21While = document.querySelector(".snack");
			output21While.innerHTML = "";
			sum = 0;
			let numberPrompt = 1;

			while (numberPrompt <= 5) {
				const numberInput = parseInt(
					prompt("Inserisci il " + numberPrompt + "o numero")
				);
				sum += numberInput;
				numberPrompt++;
			}

			output21While.innerHTML = "Il risultato della somma è " + sum;
			break;

		/*
Snack 2.2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

		case "odd-even":
			let output22 = document.querySelector(".snack");
			output22.innerHTML = "";

			const numberInput = parseInt(prompt("Inserisci un numero"));

			if (numberInput % 2 == 0) {
				output22.innerHTML = numberInput;
			} else {
				output22.innerHTML = numberInput + 1;
			}

			break;

		/*
Snack 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

		case "random-names-surnames":
			const arrayNames = [
				"Adelmo",
				"Adriana",
				"Alessandra",
				"Alessandro",
				"Amalia",
				"Antonia",
				"Antonio",
				"Aria",
				"Benvenuto",
				"Beppe",
				"Camilla",
				"Cecilia",
				"Claudia",
				"Claudio",
				"Cristina",
				"Dario",
				"Domenico",
				"Donna",
				"Ermenegildo",
				"Etta",
				"Eva",
				"Fabrizio",
				"Fausto",
				"Fiorenzo",
				"Flavia",
				"Fortunata",
				"Francesca",
				"Gaspare",
				"Gastone",
				"Gelsomina",
				"Gemma",
				"Giada",
				"Giampaolo",
				"Gian",
				"Gianfranco",
				"Gianna",
				"Gioffre",
				"Giorgia",
				"Giovanni",
				"Giulia",
				"Giuliana",
				"Giulio",
				"Guido",
				"Ida",
				"Ilaria",
				"Isa",
				"Laura",
				"Leone",
				"Liberto",
				"Lidia",
				"Lina",
				"Lisa",
				"Livio",
				"Luca",
				"Luchino",
				"Luisa",
				"Marcantonio",
				"Marcella",
				"Matilda",
				"Maurizio",
				"Melissa",
				"Michelangelo",
				"Milena",
				"Nico",
				"Nicola",
				"Orazio",
				"Pasqual",
				"Piergiorgio",
				"Pierina",
				"Pierluigi",
				"Raffaele",
				"Ranieri",
				"Renata",
				"Renzo",
				"Rita",
				"Rosaria",
				"Ruggero",
				"Ruggiero",
				"Sandra",
				"Saverio",
				"Serena",
				"Susanna",
				"Sylvia",
				"Telemaco",
				"Uberto",
				"Ugo",
				"Umberto",
				"Valentina",
				"Vittoria",
				"Vittorio",
			];
			const arraySurnames = [
				"Aporti",
				"Babato",
				"Balla",
				"Baracca-Nolcini",
				"Barberini",
				"Bellocchio",
				"Benussi-Squarcione",
				"Berlusconi",
				"Bianchi",
				"Boitani",
				"Bonatti",
				"Borsiere-Dallapé",
				"Botticelli",
				"Busoni",
				"Cagnin",
				"Cammarata",
				"Capuana",
				"Caracciolo",
				"Cardano",
				"Casarin",
				"Catalano",
				"Celentano",
				"Cendron",
				"Chechi",
				"Cheda",
				"Civaschi",
				"Colletti",
				"Comolli",
				"Corradi",
				"Correr",
				"Costalonga",
				"Crispi-Beffa",
				"Cutrufo",
				"Cuzzocrea",
				"Errigo",
				"Foà",
				"Foletti",
				"Galiazzo",
				"Giacconi",
				"Golgi",
				"Gotti",
				"Gozzano",
				"Guicciardini",
				"Impastato",
				"Ioppi",
				"Juvara",
				"Lanfranchi",
				"Leonardi",
				"Lercari",
				"Lucciano",
				"Luxardo",
				"Mancini",
				"Marini",
				"Marrone",
				"Maspero",
				"Mastroianni",
				"Montesano",
				"Natta",
				"Orlando",
				"Oscuro",
				"Panatta",
				"Paoletti",
				"Perozzo",
				"Piazzi",
				"Pisacane",
				"Poerio",
				"Quasimodo",
				"Ravaglioli",
				"Redi",
				"Scalera",
				"Scarpa",
				"Solimena",
				"Sollima",
				"Soranzo",
				"Sordi",
				"Sorrentino",
				"Stradivari",
				"Strangio",
				"Terragni",
				"Tirabassi",
				"Tognazzi",
				"Tolentino",
				"Toscani",
				"Toselli",
				"Toso",
				"Travia",
				"Vidoni",
				"Vismara",
				"Zeffirelli",
				"Ziani",
			];

			let output23 = document.querySelector(".snack");
			output23.innerHTML = "";

			let index = 0;

			while (index < 3) {
				const randomIndexName = Math.floor(
					Math.random() * (arrayNames.length)
				);
				const randomIndexSurname = Math.floor(
					Math.random() * (arraySurnames.length)
				);
				output23.innerHTML += `<div>${arrayNames[randomIndexName]} ${arraySurnames[randomIndexSurname]}</div>`;
				index++
			}
			break;
	}
});

cancelBtn.addEventListener("click", function () {
	selectionMenu.value = "";
	document.querySelector(".snack").innerHTML = "";
});
