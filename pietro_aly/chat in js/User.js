class User{
    #id;
    #displayName;
    #name;
    #surname;
    #profilePic;
    #status;

    constructor(id, displayName, name, surname, profilePic, status){
        this.#id = id;
        this.#displayName = displayName;
        this.#name = name;
        this.#surname = surname;
        this.#profilePic = profilePic;
        this.#status = status;
    }

    changeProfilePic(newProfilePic){
        this.#profilePic = newProfilePic;
    }

    changeStatus(newStatus){
        this.#status = newStatus;
    }

    changeDisplayName(newDisplayName){
        this.#displayName = newDisplayName;
    }

    getId(){
        return this.#id;
    }

    getDisplayName(){
        return this.#displayName;
    }

    getName(){
        return this.#name;
    }

    getSurname(){
        return this.#surname;
    }

    getProfilePic(){
        return this.#profilePic;
    }

    
    getStatus(){
        return this.#status;
    }
    
}

export {User};