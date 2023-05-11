class Message
{
    #id;
    #sender;
    #receiver;
    #timestamp

    constructor ( id,sender, receiver, timestamp)
    {
        this.#id=id;
        this.#receiver=receiver;
        this.#sender=sender;
        this.#timestamp=timestamp
    }

    getId()
    {
        return this.#id;
    }

    getTimestamp()
    {
        return this.#timestamp;
    }

    getSender()
    {
        return this.#sender;
    }

    getReceiver()
    {
        return this.#receiver;
    }
}

class Chat
{
    #messageList=[];
    #user;

    constructor (user)
    {
        this.#messageList=[];
        this.#user=user;
    }

    getMessageList()
    {
        return this.#messageList;
    }

    getUser()
    {
        return this.#user;
    }

    sendMessage(message)
    {
        this.#messageList.push(message);
    }
}

class User
{
    #id;
    #displayName;
    #name;
    #surname;
    #profilePic
    #status;

    constructor(id, displayName, name, surname, profilePic, status)
    {
        this.#displayName=displayName;
        this.#id=id;
        this.#name=name;
        this.#profilePic=profilePic;
        this.#status=status;
        this.#surname=surname;
    }

    getId()
    {
        return this.#id;
    }

    getDisplayname()
    {
        return this.#displayName;
    }

    getName()
    {
        return this.#name;
    }

    getSurname()
    {
        return this.#surname;
    }

    getProfilePic()
    {
        return this.#profilePic;
    }

    getStatus()
    {
        return this.#status;
    }

    chahgeProfilePic(profilePic)
    {
        this.#profilePic=profilePic;
    }

    changeStatus(status)
    {
        this.#status=status;
    }

    changeDisplayName(displayName)
    {
        this.#displayName=displayName;
    }
}

function prova(messaggio)
{
    const me=new User("1", "13Febo", "Federico", "Bonomi", "https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg", "sto benone");
    const u=new User("2", "Andre03", "Andrea", "Dolci", "https://images.corsidia.com/ckeditor/pictures/data/000/000/086/content/immagini-e-tabelle-html-00.jpg", "sto benino");
    const c=new Chat(me);
    const m=new Message("1", me, u, Date.now());

    c.sendMessage(messaggio);
    console.log(c);
}