
class User {
    #id;
    #displayName;
    #name;
    #surname;
    #profilePicture;
    #status;
    
    constructor(id, username, name, surname){
        this.#id = id;
        this.#displayName = username;
        this.#name = name;
        this.#surname = surname;
    }
    
    getName() {
        return this.#name;
    }

    getSurname() {
        return this.#surname;
    }

    getUsername() {
        return this.#displayName;
    }

    changePicture(photoUpdated) {
        this.#profilePicture = photoUpdated;
    }
    
    changeStatus(newStatus) {
        this.#status = newStatus;
    }
    
    changeDisplayName(newUsername) {
        this.#displayName = newUsername;
    }
    
}

class Messaggio{
    #id;
    #TimeStamp; 
    
     #Sender ;
     #Receiver ;


    getSender() {
        return this.#Sender;
    }
    getReceiver() {
        return this.#Receiver;
    }
    getTime() {
        return new Date();
    }



constructor (idM, sender, receiver) {
    this.#id = idM;
    this.#Sender = sender;
    this.#Receiver = receiver ;
    this.#TimeStamp = new Date();
    

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
class Chat{
    user ;
    messaggeList ;

    
    sendMessagge() {
        this.messaggeList = [];
    }
    
    
    }
