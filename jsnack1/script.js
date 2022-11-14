//Js-Snack1
//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

let numero1, numero2;

numero1 = prompt("Inserisci il primo numero");
numero2 = prompt("Inserisci il secondo numero");

if(numero1 > numero2){
    console.log("Il numero più grande tra " + numero1 + " e " + numero2 + " è " + numero1);
} else if(numero1 < numero2){
    console.log("Il numero più grande tra " + numero1 + " e " + numero2 + " è " + numero2);
} else {
    console.log("I due numeri " + numero1 + " e " + numero2 + " sono identici");
}