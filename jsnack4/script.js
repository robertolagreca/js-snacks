//Js-Snack4

//In un array sono contenuti i nomi degli invitati alla festa del grande
//Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
//no alla festa.

let arrayInvitati = ["Tupac Shakur", "Ozzie Osbourne" , "David Gilmour" , "Corey Taylor" , "Elton John" , "James Hetfield"];

let checkInvitato, flagInvitato;
flagInvitato = false;

checkInvitato = prompt("Inserisci il tuo nome e cognome: ");

for (let i = 0; i < arrayInvitati.length; i++){
    if(checkInvitato == arrayInvitati[i]){
        console.log("Sei tra gli invitati");
        flagInvitato = true;
        break;}
}

    if(!flagInvitato){
        console.log("Non sei tra gli invitati");
    }

console.log("Lista degli invitati");
for (let i = 0; i < arrayInvitati.length; i++){
    console.log(arrayInvitati[i]);
}



