//FUNCTIONS
function stampaArray(elementoCorrente) {
    console.log(elementoCorrente);
}

//MAIN
function gestioneMain() {
    const lista = ["unknown", "unknown1", "unknown2", "unknown3"];
    //ciclo che lavora sugli indici di un array
    console.log("FOR-IN");

    //FORIN
    for (let i in lista) {//il vantaggio è che si occupa lui di tener conto della lunghezza dell'array
        const elementoCorrente = lista[i];
        console.log(elementoCorrente);
    }

    //ciclo che lavora sui valori di un array
    console.log("FOR-OF");

    //FOROF
    for (let elementoCorrente of lista) {//il vantaggio è che estrapola direttamente i valori
        console.log(elementoCorrente);
    }

    //per gli oggetti è meglio utilizzare il FORIN
    const object = { object1: "unknown", object2: "unknown1", object3: "unknown2" };

    for (let i in lista) {
        const elementoCorrente = object[i];
        console.log(elementoCorrente);
    }

    //Sostituto del FOROF il FOREACH che è un metodo degli array che accetta come parametro una funzione
    lista.forEach(stampaArray);
    /*si puo scrivere anche come:
        lista.forEach(function (el){ 
            console.log(el);
        });
    */

    //Arrow function
    //stesso funzionamento del FOREACH a cui si passa una function ma in maniera ancora più compatta
    lista.forEach(el=>console.log(el));
}
gestioneMain();
