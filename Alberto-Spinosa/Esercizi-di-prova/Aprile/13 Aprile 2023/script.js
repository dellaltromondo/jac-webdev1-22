class Message {

    #sender;
    #receiver;
    #timestamp;

    constructor(sender, receiver, timestamp) {
        this.#sender = sender
        this.#receiver = receiver
        this.#timestamp = timestamp
    }

    get getSender() {
        return this.#sender;
    }

    get getReceiver() {
        return this.#receiver;
    }

    get getDate() {
        return this.#timestamp;
    }

}

class User {

    // Profile infos
    #id;
    #name;
    #surname;

    // Changeble display infos       
    #displayName;
    #pfp = "";
    #status = "";

    constructor(id, name, surname) {
        this.#id = id;
        this.#name = name;
        this.#surname = surname;

        this.#displayName = name + " " + surname;
    }

    changeDisplayName(newDisplayName) {
        if (newDisplayName.length < 5) {
            throw new Error("Cannot have a display name that short");
        }
        // non mettiamo "else" per una questione di leggibilità
        this.#displayName = newDisplayName;
    }
    changeProfilePicture(newProfilePicture) {
        this.#pfp = newProfilePicture;
    }
}

class TextMessage extends Message {

    #textContent

    constructor(sender, receiver, timestamp, textContent) {
        super(sender, receiver, timestamp)
        this.#textContent = textContent
    }

    get getTextContent() {
        return this.#textContent
    }
}

class ImageMessage extends Message {
    constructor(sender, receiver, timestamp, image, sourceImage) {
        super(sender, receiver, timestamp)
        this.image = image
        this.sourceImage = sourceImage
    }

    get getImage() {
        return this.image
    }

    get getSourceImage() {
        return this.sourceImage
    }
}

const me = new User(1, "Matteo", "Bonzi");
console.log(me);
try {
    me.changeDisplayName("LeBron James");
    console.log(me);
    me.changeDisplayName("Me");
    console.log(me);
} catch (e) {
    console.log("!!! ERROR !!! " + e.message);
}

const you = new User(2, "Elena", "diSanDonato");

const newMessage = new Message(me, you, new Date());
console.log(newMessage);

//deep copy
newYou = JSON.parse(JSON.stringify(you));

const newTextMessage = new TextMessage(me, you, "Contenuto del messaggio");
console.log(newTextMessage);

me.changeDisplayName("Paperino");