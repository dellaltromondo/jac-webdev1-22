class Subjects{
    

    // I CANCELLETTI DANNO PROBLEMI NEL DB PERCHè NELLO STRINGIFY LI AGGIUNGE AL NOME SUL DB
    nomeMateria;
    nomeDocente;
    coloreMateria;
    codUtente;

    constructor(mat, doc, col, cod = 1){
        this.nomeMateria = mat;
        this.nomeDocente = doc;
        this.coloreMateria = col;
        this.codUtente = cod;
    }

    getColore(){
        return this.coloreMateria;
    }
    getMateria(){
        return this.nomeMateria;
    }
    getDocente(){
        return this.nomeDocente;
    }
    getCodUtente(){
        return this.codUtente;
    }
}