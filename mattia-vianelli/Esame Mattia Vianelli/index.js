
const addPokemon = () => {
    const name = document.getElementById('name').value
    const image = document.getElementById('image').value
    const description = document.getElementById('description').value

    // aggiunge pokemon a destra
    const newPokemon = document.createElement('li')
    newPokemon.innerHTML = `
        <img src="${image}">
        <h3>${name}</h3>
        <p>${description}</p>
    `
    newPokemon.setAttribute('class', 'pokemon')
    newPokemon.setAttribute('id', `${name}`)
    document.getElementsByTagName('ul')[0].appendChild(newPokemon)

    // aggiunge pokemon nel menu
    const button = document.createElement('button')
    button.innerHTML = `${name}`
    button.setAttribute('onclick', `selectPokemon('${name}')`)
    button.setAttribute('type','button')

    const listPokemonMenu = document.getElementById('pokemon-list')
    listPokemonMenu.insertBefore(button, listPokemonMenu.firstChild)
    
}

const selectPokemon = (pokemon) => {
    const pokemons = document.getElementsByClassName('pokemon')
    if(pokemon === 'all') {
        for(let i=0; i<pokemons.length; i++) {
            pokemons[i].style.display = "block"
        }
    } else {
        for(let i=0; i<pokemons.length; i++) {
            if(pokemons[i].getAttribute('id') !== pokemon) {
                pokemons[i].style.display = "none"
            } else {
                pokemons[i].style.display = "block"
            }
        }
    }
}