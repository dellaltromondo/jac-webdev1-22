

    // ------------------------------------ POST ------------------------------------ 
    let postCorrente = null;

    const post1 = {
        foto: 'fotoPostProfilo/post1.webp',
        miPiacePrima: 875438,
        miPiaceDopo: 875439,
        bio: 'questo è il post 1',
        commenti: [
        {
            foto: 'fotoProfiloCommenti/vittorio-sgarbi.jpg',
            nome: 'vittoriosgarbi',
            testo: 'CAPRA! CAPRA IGNORANTE!'
        },
        {
            foto: 'fotoProfiloCommenti/malgioglio.jpg',
            nome: 'cristianomalgioglioreal',
            testo: 'sei un grande Crisitiano. Adoroooooooooh'
        }]
    }
    const post2 = {
        foto: 'fotoPostProfilo/post2.jpg',
        miPiacePrima: 102681,
        miPiaceDopo: 102682,
        bio: 'questo è il post 2',
        commenti: [
        {
            foto: 'fotoProfiloCommenti/bello-figo.jpg',
            nome: 'ilverobelloficial',
            testo: 'cristiano ricorda: se Georgina non fa assaggiare, blokka'
        },
        {
            foto: 'fotoProfiloCommenti/rosaChemical.jpeg',
            nome: 'gipsyboirosa',
            testo: 'la tua tipa è una tipa è per questo che è la tua tipa'
        }]
    }
    const post3 = {
        foto: 'fotoPostProfilo/post3.jpg',
        miPiacePrima: 936008,
        miPiaceDopo: 936009,
        bio: 'questo è il post 3',
        commenti: [
        {
            foto: 'fotoProfiloCommenti/Gerry_Scotti.jpg',
            nome: 'gerryscotti',
            testo: 'il mio idolo fin da piccolo. Un esempio per tutti. Forza Napoli!'
        },
        {
            foto: 'fotoProfiloCommenti/matteo-salvini.jpg',
            nome: 'matteosalviniofficial',
            testo: '380 euro al MINUTO per dare dei calci ad un pallone. E metà degli italiani non arrivano alla fine del mese'
        }]
    }
    const post4 = {
        foto: 'fotoPostProfilo/post4.jpeg',
        miPiacePrima: 243458,
        miPiaceDopo: 243459,
        bio: 'Muchas gracias aficion, esto es para vosotros: SIUUUUUUUUUUUUUUUUUUUUUUUUUUM',
        commenti: [ 
        {
            foto: 'fotoProfiloCommenti/GIANNI-MORANDI.webp',
            nome: 'morandi_official',
            testo: 'ciao cristiano. Tanti bacioni dal tuo amico Gianni'
        },
        {
            foto: 'fotoProfiloCommenti/maurizio-costanzo.jpg',
            nome: 'mauriziocostanzo_official',
            testo: 'sei un atleta formidabile. Bel collo'
        }]
    }
    const post5 = {
        foto: 'fotoPostProfilo/post5.jpg',
        miPiacePrima: 1437203,
        miPiaceDopo: 1437204,
        bio: 'questo è il post 5',
        commenti: [
        {
            foto: 'fotoProfiloCommenti/barbara-durso.jpg',
            nome: 'barbaracarmelitadurso',
            testo: 'sarei lieta di averti come ospite a Pomeriggio 5. Ti va?'
        },
        {
            foto: 'fotoProfiloCommenti/andrew-tate.jpeg',
            nome: '_andrew.tate_',
            testo: 'what color is your Bugatti?'
        }]
    }
    const post6 = {
        foto: 'fotoPostProfilo/post6.jpg',
        miPiacePrima: 374120,
        miPiaceDopo: 374121,
        bio: 'questo è il post 6',
        commenti: [
        {
            foto: 'fotoProfiloCommenti/dipre.png',
            nome: 'andreadiprereal',
            testo: 'mossa e contromossa sublimi. Quasi meglio del mio amico puma'
        },
        {
            foto: 'fotoProfiloCommenti/big-luca.jpeg',
            nome: 'bigluca.marketing',
            testo: 'con il mio corso online i guadagni di Ronaldo ti sembreranno nulla. Link in bio per saperne di più'
        }]
    }

    // ------------------------------------ MOSTRA/NASCONDI POST + COMMENTI POST ------------------------------------ 
    function mostraPost(post) {
        postCorrente = post;
        document.getElementById('grid').style.display = "inline"

        // post
        const foto = document.getElementById('imgPost')
        foto.src = post.foto
        const miPiacePrima = document.getElementById('pPrimaMiPiace')
        miPiacePrima.innerText = post.miPiacePrima
        const miPiaceDopo = document.getElementById('pDopoMiPiace')
        miPiaceDopo.innerText = post.miPiaceDopo
        const bio = document.getElementById('testoBioVero')
        bio.innerText = post.bio
        document.getElementById("divTuttiCommenti").innerText = "";

        // commenti del post
        for (let i = 0; i < post.commenti.length; i++) {
            const template = document.createElement("li")
            template.innerHTML = `
                <div class="divSingoloCommento">
                    <img class="fotoProfiloCommenti" src="${post.commenti[i].foto}">
                    <div class="testoCommenti">
                        <p class="nomeCommenti">${post.commenti[i].nome}</p>
                        <p class="commentoCommenti">${post.commenti[i].testo}</p>
                        <p class="rispondiCommenti"> rispondi </p>
                    </div>
                </div>
            `;
            document.getElementById("divTuttiCommenti").appendChild(template)
        }
    }

    // CHIUDO IL POST QUANDO CLICCO FUORI
    window.onclick = function(event) {
        var post = document.getElementById("paginePost");
        if (event.target == post) {
            post.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // ------------------------------------ TASTO "MI PIACE" ------------------------------------ 
    function mostraCuoreRosa() {
        document.getElementById('cuoreNero').style.display = "none"
        document.getElementById('cuoreRosa').style.display = "block"

        document.getElementById('pPrimaMiPiace').style.display = "none"
        document.getElementById('pDopoMiPiace').style.display = "inline"

    }
    function mostraCuoreNero() {
        document.getElementById('cuoreNero').style.display = "block"
        document.getElementById('cuoreRosa').style.display = "none"

        document.getElementById('pPrimaMiPiace').style.display = "inline"
        document.getElementById('pDopoMiPiace').style.display = "none"
    }

    // ------------------------------------ TASTO "COMMENTA" ------------------------------------ 
    function mostraAggiungiCommento() {
        document.getElementById('divCommentoNuovo').style.display = "grid"
        document.getElementById('divTuttiCommenti').style.gridRow = "6/7"
        document.getElementById('iconaCommenta1').style.display = "none"
        document.getElementById('iconaCommenta2').style.display = "inline"
        document.getElementById("inputCommentoNuovo").focus()

    }
    function nascondiAggiungiCommento() {
        document.getElementById('divCommentoNuovo').style.display = "none"
        document.getElementById('divTuttiCommenti').style.gridRow = "5/7"
        document.getElementById('iconaCommenta1').style.display = "inline"
        document.getElementById('iconaCommenta2').style.display = "none"
    }

        // ------------------------------------ TASTO "PUBBLICA" ------------------------------------ 
        function creaCommento() {
            // nascondo "aggiungi commento"
            document.getElementById('divCommentoNuovo').style.display = "none"
            document.getElementById('iconaCommenta1').style.display = "inline"
            document.getElementById('iconaCommenta2').style.display = "none"

            // aggiunge il commento in cima a tutti i commenti con unshift
            postCorrente.commenti.unshift({
                foto: 'fotoProfiloCommenti/icons8-utente-100.png',
                nome: 'user061102',
                testo: document.getElementById('inputCommentoNuovo').value
            })
            mostraPost(postCorrente)

        }

    // ------------------------------------ TASTO "SALVA" ------------------------------------ 
    function mostraSalvaRosa() {
        document.getElementById('salvaNero').style.display = "none"
        document.getElementById('salvaRosa').style.display = "block"
    }
    function mostraSalvaNero() {
        document.getElementById('salvaNero').style.display = "block"
        document.getElementById('salvaRosa').style.display = "none"
    }

    function nascondiBordo() {
        document.getElementById('inputCommentoNuovo').style.outline = "none"
    }


