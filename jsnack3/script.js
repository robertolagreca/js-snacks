//Js-Snack3
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

//BONUS dire chi è il maggiore, minore e media

let arrayInput = [];
let j = 10;
let somma = parseInt(0);

let maggiore, minore, media;
mag = 0;
min = 0;
media = 0;

for(let i = 0; i < j; i++){
    arrayInput[i] = prompt("Inserisci il " + (i + 1) + "° numero.");
    console.log("il " + (i + 1)  + "° numero è " + arrayInput[i]);
    somma += parseInt(arrayInput[i]);
}

console.log("La somma dei dieci numeri inseriti è " + somma);

//Bonus Media
media = somma / j;
console.log("La media dei 10 numeri è " + media);

//Bonus maggiore e minore

for(let i = 0; i < j; i++){
    if(parseInt(arrayInput[i]) > parseInt(mag)){
        mag = arrayInput[i];
    }

}

min = parseInt(mag);

for(let i = 0; i < j; i++){
    if(parseInt(arrayInput[i]) < parseInt(min)){
        min = arrayInput[i];
    }
}


console.log("Il numero maggiore è " + mag);
console.log("Il numero minore è " + min);




