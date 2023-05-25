    /////////////////SALVA CONTENUTO///////////////////////

    function caricaRicetta() {

        const buttons = Array.from(document.getElementsByClassName("apri"));
        let y = 0;
        for (i = 0; i < buttons.length; i++) {

            const idButtons = parseInt(buttons[i].getAttribute("id"));

            if (idButtons > y) {

                y = idButtons
            }
        }

        const button = document.createElement("button");
        button.setAttribute("class", "apri");
        let k = y + 2;
        let idButton = String(k);
        button.setAttribute("id", idButton);
        button.setAttribute("type", "button");

        // const immagine = document.createElement("img");
        // immagine.setAttribute("alt", );
        // immagine.setAttribute("src", );

        const info = document.createElement("div");
        info.setAttribute("class", "infoRicetta");

        const titolo = document.createElement("h3");

        const desc = document.createElement("p");

        const time = document.createElement("span");
        time.setAttribute("class", "time");

        const titoloRicetta = document.getElementById("nomeRicetta").value;
        const descRicetta = document.getElementById("breveDesc").value;
        const timeRicetta = document.getElementById("tempo").value;

        titolo.innerText = titoloRicetta;
        desc.innerText = descRicetta;
        time.innerText = timeRicetta;

        info.appendChild(titolo);
        info.appendChild(desc);
        info.appendChild(time);
        button.appendChild(info);

        const main = document.getElementsByTagName("main")[0];

        main.appendChild(button);

        //-------------------------------------------------------------------------------//

        const wrappers = Array.from(document.getElementsByClassName("wrapper"));
        let x = 0;
        for (i = 0; i < wrappers.length; i++) {

            const idWrappers = parseInt(wrappers[i].getAttribute("id"));

            if (idWrappers > x) {

                x = idWrappers
            }
        }

        console.log("il valore di x è: " + x);

        const pass = document.createElement("div");
        pass.setAttribute("class", "pass");

        const contenuto = document.createElement("div");
        contenuto.setAttribute("class", "contenuto");

        const container = document.createElement("div");
        container.setAttribute("class", "wrapper");
        let z = x + 2;
        let idWrapper = String(z);
        console.log("il valore id del wrapper è x + 2: " + idWrapper);
        container.setAttribute("id", idWrapper);

        const elencoPassaggi = Array.from(document.getElementsByClassName("inputUtente"));

        for (i = 0; i < elencoPassaggi.length; i++) {
            let element = elencoPassaggi[i].value;
            let passaggio = document.createElement("p");
            passaggio.setAttribute("class", "passaggi");
            passaggio.innerText = element;
            pass.appendChild(passaggio);
        }

        contenuto.appendChild(pass);
        container.appendChild(contenuto);
        main.appendChild(container);

        wrapper.push(container);
        bottone.push(button);

        console.log("lunghezza array *apri* dopo il push: " + bottone.length)
        console.log("lunghezza array *wrapper* dopo il push: " + wrapper.length)
        console.log(bottone);
        console.log(wrapper);

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

    ////////////////////////SCORRI PASSAGGI RICETTA///////////////////////

    class SlideShow {
        constructor(paragraphs) {

            this.paragraphs = paragraphs;
            this.currentSlide = 0;
            this.showSlide(this.currentSlide);
        }

        showSlide(slideIndex) {

            this.paragraphs.forEach((p) => {

                p.style.display = 'none';
            });

            this.paragraphs[slideIndex].style.display = 'block';
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

    slideShowElements.forEach((element) => {

        const paragraphs = element.getElementsByClassName('passaggi');
        const contenuto = new SlideShow(Array.from(paragraphs));

        const nextButton = element.querySelector('.next');
        nextButton.addEventListener('click', () => {
            contenuto.nextSlide();
        });

        const prevButton = element.querySelector('.prev');
        prevButton.addEventListener('click', () => {
            contenuto.prevSlide();
        });
    });

////////////////////////SCORRI PASSAGGI RICETTA///////////////////////