

class Messaggio {

    #TimeStamp; 
    #Sender;
    #receiver;


    getSender() {
        return this.#Sender;
    }
    getReceiver() {
        return this.#receiver;
    }
    getTime() {
        return new Date();
    }



constructor (mittente, destinatario) {
    this.#Sender = mittente;
    this.#TimeStamp = new Date();
    this.#receiver = destinatario;

}

}


class Audio extends Messaggio {

    #audio;
    
    constructor(audio, mittente, destinatario) {
        super(mittente, destinatario);
        this.#audio = audio;
    
    
    }

getContent() {
    return this.#audio;
}

}


class Testo extends Messaggio {

    #textContent

    constructor(testo, mittente, destinatario) {
        super(mittente, destinatario);
        this.#textContent = testo;
    }

    getContent() {
        return this.#textContent
    }
}


class Video extends Messaggio {

    #videoSrc
    constructor(video, mittente, destinatario, orario) {
        super(mittente, destinatario, orario);
        this.#videoSrc = video;
    }

    getContent() {
        return this.#videoSrc;
    }

}


class Immagine extends Messaggio {

#immagine;

constructor(immagine, mittente, destinatario, orario){
    super(mittente, destinatario, orario);
    this.#immagine = immagine;

}

getContent(){
    return this.#immagine
}


}
