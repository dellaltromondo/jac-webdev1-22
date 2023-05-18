 // this.html_________________________________________________________________________
/*
function sovrascrivi(){
    const elementoTitolo = document.getElementById("titolo");
    elementoTitolo.innerText = 'Hello';
};
*/

/*
function sovrascriviNome(){
    const elementNome = document.getElementById('nome');
    const aggiutaNome = document.getElementsByTagName('input');
    elementNome.innerText = elementNome.innerText + ' ' +aggiutaNome[0].value
};
*/
//_______________________________________________________________________________________




//form.html______________________________________________________________________________

function clickHerPerNuovo()
{
const nuovoElScheda = document.createElement("section"); 
const elementoScheda = document.getElementById("schede");   
const aggiuntaUtente = document.getElementsByTagNameNS("input");

nuovoElScheda.innerText = "ciao sono un nouvo elemente"; 
    + '/nnome :' + aggiuntaUtente[0].value
    + '/ncognome :' + aggiuntaUtente[1].value
    + '/ndata di nacita :' + aggiuntaUtente[2].value
    + '/nsesso :' + aggiuntaUtente[3].value + aggiuntaUtente[4].value


    elementoScheda.appendChild(nuovoElScheda);
    nuovoElScheda.setAttribute('class','scheda');

};






















