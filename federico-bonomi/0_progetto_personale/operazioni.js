class Domanda
{
    #id
    #nomeUtente
    #titolo
    #titoloArray = new Array()
    #domanda
    #risposte = new Array()

    constructor(id, nomeUtente, titolo, titoloArray, domanda, risposte)
    {
        this.#id=id;
        this.#nomeUtente=nomeUtente;
        this.#titolo=titolo;
        this.#titoloArray=titoloArray;
        this.#domanda=domanda;
        this.#risposte=risposte;
    }

    getId()
    {
        return this.#id;
    }

    setId(id)
    {
        this.#id=id;
    }

    getNomeUtente()
    {
        return this.#nomeUtente;
    }

    setNomeUtente(nomeUtente)
    {
        this.#nomeUtente=nomeUtente;
    }

    getTitolo()
    {
        return this.#titolo;
    }

    setTitolo(titolo)
    {
        this.#titolo=titolo;
    }

    getTitoloArray()
    {
        return this.#titoloArray;
    }

    setTitoloArray(titoloArray)
    {
        this.#titoloArray=titoloArray;
    }

    getDomanda()
    {
        return this.#domanda;
    }

    setDomanda(domanda)
    {
        this.#domanda=domanda;
    }

    getRisposte()
    {
        return this.#risposte;
    }

    getRisposta(id)
    {
        return this.#risposte[id];
    }

    setRisposte(risposte)
    {
        this.#risposte=risposte;
    }

    aggiungiRispostaDomanda(risposta)
    {
        this.#risposte.push(risposta);
    }

    eliminaRispostaDomanda(id)
    {
        this.#risposte.splice(id, 1);
    }
}


let indice=0;
let indiceRisposta=0;
let listaDomande=[];


function inserisciDomanda()
{
    
    if(document.getElementById('nomeUtenteDomanda').value=='')
    {
        alert("Inserisci il nome utente");
        return;
    }
    else if(document.getElementById('titolo').value=='')
    {
        alert("Inserisci il titolo");
        return;
    }
    else if(document.getElementById('inputDomanda').value=='')
    {
        alert("Inserisci la domanda");
        return;
    }
    
    let titoloArrayProvvisorio=new Array();
    titoloArrayProvvisorio=document.getElementById('titolo').value.toUpperCase().split(" ");
    //creo un oggetto con gli elementi della domanda
    const elementoArray=new Domanda(indice, document.getElementById('nomeUtenteDomanda').value, document.getElementById('titolo').value.toUpperCase(), titoloArrayProvvisorio, document.getElementById('inputDomanda').value, [])
    
    listaDomande.push(elementoArray);
    
    

    const nuovaDomanda = document.createElement('li');

    //creo il bottone per eliminare la domanda
    const bottoneElimina=document.createElement("i");
    bottoneElimina.setAttribute("onclick",`eliminaDomanda("domanda${indice}","${indice}")`);
    bottoneElimina.setAttribute("class","fas fa-trash-alt");
    bottoneElimina.setAttribute("id", `"eliminaDomanda${indice}"`)
    nuovaDomanda.appendChild(bottoneElimina);

    //creo la data
    const d=new Date();
    const giorno=String(d.getDate()).padStart(2, '0');
    const mese = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    const anno = d.getFullYear();
    const orario=`${d.getHours()}:${d.getMinutes()}`;
    const data=`${orario} del ${giorno}/${mese}/${anno}`;
    const sezioneData=document.createElement('p');
    sezioneData.innerText=data;
    sezioneData.setAttribute("class","data");
    nuovaDomanda.appendChild(sezioneData);


    nuovaDomanda.appendChild(creaSezione('nomeUtenteDomanda','strong'));
    nuovaDomanda.appendChild(creaSezione('titolo','h2'));
    nuovaDomanda.appendChild(creaSezione('inputDomanda', 'p'));


    const bottoneForm=document.createElement('button');
    bottoneForm.innerText="Nascondi Form";
    bottoneForm.setAttribute("onclick", `nascondi("form${indice}","bottone${indice}")`);
    bottoneForm.setAttribute("id",`bottone${indice}`);
    nuovaDomanda.appendChild(bottoneForm);

    //creo il form di risposta
    const form=document.createElement('form');
    form.setAttribute("id",`form${indice}`);
    form.setAttribute("class","compari");

    //creo input nome utente
    const nomeUtente = document.createElement("input");
    nomeUtente.setAttribute("type", "text");
    nomeUtente.setAttribute("id", `nomeUtente${indice}`);
    nomeUtente.setAttribute("placeholder", "Nome utente");

    //creo input risposta
    const risposta = document.createElement("input");
    risposta.setAttribute("type", "text");
    risposta.setAttribute("id", `inputRisposta${indice}`);
    risposta.setAttribute("class", "inputRisposta");
    risposta.setAttribute("placeholder", "Risposta");

    //creo bottone
    const div=document.createElement("div");
    const bottone=document.createElement("button");
    bottone.setAttribute("type","button");
    bottone.setAttribute("onclick", `aggiungiRisposta(${indice})`);
    bottone.innerText="Rispondi";
    div.appendChild(bottone);

    const bottoneRisposte=document.createElement('button');
    bottoneRisposte.innerText="Nascondi Risposte";
    bottoneRisposte.setAttribute("onclick", `nascondiRisposte("ul${indice}","bottoneRisposte${indice}")`);
    bottoneRisposte.setAttribute("id",`bottoneRisposte${indice}`);

    //creo la sezione dei commenti
    const sezioneCommenti=document.createElement("ul");
    sezioneCommenti.setAttribute("id",`ul${indice}`);
    sezioneCommenti.setAttribute('class','compari')

    form.appendChild(nomeUtente);
    form.appendChild(risposta);
    form.appendChild(div);

    const domande = document.getElementById('domande');
    nuovaDomanda.setAttribute('class', 'domanda');
    nuovaDomanda.setAttribute('id',`domanda${indice}`);

    nuovaDomanda.appendChild(form);
    nuovaDomanda.appendChild(bottoneRisposte);
    nuovaDomanda.appendChild(sezioneCommenti);
    domande.appendChild(nuovaDomanda);


    //resetto il form
    document.getElementById("nomeUtenteDomanda").value='';
    document.getElementById("titolo").value='';
    document.getElementById("inputDomanda").value='';

    indice++;
}

function creaSezione(inputId, tipo)
{
    const elemento = document.getElementById(inputId).value;
    const nuovoElemento = document.createElement(tipo);
    nuovoElemento.innerText =elemento;
    return nuovoElemento;
}

function aggiungiRisposta(parametro)
{
    if(document.getElementById(`nomeUtente${parametro}`).value=='')
    {
        alert("Inserisci il nome utente");
        return;
    }
    else if(document.getElementById(`inputRisposta${parametro}`).value=='')
    {
        alert("Inserisci la risposta");
        return;
    }

    const oggettoRisposta=
    {
        indiceDomanda: `${parametro}`,
        id: indiceRisposta,
        nomeUtente: document.getElementById(`nomeUtente${parametro}`).value,
        risposta: document.getElementById(`inputRisposta${parametro}`).value
    }

    listaDomande[`${parametro}`].aggiungiRispostaDomanda(oggettoRisposta);

    console.log(listaDomande[`${parametro}`]);
    
    const nuovaRisposta = document.createElement('li');
    //bottone elimina
    const bottoneElimina=document.createElement("i");
    bottoneElimina.setAttribute("onclick",`eliminaRisposta("risposta${indiceRisposta}", "${indiceRisposta}", "${parametro}")`);
    bottoneElimina.setAttribute("class","fas fa-trash-alt");
    nuovaRisposta.appendChild(bottoneElimina);

    const d=new Date();
    const giorno=String(d.getDate()).padStart(2, '0');
    const mese = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    const anno = d.getFullYear();
    const orario=`${d.getHours()}:${d.getMinutes()}`;
    const data=`${orario} del ${giorno}/${mese}/${anno}`;
    const sezioneData=document.createElement('p');
    sezioneData.innerText=data;
    sezioneData.setAttribute("class","data");
    nuovaRisposta.appendChild(sezioneData);
    nuovaRisposta.appendChild(creaSezione(`nomeUtente${parametro}`,'strong'));
    nuovaRisposta.appendChild(creaSezione(`inputRisposta${parametro}`,'p'));

    const risposte = document.getElementById(`ul${parametro}`);
    nuovaRisposta.setAttribute('class', `risposta`);
    nuovaRisposta.setAttribute('id', `risposta${indiceRisposta}`);

    risposte.appendChild(nuovaRisposta);

    //resetto il form
    document.getElementById(`nomeUtente${parametro}`).value='';
    document.getElementById(`inputRisposta${parametro}`).value='';

    indiceRisposta++;
}

function nascondi(parametro, bottoneForm)
{
    const stato=document.getElementById(parametro);
    if(stato.getAttribute("class")=="scompari")
    {
        stato.setAttribute("class","comapri");
        const bottone=document.getElementById(bottoneForm).innerText="Nascondi Form";
    }
    else
    {
        stato.setAttribute("class","scompari");
        const bottone=document.getElementById(bottoneForm).innerText="Mostra Form";
    }
}

function nascondiRisposte(parametro, bottoneCommenti)
{
    const stato=document.getElementById(parametro);
    if(stato.getAttribute("class")=="scompari")
    {
        stato.setAttribute("class","comapri");
        const commenti=document.getElementById(bottoneCommenti).innerText="Nascondi Risposte";
    }
    else
    {
        stato.setAttribute("class","scompari");
        const commenti=document.getElementById(bottoneCommenti).innerText="Mostra Risposte";
    }
}

//elimina una domanda sia dall'html sia dall'array
function eliminaDomanda(id, indiceDomanda)
{
    document.getElementById(id).remove();
    for(let i=0;i<listaDomande.length;i++)
    {
        if(listaDomande[i].getId()==indiceDomanda)
        {
            listaDomande.splice(i,1);
            listaDomande.forEach(element=>{
                console.log(element);
            })
            return;
        }   
    }
}

//elimina una risposta sia dall'html sia dall'array
function eliminaRisposta(id, indiceRispostaElimina, indiceDomanda)
{
    document.getElementById(id).remove();

    for(let i=0;i<listaDomande.length;i++)
    {
        if(listaDomande[i].getId()==indiceDomanda)
        {
            for(let j=0;j<listaDomande[i].getRisposte().length;j++)
            {
                const id=listaDomande[i].getRisposta(j).id;
                if(id==indiceRispostaElimina)
                {
                    listaDomande[i].eliminaRispostaDomanda(j);

                    listaDomande.forEach(element=>{
                        console.log(element);
                    })
                    return;
                }
            }
        }
    }
}

function cercaDomanda()
{
    if(document.getElementById("inputCerca").value=="")
    {
        alert("Inserici il parametro di ricerca");
    }
    //cerca se la singola parola chiave cercata è presente in qualche titolo
    else if(document.getElementById("inputCerca").value.split(" ").length==1)
    {
        const input=document.getElementById("inputCerca").value.toUpperCase();

        for(let i=0;i<listaDomande.length;i++)
        {
            const elemento=document.getElementById(`domanda${i}`);
            elemento.setAttribute("class","scompari");
        }

        for(let i=0;i<listaDomande.length;i++)
        {
            listaDomande[i].getTitoloArray().forEach(element => {
                if(element===input)
                {
                    const elemento=document.getElementById(`domanda${i}`);
                    elemento.setAttribute("class","domanda");
                }
            });
        }
    }
    else
    {
        let indiceArray=0;
        const input=document.getElementById("inputCerca").value.toUpperCase();
        for(let i=0;i<listaDomande.length;i++)
        {
            const titolo=listaDomande[indiceArray].getTitolo();
            if(titolo===input)
            {
                
            }
            else
            {
                const elemento=document.getElementById(`domanda${i}`);
                elemento.setAttribute("class","scompari");
            }
            
            indiceArray++;
        }
    }
    document.getElementById("inputCerca").value="";
}

function mostraDomande()
{
    for(let i=0;i<listaDomande.length;i++)
    {
        if(document.getElementById(`domanda${i}`)!=null)
        {
            const elemento=document.getElementById(`domanda${i}`);
            elemento.setAttribute("class","domanda");
        }
    }
}