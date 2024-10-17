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
