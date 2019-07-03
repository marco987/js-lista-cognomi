// TRACCIA
// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi a che posizione della lista
// il nuovo utente si trova.


// Dichiarazione variabili
var contenitore_cognomi, cognome_utente;
var cognome = document.getElementById("listacognomi");

// Array originale
contenitore_cognomi = ["Rossi", "Bianchi", "Azzurri", "Zorro"];

// Richiesta cognome all'utente
cognome_utente = prompt("Qual è il tuo cognome?");

// Push su array
contenitore_cognomi.push(cognome_utente);

// Stampa lista cognomi in ordine alfabetico
contenitore_cognomi.sort();
for (var i = 0; i < contenitore_cognomi.length; i++) {
  cognomeTemp = cognome.innerHTML;
  cognome.innerHTML = cognomeTemp + "<li>" + contenitore_cognomi[i] + "</li>";
}

// Stampa posizione cognome utente
