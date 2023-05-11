<html>
    <head>
        <title>Classi Javascript</title>
    </head>
    <body>
        <script>
            class Message {
                #timeStamp
                #sender
                #receiver

                constructor(timeStamp, sender, receiver) {
                    this.#timeStamp = timeStamp
                    this.#sender = sender
                    this.#receiver = receiver
                }

                get timeStamp() {
                    return this.#timeStamp
                }
                get sender() {
                    return this.#sender
                }
                get receiver() {
                    return this.#receiver
                }
            }
            class TextMessage extends Message {
                #text
                constructor(text) {
                    super()
                    this.#text = text
                }
                get text() {
                    return this.#text
                }
            }
            class imageMessage extends Message {
                #image
                constructor(image) {
                    super()
                    this.#image = image
                }
                get image() {
                    return this.#image
                }
            }
            class AudioMessage extends Message {
                #audio
                constructor(audio) {
                    super()
                    this.#audio = audio
                }
                getAudio() {
                    return this.#audio
                }
            }
            class VideoMessage extends Message {
                #video
                constructor(video) {
                    super()
                    this.#video = video
                }
                getVideo() {
                    return this.#video
                }
            }

            const newMessage = new Message(new Date(), "Me", "You")
            console.log(newMessage)

            const txtMsg = new TextMessage("a")
            const imgMsg = new imageMessage("bo")
            const audMsg = new AudioMessage("audio")
            const vidMsg = new VideoMessage("video")

            console.log("messaggio di testo: " + txtMsg.text)
            console.log("messaggio di immagine: " + imgMsg.image)
            console.log("messaggio di audio: " + audMsg.getAudio())
            console.log("messaggio di video: " + vidMsg.getVideo())

        </script>
    </body>
</html>
