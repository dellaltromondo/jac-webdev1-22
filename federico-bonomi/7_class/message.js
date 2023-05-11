class message
{
    #timeStamp;
    #sender;
    #receiver;

    constructor (timeStamp, sender, receiver)
    {
        this.#receiver=receiver;
        this.#sender=sender;
        this.#timeStamp=timeStamp
    }

    getTimeStamp()
    {
        return this.#timeStamp;
    }

    getSender()
    {
        return this.#sender;
    }

    getReceiver()
    {
        return this.#receiver
    }
}

class textMessage extends message
{
    #textContent

    constructor (timeStamp, sender, receiver, textContent)
    {
        super(timeStamp, sender, receiver);
        this.#textContent=textContent;
    }

    getTextContent()
    {
        return this.#textContent;
    }message
}


class imgMessage extends message
{
    #srcImage

    constructor (timeStamp, sender, receiver, srcImage)
    {
        super(timeStamp, sender, receiver);
        this.#srcImage=srcImage;
    }

    getSrcImage()
    {
        return this.#srcImage;
    }
}


const provaText=new textMessage('2023-04-13T13:51:50.417-07:00', "Andrea", "Federico", "coglione");
const provaImg=new imgMessage('2023-04-13T13:56:30.417-07:00', "Federico", "Andrea", "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ");

function prova()
{
    alert(provaText.getTimeStamp()+"\nSender: "+ provaText.getSender()+"\nReceiver: "+ provaText.getReceiver()+"\nText: "+ provaText.getTextContent())
    alert(provaImg.getTimeStamp()+"\nSender: "+ provaImg.getSender()+"\nReceiver: "+ provaImg.getReceiver()+"\nImg link: "+ provaImg.getSrcImage())
}