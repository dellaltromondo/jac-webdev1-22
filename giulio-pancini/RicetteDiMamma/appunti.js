{
    titolo: ""
    immagine: ""
    listaPassaggi: ""
}

function mostraRicetta(...) {

    
}

let arrayRicette = [];

function caricaRicetta() {
    const oggettoRicetta = recuperaDatiDaForm();
    arrayRicette.push(oggettoRicetta)

    // mostraRicetta(oggettoRicetta)

    mostraRicette(arrayRicette)
}

function filtra(x) {
    
    const ricetteFiltrate = arrayRicete.filter();
    mostraRicette(ricetteFiltrate);
}

//classe ricetta in cui l'oggetto ha l'id del bottone.
//quando crei una nuova ricetta (e quindi un oggetto) la pushi nell'array e ti crei dinamicamente il wrapper
//
//ogni bottone avrà l'onclick apriRicetta(con il suo id) 