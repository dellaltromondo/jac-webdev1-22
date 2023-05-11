class Subjects{
    

    // I CANCELLETTI DANNO PROBLEMI NEL DB PERCHè NELLO STRINGIFY LI AGGIUNGE AL NOME SUL DB
    #nome_materia;
    #docente;
    #voti = [];
    #colore;

    constructor(mat, doc, vot = [], col){
        this.#nome_materia = mat;
        this.#docente = doc;
        this.#voti = [];
        this.#colore = col;
    }

    getMateria(){
        return this.#nome_materia;
    }
    getDocente(){
        return this.#docente;
    }
    getVoti(){
        return this.#voti;
    }
    mediaVoti(){
        return;
    }
}