// class Pokemon {
//     constructor(nome, statoCattura, livello, url, descrizione){
//         this.nome = nome;
//         this.statoCattura = statoCattura;
//         this.livello = livello;
//         this.url = url;
//         this.descrizione = descrizione
//     }
// }

// var pokemon;
// var stato;
// var checkBoxCattura = document.getElementById("checkCapture");
// checkBoxCattura.addEventListener("change", function() {
//     if (this.checked) {
//         console.log("Checked");
//         stato = "catturato"
//     } else {
//         console.log("Unchecked");
//         stato = "non catturato"
//     }
// })

// function createPokemon() {
//     const nome = document.getElementById("txtPokemon");
//     const statoPokemon = stato;
//     const livello = document.getElementById("numberLevel");
//     const url = document.getElementById("txtImage");
//     const descrizione = document.getElementById("txtDescription");

//     pokemon = new Pokemon(nome, statoPokemon, livello, url, descrizione);

//     console.log(pokemon)
//     //addPokemonToGrid(pokemon);
// }

// function addPokemonToGrid(pokemon) {
//     const nomePokemon = document.createTextNode(pokemon.nome);
//     const statoPokemon = document.createTextNode(pokemon.stato);
//     const livelloPokemon = document.createTextNode(pokemon.livello);
//     const urlPokemon = document.createTextNode(pokemon.url);
//     const descrizionePokemon = document.createTextNode(pokemon.descrizione);

//     const newElementArticle = document.createElement('article')

//     const newElementImg = document.createElement('img');
//     newElementImg.setAttribute('src', urlPokemon);
//     newElementImg.setAttribute('class', 'pokemon-image');

//     const newElementH = document.createElement('h3');
//     const txtNomePokemon = document.createTextNode(nomePokemon);
//     newElementH.appendChild(txtNomePokemon)

//     newElementArticle.appendChild(newElementImg);
//     newElementArticle.appendChild(newElementH);

//     document.getElementById("contenitore").appendChild(newElementArticle);

// }


const submitBtn = document.getElementById("addPokemon");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const gridContainer = document.querySelector(".grid-container");
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    const pokemonImage = document.getElementById("txtImage").value;
    const pokemonName = document.getElementById("txtPokemon").value;
    const pokemonDescription = document.getElementById("txtDescription").value;

    const html = `
        <img src="${pokemonImage}" class="pokemon-image">
        <h3>${pokemonName}</h3>
        <p>${pokemonDescription}</p>
    `;

    gridItem.innerHTML = html;

    gridContainer.appendChild(gridItem);
})