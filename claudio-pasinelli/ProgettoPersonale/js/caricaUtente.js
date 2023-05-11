let idCompositore;

async function impostaIdCompositore()
{
    const compositoreSpecifico = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + localStorage.getItem("idUser") + "/users");
    const compositoreSpecificoJson = await compositoreSpecifico.json();

    if(compositoreSpecificoJson.length === 0)
    {
        const getCompositori = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/");
        const getCompositoriJson = await getCompositori.json();
            
        let maxId = 1;

        for(compositore of getCompositoriJson)
        {
            if(compositore.idCompositore > maxId)
            {
                maxId = compositore.idCompositore;
            }
        }

        localStorage.setItem("idCompositore", maxId + 1);
        return true;
    }

    else
    {
        for(compositoreRisposta of compositoreSpecificoJson)
        {
            idCompositore = compositoreRisposta.idCompositore;
        }

        localStorage.setItem("idCompositore", idCompositore);
        return true;
    }
}

async function caricaUtente()
{
    let userNickname = document.getElementById("userNickname");

    if(localStorage.getItem("Nome") === null || localStorage.getItem("Cognome") === null && localStorage.getItem("NomeUser") === null && localStorage.getItem("CognomeUser") === null || localStorage.getItem("Nome") != "undefined" || localStorage.getItem("Cognome") != "undefined" && localStorage.getItem("NomeUser") != "undefined" && localStorage.getItem("CognomeUser") != "undefined")
    {
        userNickname.innerText = "Impossibile caricare il nome dell'utente";
    }

    if((localStorage.getItem("Nome") != "undefined" && localStorage.getItem("Cognome") != "undefined" || localStorage.getItem("Nome") != null && localStorage.getItem("Cognome") != null) && (localStorage.getItem("NomeUser") === null || localStorage.getItem("CognomeUser") === null) || localStorage.getItem("NomeUser") === "undefined" || localStorage.getItem("CognomeUser") === "undefined")
    {
        const nome = localStorage.getItem("Nome");
        const cognome = localStorage.getItem("Cognome");
        userNickname.innerText = nome + " " + cognome;
    }

    else
    {
        const nome = localStorage.getItem("NomeUser");
        const cognome = localStorage.getItem("CognomeUser");
        userNickname.innerText = nome + " " + cognome;
    }

    compositoreSpecifico();
}

async function compositoreSpecifico()
{
    let compositoreByIdUserSpecifico;
    let compositoreByIdUserSpecificoJson

    try
    {
        compositoreByIdUserSpecifico = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + localStorage.getItem("idUser") + "/users");
        compositoreByIdUserSpecificoJson = await compositoreByIdUserSpecifico.json();
    }
    catch(err)
    {
        console.log(err.message);
        //il compositore ha l'account ma non ha un profilo (ha fatto da poco il login, quindi ha appena creato il suo account)
    }

    let risultato = false;
    risultato = await impostaIdCompositore();

    if(risultato === true)
    {
        idCompositore = localStorage.getItem("idCompositore");

        caricaTuttiIDati();

        return;
    }
}

async function caricaTuttiIDati()
{
    await caricaDatiProfilo();
    await caricaDatiFoto();
    await caricaDatiCarte();
    await caricaDatiSocial();
}

async function caricaDatiProfilo()
{
    try
    {
        //creo il profilo del compositore
        const compositore = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + idCompositore);
        const compositoreJson = await compositore.json();
        
        const profiloAutore = new Compositore(compositoreJson.idUser, compositoreJson.nomeArtista, compositoreJson.descrizione, compositoreJson.urlPic, compositoreJson.tema);
        await creaProfiloFromCompositore(profiloAutore);
    }
    catch(err)
    {

    }
}

async function caricaDatiFoto()
{
    try
    {
        //carico le foto e le creo
        const getFoto = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/foto/" + idCompositore + "/compositori");
        const getFotoJson = await getFoto.json();
        trovaMaxIdFoto();
    
        for(fotoCompositore of getFotoJson)
        {
            const idFoto = fotoCompositore.idFoto;
            const idCompositore = fotoCompositore.idCompositore;
            const urlFoto = fotoCompositore.urlFoto;
            const eliminata = fotoCompositore.eliminata;
    
            const foto = new Foto(idFoto, idCompositore, urlFoto, eliminata);
            await addImageObj(foto);
        }
    }
    catch(err)
    {

    }
}

async function caricaDatiCarte()
{
    try
    {
        //carico le carte e le creo
        const getCarte = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/carte/" + idCompositore + "/compositori");
        const getCarteJson = await getCarte.json();
        trovaMaxIdCarta();

        for(let i = 0; i < getCarteJson.length; i++)
        {
            const carta = new Carta(getCarteJson[i].idCarta, getCarteJson[i].idCompositore, getCarteJson[i].titolo, getCarteJson[i].prezzo, getCarteJson[i].mese, getCarteJson[i].img, getCarteJson[i].eliminata)
            await creaCartaHTML(carta);
        }
    }
    catch(err)
    {

    }
}

async function caricaDatiSocial()
{
    try
    {
        //carico i social e li creo
        const getSocials = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/socials/" + idCompositore + "/compositori");
        const getSocialsJson = await getSocials.json();
        trovaMaxIdSocial();
    
        for(socialCompositore of getSocialsJson)
        {
            const idSocial = socialCompositore.idSocial;
            const idCompositore = socialCompositore.idCompositore;
            const dataTooltip = socialCompositore.dataTooltip;
            const img = socialCompositore.img;
            const link = socialCompositore.link;
            const media = socialCompositore.media;
            const eliminata = socialCompositore.eliminata;
    
            const social = new Social(idSocial, idCompositore, dataTooltip, media, link, img, eliminata);
    
            await creaSocial(social);
        }
    }
    catch(err)
    {
        
    }
}