class Compositore
{
    idCompositore
    idUser
    nomeArtista;
    descrizione;
    urlPic;
    tema;

    constructor(idUser, nomeArtista, descrizione, urlPic, tema)
    {
        // this.idCompositore = idCompositore;
        this.idUser = idUser;
        this.nomeArtista = nomeArtista;
        this.descrizione = descrizione;
        this.urlPic = urlPic;
        this.tema = tema;
    }

    getIdCompositore()
    {
        return this.idCompositore;
    }

    getIdUser()
    {
        return this.idUser;
    }

    getNomeArtista()
    {
        return this.nomeArtista;
    }

    getDescrizione()
    {
        return this.descrizione;
    }

    getUrlPic()
    {
        return this.urlPic;
    }

    getTema()
    {
        return this.tema;
    }
}

async function salvaDati()
{
    let immagineGiaPresente;             //bolean
    let titoloGiaPresente;               //bolean
    let descrizioneGiaPresente;          //bolean
    // let temaGiaPresente;                 //bolean
    const sectionProfilo = document.getElementById("profiloCompositore");

    chiudiPopUp();

    const nomeArtista = document.getElementById("nomeArt").innerText;
    const descrizione = document.getElementById("testoDescrizione").innerText;
    const urlPic = document.getElementById("immagineProfilo").src;
    let tema;

    immagineGiaPresente = isImgSet();
    titoloGiaPresente = isNameSet();
    descrizioneGiaPresente = isTextSet();

    if(immagineGiaPresente && titoloGiaPresente && descrizioneGiaPresente && localStorage.getItem("idUser") != null)
    {
        if(sectionProfilo.style.backgroundColor === "rgb(255, 255, 255)")
        {
            tema = "bianco";
        }
    
        else if(sectionProfilo.style.backgroundColor === "rgb(68, 72, 87)")
        {
            tema = "nero";
        }

        const profiloAutore = new Compositore(parseInt(localStorage.getItem("idUser")), nomeArtista, descrizione, urlPic, tema);

        const body = JSON.stringify(profiloAutore);

        const getCompositore = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + profiloAutore.getIdUser() + "/users");
        const getCompositoreJson = await getCompositore.json();

        if(getCompositoreJson.length === 0)
        {
            const postCompositore = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + profiloAutore.getIdUser(),
            {
                method: "POST",
                headers:
                {
                    "content-type":'application/json'
                },
                body: body
            });
        }

        for(compositore of getCompositoreJson)
        {
            if(compositore.nomeArtista != nomeArtista || compositore.descrizione != descrizione || compositore.urlPic != urlPic)
            {
                const postCompositore = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + localStorage.getItem("idCompositore"),
                {
                    method: "PUT",
                    headers:
                    {
                        "content-type":'application/json'
                    },
                    body: body
                });
            }
        }

        salvaTuttiIDati();
    }

    else
    {
        chiudiPopUp();

        const inviaBtn = document.getElementById("inviaProfilo");
        const annullaBtn = document.getElementById("annullaModifica");
        let testoMessaggio = document.getElementById("messaggioProfilo");

        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });
            
        inviaBtn.style.display = "none";
        annullaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai creato il tuo profilo";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById("prezzo").value = '';
        }, 3000);

        return;
    }
}

async function salvaTuttiIDati()
{
    let risultatoSalvataggioSocial = false;
    let risultatoSalvataggioCarte = false;
    let risultatoSalvataggioFoto = false;

    risultatoSalvataggioSocial = await salvaDatiSocial();
    risultatoSalvataggioCarte = await salvaDatiCarte();
    risultatoSalvataggioFoto = await salvaDatiFoto();

    if(risultatoSalvataggioSocial && risultatoSalvataggioCarte && risultatoSalvataggioFoto)
    {
        setTimeout(() =>
        {
            localStorage.clear();
            window.location.href = "index.html";
        }, 1000);
    }
}

async function salvaDatiSocial()
{
    const getSocials = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/socials/" + localStorage.getItem("idCompositore") + "/compositori");
    const getSocialsJson = await getSocials.json();

    salvaSocial(getSocialsJson);
    return true;
}

async function salvaDatiCarte()
{
    const getCarte = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/carte/" + localStorage.getItem("idCompositore") + "/compositori");
    const getCarteJson = await getCarte.json();

    salvaCarta(getCarteJson);
    return true;
}

async function salvaDatiFoto()
{
    const getFoto = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/foto/" + localStorage.getItem("idCompositore") + "/compositori");
    const getFotoJson = await getFoto.json();

    salvaFoto(getFotoJson);
    return true;
}

function nonSalvareDati()
{
    localStorage.clear();
    window.location.href = "index.html";
}