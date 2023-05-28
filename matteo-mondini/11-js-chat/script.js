class Message {
  #timestamp;
  #sender;
  #receiver;

  constructor(sender, receiver) {
    this.#sender = sender;
    this.#receiver = receiver;
    this.#timestamp = new Date();
  }

  getTimestamp() {
    return this.#timestamp;
  }

  getSender() {
    return this.#sender;
  }

  getReceiver() {
    return this.#receiver;
  }

  getContent() {
    // Questo metodo sara' diverso per ogni classe derivata (figlia) di questa classe
    // quindi lanciamo un errore se la classe figlia non l'ha (e quindi viene richiamato questo)
    // Se la classe figlia invece implementa correttamente il metodo getContent, viene richiamato quello della classe figlia
    throw new Error('You have to implement the method getContent in children classes of Message!');
  }
}

class TextMessage extends Message {
  #textContent; // L'unico dato aggiuntivo che i TextMessage hanno

  constructor(sender, receiver, textContent) {
    // Chiamo il costruttore della classe genitore (Message), passandogli i parametri che vuole lei
    super(sender, receiver);
    this.#textContent = textContent;
  }

  getContent() {
    return this.#textContent;
  }
}

class ImageMessage extends Message {
    #imageSrc;  // L'unico dato aggiuntivo che gli ImageMessage hanno

    constructor(sender, receiver, imageSrc) {
        // Chiamo il costruttore della classe genitore (Message), passandogli i parametri che vuole lei
        super(sender, receiver);
        this.#imageSrc = imageSrc;
    }

    getContent() {
        return `<img src="${this.#imageSrc}">`;
    }
}

class User {
  // Informazioni fisse del profilo (vengono inizializzate nel costruttore)
  #id;
  #name;
  #surname;
  // Informazioni modificabili del profilo (hanno un setter)
  #displayName;
  #profilePict = "";
  #status = "";

  constructor(id, name, surname) {
    this.#id = id;
    this.#name = name;
    this.#surname = surname;

    this.#displayName = name + " " + surname;
  }

  changeDisplayName(newDisplayName) {
    if (newDisplayName.length < 5) {
      throw new Error("Cannot have display name so short!");
    }

    this.#displayName = newDisplayName;
  }

  changeProfilePicture(newProfilePicture) {
    // TODO: verificare se newProfilePicture e' valida
    this.#profilePict = newProfilePicture;
  }

  changeStatus(newStatus) {
    // TODO: verificare se newStatus e' valido
    this.#status = newStatus;
  }

  getDisplayName() {
    return this.#displayName;
  }

  getProfilePicture() {
    return this.#profilePict;
  }
}

class Chat {
  #me;
  #them;
  #listOfMessages;

  constructor(me, them) {
    this.#me = me;
    this.#them = them;
    this.#listOfMessages = [];
  }

  getThem() {
    return this.#them;
  }

  addMessage(message) {
    if (message.getSender() != this.#me && message.getSender() != this.#them) {
        console.log("Trying to add message with wrong sender");
        return;
    }
    if (message.getReceiver() != this.#me && message.getReceiver() != this.#them) {
        console.log("Trying to add message with wrong receiver");
        return;
    }

    this.#listOfMessages.push(message);
  }

  render() {
    const messageList = document.getElementById("message-list");
    if (!messageList) {
      console.log("Element with id message-list not found");
      return;
    }
    // Svuota la lista, la renderizziamo da capo ogni volta (non ottimale, ma moolto piu' semplice)
    messageList.innerText = "";
    // Cicla su tutti i messaggi della chat
    this.#listOfMessages.forEach((message) => {
      const liElement = document.createElement("li");
      // A seconda del tipo di messaggio, qui verra' eseguito un diverso getContext
      // (quello della classe ImageMessage e quello della classe TextMessage)
      liElement.innerHTML = message.getContent(); 
      liElement.className =
        message.getSender() == this.#me ? "sent-by-me" : "sent-by-them";
      messageList.appendChild(liElement);
    });

    //TODO: controllare che gli elementi esistano
    document.getElementById("chat-name-receiver").innerText = this.#them.getDisplayName();
    document.getElementById("chat-profile-image").src = this.#them.getProfilePicture();
  }
}

//TODO: spostare i metodi switchChat e sendMessage in una classe "controller",
// il cui compito sara' gestire l'interazione fra il "model" (ovvero i dati)
// e la "view" ovvero l'HTML + CSS
function switchToChat(chat) {
    if (!chat instanceof Chat) {
        console.log("Cannot switch to an object that is not of type 'Chat', you passed:", chat);
        return;
    }
    
    currentChat = chat;
    currentChat.render();
}

function sendMessage(e) {
  const messageInput = document.querySelector("#send-message input");
  if (!messageInput) {
    console.log("Cannot find any input child of #send-message");
    return;
  }
  currentChat.addMessage(new TextMessage(me, currentChat.getThem(), messageInput.value));

  // Renderizzo nuovamente la chat
  currentChat.render();
  
  // Questo evita che il browser faccia il comportamento di default sul submit, ovvero mandare i dati al server e ricaricare la pagina
  e.preventDefault();
}

// Inizializzo gli utenti (andrebbero caricati da db)
const me = new User(1, "Matteo", "Mondini");
const pluto = new User(2, "PLuto", "Pluto");
const pippo = new User(3, "Pippo", "Pippo");

pluto.changeProfilePicture("https://store.modamerceria.it/8021-thickbox_default/pluto-disney-applicazione-patch-ricamata-e-termoadesiva.jpg");
pippo.changeProfilePicture("https://www.ventennipaperoni.com/wp-content/uploads/2020/03/volto-pippo-e1584113937806.jpg")

// Inizializzo le chat (andrebbero caricate da db)
const myChatWithPippo = new Chat(me, pippo);
const myChatWithPluto = new Chat(me, pluto);

//TODO: la lista delle chat a sinistra dell'applicazione va renderizzata a partire da questa lista
const arrayOfChats = [
    myChatWithPippo,
    myChatWithPluto,
]

// Aggiungo messaggi alle chat (andrebbero caricati da db periodicamente con un setInterval)
const newTextMessage = new TextMessage(
  me,
  pluto,
  "Wooof! Wooof!Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof!Wooof!Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof! Wooof!"
);
const newTextMessage2 = new TextMessage(pluto, me, "Bark!");
const newTextMessage3 = new TextMessage(me, pluto, "Woof");

myChatWithPluto.addMessage(newTextMessage);
myChatWithPluto.addMessage(newTextMessage2);
myChatWithPluto.addMessage(newTextMessage3);

myChatWithPippo.addMessage(new TextMessage(me, pippo, "Ciao pippo"));
myChatWithPippo.addMessage(new ImageMessage(pippo, me, "https://www.disneyclips.com/images/images/goofy30.png"));

// Inizializzo la variabile che tiene la chat corrente e la renderizzo a video
// (Questo codice potrebbe stare nel Controller, insieme ad arrayOfChats)
let currentChat = arrayOfChats[0];
currentChat.render();
