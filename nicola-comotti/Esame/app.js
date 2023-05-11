function newPokémon() {
    const pokemonElement = document.createElement('li');
    pokemonElement.setAttribute('class', 'pokémon-card');
    pokemonElement.setAttribute('tabindex', 0);

    const nameElement = document.createElement('h3');
    const pokeName = document.getElementById('nome').value;
    nameElement.innerText = pokeName;
    nameElement.setAttribute('class', 'pokémon-name');

    const pokeID = pokeName.toLowerCase() + '-card';
    pokemonElement.setAttribute('id', pokeID);

    const imgElement = document.createElement('img');
    const pokeImgURL = document.getElementById('url-img').value;
    imgElement.setAttribute('src', pokeImgURL);
    imgElement.setAttribute('class', 'pokémon-img');

    const descrElement = document.createElement('p');
    const pokeDescr = document.getElementById('descrizione').value;
    descrElement.innerText = pokeDescr;
    descrElement.setAttribute('class', 'pokémon-description');

    pokemonElement.appendChild(imgElement);
    pokemonElement.appendChild(nameElement);
    pokemonElement.appendChild(descrElement);

    document.getElementById('lista-pokémon').appendChild(pokemonElement);

    // creo Button nel menu a SX

    const menuElement = document.createElement('li');
    const buttonElement = document.createElement('button');

    const buttonId = 'button-' + pokeName.toLowerCase();
    buttonElement.setAttribute('id', buttonId)
    buttonElement.innerText = pokeName;
    buttonElement.setAttribute('onclick', `document.getElementById('${pokeID}').focus()`);

    menuElement.appendChild(buttonElement);
    document.getElementById('menu-pokémon').appendChild(menuElement);
}