//Js-Snack6

//Fate generare un numero random da 0 a 10 al computer, e chiedete
//all'utente di inserire un suo numero. Se il numero scelto dall'utente è
//uguale al numero del computer informate l'utente che ha vinto, altrimenti
//ha perso.

let numeroRandom;
let numeroInserito;

numeroRandom = Math.floor(Math.random() * 11);
//console.log(numeroRandom);

numeroInserito = prompt("Inserisci un numero da 0 a 10. Il computer ti dirà se il tuo numero è quello vincente");

if(numeroInserito != numeroRandom){
    console.log("Hai perso! Il numero estratto è " + numeroRandom);
} else {
    console.log("Congratulazioni! Hai indovinato il numero estratto!");
}