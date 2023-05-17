class Voti{
    
    #voto
    #peso
    #commento

    constructor(v, p = 100, c = "Nessun commento"){
        this.#voto = v;
        this.#peso = p;
        this.#commento = c;
    }

    setVoto(v){
        this.#voto = v;
    }
    setPeso(p){
        this.#peso = p;
    }
    setCommento(c){
        this.#commento = c;
    }

    getVoto(){
        return this.#voto;
    }
    getPeso(){
        return this.#peso;
    }
    getCommento(){
        return this.#commento;
    }
}