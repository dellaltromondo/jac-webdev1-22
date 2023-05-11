function setNewPokemon(event) {
    event.preventDefault();
    const UL = document.getElementById("pokeList");
    const pkmName = document.getElementById("pokeName");
    const pkmIMG = document.getElementById("pokeImg");
    const pkmDescription = document.getElementById("pokeDescription");
    const levelInp = document.getElementById("level");
    const newLI = document.createElement("li");
    const newImg = document.createElement("img");
    const newName = document.createElement("h3");
    const level = document.createElement("p");
    const newP = document.createElement("p");
    UL.appendChild(newLI);
    newLI.appendChild(newImg);
    newLI.appendChild(newName);
    newLI.appendChild(level);
    newLI.appendChild(newP);
  
    newImg.src = pkmIMG.value;
    newName.innerText = pkmName.value;
    level.innerText = "Level " + levelInp.value;
    newP.innerText = pkmDescription.value;
  
    pkmName.value = '';
    pkmIMG.value = '';
    pkmDescription.value = '';
  }
  
  const form = document.getElementById("insertNewPokemon");
  
  form.addEventListener("submit", setNewPokemon);
  