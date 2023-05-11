/*  [1] CAMBIO PAGINE */
function mostraLogin() {
    document.getElementById("paginaLogin").style.display = "flex"
    document.getElementById("paginaSignin").style.display = "none"
    document.getElementById("paginaSignin2").style.display = "none"
}
function mostraSignin() {
    document.getElementById("paginaLogin").style.display = "none"
    document.getElementById("paginaSignin").style.display = "flex"
    document.getElementById("paginaSignin2").style.display = "none"
}
function mostraSignin2() {
    document.getElementById("paginaLogin").style.display = "none"
    document.getElementById("paginaSignin").style.display = "none"
    document.getElementById("paginaSignin2").style.display = "flex"
}
document.addEventListener("DOMContentLoaded", function() {


/* [2] FUNZIONI NUOVA PASSWORD */
const userPassword = document.getElementById("input-new-password")

userPassword.addEventListener("input", () => {
    mostraCaratteristichePassword(userPassword.value) 
    textPassword(userPassword.value)
})

let spuntaX = {
    spunta: '../altreIcone/spunta-verde.png',
    x: '../altreIcone/x-rosso.png'
}

    /* [2.1] MOSTRA #div-caratteristiche-password */
    const divPassword = document.getElementById("div-caratteristiche-password");
    divPassword.style.opacity = "0"

    function mostraCaratteristichePassword(userPasswordValue) {
        if (userPasswordValue && !textPassword(userPassword)) {
            divPassword.classList.add('visible')
            setTimeout(function() {
                divPassword.style.opacity = "1"
            }, 300)
            
        } else {
            divPassword.style.opacity = "0"
            setTimeout(function() {
                divPassword.classList.remove('visible')
            }, 300)
        }
    }

    /* [2.2] verifica password */
    function verificaPassword(userPasswordValue) {
        const correctPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/

        if (correctPassword.test(userPasswordValue)) {
            return true
        } else {
            return false
        }
    }
    
    /* [2.3] cambia le immagini della verifica della password (x o v) */
    function textPassword(userPasswordValue) {
        if (verificaPassword(userPasswordValue)) {
            document.getElementById("img1").src = spuntaX.spunta
            document.getElementById("img2").src = spuntaX.spunta
            document.getElementById("img3").src = spuntaX.spunta
            document.getElementById("img4").src = spuntaX.spunta
            return true
        } else {
            if (userPasswordValue.length < 8 || userPasswordValue.length > 15){
                document.getElementById("img1").src = spuntaX.x
            } else {
                document.getElementById("img1").src = spuntaX.spunta
            }
            if (!/[a-z]/.test(userPasswordValue)) {
                document.getElementById("img2").src = spuntaX.x
            } else {
                document.getElementById("img2").src = spuntaX.spunta
            }
            if (!/[A-Z]/.test(userPasswordValue)){
                document.getElementById("img3").src = spuntaX.x
            } else {
                document.getElementById("img3").src = spuntaX.spunta
            }
            if (!/\d/.test(userPasswordValue)){
                document.getElementById("img4").src = spuntaX.x
            } else {
                document.getElementById("img4").src = spuntaX.spunta
            }
            return false
        }
    }

/* [3] FUNZIONI EMAIL */
const userEmail = document.getElementById("input-signin2-1")
userEmail.addEventListener("input", textEmail)

    /* [3.1] verifica email */
    function verificaEmail() {
        const correctEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (correctEmail.test(userEmail.value)) {
            return true
        } else {
            return false
        }
    }

    /* [3.2] comparsa/scomparsa testo "email non valida" + cambio colore del bordo */
    function textEmail() {
        const emailError =  document.getElementById('testo-email-non-valida')

        if (verificaEmail()) {
            emailError.classList.remove("visible")

        } else {
            userEmail.style.borderColor = 'red'
            emailError.classList.add('visible')

        }
    }

/*  [4] ATTIVAZIONE <button> */
    /* [4.1] attivazione <button> login */
    const inputLogin1 = document.getElementById("inputLogin1")
    const inputLogin2 = document.getElementById("inputLogin2")
    const buttonAccedi = document.getElementById("buttonAccedi")

    inputLogin1.addEventListener("input", mostraButtonAccedi)
    inputLogin2.addEventListener("input", mostraButtonAccedi)

    function mostraButtonAccedi() {
        if (inputLogin1.value && inputLogin2.value) {
            if (buttonAccedi.disabled == true) {
                buttonAccedi.disabled = false
                buttonAccedi.setAttribute("class", "buttonAccediAvantiRegistrati")
            }
        } else {
            if (buttonAccedi.disabled == false){
                buttonAccedi.disabled = true
                buttonAccedi.setAttribute("class", "button-disabled-effect")
            } 
        }
    }
    
    /* [4.2] attivazione <button> signin */
    const inputSignin11 = document.getElementById("input-signin1-1")
    const inputSignin12 = document.getElementById("input-signin1-2")
    const mese = document.getElementById("mese")
    const giorno = document.getElementById("giorno")
    const anno = document.getElementById("anno")
    const buttonAvanti = document.getElementById("button-avanti")

    inputSignin11.addEventListener("input", mostraButtonAvanti)
    inputSignin12.addEventListener("input", mostraButtonAvanti)
    mese.addEventListener("change", mostraButtonAvanti)
    giorno.addEventListener("change", mostraButtonAvanti)
    anno.addEventListener("change", mostraButtonAvanti)

    function mostraButtonAvanti() {
        if (inputSignin11.value && inputSignin12.value && mese.value !== "Mese" && giorno.value !== "Giorno" && anno.value !== "Anno") {
            if (buttonAvanti.disabled == true) {
                buttonAvanti.disabled = false
                buttonAvanti.setAttribute("class", "buttonAccediAvantiRegistrati")
            }
        } else {
            if (buttonAvanti.disabled == false){
                buttonAvanti.disabled = true
                buttonAvanti.setAttribute("class", "button-disabled-effect")
            } 
        }    
    }


    /* [4.3] attivazione <button> signin2 */
    const inputSignin21 = document.getElementById("input-signin2-1")
    const inputSignin22 = document.getElementById("input-signin2-2")
    const inputSignin23 = document.getElementById("input-new-password")
    const checkboxSignin = document.getElementById("checkboxTermini")
    const buttonRegistrati = document.getElementById("button-registrati")

    inputSignin21.addEventListener("input", mostraButtonRegistrati)
    inputSignin22.addEventListener("input", mostraButtonRegistrati)
    inputSignin23.addEventListener("input", mostraButtonRegistrati)
    checkboxSignin.addEventListener("change", mostraButtonRegistrati)

    function mostraButtonRegistrati() {
        const userPasswordValue = inputSignin23.value
        if (verificaEmail() && inputSignin22.value && verificaPassword(userPasswordValue) && checkboxSignin.checked) {
            if (buttonRegistrati.disabled == true) {
                buttonRegistrati.disabled = false
                buttonRegistrati.setAttribute("class", "buttonAccediAvantiRegistrati")
            }
        } else {
            if (buttonRegistrati.disabled == false) {
                buttonRegistrati.disabled = true
                buttonRegistrati.setAttribute("class", "button-disabled-effect")
            }
        }
    }
    
/*  [5] ALTRO   */
    /* [5.1] cambia il colore del bordo degli input quando li seleziono */
    const inputs = document.querySelectorAll('input')
    for (let input of inputs) {
        if (input.id === "input-signin2-1") {
            input.addEventListener('focus', () => {
                input.style.borderColor = 'white'
                input.addEventListener('input', () => {
                    textEmail()
                })
            })
            input.addEventListener('blur', () => {
                if (textEmail()) {
                    input.style.borderColor = ''
                } else {
                    textEmail()
                }
            })
        } else {
            input.addEventListener('focus', () => {
                input.style.borderColor = 'white'
            })
            input.addEventListener('blur', () => {
                input.style.borderColor = ''
            })
        }
    }

    /* [5.1] cambia il colore del bordo dei select quando li seleziono */
    const selects = document.querySelectorAll('select')
    for (let select of selects) {
        select.addEventListener('focus', () => {
            select.style.borderColor = 'white'
        })
        select.addEventListener('blur', () => {
            select.style.borderColor = ''
        })
    }

    
})