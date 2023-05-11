/* -------------------------------------- MENU PROFILO -------------------------------------- */

    let timeProfile;
    
    const home = {
        testo: 'home',
        top: '5.5rem'
    }
    const cerca = {
        testo: 'cerca',
        top: '8.4rem'
    }
    const esplora = {
        testo: 'esplora',
        top: '11.65rem'
    }
    const reels = {
        testo: 'reels',
        top: '14.7rem'
    }
    const messaggi = {
        testo: 'messaggi',
        top: '17.8rem'
    }
    const notifiche = {
        testo: 'notifiche',
        top: '20.9rem'
    }
    const crea = {
        testo: 'crea',
        top: '24rem'
    }
    const profilo = {
        testo: 'profilo',
        top: '27.1rem'
    }
    const altro = {
        testo: 'altro',
        top: '31.2rem'
    }

    function mostraTestoIcone(text) {
        timeProfile = setTimeout(function() {
            // creo un p
            const elementoP = document.createElement("p")
            document.getElementById("paginaProfilo").appendChild(elementoP)
            elementoP.setAttribute("id", "testiIcone")
            elementoP.innerText = text.testo
            elementoP.style.top = text.top
            elementoP.setAttribute("class", "rotate")
        }, 1000)
    }

    function nascondiTestoIcone() {
        clearTimeout(timeProfile);
        document.getElementById("testiIcone").parentNode.removeChild(document.getElementById("testiIcone"))
    }

    function mostraBloccoAltro(){
        
        const bloccoAltro = document.getElementById("bloccoAltro")

        if (bloccoAltro.style.display != "block") {
            bloccoAltro.innerHTML = `
                    <button id="buttonSopra" class="buttonRigaSotto">
                        <p>Impostazioni</p>
                        <img src="iconeMenu/impostazioni.png">
                    </button>
                    <button class="buttonRigaSotto">
                        <p>Cambia aspetto</p>
                        <img src="iconeMenu/cambia-tema.png ">
                    </button>
                    <button class="buttonRigaSotto">
                        <p>Cambia account</p>
                        <img src="iconeMenu/cambia-account.png">
                    </button>
                    <button id="buttonSotto">
                        <p>Esci</p>
                        <img src="iconeMenu/logout.png">
                    </button>
            `
            bloccoAltro.style.display = "block"
        } else {
            bloccoAltro.style.display = "none"
        }
    }
