let profiloAutore;

function creaProfilo()
{
    let immagineGiaPresente;             //bolean
    let titoloGiaPresente;               //bolean
    let descrizioneGiaPresente;          //bolean

    const nomeArtista = document.getElementById("nomeArtista");
    const testo = document.getElementById("descrizione");
    const input = document.getElementById("imageProfileInput");
    const file = input.files[0];
    
    const contenutoImg = document.getElementById("immagineProfilo").src;
    const testoNomeArtista = document.getElementById("nomeArt");
    const testoDescrizione = document.getElementById("testoDescrizione");
    const immagine = document.getElementById("immagineProfilo");

    const inviaBtn = document.getElementById("inviaProfilo");
    const annullaBtn = document.getElementById("annullaModifica");
    let testoMessaggio = document.getElementById("messaggioProfilo");

    /*controlli:
    la foto dell'artista c'è già?
    il nome dell'artista c'è già?
    la descrizione dell'artista c'è già?
    */

    if (!file && contenutoImg === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });
            
        inviaBtn.style.display = "none";
        annullaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito nessuna immagine!";
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

    if(nomeArtista.value === "" && document.getElementById("nomeArt").innerText === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });
            
        inviaBtn.style.display = "none";
        annullaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito tuo nome!";
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

    if(testo.value === "" && document.getElementById("testoDescrizione").innerText === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });
            
        inviaBtn.style.display = "none";
        annullaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito nessuna descrizione!";
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

    immagineGiaPresente = isImgSet();
    titoloGiaPresente = isNameSet();
    descrizioneGiaPresente = isTextSet();

    if(!immagineGiaPresente)
    {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function()
        {
            // const image = reader.result;
            immagine.src=reader.result;
        }
    }

    if(!titoloGiaPresente)
    {
        testoNomeArtista.innerText = nomeArtista.value;
    }

    if(!descrizioneGiaPresente)
    {
        testoDescrizione.innerText = testo.value;
    }

    const profilo = document.getElementById("profilo");
    profilo.style.display = "grid";
    inviaBtn.style.display = "none";
    annullaBtn.style.display = "inline";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display = "none";

    nomeArtista.value = "";
    testo.value = "";
    input.value = "";
}

function isImgSet()
{
    const input = document.getElementById("imageProfileInput");
    const file = input.files[0];
    const contenutoImg = document.getElementById("immagineProfilo").src;

    if (!file && contenutoImg !== "")
    {
        return true;
    }
    
    return false;
}

function isNameSet()
{
    const nomeArtista = document.getElementById("nomeArtista");

    if(nomeArtista.value.trim().length === 0)
    {
        return true;
    }

    else if (nomeArtista.value === "" && document.getElementById("nomeArt").innerText !== "")
    {
        return true;
    }

    return false;
}

function isTextSet()
{
    const testo = document.getElementById("descrizione");

    if(testo.value.trim().length === 0)
    {
        return true;
    }

    else if (testo.value === "" && document.getElementById("testoDescrizione").innerText !== "")
    {
        return true;
    }
    
    return false;
}

function modificaProfilo()
{
    const profilo = document.getElementById("profilo");
    profilo.style.display = "none";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display="flex";
    const inviaBtn = document.getElementById("inviaProfilo");
    inviaBtn.style.display = "inline";
}

function annullaModificaProfilo()
{
    const inviaBtn = document.getElementById("inviaProfilo");
    inviaBtn.style.display = "none";

    const nomeArtista = document.getElementById("nomeArtista");
    const testo = document.getElementById("descrizione");
    const input = document.getElementById("imageProfileInput");

    const profilo = document.getElementById("profilo");
    profilo.style.display = "grid";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display = "none";

    nomeArtista.value = "";
    testo.value = "";
    input.value = "";
}