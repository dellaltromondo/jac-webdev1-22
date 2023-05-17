/* -------------------------------------- MENU PROFILO -------------------------------------- */

let timeProfile;
    
const home = {
    testo: 'home',
    top: '4.8rem'
}
const cerca = {
    testo: 'cerca',
    top: '7.8rem'
}
const esplora = {
    testo: 'esplora',
    top: '11rem'
}
const reels = {
    testo: 'reels',
    top: '14.1rem'
}
const messaggi = {
    testo: 'messaggi',
    top: '17.2rem'
}
const notifiche = {
    testo: 'notifiche',
    top: '20.3rem'
}
const crea = {
    testo: 'crea',
    top: '23.4rem'
}
const profilo = {
    testo: 'profilo',
    top: '26.5rem'
}
const altro = {
    testo: 'altro',
    top: '31.1rem'
}

function mostraTestoIcone(text) {
    timeProfile = setTimeout(function() {

        // creo un p
        const elementoP = document.createElement("p")
        document.getElementById("pagina-profilo").appendChild(elementoP)
        elementoP.setAttribute("id", "suggerimenti-icone")
        elementoP.setAttribute("class", "animazione-suggerimenti-icone")
        elementoP.innerText = text.testo
        elementoP.style.top = text.top
    }, 1000)
}


function nascondiTestoIcone() {
    clearTimeout(timeProfile);
    document.getElementById("suggerimenti-icone").parentNode.removeChild(document.getElementById("suggerimenti-icone"))
}

