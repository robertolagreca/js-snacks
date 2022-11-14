//Js-snack5

//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array. Stampa l'array alla fine.

let arrayNumeriInput = [];
let j = 6;
let k;
let h = 0;

for(let i = 0; i < j; i++){

    k = prompt("Inserisci il " + (i+1) + " numero");

    if(k % 2 != 0){
        arrayNumeriInput[h] = k;
        h++;
    }
}

for(let i = 0; i < h; i++){
    console.log("Il " + (i+1) + " numero dell'array è " + arrayNumeriInput[i])
    }

if (h == 0){
    console.log("Non hai inserito neanche un numero dispari.");
}