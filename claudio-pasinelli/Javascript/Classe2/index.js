class User
{
    #id;
    #displayName;
    #name
    #surname;
    #profilePict = "";
    #status = "";

    constructor(id, name, surname)
    {
        this.#id = id;
        this.#name = name;
        this.#surname = surname;

        this.#displayName = name + " " + surname;
    }

    changeProfilePicture(newProfilePicture)
    {
        this.#profilePict = newProfilePicture;
    }

    changeDisplayName(newDisplayName)
    {
        if(newDisplayName.length < 5)
        {
            throw new Error("Cannot have display name this short!");
        }

        this.#displayName = newDisplayName;
    }

    changeStatus(newStatus)
    {
        this.#status = newStatus;
    }
    
}

class Chat
{
    #messageList;
    #user;

    constructor(user)
    {
        this.#user = user;
    }

    sendMessage(message)
    {

    }
}

class Message
{
    #timeStamp;
    #sender;
    #receiver;

    constructor(receiver, sender)
    {
        this.#sender = sender;
        this.#receiver = receiver;
        this.#timeStamp = new Date();
    }

    getTimeStamp()
    {
        return this.#timeStamp;
    }

    // get timeStamp()
    // {
    //     return this.#timeStamp;
    // }

    getSender()
    {
        return this.#sender;
    }

    getReceiver()
    {
        return this.#receiver;
    }
}

class TextMessage extends Message
{
    #textContent;

    constructor(receiver, sender, timeStamp, textContent)
    {   
        super(receiver, sender, timeStamp);
        this.#textContent = textContent;
    }

    getTextContent()
    {
        return this.#textContent;
    }
}

class ImgMessage extends Message
{
    #srcImage;
    
    constructor(receiver, sender, timeStamp, srcImage)
    {   
        super(receiver, sender, timeStamp);
        this.#srcImage = srcImage;
    }

    getSrcImage()
    {
        return this.#srcImage;
    }
}

class AudioMessage extends Message
{
    #audio;

    constructor(receiver, sender, timeStamp, audio)
    {   
        super(receiver, sender, timeStamp);
        this.#audio = audio;
    }

    getAudio()
    {
        return this.#audio;
    }
}

class VideoMessage extends Message
{
    #urlVideo;

    constructor(receiver, sender, timeStamp, urlVideo)
    {   
        super(receiver, sender, timeStamp);
        this.#urlVideo = urlVideo;
    }

    getUrlVideo()
    {
        return this.#urlVideo;
    }
}

// username, name, surname, profilePict, status

