/*
snack-1 Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti
snack-2 Stampa il cubo di ciascuno dei primi N numeri, dove N è un numero indicato dall’utente. (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…)
snack-3 Stampa le potenze di 2 fino a 1000.
snack-4 Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
snack-5 Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

let sum = 0;

for (let i = 0; i < 10; i++) {
    numbers = parseInt(prompt('digita un numero'));
    console.log(numbers);
    sum += numbers;
}

console.log(sum);


