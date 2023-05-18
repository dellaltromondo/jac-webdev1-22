const listaOrologiQ = {

    Bulova: {
        nome: 'BULOVA ACCUTRON',
        categoria: 'quartz',
        prezzo: 1000,
        immagine: "immagini/bulova.jpg",
        descrizione: 'Orologio storico annni 70 della casa Bulova, un pezzo di storia'
    },

    Casio: {
        nome: 'CASIO CA-53W-1ER',
        categoria: 'quartz',
        prezzo: 50,
        immagine: "immagini/casio.jpg",
        descrizione: 'Orologio Digitale Quarzo Unisex con Cinturino in Plastica CA-53W-1ER'
    },

    Citizen: {
        nome: 'CITIZEN PROMASTER AQUALAND 1 JP2000-08E',
        categoria: 'quartz',
        prezzo: 500,
        immagine: "immagini/citizen.jpg",
        descrizione: "L'eccellenza del profondimetro Citizen JP2000-08E. Diver`s professionale certificato ISO 6425."
    }
}
const listaOrologiA = {

    Rolex: {
        nome: 'ROLEX SUBMARINER 114060 (No Date)',
        categoria: 'automatic',
        prezzo: 10000,
        immagine: "immagini/rolex.jpg",
        descrizione: 'il Rolex Submariner No Data incarna l’orologio subacqueo nella sua forma originale'
    },

    Zenith: {
        nome: 'ZENITH DEFY 28800 Ref A7682 ',
        categoria: 'automatic',
        prezzo: 3000,
        immagine: "immagini/zenith.jpg",
        descrizione: 'Zenith sfida Ref: A-7682 orologio subacqueo in acciaio inox, 38 x 44 mm corona esclusa'
    },

    Patek: {
        nome: 'PATEK PHILIPE NAUTILUS ref. 3712  ',
        categoria: 'automatic',
        prezzo: 100000,
        immagine: "immagini/patek.jpg",
        descrizione: 'Il Nautilus ref. 3712 è stato presentato e prodotto in pochi pezzi per soli 8 mezi da Patek Philippe nel 2005 per celebrare i 30 anni da quando uscì il primo Nautilus.'
    }
}
const listaOrologiC = {

    Panerai: {
        nome: 'PANERAI LUMINOR SUBMERSIBLE by ROLEX 6152-1 ',
        categoria: 'manual',
        prezzo: 100000,
        immagine: "immagini/panerai.bmp",
        descrizione: 'Gli orologi Panerai, definiti “arte in movimento”, sono diventati popolari tra gli appassionati più esigenti di tutto il mondo.'
    },

    Longines: {
        nome: 'LONGINES CALATRAVA cal.284',
        categoria: 'manual',
        prezzo: 1000,
        immagine: "immagini/longines.jpg",
        descrizione: 'Vintage Longines Ref. 8314 Cal. 284 35mm Calatrava anni 1960'
    },

    Omega: {
        nome: 'OMEGA GENEVE CHRONOSTOP',
        categoria: 'manual',
        prezzo: 1000,
        immagine: "immagini/omega.jpg",
        descrizione: 'Il suo design lo si deve alla catena di gioielli Fontana (vedi anche Lascor) che lo disegnò nel 1969.'
    }
}

/*function MostraQuartz(Orologio) { // in questo modo con un ciclo avrei potuto scrivere molto meno codice

const DivQuartz = document.getElementById("Quartz");

for (const marca in Orologio) {
const marcaDiv = document.createElement("div");
marcaDiv.setAttribute('id', Div${marca} );

const img = document.createElement("img");
const nome = document.createElement("p")
const prezzo = document.createElement("p");
const descrizione = document.createElement("p");

img.src = Orologio[marca].immagine;
nome.innerText = Orologio[marca].nome;
prezzo.innerText= Orologio[marca].prezzo;
descrizione.innerText = Orologio[marca].descrizione;

marcaDiv.appendChild(img);
marcaDiv.appendChild(nome);
marcaDiv.appendChild(prezzo);
marcaDiv.appendChild(descrizione);

DivQuartz.appendChild(marcaDiv);
}
} */

function MostraQuartz(Orologio) {

    const DivQuartz = document.getElementById("Quartz");
    const DivBulova = document.createElement("div");
    const DivCasio = document.createElement("div");
    const DivCitizen = document.createElement("div");

    DivBulova.setAttribute('id', 'DivBul'); // serve per crerare id da modificare nel css
    DivCasio.setAttribute('id', 'DivCa');
    DivCitizen.setAttribute('id', 'DivCit');

    const imgB = document.createElement("img");
    const nomeB = document.createElement("p")
    const prezzoB = document.createElement("p");
    const descrizioneB = document.createElement("p");

    const imgCA = document.createElement("img");
    const nomeCA = document.createElement("p");
    const prezzoCA = document.createElement("p");
    const descrizioneCA = document.createElement("p");

    const imgCI = document.createElement("img");
    const nomeCI = document.createElement("p");
    const prezzoCI = document.createElement("p");
    const descrizioneCI = document.createElement("p");


    imgB.src = Orologio.Bulova.immagine;
    nomeB.innerText = Orologio.Bulova.nome;
    prezzoB.innerText = Orologio.Bulova.prezzo;
    descrizioneB.innerText = Orologio.Bulova.descrizione;

    imgCA.src = Orologio.Casio.immagine;
    nomeCA.innerText = Orologio.Casio.nome;
    prezzoCA.innerText = Orologio.Casio.prezzo;
    descrizioneCA.innerText = Orologio.Casio.descrizione;

    imgCI.src = Orologio.Citizen.immagine;
    nomeCI.innerText = Orologio.Citizen.nome;
    prezzoCI.innerText = Orologio.Citizen.prezzo;
    descrizioneCI.innerText = Orologio.Citizen.descrizione;


    DivQuartz.appendChild(DivBulova);
    DivBulova.appendChild(imgB);
    DivBulova.appendChild(nomeB);
    DivBulova.appendChild(prezzoB);
    DivBulova.appendChild(descrizioneB);

    DivQuartz.appendChild(DivCasio);
    DivCasio.appendChild(imgCA);
    DivCasio.appendChild(nomeCA);
    DivCasio.appendChild(prezzoCA);
    DivCasio.appendChild(descrizioneCA);

    DivQuartz.appendChild(DivCitizen);
    DivCitizen.appendChild(imgCI);
    DivCitizen.appendChild(nomeCI);
    DivCitizen.appendChild(prezzoCI);
    DivCitizen.appendChild(descrizioneCI);

    document.getElementById("Carica").style.display = "none";
    document.getElementById("Automatici").style.display = "none";
    document.getElementById("Corpo").style.display = "none";
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementById("Quartz").style.display = "block"; // serve assieme ai none a mostrare solo quello che voglio 



}


function MostraAutomatici(Orologio) {

    const DivAuto = document.getElementById("Automatici");
    const DivRolex = document.createElement("div");
    const DivZenith = document.createElement("div");
    const DivPatek = document.createElement("div");

    DivRolex.setAttribute('id', 'DivRol'); // serve per crerare id da modificare nel css
    DivZenith.setAttribute('id', 'DivZe');
    DivPatek.setAttribute('id', 'DivPa');

    const imgR = document.createElement("img");
    const nomeR = document.createElement("p")
    const prezzoR = document.createElement("p");
    const descrizioneR = document.createElement("p");

    const imgZ = document.createElement("img");
    const nomeZ = document.createElement("p");
    const prezzoZ = document.createElement("p");
    const descrizioneZ = document.createElement("p");

    const imgP = document.createElement("img");
    const nomeP = document.createElement("p");
    const prezzoP = document.createElement("p");
    const descrizioneP = document.createElement("p");


    imgR.src = Orologio.Rolex.immagine;
    nomeR.innerText = Orologio.Rolex.nome;
    prezzoR.innerText = Orologio.Rolex.prezzo;
    descrizioneR.innerText = Orologio.Rolex.descrizione;

    imgZ.src = Orologio.Zenith.immagine;
    nomeZ.innerText = Orologio.Zenith.nome;
    prezzoZ.innerText = Orologio.Zenith.prezzo;
    descrizioneZ.innerText = Orologio.Zenith.descrizione;

    imgP.src = Orologio.Patek.immagine;
    nomeP.innerText = Orologio.Patek.nome;
    prezzoP.innerText = Orologio.Patek.prezzo;
    descrizioneP.innerText = Orologio.Patek.descrizione;


    DivAuto.appendChild(DivRolex);
    DivRolex.appendChild(imgR);
    DivRolex.appendChild(nomeR);
    DivRolex.appendChild(prezzoR);
    DivRolex.appendChild(descrizioneR);

    DivAuto.appendChild(DivZenith);
    DivZenith.appendChild(imgZ);
    DivZenith.appendChild(nomeZ);
    DivZenith.appendChild(prezzoZ);
    DivZenith.appendChild(descrizioneZ);

    DivAuto.appendChild(DivPatek);
    DivPatek.appendChild(imgP);
    DivPatek.appendChild(nomeP);
    DivPatek.appendChild(prezzoP);
    DivPatek.appendChild(descrizioneP);

    document.getElementById("Quartz").style.display = "none";
    document.getElementById("Carica").style.display = "none";
    document.getElementById("Corpo").style.display = "none";
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementById("Automatici").style.display = "block";

}


function MostraCarica(Orologio) {

    const DivCarica = document.getElementById("Carica");
    const DivPanerai = document.createElement("div");
    const DivLongines = document.createElement("div");
    const DivOmega = document.createElement("div");

    DivPanerai.setAttribute('id', 'DivPan'); // serve per crerare id da modificare nel css
    DivLongines.setAttribute('id', 'DivLo');
    DivOmega.setAttribute('id', 'DivOm');

    const imgPA = document.createElement("img");
    const nomePA = document.createElement("p")
    const prezzoPA = document.createElement("p");
    const descrizionePA = document.createElement("p");

    const imgL = document.createElement("img");
    const nomeL = document.createElement("p");
    const prezzoL = document.createElement("p");
    const descrizioneL = document.createElement("p");

    const imgO = document.createElement("img");
    const nomeO = document.createElement("p");
    const prezzoO = document.createElement("p");
    const descrizioneO = document.createElement("p");


    imgPA.src = Orologio.Panerai.immagine;
    nomePA.innerText = Orologio.Panerai.nome;
    prezzoPA.innerText = Orologio.Panerai.prezzo;
    descrizionePA.innerText = Orologio.Panerai.descrizione;

    imgL.src = Orologio.Longines.immagine;
    nomeL.innerText = Orologio.Longines.nome;
    prezzoL.innerText = Orologio.Longines.prezzo;
    descrizioneL.innerText = Orologio.Longines.descrizione;

    imgO.src = Orologio.Omega.immagine;
    nomeO.innerText = Orologio.Omega.nome;
    prezzoO.innerText = Orologio.Omega.prezzo;
    descrizioneO.innerText = Orologio.Omega.descrizione;


    DivCarica.appendChild(DivPanerai);
    DivPanerai.appendChild(imgPA);
    DivPanerai.appendChild(nomePA);
    DivPanerai.appendChild(prezzoPA);
    DivPanerai.appendChild(descrizionePA);

    DivCarica.appendChild(DivLongines);
    DivLongines.appendChild(imgL);
    DivLongines.appendChild(nomeL);
    DivLongines.appendChild(prezzoL);
    DivLongines.appendChild(descrizioneL);

    DivCarica.appendChild(DivOmega);
    DivOmega.appendChild(imgO);
    DivOmega.appendChild(nomeO);
    DivOmega.appendChild(prezzoO);
    DivOmega.appendChild(descrizioneO);


    document.getElementById("Quartz").style.display = "none";
    document.getElementById("Automatici").style.display = "none";
    document.getElementById("Corpo").style.display = "none";
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementById("Carica").style.display = "block";

    /*var isAdded = false;

    if (!isAdded) {
      var newChild = document.createElement("p");
      var textNode = document.createTextNode("Nuovo figlio");
      newChild.appendChild(textNode);
      parent.appendChild(newChild);
      isAdded = true;
    }*/

    //Se "isAdded" è "false", l'elemento viene aggiunto alla lista e la variabile viene impostata su "true". 
    //In questo modo, l'elemento verrà aggiunto alla lista dei figli solo una volta.



}

function login() {
    // get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // validate input (e.g. check if username and password are not empty)
    if (username === "Paolo" && password === "Arzuffi") {
        alert("dati corretti");
        return;
    }

    // send login request to server (e.g. using AJAX)
    // if login successful, redirect to dashboard page
    // if login failed, display error message
}

function PopUp() {
    const Log = document.getElementById("Form");
    Log.style.display = "flex";
}

function CercaOrologio() {
    const CercaWatch = document.getElementById("Cerca").value;
    const Corpo = document.getElementById("Corpo");
    // Se usi lista listaOrologiQ.CercaWatch ceerca la stringa "CercaWatch" dentro a listaOrologiQ
    // Se usi lista listaOrologiQ[CercaWatch] ceerca la stringa contenuta nella variabile CercaWatch dentro a listaOrologiQ
    if (listaOrologiQ[CercaWatch]) {
        Corpo.style.display = "none";
        const img = document.createElement("img");
        const Categorie = document.getElementById("Categorie");
        img.src = listaOrologiQ[CercaWatch].immagine;
        Categorie.appendChild(img); // per non mostrare sempre stessa immagine crea un ciclo con array che mostra l'iimagine solo 1 volta, no doppioni
        return
    }
    if (listaOrologiA[CercaWatch]) {
        Corpo.style.display = "none";
        const img = document.createElement("img");
        const Categorie = document.getElementById("Categorie");
        img.src = listaOrologiA[CercaWatch].immagine;
        Categorie.appendChild(img);
        return
    }
    if (listaOrologiC[CercaWatch]) {
        Corpo.style.display = "none";
        const Categorie = document.getElementById("Categorie");
        img.src = listaOrologiC[CercaWatch].immagine; // far cercare id del div al posto dell'immagine
        Categorie.appendChild(img);
        return
    }// capire come cercare per div


}
function ScrollFoot() { // per scendere al footer al click

    var ScrollFoot = document.getElementById('foot');
    ScrollFoot.focus();
}

// bug non risolti: non aggiungere un div che c'è già e cercare con la funzione non per immagini ma per div



