class Message{
    
    #timeStamp;
    #sender;
    #receiver;

    constructor(timeStamp, sender, receiver){

        this.#timeStamp = timeStamp;
        this.#sender = sender;
        this.#receiver = receiver;
    }

    getTimeStamp(){
        return this.#timeStamp;
    }

    getSender(){
        return this.#sender;
    }

    getReceiver(){
        return this.#receiver;
    }
}

class TextMessage extends Message{

    #textContent;

    constructor(timeStamp, sender, receiver, textContent){

        super(timeStamp, sender, receiver);
        this.#textContent = textContent;
    }

    getTextContent(){
        return this.#textContent;
    }    
}

class ImgMessage extends Message{

    #srcImage;

    constructor(timeStamp, sender, receiver, srcImage){

        super(timeStamp, sender, receiver);
        this.#srcImage = srcImage;
    }

    getSrcImage(){
        return this.#srcImage;
    }    
}

class AudioMessage extends Message{

    #srcAudio;

    constructor(timeStamp, sender, receiver, srcAudio){

        super(timeStamp, sender, receiver);
        this.#srcAudio = srcAudio;
    }

    getSrcAudio(){
        return this.#srcAudio;
    }    
}

class VideoMessage extends Message{

    #srcVideo;

    constructor(timeStamp, sender, receiver, srcVideo){

        super(timeStamp, sender, receiver);
        this.#srcVideo = srcVideo;
    }

    getSrcVideo(){
        return this.#srcVideo;
    }    
}

export {Message};

/*TESTING



//TESTO
const txt = new TextMessage(new Date(), "Andrea", "Simone", "Messaggio prova");

alert(`Sender: ${txt.getSender()} \nReceiver: ${txt.getReceiver()} \nMessage: ${txt.getTextContent()} \nDate/time: ${txt.getTimeStamp()}`);

console.log(`Date/time: ${txt.getTimeStamp()}`);
console.log(`Sender: ${txt.getSender()}`);
console.log(`Receiver: ${txt.getReceiver()}`);
console.log(`Message: ${txt.getTextContent()} \n\n`);



//IMMAGINE
const img = new ImgMessage(new Date(), "Andrea", "Federico", "/img/img1.jpg");

alert(`Sender: ${img.getSender()} \nReceiver: ${img.getReceiver()} \nImage: ${img.getSrcImage()} \nDate/time: ${img.getTimeStamp()}`);

console.log(`Date/time: ${img.getTimeStamp()}`);
console.log(`Sender: ${img.getSender()}`);
console.log(`Receiver: ${img.getReceiver()}`);
console.log(`Image: ${img.getSrcImage()} \n\n`);



//AUDIO
const audio = new AudioMessage(new Date(), "Federico", "Simone", "/audio/audio1.mp3");

alert(`Sender: ${audio.getSender()} \nReceiver: ${audio.getReceiver()} \nAudio: ${audio.getSrcAudio()} \nDate/time: ${audio.getTimeStamp()}`);

console.log(`Date/time: ${audio.getTimeStamp()}`);
console.log(`Sender: ${audio.getSender()}`);
console.log(`Receiver: ${audio.getReceiver()}`);
console.log(`Audio: ${audio.getSrcAudio()} \n\n`);



//VIDEO
const video = new VideoMessage(new Date(), "Simone", "Federico", "/video/video1.mp4");

alert(`Sender: ${video.getSender()} \nReceiver: ${video.getReceiver()} \nVideo: ${video.getSrcVideo()} \nDate/time: ${video.getTimeStamp()}`);

console.log(`Date/time: ${video.getTimeStamp()}`);
console.log(`Sender: ${video.getSender()}`);
console.log(`Receiver: ${video.getReceiver()}`);
console.log(`Video: ${video.getSrcVideo()}`);  

*/