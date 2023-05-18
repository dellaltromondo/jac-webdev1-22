class Voti{
    
    voto
    peso
    commento

    constructor(v, p = 100, c = "Nessun commento"){
        this.voto = v;
        this.peso = p;
        this.commento = c;
    }
}

function logOut()
{
  window.location.href = "login.html";
}