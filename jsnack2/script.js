//Js-snack2
//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

let parola1, parola2;

parola1 = prompt ("Inserisci la prima parola");
parola2 = prompt ("Inserisci la seconda parola");

if(parola1.length > parola2.length){
    console.log("Tra la parola " + parola1 + " e " + "la parola " + parola2 + " la parola più corta è " + parola2);
    console.log("Tra la parola " + parola1 + " e " + "la parola " + parola2 + " la parola più lunga è " + parola1);
} else if (parola1.length < parola2.length){
    console.log("Tra la parola " + parola1 + " e " + "la parola " + parola2 + " la parola più corta è " + parola1);
    console.log("Tra la parola " + parola1 + " e " + "la parola " + parola2 + " la parola più lunga è " + parola2);
} else{
    console.log("Le due parole " + parola1 + " e " + parola2 + " sono di lunghezza uguale");
}