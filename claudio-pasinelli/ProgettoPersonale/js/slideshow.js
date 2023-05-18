let currentIndex = 0;
let images = [];
let arrayFoto = [];
let animazioneFatta = false;
let idFoto = 1;
class Foto
{
    idFoto;
    idCompositore;
    urlFoto;
    eliminata;

    constructor(idFoto, idCompositore, urlFoto, eliminata)
    {
        this.idFoto = idFoto;
        this.idCompositore = idCompositore;
        this.urlFoto = urlFoto;
        this.eliminata = eliminata;
    }

    getIdFoto()
    {
        return this.idFoto;
    }

    getIdCompositore()
    {
        return this.idCompositore;
    }

    getUrlFoto()
    {
        return this.urlFoto;
    }

    isEliminata()
    {
        return this.eliminata;
    }

    setUrlFoto(urlFoto)
    {
        this.urlFoto = urlFoto;
    }

    setEliminata(eliminata)
    {
        this.eliminata = eliminata;
    }
}

async function trovaMaxIdFoto()
{
    const idCompositore = localStorage.getItem("idCompositore");
    const getFoto = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/foto/" + idCompositore + "/compositori");
    const getFotoJson = await getFoto.json();

    let maxId = 1;

    for(FotoCompositore of getFotoJson)
    {
        if(FotoCompositore.idFoto > maxId)
        {
            maxId = FotoCompositore.idFoto;
        }
    }

    if(maxId != 1)
    {
        idFoto = maxId + 1;
    }
}

function showImage(index)
{
    let userIsCompositore = false;
    const currentImage = document.getElementById("currentImage");
    const precedente = document.getElementById("prevImage");
    const successivo = document.getElementById("nextImage");
    let cancella;

    if(localStorage.getItem("Compositore") === "VERO")
    {
        cancella = document.getElementById("deleteImage");
        userIsCompositore = true;
    }

    if (images.length === 0)
    {
        currentImage.src = "";

        precedente.style.visibility = "hidden";
        successivo.style.visibility = "hidden";

        if(userIsCompositore)
        {
            cancella.style.visibility = "hidden";
        }
    }

    else
    {
        precedente.style.visibility = "visible";
        successivo.style.visibility = "visible";

        if(userIsCompositore)
        {
            cancella.style.visibility = "visible";
        }
        
        currentImage.src = images[index].getUrlFoto();

        if(!animazioneFatta)
        {
            playAnimation(currentImage);
        }

        else if(images.length > 1 && animazioneFatta)
        {
            animazioneFatta = false;

            playAnimation(currentImage);
        }
    }
}

function nextImage()
{
    if (images.length === 0)
    {
        return;
    }

    if (currentIndex === images.length - 1)
    {
        currentIndex = 0;
    }

    else
    {
        currentIndex++;
    }

    showImage(currentIndex);
}

function prevImage()
{
    if (images.length === 0)
    {
        return;
    }

    if (currentIndex === 0)
    {
        currentIndex = images.length - 1;
    }

    else
    {
        currentIndex--;
    }

    showImage(currentIndex);
}

function addImage()
{
    const input = document.getElementById("imageInput");
    const file = input.files[0];

    const inviaBtn = document.getElementById("aggiungiImmagine");
    let testoMessaggio = document.getElementById("messaggioGalleria");

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
        }, 3000);

        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function()
    {
        const image = reader.result;
        const foto = new Foto(idFoto, parseInt(localStorage.getItem("idCompositore")), image, false);
        images.push(foto);
        arrayFoto.push(foto);

        // if (currentIndex === 0)
        // {
        //     showImage(0);
        // }
    }

    input.value = "";
}

async function addImageObj(foto)
{
    images.push(foto);
    arrayFoto.push(foto);
}

function deleteImage()
{
    if (images.length === 0)
    {
        return;
    }

    arrayFoto[currentIndex].setEliminata(true);

    images.splice(currentIndex, 1);

    if (currentIndex === images.length)
    {
        currentIndex--;
    }

    showImage(currentIndex);
}

function eliminaDefinitivamenteFoto(id)
{
    for (const foto of arrayFoto)
    {
        if(foto.getIdFoto() === parseInt(id))
        {
            const indice = arrayFoto.indexOf(foto);

            arrayFoto.splice(indice,1);
        }
    }
}

function playAnimation (image)
{
    image.style.animation = "fadeIn 1.2s";
    image.style.animationIterationCount = "1";
    animazioneFatta = true;

    setTimeout(() =>
    {
        image.style.animation = "";
        image.style.animationIterationCount = "0";
    }, 1200);
}

async function salvaFoto(getFotoJson)
{
    let continua = false;

    let idFoto;
    let idCompositore;
    let urlFoto;
    let eliminata;

    if(arrayFoto.length != 0)
    {
        for(foto of arrayFoto)
        {
            const body = JSON.stringify(foto);
            
            if(foto.isEliminata() === true)
            {
                await cancellaFoto(foto, body);
            }
        }
    }
    
    for(foto of arrayFoto)
    {
        const body = JSON.stringify(foto);

        for(fotoCompositore of getFotoJson)
        {
            continua = false;

            idFoto = fotoCompositore.idFoto;
            idCompositore = fotoCompositore.idCompositore;
            urlFoto = fotoCompositore.urlFoto;
            eliminata = fotoCompositore.eliminata;

            if(foto.getIdFoto() === idFoto)
            {
                if(foto.getIdCompositore() === idCompositore)
                {
                    if(foto.getUrlFoto() === urlFoto)
                    {
                        if(foto.isEliminata() === eliminata)
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

        if(!continua)
        {
            postaFoto(body);
        }
    }

    return;
}

async function postaFoto(body)
{
    const postFoto = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/foto/" + localStorage.getItem("idCompositore"),
    {
        method: "POST",
        headers:
        {
            "content-type":'application/json'
        },
        body: body
    });
}

async function cancellaFoto(foto, body)
{
    const idFoto = foto.getIdFoto().toString();
    eliminaDefinitivamenteFoto(foto);
    
    const cancellaFoto = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/foto/" + idFoto,
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

setInterval(function()
{
    nextImage();
}, 5000);