async function creaProfilo(profiloAutore)
{
    const nomeArtista = profiloAutore.getNomeArtista();
    const descrizione = profiloAutore.getDescrizione();
    const urlPic = profiloAutore.getUrlPic();
    const idUser = profiloAutore.getIdUser();

    const listaCompositori = document.getElementById("profilo");
    listaCompositori.style.display = "contents";

    const profilo = document.createElement("section");
    profilo.setAttribute("class", "profilo");

    const sectionImmagineProfilo = document.createElement("section");
    sectionImmagineProfilo.setAttribute("id", "sectionImmagineProfilo");

    const immagineProfilo = document.createElement("img");
    immagineProfilo.setAttribute("id", "immagineProfilo");
    immagineProfilo.setAttribute("src", urlPic);

    sectionImmagineProfilo.appendChild(immagineProfilo);

    const sectionDescrizioneProfilo = document.createElement("section");
    sectionDescrizioneProfilo.setAttribute("id", "profiloDescrizione");

    const nomeArt = document.createElement("h1");
    nomeArt.setAttribute("id", "nomeArt");
    nomeArt.innerText = nomeArtista;

    const descrizioneProfilo = document.createElement("p");
    descrizioneProfilo.setAttribute("id", "testoDescrizione");
    descrizioneProfilo.innerText = descrizione;

    const buttonVisita = document.createElement("button");
    buttonVisita.setAttribute("id", "buttonVisita" + idUser);
    buttonVisita.setAttribute("class","buttonVisitaProfilo");
    buttonVisita.setAttribute("onclick","visitaProfilo("+idUser+")");
    buttonVisita.innerText = "Visita " + nomeArtista + "";

    sectionDescrizioneProfilo.appendChild(nomeArt);
    sectionDescrizioneProfilo.appendChild(descrizioneProfilo);

    profilo.appendChild(sectionImmagineProfilo);
    profilo.appendChild(sectionDescrizioneProfilo);
    profilo.appendChild(buttonVisita);
    profilo.style.display = "grid";

    listaCompositori.appendChild(profilo);
}

async function creaTabellaCompositori()
{
    const compositori = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/");
    const responseJson = await compositori.json();
    
    for(let i = 0; i < responseJson.length; i++)
    {
        const profiloAutore = new Compositore(responseJson[i].idUser, responseJson[i].nomeArtista, responseJson[i].descrizione, responseJson[i].urlPic, responseJson[i].tema)
        creaProfilo(profiloAutore);
    }
    coloraProfilo(responseJson);
}

async function visitaProfilo(idUser)
{
    const userSpecifico = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/users/" + idUser.toString());

    const userSpecificoJson = await userSpecifico.json();
    const nome = userSpecificoJson.nome;
    const cognome = userSpecificoJson.cognome;

    localStorage.setItem("Nome", nome);
    localStorage.setItem("Cognome", cognome);
    localStorage.setItem("idUser", idUser);

    window.location.href = "paginaCompositore.html";
}

function coloraProfilo(responseJson)
{
    const profili = document.getElementsByClassName("profilo");

    for (let i = 0; i < profili.length; i++)
    {
        if(profili[i] != null && profili[i].style.display === "grid")
        {
            for (let j = 0; j < profili.length; j++)
            {
                if(responseJson[j].tema === "bianco")
                {
                    const figli = profili[i].childNodes;
                    const descrizione = figli[1].childNodes;
                    let textDescrizione = descrizione[1].lastChild;
                    textDescrizione.parentNode.style.backgroundColor = "rgb(242, 242, 242)";
                    // textDescrizione.style.backgroundColor = "rgb(255, 255, 255)";
                    profili[i].style.backgroundColor = "rgb(255, 255, 255)";
                    profili[i].style.color = "rgb(0, 0, 0)";
                    i++
                    continue;
                }

                else if(responseJson[j].tema === "nero")
                {
                    const figli = profili[i].childNodes;
                    const descrizione = figli[1].childNodes;
                    let textDescrizione = descrizione[1].lastChild;
                    textDescrizione.parentNode.style.backgroundColor = "rgb(50, 54, 67)";
                    profili[i].style.backgroundColor = "rgb(68, 72, 87)";
                    profili[i].style.color = "rgb(255, 255, 255)";
                    i++
                    continue;
                }
            }
        }
    }
}