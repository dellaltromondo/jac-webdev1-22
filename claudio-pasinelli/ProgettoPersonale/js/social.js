let idSocial = 1;

let arraySocial = [];
let arrayMedia =
[
    "youtube",
    "deezer",
    "youtube music",
    "spotify",
    "apple music",
    "soundcloud",
    "amazon music",
    "itunes",
    "tidal",
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "tiktok",
    "snapchat",
]

class Social
{
    idSocial;
    idCompositore;
    dataTooltip;
    media;
    link;
    img;
    eliminata;

    constructor(idSocial, idCompositore, dataTooltip, media, link, img, eliminata)
    {
        this.idSocial = idSocial;
        this.idCompositore = idCompositore;
        this.dataTooltip = dataTooltip;
        this.media = media;
        this.link = link;
        this.img = img;
        this.eliminata = eliminata;
    }

    getIdSocial()
    {
        return this.idSocial;
    }

    getIdCompositore()
    {
        return this.idCompositore;
    }

    getMedia()
    {
        return this.media;
    }

    getLink()
    {
        return this.link;
    }

    getImg()
    {
        return this.img;
    }

    getDataTooltip()
    {
        return this.dataTooltip;
    }

    isEliminata()
    {
        return this.eliminata;
    }

    setEliminata(eliminata)
    {
        this.eliminata = eliminata;
    }
}

async function trovaMaxIdSocial()
{
    const idCompositore = localStorage.getItem("idCompositore");
    const getSocials = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/socials/" + idCompositore + "/compositori");
    const getSocialsJson = await getSocials.json();

    let maxId = 1;

    for(socialCompositore of getSocialsJson)
    {
        if(socialCompositore.idSocial > maxId)
        {
            maxId = socialCompositore.idSocial;
        }
    }

    if(maxId != 1)
    {
        idSocial = maxId + 1;
    }
}

async function creaSocialJson()
{
    const inviaBtn = document.getElementById("inviaSocial");
    const annullaBtn = document.getElementById("annullaCreazioneSocial");
    let testoMessaggio = document.getElementById("messaggioFetch");

    if (document.getElementById("nomeSocial").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        inviaBtn.style.display = "none";
        annullaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il nome del social!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            testoMessaggio.style.display = "none";
            inviaBtn.style.display = "flex";
            annullaBtn.style.display = "flex";
            document.getElementById('link').value = "";
        }, 2500);

        return;
    }

    else if (document.getElementById("link").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        inviaBtn.style.display = "none";
        annullaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il link del social!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {   
            testoMessaggio.innerText = "";
            testoMessaggio.style.display = "none";
            inviaBtn.style.display = "flex";
            annullaBtn.style.display = "flex";
            document.getElementById('link').value = "";
        }, 2500);

        return;
    }

    let c = 1;

    for(socialMedia of arrayMedia)
    {
        if(similarity(document.getElementById("nomeSocial").value, socialMedia) >= 0.8)
        {
            break;
        }
        
        c++;

        if(c === arrayMedia.length)
        {
            testoMessaggio.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end'
                });
                
            inviaBtn.style.display = "none";
            annullaBtn.style.display = "none";
            testoMessaggio.style.display = "block";
            testoMessaggio.innerText = "Ci dispiace tanto, ma non conosciamo il sito!";
            testoMessaggio.style.color = "red";
    
            setTimeout(() =>
            {
                testoMessaggio.innerText = "";
                testoMessaggio.style.display = "none";
                inviaBtn.style.display = "flex";
                annullaBtn.style.display = "flex";
                document.getElementById('link').value = "";
            }, 2500);
    
            document.getElementById('nomeSocial').value = '';
    
            return;
        }
    }

    if(!isURLValid(document.getElementById("link").value))
    {
        inviaBtn.style.display = "none";
        annullaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Il link inserito non è valido!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            testoMessaggio.style.display = "none";
            inviaBtn.style.display = "flex";
            annullaBtn.style.display = "flex";
            document.getElementById('link').value = "";
        }, 2500);

        document.getElementById('link').value = '';
        return;
    }

    const risultatoFetch = await isLinkValid(document.getElementById("link").value);

    if(!risultatoFetch)
    {
        inviaBtn.style.display = "none";
        annullaBtn.style.display = "none";
        testoMessaggio.innerText = "Il sito è non raggiungibile!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            testoMessaggio.style.display = "none";
            inviaBtn.style.display = "flex";
            annullaBtn.style.display = "flex";
            document.getElementById('link').value = "";

        }, 2500);

        return;
    }

    else if(risultatoFetch)
    {
        inviaBtn.style.display = "none";
        
        annullaBtn.style.display = "none";
        testoMessaggio.innerText = "Il sito è raggiungibile!";
        testoMessaggio.style.color = "lightgreen";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            testoMessaggio.style.display = "none";
            inviaBtn.style.display = "flex";
            annullaBtn.style.display = "flex";
        }, 2500);
    }

    let media;
    let mediaLowerCase;
    let dataTooltip;
    let link;
    let img;
    
    for(mediaSocial of arrayMedia)
    {
        if(similarity(document.getElementById("nomeSocial").value, mediaSocial) >= 0.8)
        {
            if(mediaSocial === "soundcloud")
            {
                media = "SoundCloud";
                mediaLowerCase = mediaSocial;
                break;
            }

            else if(mediaSocial === "itunes")
            {
                media = "iTunes";
                mediaLowerCase = mediaSocial;
                break;
            }

            else if(mediaSocial === "tiktok")
            {
                media = "TikTok";
                mediaLowerCase = mediaSocial;
                break;
            }
            
            mediaLowerCase = mediaSocial;
            media = everyLetterUpperCase(mediaSocial);
            break;
        }
    }

    dataTooltip = media + ", link: " + document.getElementById("link").value;
    link = document.getElementById("link").value;
    img = "../iconeSocial/" + mediaLowerCase + ".png";
    const idCompositore = localStorage.getItem("idCompositore");

    const social = new Social(idSocial, idCompositore, dataTooltip, media, link, img, false);

    creaSocial(social);
}

async function creaSocial(social)
{
    let userIsCompositore = false;

    if(localStorage.getItem("Compositore") === "VERO")
    {
        userIsCompositore = true;
    }

    let soundcloud;
    let itunes;
    let tiktok;

    if(social.getMedia() === "SoundCloud")
    {
        soundcloud = true;
    }

    else if(social.getMedia() === "iTunes")
    {
        soundcloud = true;
    }

    else if(social.getMedia() === "TikTok")
    {
        tiktok = true;
    }
    
    if(userIsCompositore)
    {
        oggetti = document.forms["social"].getElementsByTagName("input");
    }

    const listaSocial = document.getElementById("listaSocial");

    listaSocial.style.marginTop = "1.5rem";

    const figureSocial = document.createElement("figure");

    if(social.getIdSocial() > idSocial)
    {
        figureSocial.setAttribute("id","social" + social.getIdSocial());
    }
    
    else
    {
        figureSocial.setAttribute("id","social" + idSocial);
    }

    figureSocial.setAttribute("class","social");
    // figureSocial.setAttribute('class','canzone');
    listaSocial.appendChild(figureSocial);

    for(mediaSocial of arrayMedia)
    {
        if(social.getMedia() === everyLetterUpperCase(mediaSocial) && !soundcloud && !itunes)
        {
            figureSocial.setAttribute('data-tooltip', social.getDataTooltip());
            figureSocial.setAttribute('class', 'socialContainer');
            break;
        }
        
        else if (soundcloud || itunes || tiktok)
        {
            figureSocial.setAttribute('data-tooltip', social.getDataTooltip());
            figureSocial.setAttribute('class', 'socialContainer');
            break;
        }
    }
    
    let sectionElimina;
    let elimina;
    let cestino;

    if(userIsCompositore)
    {
        sectionElimina = document.createElement("section");
        sectionElimina.setAttribute("class","eliminaSocial");
        elimina = document.createElement("button");
        cestino = document.createElement("img");
    
        elimina = document.createElement("button");
        elimina.setAttribute("class","elimina");
        elimina.setAttribute("onclick","eliminaSocial("+social.getIdSocial()+")");
    
        cestino = document.createElement("img");
        cestino.setAttribute("src","../img/cestino.png");
        cestino.setAttribute("class","cestinoSocial");
        cestino.setAttribute("title","Elimina social");
        elimina.appendChild(cestino);
    
        sectionElimina.appendChild(elimina);
    
        figureSocial.appendChild(sectionElimina);
    }


    const linkImmagine = document.createElement("a");
    const immagine = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const linkTesto = document.createElement("a");

    immagine.setAttribute("src", social.getImg());
    immagine.setAttribute("alt","Logo di " + social.getMedia());
    immagine.setAttribute("class","zoom");

    linkImmagine.setAttribute("href", social.getLink());
    linkImmagine.setAttribute("target","_blank");
    linkImmagine.appendChild(immagine);

    figureSocial.appendChild(linkImmagine);

    linkTesto.innerText = social.getMedia(); 
    linkTesto.setAttribute("href", social.getLink());
    linkTesto.setAttribute("target", "_blank");
    figcaption.appendChild(linkTesto);
    figureSocial.appendChild(figcaption);
    // }

    //resetto il valore del contenuto del form dopo che è stato utilizzato per creare il link social

    figureSocial.style.animation = "fadeIn 1.2s";
    figureSocial.style.animationIterationCount = "1";

    if(userIsCompositore)
    {
        document.getElementById('nomeSocial').value = '';
        document.getElementById('link').value = '';
    }

    figureSocial.scrollIntoView(
        {
            behavior: 'smooth',
            block: 'end'
        });
        
    arraySocial.push(social);
    idSocial++;

    if(arraySocial.length !== 0)
    {
        listaSocial.style.border = "solid rgb(255, 255, 255)";
        listaSocial.style.borderWidth = "1px 0px 0px 0px";
    }
}

async function isLinkValid(link)
{
    const inviaBtn = document.getElementById("inviaSocial");
    const annullaBtn = document.getElementById("annullaCreazioneSocial");
    let testoMessaggio = document.getElementById("messaggioFetch");

    inviaBtn.style.display = "none";
    annullaBtn.style.display = "none";
    testoMessaggio.style.color = "white";
    testoMessaggio.style.display = "block";
    testoMessaggio.innerText = "Stiamo verificando se il sito è raggiungibile.";

    await new Promise(resolve => setTimeout(resolve, 1000));

    try
    {
        const response = await fetch(link, { mode: 'no-cors' });
        return true;
    } 

    catch (e)
    {
        return false;
    }
}

function isURLValid(urlStr)
{
    let url;

    try
    {
        url = new URL(urlStr);
    }
    
    catch (error)
    {
        return false;
    }

    return true;
}

function eliminaSocial(id)
{
    let isSocialTrovato = false;
    const listaSocial = document.getElementById("listaSocial");

    for (const social of arraySocial)
    {
        if(social.getIdSocial() === parseInt(id))
        {
            const socialDaEliminare = document.getElementById("social"+id.toString());
            social.setEliminata(true);
    
            socialDaEliminare.style.animation = "fadeOut 1.2s";
            socialDaEliminare.style.animationIterationCount = "1";

            setTimeout(() =>
            {
                socialDaEliminare.remove();

                const socials = document.getElementsByClassName("socialContainer");
                
                if(socials.length == 0)
                {
                    listaSocial.style.border = "none";
                    listaSocial.style.borderWidth = "0px 0px 0px 0px";
                }
            }, 1200);

            isSocialTrovato = true;
        }
    }

    if(!isSocialTrovato)
    {
        alert(`Il social "${id}" non è stato trovato!`);
    }
}

function eliminaDefinitivamenteSocial(id)
{
    let isSocialTrovato = false;

    for (const social of arraySocial)
    {
        if(social.getIdSocial() === parseInt(id))
        {
            const indice = arraySocial.indexOf(social);

            arraySocial.splice(indice,1);
            isSocialTrovato = true;
        }
    }

    if(!isSocialTrovato)
    {
        alert(`La traccia "${id}" non è stata trovata!`);
    }
}

function similarity(s1, s2)
{
    let longer = s1;
    let shorter = s2;

    if (s1.length < s2.length)
    {
      longer = s2;
      shorter = s1;
    }

    let longerLength = longer.length;

    if (longerLength == 0)
    {
        return 1.0;
    }

    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2)
{
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let costs = new Array();
    for (let i = 0; i <= s1.length; i++)
    {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++)
        {
            if (i == 0)
            {
                costs[j] = j;
            }

            else
            {
                if (j > 0)
                {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                    newValue = Math.min(Math.min(newValue, lastValue),
                        costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
        {
            costs[s2.length] = lastValue;
        }
    }

    return costs[s2.length];
}

function everyLetterUpperCase(str)
{
    const arr = str.split(" ");

    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return str2 = arr.join(" ");
}

async function salvaSocial(getSocialsJson)
{
    let continua = false;

    let idSocial;
    let idCompositore;
    let dataTooltip;
    let img;
    let link;
    let media;
    let eliminata;

    if(arraySocial.length != 0)
    {
        for(social of arraySocial)
        {
            const body = JSON.stringify(social);
            
            if(social.isEliminata() === true)
            {
                await cancellaSocial(social, body);
            }
        }
    }
    
    if(arraySocial.length != 0)
    {
        for(social of arraySocial)
        {
            const body = JSON.stringify(social);
    
            for(socialCompositore of getSocialsJson)
            {
                continua = false;
                
                idSocial = socialCompositore.idSocial;
                idCompositore = socialCompositore.idCompositore;
                dataTooltip = socialCompositore.dataTooltip;
                img = socialCompositore.img;
                link = socialCompositore.link;
                media = socialCompositore.media;
                eliminata = socialCompositore.eliminata

                if(social.getIdSocial() === idSocial)
                {
                    if(social.getIdCompositore() === idCompositore)
                    {
                        if(social.getDataTooltip() === dataTooltip)
                        {
                            if(social.getImg() === img)
                            {
                                if(social.getLink() === link)
                                {
                                    if(social.getMedia() === media)
                                    {
                                        continua = true;
                                        break;
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
                postaSocial(body);
            }
        }
    }

    return;
}

async function postaSocial(body)
{
    const postSocial = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/socials/" + localStorage.getItem("idCompositore"),
    {
        method: "POST",
        headers:
        {
            "content-type":'application/json'
        },
        body: body
    });
}

async function cancellaSocial(social, body)
{
    const idSocial = social.getIdSocial().toString();
    eliminaDefinitivamenteSocial(idSocial);
    
    const cancellaSocial = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/socials/" + idSocial,
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