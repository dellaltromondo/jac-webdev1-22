let idPokemon = 1;
let arrayPokemon = [];

class Pokemon
{
    #idPokemon;
    #nome;
    #url;
    #descrizione;
    #catturato;
    #livello;

    constructor(idPokemon, nome, url, descrizione, catturato, livello)
    {
        this.#idPokemon = idPokemon;
        this.#nome = nome;
        this.#url = url;
        this.#descrizione = descrizione;
        this.#catturato = catturato;
        this.#livello = livello;
    }

    getIdPokemon()
    {
        return this.#idPokemon;
    }

    getNome()
    {
        return this.#nome;
    }

    getUrl()
    {
        return this.#url;
    }

    getDescrizione()
    {
        return this.#descrizione;
    }

    isCatturato()
    {
        return this.#catturato;
    }

    getLivello()
    {
        return this.#livello;
    }
}

function takeFormInputs()
{
    let catturato = false;
    let livello = 0;

    if(document.getElementById("captured").checked === true)
    {
        catturato = true;
    }

    if(!isNaN(parseInt(document.getElementById("level").value)))
    {
        livello = document.getElementById("level").value;
    }

    const nome = document.getElementById("pokemonName").value;
    const url = document.getElementById("imgUrl").value;
    const description = document.getElementById("pokemonDescription").value;

    const pokemon = new Pokemon(idPokemon, nome, url, description, catturato, livello);

    createPokemonHTML(pokemon);
}

function createPokemonHTML(pokemon)
{
    const elencoPokemon = document.getElementById("elencoPokemon");

    const card = document.createElement("section");
    card.setAttribute("class", "card");

    const banner = document.createElement("section");
    banner.setAttribute("class", "banner");

    const imgBackground = document.createElement("a");
    imgBackground.setAttribute("class", "imgBackground");
    imgBackground.setAttribute("id", pokemon.getNome() + idPokemon);

    const cardDescription = document.createElement("description");
    cardDescription.setAttribute("class", "description");

    const footer = document.createElement("footer");
    const titolo = document.createElement("h2");
    const testo = document.createElement("p");
    const catturato = document.createElement("p");
    const livello = document.createElement("p");

    titolo.innerText = pokemon.getNome();
    testo.innerText = pokemon.getDescrizione();

    if(pokemon.isCatturato() === false)
    {
        catturato.innerText = "Non catturato";
    }

    else if(pokemon.isCatturato() === true)
    {
        catturato.innerText = "Catturato!";
    }

    livello.innerText = `Livello: ${pokemon.getLivello()}`;

    footer.appendChild(titolo);
    footer.appendChild(testo);
    footer.appendChild(catturato);
    footer.appendChild(livello);
    cardDescription.appendChild(footer);

    imgBackground.style.backgroundImage = `url(${pokemon.getUrl()})`;

    banner.appendChild(imgBackground);
    card.appendChild(banner);

    card.appendChild(banner);
    card.appendChild(cardDescription);

    elencoPokemon.appendChild(card);

    //creo il bottone per il pokémon appena creato
    const elencoNomi = document.getElementById("elencoNomi");
    const bottonePokemon = document.createElement("a");
    bottonePokemon.setAttribute("class", "bottonePokemon");
    bottonePokemon.setAttribute("href", "#" + pokemon.getNome() + idPokemon);
    bottonePokemon.innerText = pokemon.getNome();

    elencoNomi.appendChild(bottonePokemon);

    document.getElementById("pokemonName").value = "";
    document.getElementById("imgUrl").value = "";
    document.getElementById("pokemonDescription").value = "";
    document.getElementById("captured").checked = false;
    document.getElementById("level").value = "";

    idPokemon++;
    arrayPokemon.push(pokemon);
}

function sortCaptured()
{
    const lista = document.getElementsByClassName("card");

    if(document.getElementById("sort").checked === false)
    {
        for(let i = 0; i < lista.length; i++)
        {
            lista[i].style.display = "flex";
        }
    }

    else
    {
        for(let i = 0; i<lista.length; i++)
        {
            if(arrayPokemon[i].isCatturato() === true)
            {
                lista[i].style.display = "flex";
            }
    
            else
            {
                lista[i].style.display = "none";
            }
        }
    }
}