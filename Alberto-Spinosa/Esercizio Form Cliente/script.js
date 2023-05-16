//inserimento di una section all'interno della section schede nel documento HTML
let i = 1;  //contatore schede clienti
function aggiungiScheda() {

    //Controllo se le condizioni vengono accettate
    const check = document.getElementById("checkSesso");

    if (check.checked) {
        //Prendo il valore dalle textbox
        const nome = document.getElementById("txtNome");
        const cognome = document.getElementById("txtCognome");
        const data = document.getElementById("dtpData");
        const maschio = document.getElementById("radioSessoM");
        const femmina = document.getElementById("radioSessoF");


        //Creo un nuovo elemento di tipo "section" e lo associamo alla costante "nuovoElemento"
        const nuovoElemento = document.createElement('section');
        //Recupero le proprieta della sezione schede
        const elementoSchede = document.getElementById('schede');

        //Tramite il metodo appendChild() aggiungiamo l'elemento "nuovoElemento" come figlio dell'elemento
        //"elementoSchede", così facendo andiamo a creare una nuova section all'interno di quella già esistente
        elementoSchede.appendChild(nuovoElemento);
        //Tramite il metodo setAttribute() impostiamo l'attributo "id"  con il valore di "schedaCliente"
        //(risulta comodo per la parte di css, in questo modo andiamo a modificare tutte le schede contemporaneamente)
        nuovoElemento.setAttribute('id', 'schedaCliente' + i);

        //In queste righe creo un elemento "h2" in cui andrò ad inserire del testo, tutto ciò all'interno della sezione nuova
        const head = document.createElement("H2");
        const txt = document.createTextNode("Cliente:");
        head.appendChild(txt);
        nuovoElemento.appendChild(head);

        const paragrafoNome = document.createElement("P");
        const stringaNome = document.createTextNode("Nome: " + nome.value);
        paragrafoNome.appendChild(stringaNome);
        nuovoElemento.appendChild(paragrafoNome);

        const paragrafoCognome = document.createElement("P");
        const stringaCognome = document.createTextNode("Cognome: " + cognome.value);
        paragrafoCognome.appendChild(stringaCognome);
        nuovoElemento.appendChild(paragrafoCognome);

        const paragrafoData = document.createElement("P");
        const stringaData = document.createTextNode("Data di nascita: " + data.value);
        paragrafoData.appendChild(stringaData);
        nuovoElemento.appendChild(paragrafoData);        

        const selectedRadioButton = document.querySelector('input[name="sesso"]:checked');
        const sessoSelezionato = selectedRadioButton.value;

        const paragrafoSesso = document.createElement("P");
        const stringaSesso = document.createTextNode("Sesso: " + sessoSelezionato);
        paragrafoSesso.appendChild(stringaSesso);
        nuovoElemento.appendChild(paragrafoSesso); 
   
        i++;

    } else {
        alert("Accetta le condizioni prima di continuare!");
    }

}
