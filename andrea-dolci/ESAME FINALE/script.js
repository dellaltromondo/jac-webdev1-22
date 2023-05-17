const pokedex = [
    {name: 'Pikachu', description: 'Pikachu is an Electric-type', url: './images/Pikachu.png'},
    {name: 'Charmander', description: 'Charmander is an Fire-type', url: './images/Charmander.png'},
    {name: 'Squirtle', description: 'Squirtle is an Water-type', url: './images/Squirtle.png'},
    {name: 'Bulbasaur', description: 'Bulbasaur is an Grass/Poison-type', url: './images/Bulbasaur.png'},
];

function createStarter(){
    const articlePokemon = document.getElementsByTagName('article')[0];

    articlePokemon.innerHTML = '';
    pokedex.map(pokemon => {
        const divCard = document.createElement('div');
        divCard.setAttribute('class', 'card-container');
        divCard.innerHTML = `<img src='${pokemon.url}'>
            <h1>${pokemon.name}</h1>
            <p>${pokemon.description}</p>`;

        articlePokemon.appendChild(divCard);
    })
}

function createNew(){
    const namePokemon = document.getElementById('name').value;
    const descriptionPokemon = document.getElementById('description').value;
    const urlPokemon = document.getElementById('url').value;

    const newPokemon = {
        name: namePokemon,
        description: descriptionPokemon,
        url: urlPokemon
    };
    
    pokedex.push(newPokemon);

    const ulPokemon = document.getElementById('ulPokemon');


    const newButton = document.createElement('button');
    newButton.setAttribute('id', namePokemon);
    newButton.setAttribute('onclick', `onClickPokemon('${namePokemon}')`);
    newButton.innerHTML = `${namePokemon}`;
    ulPokemon.appendChild(newButton)

    createStarter();
}

function onClickPokemon (namePokemon) {
    const articlePokemon = document.getElementsByTagName('article')[0];
    articlePokemon.innerHTML = '';
    pokedex.map(element => {
        if(element.name === namePokemon){
            const divCard = document.createElement('div');
            divCard.setAttribute('class', 'card-container');
            divCard.innerHTML = `<img src='${element.url}'>
                <h1>${element.name}</h1>
                <p>${element.description}</p>`;

            articlePokemon.appendChild(divCard);
            return;
        }
    });
}