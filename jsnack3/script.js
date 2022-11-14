//Js-Snack3
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let arrayNumeriInput = [];
let j = 10;
let somma = parseInt(0);

for(i = 0; i < j; i++){
    arrayNumeriInput[i] = prompt("Inserisci il " + (i + 1) + "° numero.");
    console.log("il " + (i + 1)  + "° numero è " + arrayNumeriInput[i]);
    somma += parseInt(arrayNumeriInput[i]);
}

console.log("La somma dei dieci numeri inseriti è " + somma);





