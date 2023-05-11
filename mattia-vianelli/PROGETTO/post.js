// ------------------------------------ POST ------------------------------------ 
   
// CHIUDO IL POST QUANDO CLICCO FUORI
const backgroundPost = document.getElementById('background-post')
backgroundPost.addEventListener('click', () => {
    paginaPost.style.visibility = "hidden"
    document.body.style.overflow = "auto";
})
const immaginePost = document.getElementById('immagine-post')
immaginePost.addEventListener('click', () => {
    paginaPost.style.visibility = "hidden"
    document.body.style.overflow = "auto";
})


let postCorrente = null;

const post1 = {
    foto: 'fotoPostProfilo/post1.webp',
    miPiacePrima: 875438,
    miPiaceDopo: 875439,
    bio: 'focus in preparation for semi-final. #EidMubarak to all those celebrating today',
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
    bio: 'Parabéns pelo teu primeiro ano de vida, meu amor. O papà ama-te muito!',
    commenti: [
    {
        foto: 'fotoProfiloCommenti/bello-figo.jpg',
        nome: 'ilverobelloficial',
        testo: 'cristiano ricorda: se Georgina non fa assaggiare, blokka'
    },
    {
        foto: 'fotoProfiloCommenti/rosaChemical.jpeg',
        nome: 'gipsyboirosa',
        testo: 'da domani parte il love tour. Siete pronte stelline?'
    }]
}
const post3 = {
    foto: 'fotoPostProfilo/post3.jpg',
    miPiacePrima: 936008,
    miPiaceDopo: 936009,
    bio: '2 jogos, 2 vitòrias! Objetivo cumprido. Feliz por ter contribuìdo para este inìcio muito positivo da nossa seleçao. Vamos!',
    commenti: [
    {
        foto: 'fotoProfiloCommenti/Gerry_Scotti.jpg',
        nome: 'gerryscotti',
        testo: 'il mio idolo fin da piccolo. Un esempio per tutti. Forza Napoli!'
    },
    {
        foto: 'fotoProfiloCommenti/matteo-salvini.jpg',
        nome: 'matteosalviniofficial',
        testo: '380 euro al MINUTO per dare dei calci ad un pallone'
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
    bio: 'Great to get the win and so happy to score here in our stadium with our fans!',
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
    bio: 'Great team effort and good victory. We stand together. Hala Madrid!',
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
    
const paginaPost = document.getElementById("pagina-post")
mostraPost()

    function clickPost(post) {
        paginaPost.style.visibility = "visible"
        mostraPost(post)
    }

    function mostraPost(post) {
        
        paginaPost.style.display = "grid"

        postCorrente = post;

        // post
        const foto = document.getElementById('immagine-post')
        foto.src = post.foto
        const miPiacePrima = document.getElementById('numero-miPiace-prima')
        miPiacePrima.innerText = post.miPiacePrima
        const miPiaceDopo = document.getElementById('numero-miPiace-dopo')
        miPiaceDopo.innerText = post.miPiaceDopo
        const bio = document.getElementById('testo-biografia-post')
        bio.innerText = post.bio
        document.getElementById("lista-commenti").innerText = "";

        // commenti del post
        for (let i = 0; i < post.commenti.length; i++) {
            const template = document.createElement("li")
            template.innerHTML = `
                <div class="div-singolo-commento">
                    <img class="foto-profilo-commenti" src="${post.commenti[i].foto}">
                    <div class="testi-commenti">
                        <p class="nomi-commenti">${post.commenti[i].nome}</p>
                        <p class="commenti-commenti">${post.commenti[i].testo}</p>
                        </div>
                    <p class="rispondi-commenti"> rispondi </p>
                </div>
            `;   
            document.getElementById("lista-commenti").appendChild(template)
        }
    }

 



// ------------------------------------ TASTO "MI PIACE" ------------------------------------ 
function cambiaCuore() {
    const cuoreNero = document.getElementById('icona-miPiace-nero')
    const cuoreRosa = document.getElementById('icona-miPiace-rosa')
    const miPiacePrima = document.getElementById('numero-miPiace-prima')
    const miPiaceDopo = document.getElementById('numero-miPiace-dopo')

    if (cuoreNero.style.display != "none") {
        cuoreNero.style.display = "none"
        cuoreRosa.style.display = "block"
        miPiacePrima.style.display = "none"
        miPiaceDopo.style.display = "inline"
    } else {
        cuoreNero.style.display = "block"
        cuoreRosa.style.display = "none"
        miPiacePrima.style.display = "inline"
        miPiaceDopo.style.display = "none"
    }
}

// ------------------------------------ TASTO "COMMENTA" ------------------------------------ 
function mostraAggiungiCommento() {
    const creaCommento = document.getElementById('div-crea-commento')
    if (creaCommento.style.display != "grid") {
        creaCommento.style.display = "grid"
    } else {
        creaCommento.style.display = "none"
    }
}

// ------------------------------------ TASTO "PUBBLICA" ------------------------------------ 
function creaCommento() {
    document.getElementById('div-crea-commento').style.display = "none"
    postCorrente.commenti.unshift({
        foto: 'fotoProfiloCommenti/icons8-utente-100.png',
        nome: 'user061102',
        testo: document.getElementById('input-aggiungi-commento').value
    })
    mostraPost(postCorrente)

}

// ------------------------------------ TASTO "SALVA" ------------------------------------ 
function cambiaSalva() {
    const salvaNero = document.getElementById('icona-salva-nero')
    const salvaRosa = document.getElementById('icona-salva-rosa')
    if (salvaNero.style.display != "block") {
        salvaNero.style.display = "block"
        salvaRosa.style.display = "none"
    } else {
        salvaNero.style.display = "none"
        salvaRosa.style.display = "block"
    }
}


