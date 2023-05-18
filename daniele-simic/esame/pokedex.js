function openInsertNewPokemon() {
    const section = document.getElementById("insert-new");
    section.style.display="grid"
}

function scrollToPokemon() {
    const element = document.getElementById("last-one");
    element.scrollIntoView()
}

function saveNewPokemon() {
    const pokedex = document.getElementById("pokedex")
    const name = document.getElementById("nome-pokemon").value;
   // const level = document.getElementById("level").value;
    const immagine = document.getElementById("immagine-pokemon").value;
    const descrizione = document.getElementById("descrizione-pokemon").value
    const sezioneBottoni = document.getElementById("ricerca-pokemon")
    const section = document.getElementById("insert-new");

    const bottonePokemon = document.createElement("button")
    const fotoPokemon = document.createElement("img");
    const sezione = document.createElement("article");
    const titolo = document.createElement("h3");
    const contenuto = document.createElement("p");

    bottonePokemon.innerText= name;
    sezioneBottoni.insertAdjacentElement("beforeend", bottonePokemon);
    fotoPokemon.src = immagine;
    sezione.classList.add("pokemon")
    titolo.classList.add("pokemon-name");
    sezione.setAttribute('id', "last-one")

    bottonePokemon.setAttribute("onclick", 'scrollToPokemon()');
    titolo.innerText= name;
    contenuto.innerText= descrizione;

    pokedex.appendChild(sezione);

    sezione.appendChild(fotoPokemon)
    sezione.appendChild(titolo);
    sezione.appendChild(contenuto)

    section.style.display= "none";
}

