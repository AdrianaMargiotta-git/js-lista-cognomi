/*Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova*/

//dichiariamo li variabili
var ordina = document.getElementById('button');
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//inseriamo il cognome nell'array e stampiamo la lista ordinata
ordina.addEventListener('click',
  function() {
    //Ricevo il dato inserito dall'utente
    var surname = document.getElementById('surname').value;
    //rielaborazione stringa se scritta minuscola
    surname = surname.charAt(0).toUpperCase() + surname.slice(1);
    console.log("il cognome inserito dall'utente è: " + surname);

    //Inseriamo il cognome dell'utente nell'array (LISTA NON ORDINATA)
    cognomi.push(surname);
    console.log(cognomi);

    //Ordiniamo la lista alfabeticamente
    cognomi.sort();
    console.log("lista dei cognomi in ordine alfabetico: " + cognomi);

    //ciclo while
    var cognomeDue = "";
    var i = 0;
    while (i < cognomi.length) {
      cognomeDue = cognomeDue + "<li>" + cognomi[i] + "</li>";

      i++;
    }

    //stampa la lista
    console.log(cognomi);
    document.getElementById('risultato').innerHTML = cognomeDue;

    //stampa la posizione "umana" in cui si trova il cognome dell'utente
    var posizione;
    posizione = cognomi.indexOf(surname) + 1;
    //document.getElementById('position').innerHTML = posizione + 1;
    console.log(posizione);
    document.getElementById('position').innerHTML = "Il tuo cognome nella lista è al numero: " + posizione;
  }
)
