//   dichiarare un array
const lista = ["primo", "secondo", "terzo"];
//  metodo push() per aggiungere un elemento in un array
lista.push("quarto");
// 'estrarre' il primo elemento
const primoEl = lista[0];

console.log("---------------");

//  visualizzare tutti gli elementi della lista
for (let i = 0; i < lista.length; i++) {
    const elementoCorrente = lista[i];
    console.log(elementoCorrente);
}

console.log("---------------");

// for in
for (let i in lista) {
    const elementone = lista[i];
    console.log(elementone);
}

console.log("---------------");

// for of   => puoi usare anche const. Dipende da browser a browser, generalmente tendi ad usare let
for (let elementazzo of lista) {
    console.log(elementazzo);
}

console.log("---------------");

//  oggetto in JavaScript
const oggetto = {
    nome: "Matteo",
    cognome: "Bonsignore",
    elena: "sì"
}

console.log(oggetto);
console.log(oggetto.nome);
console.log(oggetto.cognome);
console.log(oggetto.elena);

console.log("---------------");

//  mappe
const mappa = new Map();
mappa.set("mbonsi", "matteobonsi@gmail.com");
mappa.set("elena", "elena@gmail.com");
//  get, solo con la chiave
console.log(mappa.get("mbonsi"));
//  posso usare sia i for in sia i forof con le mappe

console.log("---------------");

//  for each (da usare al posto del for of)
//!  il for each è un metodo che accetta una funzione
lista.forEach(stampaOggetto);
function stampaOggetto(elementoCorrente) {
    console.log(elementoCorrente);
}

console.log("");

//  secondo modo per scriverla:
//  creando una funzione anonima che uil for each richiamerà per ogni elemento della lista.
lista.forEach(function(el) {console.log(el);});

console.log("");

// terzo modo per scriverla:
// utilizzando una funzione 'freccia'. Le funzioni freccia sono sempre anonime, non sono fatte per essere richiamate più volte.
lista.forEach(el => console.log(el));

console.log("---------------");

//*  funzioni freccia
//  modo più sintetico per dichiarare una funzione, sono funzioni 'anonime'
(parametro, secondoParam /* uno o più variabili */) => {            //se ho un solo paramatro posso evitare le tonde
    //istruzioni                                                      se ho una sola istruzione posso evitare le graffe
    return //valore                                                   se la mia istruzione ritorna già qualcosa, posso evitare di esplicitare il return
}

(numero1, numero2) => {
    const somma = numero1 + numero2;
    return somma
}

numero => {
    const arrotonda = Math.round(numero);
    return arrotonda;
}

console.log(numero =>  numero + 10);