
const questions = [{'domanda' : String, "utente" : String}];
usernameAccesso = "";
eliminaDomande = false;

function linguaggi() {
    const sezione = document.getElementById('pagineWeb');
 
    document.body.insertAdjacentElement('afterbegin' , sezione);
    sezione.style.display="grid";
    sezione.style.gridAutoRows= "minmax(100px, auto)";
    sezione.style.gridTemplateColumns= "repeat(5, 1fr)";  
    let rootElement = document.documentElement;
    rootElement.scrollTo
    (
        {
            top: 0,
            behavior: "smooth"
        }
    );
}

function backWeb() {

    document.getElementById("pagineWeb").style.display = "none";

}

function boxModel() {
    const sezione = document.getElementById('boxModel');
 
    document.body.insertAdjacentElement("afterbegin" , sezione);
    sezione.style.display="grid";
    sezione.style.gridAutoRows= "minmax(100px, auto)";
    sezione.style.gridTemplateColumns= "repeat(5, 1fr)";
    let rootElement = document.documentElement;
    rootElement.scrollTo
    (
        {
            top: 0,
            behavior: "smooth"
        }
    );
}

function backBox() {

    document.getElementById("boxModel").style.display = "none";

}

function display() {
    const sezione = document.getElementById('display');

    document.body.insertAdjacentElement('afterbegin' , sezione);
    sezione.style.display="grid";
    sezione.style.gridAutoRows= "minmax(100px, auto)";
    sezione.style.gridTemplateColumns= "repeat(5, 1fr)"; 
    let rootElement = document.documentElement;
    rootElement.scrollTo
    (
        {
            top: 0,
            behavior: "smooth"
        }
    );
}

function backDisplay() {

    document.getElementById("display").style.display = "none";

}

function javascript() {
    const sezione = document.getElementById('javascript');

    document.body.insertAdjacentElement('afterbegin' , sezione);
    sezione.style.display="grid";
    sezione.style.gridAutoRows= "minmax(100px, auto)";
    sezione.style.gridTemplateColumns= "repeat(5, 1fr)"; 
    let rootElement = document.documentElement;
    rootElement.scrollTo
    (
        {
            top: 0,
            behavior: "smooth"
        }
    );
}

function backJs() {

    document.getElementById("javascript").style.display = "none";

}


function login(){
    const logout = document.getElementById("logout");
    
    const domande = document.getElementById("listaDomande");
    const login = document.getElementById("login");
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const Username = document.getElementById("username");
    const Password = document.getElementById("password");
    const benvenuto = document.getElementById("benvenuto")
    const benvenutoUtente = document.getElementById("Benvenuto");
    const inputs = document.querySelectorAll('#username, #password');

    const bottoni = document.getElementById("bottone");
    
if(username == "" || password == "") {
   alert("inserisci le credenziali ")
} else {
    login.style.display = "none";
    bottoni.style.display = "flex";
    benvenuto.style.display= "block"
    benvenutoUtente.innerText = "Benvenuto/a   " + username;
    logout.style.display= "block";
    Username.value = "";
    Password.value = "";
}

}

function closeModal() {
    const modal = document.getElementById("modalDomande");
    const modalVisual = document.getElementById("modalVisualizzazione");
    
    modalVisual.style.display = "none";
    modal.style.display = "none";
}

function logout() {

    const domande = document.getElementById("listaDomande");
    const logout = document.getElementById("logout");
    const login = document.getElementById("login");
    const benvenuto = document.getElementById("benvenuto")
    const bottoni = document.getElementById("bottone");
    document.getElementById("display").style.display = "none";
    document.getElementById("boxModel").style.display = "none";
    document.getElementById("pagineWeb").style.display = "none";
    document.getElementById("javascript").style.display = "none";

    domande.innerHTML = "";
    login.style.display = "block";
    bottoni.style.display = "none";
    benvenuto.style.display= "none"
    logout.style.display= "none";
   

}

function openModal() {
    const modal = document.getElementById("modalDomande");
    modal.style.display = "block";
}

function saveDomanda() {
    const textarea = document.getElementById("textArea").value;
    const textArea = document.getElementById("textArea");

    const modal = document.getElementById("modalDomande");
    const posizioneDomanda = document.getElementById("listaDomande");
    const formato = document.createElement("article");
    const domanda = document.createElement("p");

    domanda.setAttribute("class", "domandaVisulizzata");
    posizioneDomanda.appendChild(formato);
    formato.appendChild(domanda);
    domanda.innerText = textarea;
    
     modal.style.display = "none";
     textArea.value = "";
 
    
}

function vediDomande() {
    const modal = document.getElementById("modalVisualizzazione");
   modal.style.display = "block";
}

