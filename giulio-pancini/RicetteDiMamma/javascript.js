class Ricetta {

    #immagine
    #titolo;
    #descrizione;
    #durata;
    #listaPassaggi;

    constructor(immagine, titolo, descrizione, durata, listaPassaggi = []) {

        this.#immagine = immagine;
        this.#titolo = titolo;
        this.#descrizione = descrizione;
        this.#durata = durata;
        this.#listaPassaggi = listaPassaggi;
    }

    getImmagine() {

        return this.#immagine;
    }
    getTitolo() {

        return this.#titolo;
    }
    getDescrizione() {

        return this.#descrizione;
    }
    getDurata() {

        return this.#durata;
    }
    getListaPassaggi() {

        return this.#listaPassaggi;
    }
    aggiungiPassaggio(passaggio) {

        this.#listaPassaggi.push(passaggio);
    }
}

const arrayRicette = [];

const pastaAlPesto = new Ricetta(
    "http://milrecetas.net/wp-content/uploads/2017/08/pasta-al-pesto-3.jpg",
    "Pasta al Pesto",
    "Classico piatto della tradizione genovese",
    15,
    [`Fill a large pot with lightly salted water and bring to a rolling boil. Stir in pasta and return to a boil. Cook pasta uncovered, stirring occasionally, until tender yet firm to the bite, about 8 to 10 minutes. Drain and transfer into a large bowl.`, `Meanwhile, heat oil in a frying pan over medium-low heat. Add onion; cook and stir until softened, about 3 minutes. Stir in pesto, salt, and pepper until warmed through.`, `Add pesto mixture to hot pasta; stir in grated cheese and toss well to coat.`]
);

const macaroniSalad = new Ricetta(
    "https://www.allrecipes.com/thmb/m9v_F76Pth4gOG0ROU5Tyhh8sV4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1132910-magnificent-macaroni-salad-photo-by-reneepaj-color-corrected-916e5f6f10c349a487d0d65f962ec5f8.jpg",
    "Macaroni Salad",
    "This recipe for macaroni salad with egg is a slightly sweet, classic macaroni salad.",
    30,
    [`Bring a large pot of lightly salted water to a boil. Cook macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, about 8 minutes. Drain.`, `Rinse macaroni in cold water until cool; drain.`, `Stir mayonnaise, onion, parsley, mustard, rice vinegar, sugar, celery seed, and salt together in a bowl. Add macaroni and eggs and stir to coat.`, `Chill in the refrigerator for 30 minutes before serving.`]
);

arrayRicette.push(pastaAlPesto);
arrayRicette.push(macaroniSalad);

function mostraRicette() {

    bottone.forEach(element => {
        element.style.display = 'block';
    });
}

function durata15() {

    arrayRicette.forEach(element => {
        let durata = parseInt(element.getDurata());
        if (durata <= 15) {

            
        }
    });
    return durata > 15;
}

function recuperaDatiDaForm() {

    const immagine = document.getElementById("immagine").src;
    const titolo = document.getElementById("nomeRicetta").value;
    const descrizione = document.getElementById("breveDesc").value;
    const durata = document.getElementById("tempo").value;

    const elements = Array.from(document.getElementsByClassName("inputUtente"));
    const listaPassaggi = Array.from(elements).map(element => element.value);

    const ricetta = new Ricetta(immagine, titolo, descrizione, durata, listaPassaggi);

    arrayRicette.push(ricetta);

    return ricetta;
}

/////////////////SALVA CONTENUTO///////////////////////

function caricaArrayRicetta(array) {

    array.forEach(element => {
        const buttons = Array.from(document.getElementsByClassName("apri"));
        console.log("kasgdaejgdjhab " + buttons.length);
        let y = -1;
        for (i = 0; i < buttons.length; i++) {

            const idButtons = parseInt(buttons[i].getAttribute("id"));

            if (idButtons > y) {

                y = idButtons;
            }
        }

        const button = document.createElement("button");
        button.setAttribute("class", "apri");
        let k = y + 2;
        let idButton = String(k);
        button.setAttribute("id", idButton);
        button.setAttribute("type", "button");

        const immagineRicetta = element.getImmagine();
        const titoloRicetta = element.getTitolo();
        const descRicetta = element.getDescrizione();
        const timeRicetta = element.getDurata();

        const immagine = document.createElement("img");
        immagine.setAttribute("alt", immagineRicetta);
        immagine.setAttribute("src", immagineRicetta);

        const info = document.createElement("div");
        info.setAttribute("class", "infoRicetta");

        const titolo = document.createElement("h3");

        const desc = document.createElement("p");

        const time = document.createElement("span");
        time.setAttribute("class", "time");

        const time0 = document.createElement("span");
        time0.setAttribute("class", "time0");

        titolo.innerText = titoloRicetta;
        desc.innerText = descRicetta;
        time.innerText = timeRicetta;
        time0.innerText = " minuti";

        info.appendChild(titolo);
        info.appendChild(desc);
        info.appendChild(time);
        info.appendChild(time0);

        button.appendChild(immagine);
        button.appendChild(info);

        const main = document.getElementsByTagName("main")[0];

        main.appendChild(button);

        //-------------------------------------------------------------------------------//

        //ciclo gli "id" per sapere a che numero sono arrivato
        //per sapere quale assegnare alla nuova ricetta caricata
        const wrappers = Array.from(document.getElementsByClassName("wrapper"));
        let x = 0;
        for (i = 0; i < wrappers.length; i++) {

            const idWrappers = parseInt(wrappers[i].getAttribute("id"));

            if (idWrappers > x) {

                x = idWrappers;
            }
        }

        console.log("il valore di x è: " + x);

        const contenuto = document.createElement("div");
        contenuto.setAttribute("class", "contenuto");

        const container = document.createElement("div");
        container.setAttribute("class", "wrapper");
        let z = x + 2;
        let idWrapper = String(z);
        console.log("il valore id del wrapper è x + 2: " + idWrapper);
        container.setAttribute("id", idWrapper);

        const contenutoFooter = document.createElement("div");
        contenutoFooter.setAttribute("class", "contenutoFooter");

        const bottonePrev = document.createElement("button");
        bottonePrev.setAttribute("class", "prev btnRicetta");
        bottonePrev.innerText = "Previous";

        const totalePassaggi = document.createElement("div");
        totalePassaggi.setAttribute("class", "totalePassaggi");

        const bottoneNext = document.createElement("button");
        bottoneNext.setAttribute("class", "next btnRicetta");
        bottoneNext.innerText = "Next";

        // const elencoPassaggi = Array.from(document.getElementsByClassName("inputUtente"));
        const elencoPassaggi = element.getListaPassaggi();

        if (elencoPassaggi instanceof Array) {
            console.log("elenco passaggi è un array");
        } else {
            console.log("elenco passaggi NON è un array");
        }

        console.log(elencoPassaggi);

        elencoPassaggi.forEach(element => {

            let passaggio = document.createElement("p");
            passaggio.setAttribute("class", "passaggi");
            passaggio.innerText = element;

            let pass = document.createElement("div");
            pass.setAttribute("class", "pass");

            pass.appendChild(passaggio);

            contenuto.appendChild(pass);
        });

        container.appendChild(contenuto);
        main.appendChild(container);

        contenutoFooter.appendChild(bottonePrev);
        contenutoFooter.appendChild(totalePassaggi);
        contenutoFooter.appendChild(bottoneNext);

        contenuto.appendChild(contenutoFooter);

        wrapper.push(container);
        bottone.push(button);
        slideShowElements.push(contenuto);

        apriRicetta();
        mostraPassaggi();
        mostraRicette();

        wrapperAgg[0].style.display = "none";
    });
    //ciclo gli "id" per sapere a che numero sono arrivato
    //per sapere quale assegnare alla nuova ricetta caricata

}

function salvaRicetta() {

    const ricetta = recuperaDatiDaForm();
    //ciclo gli "id" per sapere a che numero sono arrivato
    //per sapere quale assegnare alla nuova ricetta caricata
    const buttons = Array.from(document.getElementsByClassName("apri"));
    let y = 0;
    for (i = 0; i < buttons.length; i++) {

        const idButtons = parseInt(buttons[i].getAttribute("id"));

        if (idButtons > y) {

            y = idButtons;
        }
    }

    const button = document.createElement("button");
    button.setAttribute("class", "apri");
    let k = y + 2;
    let idButton = String(k);
    button.setAttribute("id", idButton);
    button.setAttribute("type", "button");

    const immagineRicetta = ricetta.getImmagine();
    const titoloRicetta = ricetta.getTitolo();
    const descRicetta = ricetta.getDescrizione();
    const timeRicetta = ricetta.getDurata();

    const immagine = document.createElement("img");
    immagine.setAttribute("alt", immagineRicetta);
    immagine.setAttribute("src", immagineRicetta);

    const info = document.createElement("div");
    info.setAttribute("class", "infoRicetta");

    const titolo = document.createElement("h3");

    const desc = document.createElement("p");

    const time = document.createElement("span");
    time.setAttribute("class", "time");

    const time0 = document.createElement("span");
    time0.setAttribute("class", "time0");

    titolo.innerText = titoloRicetta;
    desc.innerText = descRicetta;
    time.innerText = timeRicetta;
    time0.innerText = " minuti";

    info.appendChild(titolo);
    info.appendChild(desc);
    info.appendChild(time);
    info.appendChild(time0);

    button.appendChild(immagine);
    button.appendChild(info);

    const main = document.getElementsByTagName("main")[0];

    main.appendChild(button);

    //-------------------------------------------------------------------------------//

    //ciclo gli "id" per sapere a che numero sono arrivato
    //per sapere quale assegnare alla nuova ricetta caricata
    const wrappers = Array.from(document.getElementsByClassName("wrapper"));
    let x = 0;
    for (i = 0; i < wrappers.length; i++) {

        const idWrappers = parseInt(wrappers[i].getAttribute("id"));

        if (idWrappers > x) {

            x = idWrappers
        }
    }

    console.log("il valore di x è: " + x);

    const contenuto = document.createElement("div");
    contenuto.setAttribute("class", "contenuto");

    const container = document.createElement("div");
    container.setAttribute("class", "wrapper");
    let z = x + 2;
    let idWrapper = String(z);
    console.log("il valore id del wrapper è x + 2: " + idWrapper);
    container.setAttribute("id", idWrapper);

    const contenutoFooter = document.createElement("div");
    contenutoFooter.setAttribute("class", "contenutoFooter");

    const bottonePrev = document.createElement("button");
    bottonePrev.setAttribute("class", "prev btnRicetta");
    bottonePrev.innerText = "Previous";

    const totalePassaggi = document.createElement("div");
    totalePassaggi.setAttribute("class", "totalePassaggi");

    const bottoneNext = document.createElement("button");
    bottoneNext.setAttribute("class", "next btnRicetta");
    bottoneNext.innerText = "Next";

    // const elencoPassaggi = Array.from(document.getElementsByClassName("inputUtente"));
    const elencoPassaggi = ricetta.getListaPassaggi();

    if (elencoPassaggi instanceof Array) {
        console.log("elenco passaggi è un array");
    } else {
        console.log("elenco passaggi NON è un array");
    }

    console.log(elencoPassaggi);

    elencoPassaggi.forEach(element => {

        let passaggio = document.createElement("p");
        passaggio.setAttribute("class", "passaggi");
        passaggio.innerText = element;

        let pass = document.createElement("div");
        pass.setAttribute("class", "pass");

        pass.appendChild(passaggio);

        contenuto.appendChild(pass);
    });

    container.appendChild(contenuto);
    main.appendChild(container);

    contenutoFooter.appendChild(bottonePrev);
    contenutoFooter.appendChild(totalePassaggi);
    contenutoFooter.appendChild(bottoneNext);

    contenuto.appendChild(contenutoFooter);

    wrapper.push(container);
    bottone.push(button);
    slideShowElements.push(contenuto);

    apriRicetta();
    mostraPassaggi();
    mostraRicette();

    wrapperAgg[0].style.display = "none";
}

////////////////AUTOSCROLL TEXTAREA////////////////

function auto_grow(element) {

    element.style.height = "5rem";
    element.style.height = (element.scrollHeight) + "px";
}

///////////////MODULO AGGIUNTA RICETTA///////////////////

const wrapperAgg = Array.from(document.getElementsByClassName("wrapperAgg"));
const btnAgg = Array.from(document.getElementsByClassName("btnAgg"));
console.log("lunghezza array *wrapperAgg*: " + wrapperAgg.length);
console.log("lunghezza array *btnAgg*: " + btnAgg.length);

btnAgg[0].onclick = function () {
    wrapperAgg[0].style.display = "block";
}

// click all'esterno del wrapperAgg, chiude il wrapperAgg
wrapperAgg[0].onclick = function (event) {

    if (event.target == wrapperAgg[0]) {

        wrapperAgg[0].style.display = "none";
    }
}

////////////////AGGIUNGI AREA TESTO//////////////////////

function aggiungiTextarea() {
    const newTextarea = document.createElement("textarea");
    newTextarea.placeholder = "Inserisci il nuovo passaggio della tua tua ricetta";

    const bodyAgg = document.getElementById("bodyAgg");
    newTextarea.setAttribute("class", "inputUtente");
    bodyAgg.appendChild(newTextarea);
}

//////////////////RIMUOVI AREA TESTO/////////////////////

function rimuoviTextarea() {

    const bodyAgg = document.getElementById("bodyAgg");
    const lastTextarea = bodyAgg.lastElementChild;

    if (bodyAgg.childElementCount == 1) {
        alert("Non puoi rimuovere l'unica area di testo");
    } else {
        bodyAgg.removeChild(lastTextarea);
    }
}

/////////////////APRI RICETTA////////////////////////////

const bottone = Array.from(document.getElementsByClassName("apri"));
const wrapper = Array.from(document.getElementsByClassName("wrapper"));
console.log("lunghezza array *apri*: " + bottone.length)
console.log("lunghezza array *wrapper*: " + wrapper.length)
//'paginaRicetta' è l'esterno della ricetta, non il contenuto

function apriRicetta() {

    for (let i = 0; i < wrapper.length; i++) {
        let idBottone = parseInt(bottone[i].getAttribute("id"));
        let idWrapper = parseInt(wrapper[i].getAttribute("id"));

        if (idBottone == idWrapper - 1) {

            bottone[i].onclick = function () {

                wrapper[i].style.display = "block";
            }

            wrapper[i].onclick = function (event) {

                if (event.target == wrapper[i]) {

                    wrapper[i].style.display = "none";
                }
            }
        }
    }
}

window.onload = () => {

    apriRicetta();
    mostraPassaggi();
    caricaArrayRicetta(arrayRicette);
}
////////////////////////SCORRI PASSAGGI RICETTA///////////////////////

class SlideShow {
    constructor(paragraphs, indexElement) {

        this.paragraphs = paragraphs;
        this.currentSlide = 0;
        this.showSlide(this.currentSlide);
        this.indexElement = indexElement;
    }

    showSlide(slideIndex) {

        this.paragraphs.forEach((p) => {

            p.style.display = 'none';
        });

        this.paragraphs[slideIndex].style.display = 'block';

        if (this.indexElement) {

            this.indexElement.textContent = `${slideIndex + 1} / ${this.paragraphs.length}`;
        }
    }

    nextSlide() {

        if (this.currentSlide === this.paragraphs.length - 1) {

            this.currentSlide = 0;
        } else {

            this.currentSlide++;
        }

        this.showSlide(this.currentSlide);
    }

    prevSlide() {

        if (this.currentSlide === 0) {

            this.currentSlide = this.paragraphs.length - 1;
        } else {

            this.currentSlide--;
        }

        this.showSlide(this.currentSlide);
    }
}

const slideShowElements = Array.from(document.getElementsByClassName('contenuto'));

function mostraPassaggi() {

    slideShowElements.forEach((element) => {

        const paragraphs = element.getElementsByClassName('passaggi');
        const index = element.querySelector('.totalePassaggi');
        const contenuto = new SlideShow(Array.from(paragraphs), index);

        const nextButton = element.querySelector('.next');
        nextButton.addEventListener('click', () => {
            contenuto.nextSlide();
        });

        const prevButton = element.querySelector('.prev');
        prevButton.addEventListener('click', () => {
            contenuto.prevSlide();
        });
    });
}

////////////////////GESTIONE FILTRI////////////////////
/*
const durata = Array.from(document.getElementsByClassName("time"));

// const durata15 = [];
// const durata30 = [];
// const durata45 = [];
// const durata60 = [];

// const minuti = [];

function durata15() {

    durata.forEach(element => {

        const minuti = parseInt(element.className);
        // const bottoneRelativo = element.closest('.apri');
        // console.log('sad a ' + bottoneRelativo)
        console.log("logga minuti " + minuti)


        if (minuti <= 30) {

            const bottoneRelativo = element.closest('apri');
            bottoneRelativo.style.display = 'none';
            console.log("logga bottone relativo" + bottoneRelativo);
        }
        // else {

        //     const bottoneRelativo2 = element.closest('apri');
        //     bottoneRelativo2.style.display = 'block';
        // }
    });
}

function selezioneFiltro() {

    const tutti = Array.from(document.getElementsByClassName('time'));
    console.log(tutti)

    // const arrayAppoggio = [];

    tutti.forEach(element => {

        // const elementoParsato = parseInt(element.textContent);
        // arrayAppoggio.push(elementoParsato)

        if (parseInt(element.textContent) < 15) {

            element.style.display = "none";
        } else {

            element.style.display = "block";
        }

        // arrayAppoggio.forEach(element => {
            
        //     if (element < 15) {

        //         element.style.display = "none";
        //     }
        // });
    });
}

    const bottoneMenoDi15 = document.getElementById('bottoneMenoDi15');
    // const checkBoxAnimals = document.getElementById('animals');

    //remembers if checked
    const array15minuti = []
    // let unChecked = []

    if (menoDi15.addEventListener("click") == true ) {

    }

    if (checkBoxCars.checked == true){isChecked.push('cars')}else{unChecked.push('cars')}
    if (checkBoxAnimals.checked == true){isChecked.push('animals')}else{unChecked.push('animals')}
    if (checkBoxPlant.checked == true){isChecked.push('plants')}else{unChecked.push('plants')}
    console.log('checked: '+ isChecked + ' unchecked: ' + unChecked)

    //Add display none to unChecked array
for(i=0;i<unChecked.length;i++) {
    let getClass = document.getElementsByClassName(unChecked[i]);
    for(c=0;c<getClass.length;c++) {
        getClass[c].style.display ="none";
    }}
//Add display block to isChecked array
    for(i=0;i<isChecked.length;i++) {
        let getClass = document.getElementsByClassName(isChecked[i]);
        for(c=0;c<getClass.length;c++) {
            getClass[c].style.display ="block";
        }
}

function filtroSelezione(tempo) {

    const x = Array.from(document.getElementsByClassName("filterDiv"));

    if (tempo == "all") {

        tempo = "";
    }

    for (let i = 0; i < x.length; i++) {

    }
}
function strToNum() {

    durata.forEach((element) => {

        parseInt(element);
        minuti.push(element);
        console.log("elementi array " + minuti);
        // soloMinuti.push(minuti)
    });
}


function durata15() {

    const durataFiltrata = durata.filter(function (element) {

        const soloMinuti = parseInt(element);
        
        if (soloMinuti > 15) {
            
            prova.push(element);
            prova.style.display = "none";
            return false;
        }

        console.log(durataFiltrata);
        return true
    })
}



function strToNum() {

    durata.forEach((element) => {

        const minuti = parseInt(element)
        soloMinuti.push(minuti)
    });
}

function filtro15() {

    strToNum()
    soloMinuti.forEach(element => {
        
        if (element < 15) {
            soloMinuti
        }
    });
}

const durata15 = durata.filter(function(element) {
    return
})

function filtro15() {

    durata.forEach((element) => {

        if (element[i] < 15) {

        }
    });
}


const soloMinuti = [];
const scarti = [];

time.forEach((str) => {
    const [minutiStr, scarto] = str.innerText.split(/\s(.+)/, 2);
    const minuti = parseInt(minutiStr);
    soloMinuti.push(minuti);
    scarti.push(scarto);
});
*/