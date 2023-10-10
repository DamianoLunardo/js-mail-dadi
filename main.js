console.log("Hello World");

 // Riferimento alla lista delle email autorizzate
 //const listaAutorizzati = ['utente1@example.com', 'utente2@example.com', 'utente3@example.com', 'utente4@example.com', 'utente5@example.com'];

 // Riferimento al form e all'elemento risultato
 //const emailForm = document.getElementById('emailForm');
 //const risultato = document.getElementById('risultato');
 //const emailInput = document.getElementById('email');
 //const cancellaButton = document.getElementById('cancella');

 // Aggiungo un gestore di eventi al modulo di invio
 //emailForm.addEventListener('submit', function(event) {
  //   event.preventDefault(); 
   //  const emailUtente = document.getElementById('email').value;

     // Verifico se l'email dell'utente è nella lista
   //  if (listaAutorizzati.includes(emailUtente)) {
   //      risultato.textContent = 'Accesso consentito. Benvenuto!';
    // } else {
    //     risultato.textContent = 'Accesso negato. La tua email non è autorizzata.';
    // }
// });

 // extra Aggiungo un gestore di eventi per il pulsante "Cancella"
     //   cancellaButton.addEventListener('click', function() {
      //      emailInput.value = ''; 
        //    risultato.textContent = '';
      //  });




        // Riferimento alla lista delle email autorizzate
const listaAutorizzati = ['utente1@example.com', 'utente2@example.com', 'utente3@example.com', 'utente4@example.com', 'utente5@example.com'];

// Riferimento al form e all'elemento risultato
const emailForm = document.getElementById('emailForm');
const risultato = document.getElementById('risultato');
const emailInput = document.getElementById('email');
const cancellaButton = document.getElementById('cancella');

// Aggiungo un gestore di eventi al modulo di invio
emailForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailUtente = document.getElementById('email').value;

    // Verifico se l'email dell'utente è nella lista usando un ciclo for
    let accessoConsentito = false;
    for (let i = 0; i < listaAutorizzati.length; i++) {
        if (listaAutorizzati[i] === emailUtente) {
            accessoConsentito = true;
            break; // Esci dal ciclo se trovi una corrispondenza
        }
    }

    if (accessoConsentito) {
        risultato.textContent = 'Accesso consentito. Benvenuto!';
    } else {
        risultato.textContent = 'Accesso negato. La tua email non è autorizzata.';
    }
});

// Aggiungo un gestore di eventi per il pulsante "Cancella"
cancellaButton.addEventListener('click', function() {
    emailInput.value = '';
    risultato.textContent = '';
});


// esercizio 2

function gioca() {
    // Genera un numero casuale da 1 a 6 per il giocatore ed il computer
    const giocatore = Math.floor(Math.random() * 6) + 1;
    const computer = Math.floor(Math.random() * 6) + 1;

    // Riferimento all'elemento risultato
    const risultato2Element = document.getElementById('risultato2');

    // Stampa i risultati
    risultato2Element.innerHTML = `Il giocatore ha lanciato un dado e ottenuto: ${giocatore}<br>`;
    risultato2Element.innerHTML += `Il computer ha lanciato un dado e ottenuto: ${computer}<br>`;

    // Determina il vincitore
    let vincitore = '';
    if (giocatore > computer) {
        vincitore = 'Giocatore';
    } else if (computer > giocatore) {
        vincitore = 'Computer';
    } else {
        vincitore = 'Nessun vincitore, è un pareggio!';
    }

    // Messaggio del vincitore
    risultato2Element.innerHTML += `Il vincitore è: ${vincitore}`;
}