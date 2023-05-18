let carrelloArray = [];

//funzione che calcola la somma del totale nel carrello
function calcolaSomma() {
  let somma = 0;
  for (prodotto of carrelloArray) {
    somma += prodotto.costo;
  }
  console.log(somma);
  let totale = document.getElementById("Totale");
  totale.innerHTML = "Totale: " + somma + "€";
}

//funzione che aggiunge un prodotto nel carrello
function aggiungiprodotto(frase, prezzo) {
  let carrello = document.getElementById("Carrello");
  let riga = carrello.insertRow();
  let cella = riga.insertCell();
  let cella2 = riga.insertCell();
  let cella3 = riga.insertCell();

  cella.innerHTML = frase;
  cella2.innerHTML = prezzo + "€";

  let rimuovi = document.createElement("button");
  rimuovi.className = "elimina";
  rimuovi.innerText = "X";
  rimuovi.onclick = function () {
    let index = carrelloArray.findIndex(
      (p) => p.descrizione === frase && p.costo === prezzo
    );
    eliminaProdotto(index);
  };
  cella3.appendChild(rimuovi);

  carrelloArray.push({ descrizione: frase, costo: prezzo });
  calcolaSomma();
  console.log(frase);
}

//funzione che conferma il contenuto del carrello
function confermacarrello() {
  setTimeout(function () {
    let messaggio = document.createElement("p");
    messaggio.innerHTML = "Il pagamento è andato a buon fine!";

    let carrello = document.getElementById("Carrello");
    let riga = carrello.insertRow();
    let cella3 = riga.insertCell();

    cella3.appendChild(messaggio);

    setTimeout(function () {
      location.reload();
    }, 3000);
  }, 1000);
}

//funzione che elimina un prodotto dal carrello
function eliminaProdotto(index) {
  carrelloArray.splice(index, 1); // Rimuovi il prodotto dall'array

  let carrello = document.getElementById("Carrello");
  carrello.deleteRow(index + 1); // Rimuovi la riga dalla tabella HTML

  calcolaSomma();
}
