let idCarta = 1;
let arrayCarte = [];
class Carta
{
    idCarta;
    idCompositore;
    titolo;
    prezzo;
    mese;
    img;
    eliminata;

    constructor(idCarta, idCompositore, titolo, prezzo, mese, img, eliminata)
    {
        this.idCarta = idCarta;
        this.idCompositore = idCompositore;
        this.titolo = titolo;
        this.prezzo = prezzo;
        this.mese = mese;
        this.img = img;
        this.eliminata = eliminata;
    }

    getIdCarta()
    {
        return this.idCarta;
    }

    getIdCompositore()
    {
        return this.idCompositore;
    }

    getTitolo()
    {
        return this.titolo;
    }

    getPrezzo()
    {
        return this.prezzo;
    }

    getMese()
    {
        return this.mese;
    }

    getImg()
    {
        return this.img;
    }

    isEliminata()
    {
        return this.eliminata;
    }

    setImg(img)
    {
        this.img = img;
    }

    setEliminata(eliminata)
    {
        this.eliminata = eliminata;
    }
}

async function trovaMaxIdCarta()
{
    const idCompositore = localStorage.getItem("idCompositore");
    const getCarte = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/carte/" + idCompositore + "/compositori");
    const getCarteJson = await getCarte.json();

    let maxId = 1;

    for(cartaCompositore of getCarteJson)
    {
        if(cartaCompositore.idCarta > maxId)
        {
            maxId = cartaCompositore.idCarta;
        }
    }

    if(maxId != 1)
    {
        idCarta = maxId + 1;
    }
}

function creaCartaJson()
{
    const input = document.getElementById("immagineCarta");
    const file = input.files[0];
    const tracksContainer = document.getElementById("tracksContainer");

    const inviaBtn = document.getElementById("btnCard");
    let testoMessaggio = document.getElementById("messaggioTraccia");

    if (!file)
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        inviaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito nessuna immagine!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
            document.getElementById('immagineCarta').value = '';
        }, 3000);

        return;
    }

    else if (document.getElementById("nome").value=="")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        inviaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il nome della traccia!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
            document.getElementById('nome').value = '';
        }, 3000);

        return;
    }

    else if (document.getElementById("prezzo").value=="")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        inviaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il prezzo della traccia!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
            document.getElementById('prezzo').value = '';
        }, 3000);

        return;
    }

    else if (document.getElementById("prezzo").value < 0)
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });
            
        inviaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Il prezzo della traccia non è valido!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
            document.getElementById("prezzo").value = '';
        }, 3000);

        return;
    }

    else if (document.getElementById("mese").value=="0")
    {
        inviaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Hai dimenticato di indicare il mese!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
        }, 3000);

        return;
    }

    else
    {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function()
        {
            const img = "url("+reader.result+")";

            const carta = new Carta(idCarta, parseInt(localStorage.getItem("idCompositore")), document.getElementById("nome").value, document.getElementById("prezzo").value, document.getElementById("mese").value, img, false);
    
            if(arrayCarte.length==0)
            {
                tracksContainer.style.display = "block";
            }

            creaCartaHTML(carta);

            document.getElementById('nome').value = '';
            document.getElementById('prezzo').value = '';
            document.getElementById('mese').value = '0';
            document.getElementById('immagineCarta').value = '';
        }
    }
}

async function creaCartaHTML(carta)
{
    let userIsCompositore = false;
    if(localStorage.getItem("Compositore") === "VERO")
    {
        userIsCompositore = true;
    }

    const imgBackground = document.createElement("section");
    imgBackground.setAttribute("class","imgBackground");
    imgBackground.style.backgroundImage = carta.getImg();

    const lista = document.getElementById("lista");

    const card = document.createElement("section");
    card.setAttribute("class","card");

    if(carta.getIdCarta() < idCarta)
    {
        card.setAttribute("id","carta" + carta.getIdCarta());
    }
    
    else
    {
        card.setAttribute("id","carta" + idCarta);
    }


    lista.appendChild(card);

    const title = document.createElement("section");
    title.setAttribute("class","title");
    card.appendChild(title);

    let mese = document.createElement("p");
    mese.innerText = carta.mese;
    title.appendChild(mese);

    let elimina;
    let cestino;

    if(userIsCompositore)
    {
        elimina = document.createElement("button");
        elimina.setAttribute("class","elimina");
        elimina.setAttribute("onclick","eliminaCarta("+carta.getIdCarta()+")");
    
        cestino = document.createElement("img");
        cestino.setAttribute("src","../img/cestino.png");
        cestino.setAttribute("class","cestinoCard");
        cestino.setAttribute("title","Elimina la traccia");
        elimina.appendChild(cestino);
    
        title.appendChild(elimina);
    }

    const imgContainer = document.createElement("section");
    imgContainer.setAttribute("class","img-container");
    card.appendChild(imgContainer);

    const banner = document.createElement("section");
    banner.setAttribute("class","banner");
    imgContainer.appendChild(banner);
    banner.appendChild(imgBackground);

    const description = document.createElement("description");
    description.setAttribute("class","description");
    card.appendChild(description);

    let footer = document.createElement("footer");
    description.appendChild(footer);

    let musicTrack = document.createElement("p");
    musicTrack.innerText = "Titolo: " + carta.getTitolo();
    footer.appendChild(musicTrack);

    let cost = document.createElement("p");
    cost.innerText = `Prezzo: ${carta.getPrezzo()}€`;
    cost.setAttribute("id","prezzo"+idCarta);
    footer.appendChild(cost);

    card.setAttribute("data-tooltip",`${carta.getTitolo()} ${carta.getPrezzo()}€ | ${carta.getMese()}`);

    if(userIsCompositore)
    {
        document.getElementById('meseSort').value = '0';
    }

    card.scrollIntoView(
        {
            behavior: 'smooth',
            block: 'end'
        });

    card.style.animation = "fadeIn 1.2s";
    card.style.animationIterationCount = "1";
    
    arrayCarte.push(carta);
    idCarta++;
    
    if(arrayCarte.length != 0)
    {
        tracksContainer.style.display = "block";
    }

    if(userIsCompositore)
    {
        sortMeseScelto();
        const incasso = document.getElementById("incasso").innerText = incassoTotale();
    }

    sortListaCarte();
    coloraCarte();
}

function eliminaCarta(id)
{
    let isCartaTrovata = false;
    const tracksContainer = document.getElementById("tracksContainer");

    for (const carta of arrayCarte)
    {
        if(carta.getIdCarta() === parseInt(id))
        {
            const cartaDaEliminare = document.getElementById("carta"+id.toString());
            carta.setEliminata(true);
    
            cartaDaEliminare.style.animation = "fadeOut 1.2s";
            cartaDaEliminare.style.animationIterationCount = "1";

            setTimeout(() =>
            {
                cartaDaEliminare.remove();
                coloraCarte();

                const carte = document.getElementsByClassName("card");
                
                if(carte.length == 0)
                {
                    tracksContainer.style.display = "none";
                }
            }, 1200);

            isCartaTrovata = true;
        }
    }

    if(!isCartaTrovata)
    {
        alert(`La traccia "${id}" non è stata trovata!`);
    }
}

function eliminaDefinitivamenteCarta(id)
{
    let isCartaTrovata = false;
    const tracksContainer = document.getElementById("tracksContainer");

    for (const carta of arrayCarte)
    {
        if(carta.getIdCarta() === parseInt(id))
        {
            const indice = arrayCarte.indexOf(carta);

            arrayCarte.splice(indice,1);
            isCartaTrovata = true;
        }
    }

    if(!isCartaTrovata)
    {
        alert(`La traccia "${id}" non è stata trovata!`);
    }
}

function sortListaCarte()
{
    let i, switching, shouldSwitch;
    const listaCarte = document.getElementsByClassName("card");
    switching = true;

    while (switching)
    {
        switching = false;
        for (i = 0; i < listaCarte.length; i++)
        {
            shouldSwitch = false;
            if(listaCarte[i]!=null)
            {
                //carta attuale
                meseTestoAttuale = meseCarta(listaCarte[i]);

                let meseAttuale = numeroMese(meseTestoAttuale);

                //carta successiva
                if(listaCarte[i+1]!=null)
                {
                    meseTestoSuccessivo = meseCarta(listaCarte[i+1]);

                    let meseSuccessivo = numeroMese(meseTestoSuccessivo);

                    if (meseAttuale > meseSuccessivo)
                    {
                        shouldSwitch = true;
                        break;
                    }
                }
                else
                {
                    shouldSwitch = false;
                    break;
                }
            }
        }
        if (shouldSwitch)
        {
            listaCarte[i].parentNode.insertBefore(listaCarte[i + 1], listaCarte[i]);
            switching = true;
        }
    }
}

function meseCarta(carta)
{
    titolo = carta.firstElementChild.textContent;
    return titoloCorto = titolo.substring(0, titolo.length);
}

function numeroMese(mese)
{
    if(mese === "Gennaio")
    {
        return 1;
    }

    else if(mese === "Febbraio")
    {
        return 2;
    }

    else if(mese === "Marzo")
    {
        return 3;
    }

    else if(mese === "Aprile")
    {
        return 4;
    }

    else if(mese === "Maggio")
    {
        return 5;
    }

    else if(mese === "Giugno")
    {
        return 6;
    }

    else if(mese === "Luglio")
    {
        return 7;
    }

    else if(mese === "Agosto")
    {
        return 8;
    }

    else if(mese === "Settembre")
    {
        return 9;
    }

    else if(mese === "Ottobre")
    {
        return 10;
    }

    else if(mese === "Novembre")
    {
        return 11;
    }

    else if(mese === "Dicembre")
    {
        return 12;
    }
}

function coloraCarte()
{
    const carte = document.getElementsByClassName("card");
    let bianco = true;
    let titolo;
    let footer;

    for (let i = 0; i<carte.length; i++)
    {
        if(carte[i] != null && carte[i].style.display != "none")
        {
            if(bianco)
            {
                titolo = carte[i].firstElementChild;
                footer = carte[i].childNodes[2];
                titolo.style.backgroundColor = "rgb(255, 255, 255)";
                footer.style.backgroundColor = "rgb(242, 242, 242)";
                carte[i].style.backgroundColor = "rgb(255, 255, 255)";
                carte[i].style.color = "rgb(0, 0, 0)";
                bianco = false;
            }
            else
            {
                titolo = carte[i].firstElementChild;
                footer = carte[i].childNodes[2];
                titolo.style.backgroundColor = "rgb(68, 72, 87)";
                footer.style.backgroundColor = "rgb(50, 54, 67)";
                carte[i].style.backgroundColor = "rgb(68, 72, 87)";
                carte[i].style.color = "rgb(255, 255, 255)";
                bianco = true;
            }
        }
    }
}

function incassoTotale()
{
    const carte = document.getElementsByClassName("card");
    let incassoTotale = 0;
    let incassoTesto = "";
    
    for(let i = 0; i<carte.length; i++)
    {
        const figliCarta = carte[i].childNodes;
        const description = figliCarta[2];
        const footer = description.children[0];
        const prezzoCartaLungo = footer.children[1].innerText;
        const prezzoCarta = parseFloat(prezzoCartaLungo.substring(8,prezzoCartaLungo.length));

        if(carte[i].style.display == "flex")
        {
            const incassoCarta = prezzoCarta;
            incassoTotale += incassoCarta;
        }
    }

    if(incassoTotale != 0 && !isNaN(incassoTotale))
    {
        return incassoTesto = `Incasso totale: ${incassoTotale}€`;
    }

    else
    {
        return incassoTesto = `Incasso totale: 0€`;
    }
}

function sortMeseScelto()
{
    const meseScelto = document.getElementById("meseSort").value;
    const lista = document.getElementsByClassName("card");

    for(let i = 0; i<lista.length; i++)
    {
        if(meseCarta(lista[i]) === meseScelto || meseScelto === "0")
        {
            lista[i].style.display = "flex";
        }

        else
        {
            lista[i].style.display = "none";
        }
    }

    document.getElementById("incasso").innerText = incassoTotale();
    coloraCarte();
}

async function salvaCarta(getCarteJson)
{
    let continua = false;

    let idCarta;
    let idCompositore;
    let titolo;
    let prezzo;
    let mese;
    let img;
    let eliminata;

    if(arrayCarte.length != 0)
    {
        for(carta of arrayCarte)
        {
            const body = JSON.stringify(carta);
            
            if(carta.isEliminata() === true)
            {
                await cancellaCarta(carta, body);
            }
        }
    }
    
    for(carta of arrayCarte)
    {
        const body = JSON.stringify(carta);

        for(cartaCompositore of getCarteJson)
        {
            continua = false;

            idCarta = cartaCompositore.idCarta;
            idCompositore = cartaCompositore.idCompositore;
            titolo = cartaCompositore.titolo;
            prezzo = cartaCompositore.prezzo;
            mese = cartaCompositore.mese;
            img = cartaCompositore.img;
            eliminata = cartaCompositore.eliminata;

            if(carta.getIdCarta() === idCarta)
            {
                if(carta.getIdCompositore() === idCompositore)
                {
                    if(carta.getTitolo() === titolo)
                    {
                        if(carta.getPrezzo() === prezzo)
                        {
                            if(carta.getMese() === mese)
                            {
                                if(carta.getImg() === img)
                                {
                                    if(carta.isEliminata() === eliminata)
                                    {
                                        continua = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            continue;
                        }
                        continue;
                    }
                    continue;
                }
                continue;
            }
            continue;
        }

        if(!continua)
        {
            postaCarta(body);
        }
    }

    return;
}

async function postaCarta(body)
{
    const postCarta = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/carte/" + localStorage.getItem("idCompositore"),
    {
        method: "POST",
        headers:
        {
            "content-type":'application/json'
        },
        body: body
    });
}

async function cancellaCarta(carta, body)
{
    const idCarta = carta.getIdCarta().toString();
    eliminaDefinitivamenteCarta(idCarta);
    
    const cancellaCarta = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/carte/" + idCarta,
    {
        method: "DELETE",
        headers:
        {
            "content-type":'application/json'
        },
        body: body
    });

    return true;
}