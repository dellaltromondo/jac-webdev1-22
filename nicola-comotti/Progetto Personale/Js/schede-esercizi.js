// Array che conterrà tutte le schede che verranno create
const schede = [];

function addScheda() {

    const newScheda = document.createElement('li');

    const inputNome = document.getElementById('nomeScheda');
    const nome = inputNome.value;

    if (nome == '') {
        errorPopup('Inserire il NOME della scheda!');
        return
    }

    const testoNome = document.createElement('h2');
    testoNome.innerText = nome;

    const buttonRimuovi = document.createElement('button');
    const imgBin = document.createElement('img');
    imgBin.setAttribute('src', 'Utils/white-recycle-bin.png', 'alt', 'Elimina');
    buttonRimuovi.appendChild(imgBin);
    buttonRimuovi.setAttribute("onclick", "deleteScheda(this)");
    buttonRimuovi.setAttribute("class", "delete-button");
    newScheda.appendChild(testoNome);
    newScheda.appendChild(buttonRimuovi);

    newScheda.setAttribute('class', 'scheda');
    const idScheda = testoNome.innerText.replace(/ /g, '');
    newScheda.setAttribute("id", idScheda);

    document.getElementById('listaSchede').appendChild(newScheda);

    const selectSchede = document.getElementById('sceltaScheda');
    const optionScheda = document.createElement('option');
    optionScheda.setAttribute('value', idScheda);
    optionScheda.appendChild(document.createTextNode(testoNome.innerText));
    selectSchede.appendChild(optionScheda);

    schede.push(idScheda);

    inputNome.value = '';

}

function deleteScheda(elem) {

    const scheda = document.getElementById(elem.parentNode.id);
    scheda.style.display = 'none';

    schede.splice(schede.indexOf(elem.parentNode.id), 1);

    const selectSchede = document.getElementById("sceltaScheda");
    for (var i = 0; i < selectSchede.length; i++) {
        if (selectSchede.options[i].value == elem.parentNode.id)
            selectSchede.remove(i);
    }

}

function addExe() {

    const newExe = document.createElement('li');

    const scheda = document.getElementById('sceltaScheda').value;
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const serie = document.getElementById('serie').value;
    const rep = document.getElementById('rep').value;
    const rest = document.getElementById('rest').value;

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
    buttonRimuovi.setAttribute("class", "delete-button");

    newExe.appendChild(testoNome);
    newExe.appendChild(testoPeso);
    newExe.appendChild(testoSerie);
    newExe.appendChild(testoRep);
    newExe.appendChild(testoRest);
    newExe.appendChild(buttonRimuovi);

    newExe.setAttribute('class', 'esercizio');

    for (const valueScheda of schede) {
        if (valueScheda == scheda) {
            document.getElementById(valueScheda).appendChild(newExe);
            break;
        }
    }
}