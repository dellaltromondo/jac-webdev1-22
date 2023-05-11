function loginSubmit(){
    if(document.getElementById("username").value == null || document.getElementById("password").value == null){
        const errore = document.createElement("p");
        errore.innerHTML = "Nome utente o password errati"
        document.getElementById("err_cred").appendChild(errore)
    }
        
}