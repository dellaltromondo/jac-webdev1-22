let profiloAutore;

function creaProfiloHtml()
{
    let immagineGiaPresente;             //bolean
    let titoloGiaPresente;               //bolean
    let descrizioneGiaPresente;          //bolean
    let temaGiaPresente;                 //bolean

    const sectionProfilo = document.getElementById("profiloCompositore");

    const temaBianco = document.getElementById("bianco");  
    const temaNero = document.getElementById("nero");

    const nomeArtista = document.getElementById("nomeArtista");
    const testo = document.getElementById("descrizione");
    const input = document.getElementById("imageProfileInput");
    const file = input.files[0];
    
    let contenutoImg = document.getElementById("immagineProfilo").src;
    const testoNomeArtista = document.getElementById("nomeArt");
    const testoDescrizione = document.getElementById("testoDescrizione");
    let immagine = document.getElementById("immagineProfilo");

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

    //verifico le checkbox
    else if (temaBianco.checked == false && temaNero.checked == false && sectionProfilo.style.backgroundColor != "rgb(255, 255, 255)" && sectionProfilo.style.backgroundColor != "rgb(68, 72, 87)")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        inviaBtn.style.display = "none";
        annullaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai scelto il tema del profilo!";
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
    // temaGiaPresente = isThemeSet();

    if(!immagineGiaPresente)
    {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function()
        {
            // const image = reader.result;
            immagine.src = reader.result;
        }
    }

    else if(immagineGiaPresente)
    {
        document.getElementById("immagineProfilo").src = contenutoImg;
    }

    if(!titoloGiaPresente)
    {
        testoNomeArtista.innerText = nomeArtista.value;
    }

    if(!descrizioneGiaPresente)
    {
        testoDescrizione.innerText = testo.value;
    }

    if(document.getElementById("bianco").checked === true)
    {
        const figli = sectionProfilo.childNodes;
        const descrizione = figli[3].childNodes;
        let textDescrizione = descrizione[3].lastChild;
        textDescrizione.parentNode.style.backgroundColor = "rgb(242, 242, 242)";
        sectionProfilo.style.backgroundColor = "rgb(255, 255, 255)";
        sectionProfilo.style.color = "rgb(0, 0, 0)";
    }

    else if(document.getElementById("nero").checked === true)
    {
        const figli = sectionProfilo.childNodes;
        const descrizione = figli[3].childNodes;
        let textDescrizione = descrizione[3].lastChild;
        textDescrizione.parentNode.style.backgroundColor = "rgb(50, 54, 67)";
        sectionProfilo.style.backgroundColor = "rgb(68, 72, 87)";
        sectionProfilo.style.color = "rgb(255, 255, 255)";
    }

    const profilo = document.getElementById("profiloCompositore");
    profilo.style.display = "grid";
    inviaBtn.style.display = "none";
    annullaBtn.style.display = "inline";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display = "none";

    nomeArtista.value = "";
    testo.value = "";
    input.value = "";
    document.getElementById('bianco').checked = false;
    document.getElementById('nero').checked = false;
}

async function creaProfiloFromCompositore(profiloAutore)
{
    const sectionProfilo = document.getElementById("profiloCompositore");

    const input = document.getElementById("imageProfileInput");
    const nomeArtista = document.getElementById("nomeArtista");
    const testo = document.getElementById("descrizione");

    const nomeCompositore = profiloAutore.getNomeArtista();
    const descrizione = profiloAutore.getDescrizione();
    const urlPic = profiloAutore.getUrlPic();

    const testoNomeArtista = document.getElementById("nomeArt");
    const testoDescrizione = document.getElementById("testoDescrizione");
    const immagine = document.getElementById("immagineProfilo");

    immagine.setAttribute("src", urlPic);
    testoDescrizione.innerText = descrizione;
    testoNomeArtista.innerText = nomeCompositore;

    const inviaBtn = document.getElementById("inviaProfilo");
    const annullaBtn = document.getElementById("annullaModifica");
    
    const profili = document.getElementsByClassName("profilo");
    const profilo = profili[0];

    if(profiloAutore.getTema() === "bianco")
    {
        const figli = profilo.childNodes;
        const descrizione = figli[3].childNodes;
        let textDescrizione = descrizione[3].lastChild;
        textDescrizione.parentNode.style.backgroundColor = "rgb(242, 242, 242)";
        profilo.style.backgroundColor = "rgb(255, 255, 255)";
        profilo.style.color = "rgb(0, 0, 0)";
    }

    else if(profiloAutore.getTema() === "nero")
    {
        const figli = profilo.childNodes;
        const descrizione = figli[3].childNodes;
        let textDescrizione = descrizione[3].lastChild;
        textDescrizione.parentNode.style.backgroundColor = "rgb(50, 54, 67)";
        profilo.style.backgroundColor = "rgb(68, 72, 87)";
        profilo.style.color = "rgb(255, 255, 255)";
    }
    profilo.style.display = "grid";
    inviaBtn.style.display = "none";
    annullaBtn.style.display = "inline";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display = "none";

    nomeArtista.value = "";
    testo.value = "";
    input.value = "";

    return;
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

// function isThemeSet()
// {
//     const sectionProfilo = document.getElementById("profiloCompositore");

//     if(sectionProfilo.style.backgroundColor === "rgb(255, 255, 255)" || sectionProfilo.style.backgroundColor === "rgb(68, 72, 87)")
//     {
//         return true;
//     }
    
//     return false;
// }

function modificaProfilo()
{
    const profilo = document.getElementById("profiloCompositore");
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

    const profilo = document.getElementById("profiloCompositore");
    profilo.style.display = "grid";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display = "none";

    nomeArtista.value = "";
    testo.value = "";
    input.value = "";
}