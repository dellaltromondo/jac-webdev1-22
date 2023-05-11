const arrayPokemon = [
  { id: 1, href:"", img: "img/Pikachu.png", name: 'Pikachu', description: 'Its yellow' },
  { id: 2, href:"", img: 'img/Charmander.png', name: 'Charizard', description: 'A dragon' },
  { id: 3, href:"", img: 'img/bulbasaur.png', name: 'Bulbasaur', description: 'Explosive' },
  { id: 4, href:"", img: 'img/download.jpg', name: 'Squirtle', description: 'A turtle' }

];

function createCard() {
  const container = document.querySelector('#main');

  arrayPokemon.forEach((poke) => {
    const card = document.createElement('div');
    
    card.innerHTML = `
      <div id="divCard" key="${poke.id}">
        <img id="imgCard" src="${poke.img}"> 
        <h1>${poke.name}</h1>
        <p>${poke.description}</p>
        <hr/>
      </div>
    `;

    container.appendChild(card);
  });



  const link = document.getElementById('link');

  arrayPokemon.forEach((pokemon) => {
  const pokemonLink = document.createElement('a');
  pokemonLink.innerHTML = `
  <div id="divLink"><p>${pokemon.name}</p></div>`
  link.appendChild(pokemonLink);
});
}

document.addEventListener('DOMContentLoaded', function() {
  createCard();
});


function newPokemon() {
  let nameInput = document.getElementById('nameInput');
  let imageInput = document.getElementById('imageInput');
  let descriptionInput = document.getElementById('descriptionInput');

  let newPokemon = {
    id: arrayPokemon.length + 1,
    img: imageInput.value,
    name: nameInput.value,
    description: descriptionInput.value
  };

  arrayPokemon.push(newPokemon);

  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML += `
    <div>
      <h2>${newPokemon.name}</h2>
      <img src="${newPokemon.img}" alt="${newPokemon.name}" />
      <p>${newPokemon.description}</p>
    </div>
  `;
}