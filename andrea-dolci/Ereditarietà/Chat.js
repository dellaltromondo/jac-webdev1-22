class Chat{
    #messageList = [];
    #user;

    constructor(user){
        this.#user = user;
    }

    sendMessage(message){
        this.#messageList.push(message);
    }

    getMessageList(){
        return this.#messageList;
    }

    getUser(){
        return this.#user;
    }
}

export {Chat};