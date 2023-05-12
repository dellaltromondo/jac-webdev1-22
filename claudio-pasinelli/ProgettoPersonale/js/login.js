let compositoreEsistente = false;
let utenteEsistente = false;

let compositoreNonEsistente = false;
let utenteNonEsistente = false;
class User
{
    idUser
    email;
    nome;
    cognome;
    password;
    tipo;

    constructor(idUser, email, nome, cognome, password, tipo)
    {
        this.idUser = idUser;
        this.email = email;
        this.nome = nome;
        this.cognome = cognome;
        this.password = password;
        this.tipo = tipo;
    }

    getIdUser()
    {
        return this.idUser;
    }

    setIdUser(idUser)
    {
        this.idUser = idUser;
    }

    getEmail()
    {
        return this.email;
    }

    getNome()
    {
        return this.nome;
    }

    getCognome()
    {
        return this.cognome;
    }

    getPassword()
    {
        return this.password;
    }

    getTipo()
    {
        return this.tipo;
    }

    setIdUser(idUser)
    {
        this.idUser = idUser;
    }
}

async function inviaDatiForm()
{
    let testoMessaggio = document.getElementById("messaggioForm");
    const btnLogin = document.getElementById("inviaDati");

    const compositoreForm = document.getElementById("compositore");  
    const nonCompositoreForm = document.getElementById("non_compositore"); 

    //verifico l'email
    if(document.getElementById("email").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito nessuna email!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('email').value = '';
        }, 3000);

        return;
    }

    //verifico il nome
    if(document.getElementById("nome").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il tuo nome!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('nome').value = '';
        }, 3000);

        return;
    }
    
    //verifico il cognome
    if(document.getElementById("cognome").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il tuo cognome!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('cognome').value = '';
        }, 3000);

        return;
    }

    //verifico la password
    if(document.getElementById("password").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito la tua password!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('password').value = '';
        }, 3000);

        return;
    }

    //verifico le checkbox
    else if (compositoreForm.checked == false && nonCompositoreForm.checked == false)
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai dichiarato il tuo status!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('compositore').value = '';
            document.getElementById('non_compositore').value = '';
        }, 3000);

        return;
    } 

    const email = document.getElementById("email").value;
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const password = document.getElementById("password").value;
    let tipo;

    if(document.getElementById("compositore").checked === true)
    {
        tipo = document.getElementById("compositore").value;
    }

    else if(document.getElementById("non_compositore").checked === true)
    {
        tipo = document.getElementById("non_compositore").value;
    }

    let idUser = 1;

    //resetto i valori del form
    document.getElementById('email').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('password').value = '';
    document.getElementById('compositore').checked = false;
    document.getElementById('non_compositore').checked = false;

    if(tipo === "COMPOSITORE")
    {
        compositoreNonEsistente = true;
    }

    else if(tipo === "NON_COMPOSITORE")
    {
        utenteNonEsistente = true;
    }

    let responseJson = await controllaUser(email, nome, cognome, password, tipo);

    if(utenteNonEsistente || compositoreNonEsistente)
    {
        let maxId = 1;
    
        if(responseJson.length != 0)
        {
            for(userResponse of responseJson)
            {
                if(userResponse.idUser > maxId)
                {
                    maxId = userResponse.idUser;
                }
            }
        
            if(maxId > 1)
            {
                idUser = maxId + 1;
            }
        }

        //creo un nuovo utente
        const user = new User(idUser, email, nome, cognome, password, tipo);

        const body = JSON.stringify(user);
    
        const postUser = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/users/",
        {
            method: "POST",
            headers:
            {
                "content-type":'application/json'
            },
            body: body
        });
        
        await controllaUser(email, nome, cognome, password, tipo);
    }

    //riempio il localStoragee e faccio il reindirizzamento dell'utente alla pagina riservata a lui
    
    if(compositoreEsistente || compositoreNonEsistente)
    {
        localStorage.setItem("Nome", nome);
        localStorage.setItem("Cognome", cognome);
        localStorage.setItem("Compositore", "VERO");
        
        window.location.href = "editorCompositori.html";
    }
    
    else if(utenteEsistente || utenteNonEsistente)
    {
        localStorage.setItem("NomeUser", nome);
        localStorage.setItem("CognomeUser", cognome);
        localStorage.setItem("Compositore", "FALSO");

        window.location.href = "tabellaCompositori.html";
    }
}

async function controllaUser(email, nome, cognome, password, tipo)
{
    let response = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/users/");
    let responseJson = await response.json();

    for(let i = 0; i < responseJson.length; i++)
    {
        if(responseJson[i].email === email)
        {
            if(responseJson[i].nome === nome)
            {
                if(responseJson[i].cognome === cognome)
                {
                    if(responseJson[i].password === password)
                    {
                        if(responseJson[i].tipo === tipo && tipo === "COMPOSITORE")
                        {
                            //prendo l'idUser dell'utente
                            idUser = responseJson[i].idUser;
                            localStorage.setItem("idUser", idUser);
                            compositoreEsistente = true;
                            compositoreNonEsistente = false;
                            idUser = responseJson[i].idUser;
                            break;
                        }
                        
                        else if(responseJson[i].tipo === tipo && tipo === "NON_COMPOSITORE")
                        {
                            idUser = responseJson[i].idUser;
                            localStorage.setItem("idUserNonCompositore", idUser);
                            utenteEsistente = true;
                            utenteNonEsistente = false;
                            idUser = responseJson[i].idUser;
                            break;
                        }

                        else if(responseJson[i].tipo === "COMPOSITORE" && tipo === "NON_COMPOSITORE")
                        {
                            testoMessaggio.scrollIntoView(
                                {
                                    behavior: 'smooth',
                                    block: 'end'
                                });
                    
                            testoMessaggio.style.display = "block";
                            testoMessaggio.innerText = "Ci dispiace, ma ci risulta che ti sei già registrato come un utente compositore!";
                            testoMessaggio.style.color = "red";
                    
                            setTimeout(() =>
                            {
                                testoMessaggio.innerText = "";
                                testoMessaggio.style.display = "none";
                            }, 3000);
                    
                            return;
                        }

                        else if(responseJson[i].tipo === "NON_COMPOSITORE" && tipo === "COMPOSITORE")
                        {
                            testoMessaggio.scrollIntoView(
                                {
                                    behavior: 'smooth',
                                    block: 'end'
                                });
                    
                            testoMessaggio.style.display = "block";
                            testoMessaggio.innerText = "Ci dispiace, ma ci risulta che ti sei già registrato come un utente non compositore!";
                            testoMessaggio.style.color = "red";
                    
                            setTimeout(() =>
                            {
                                testoMessaggio.innerText = "";
                                testoMessaggio.style.display = "none";
                            }, 3000);
                    
                            return;
                        }
                    }
                    continue;
                }
                continue;
            }
            continue;
        }
        continue;
    }

    return responseJson;
}