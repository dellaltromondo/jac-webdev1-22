class Message {
    constructor(time, sender, receiver) {
      this.time = time;
      this.sender = sender;
      this.receiver = receiver;  
    }
}

function getTime(){
    return time;
}


class TextMessage extends Message{
    constructor(textMessage, time, sender, receiver) {
      this.textMessage = textMessage;
      /*this.time = time;
      this.sender = sender;
      this.receiver = receiver;  */
    }
}

class ImgMessage extends Message{
    constructor(img, textMessage, time, sender, receiver) {
      this.textMessage = textMessage;
      /*this.time = time;
      this.sender = sender;
      this.receiver = receiver;  */
    }
}