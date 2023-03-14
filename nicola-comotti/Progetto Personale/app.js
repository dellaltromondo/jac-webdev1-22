function toggleMenu() {

    const expMenuElement = document.getElementById('menuMobile');

    var x = window.matchMedia("(max-width: 850px)")
    myFunction(x)
    x.addListener(myFunction)

    function myFunction(x) {
        if (x.matches && expMenuElement.style.display == "block") {
            expMenuElement.style.display = "none";
        } else if (x.matches && expMenuElement.style.display == "none") {
            expMenuElement.style.display = "block";
        } else {
            expMenuElement.style.display = "none";
        }
    }

}

function login() {
    window.location.href="user-homepage.html";
}

function logout() {
    window.location.href="login-page.html";
}

function addExe() {

    const newExe = document.createElement('li');

    const inputScheda = document.getElementById('sceltaScheda');
    const scheda = inputScheda.value;
    const inputNome = document.getElementById('nome');
    const nome = inputNome.value;
    const inputPeso = document.getElementById('peso');
    const peso = inputPeso.value;
    const inputSerie = document.getElementById('serie');
    const serie = inputSerie.value;
    const inputRep = document.getElementById('rep');
    const rep = inputRep.value;
    const inputRest = document.getElementById('rest');
    const rest = inputRest.value;

    const testoNome = document.createElement('h3');
    testoNome.innerText = nome;
    const testoPeso = document.createElement('p');
    testoPeso.innerText = peso + " Kg | ";
    const testoSerie = document.createElement('p');
    testoSerie.innerText = serie + " serie | ";
    const testoRep = document.createElement('p');
    testoRep.innerText = rep + " rep | ";
    const testoRest = document.createElement('p');
    testoRest.innerText = rest + "s rest";
    const buttonRimuovi = document.createElement('button');
    const imgBin = document.createElement('img');
    imgBin.setAttribute('src', 'Utils/white-recycle-bin.png', 'alt', 'Elimina');
    buttonRimuovi.appendChild(imgBin);
    buttonRimuovi.setAttribute("onclick", "this.parentElement.style.display = 'none';");

    newExe.appendChild(testoNome);
    newExe.appendChild(testoPeso);
    newExe.appendChild(testoSerie);
    newExe.appendChild(testoRep);
    newExe.appendChild(testoRest);
    newExe.appendChild(buttonRimuovi);

    newExe.setAttribute('class', 'esercizio');

    const schedaPush = document.getElementById('schedaPush');
    const schedaPull = document.getElementById('schedaPull');
    const schedaLegs = document.getElementById('schedaLegs');

    switch (scheda) {
        case 'push':
            schedaPush.appendChild(newExe);
            break;
        case 'pull':
            schedaPull.appendChild(newExe);
            break;
        case 'legs':
            schedaLegs.appendChild(newExe);
            break;
        case 'none':
            alert("NESSUNA SCHEDA SELEZIONATA!!");
            break;
    }

}

// function addScheda() {}

async function fetchEsercizi() {
    const response = await fetch("http://localhost:8080/esercizioAPI/listaesercizi");
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    jsonResponse.products.forEach(product => {
        const elemento = document.createElement('li');
        document.getElementById('prodotti').appendChild(elemento);
        elemento.innerHTML = product;
    });
}
