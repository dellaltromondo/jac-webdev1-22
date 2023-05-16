import { Message } from "./Message.js";
import { User } from "./User.js";
import { Chat } from "./Chat.js";

export function testing(){
    const me = new User(1, 'andreadolci', 'Andrea', 'Dolci', 'https:/profilePic.png', 'online');
    const u = new User(2, 'fedebonomi', 'Federico', 'Bonomi', 'https:/profilePic2.png', 'offline');
    const c = new Chat(u);
    const m = new Message(Date.now(), me, u);
    c.sendMessage(m);
    console.log(c);
}