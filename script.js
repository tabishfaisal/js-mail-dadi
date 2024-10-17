// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// creo un Array con la lista degli Email
const emailList = [ 'mimmo@gmail.com', 'pippo@gmail.com' , 'luigi@gmail.com']

// chiedo utente la sua email con metode prompt
const emailUtente = prompt("inserisci la tua email per favore");

// controlliamo se l'mail inserito esiste nella nostra lista
if (emailList.includes(emailUtente)){ // se email esiste stampo il messagio "Accesso Approvato"
    console. log("Accesso Approvato");
}else { // altrimenti se email non concide con la lista nostra stampiamo il messagio "Email errato Accesso Negato"
    console. log("Email errato Accesso Negato");
}


//+++++++--------------------------------------++++//


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random per il giocatore
const punteggioGiocatore = Math.floor(Math.random() * 6) + 1;
console. log(punteggioGiocatore, "Punteggio Giocatore");

// Genero un numero random per il computer
const punteggioComputer = Math.floor(Math.random() * 6) + 1;
console. log(punteggioComputer, "Punteggio Computer");


// per stablire il vincitre stabilisco una condizione con if , else if 
if(punteggioComputer < punteggioGiocatore){
    console. log("GIOCATORE HA VITO");
}else if(punteggioComputer > punteggioGiocatore){
    console. log("COMPUTER HA VINTO");
}


