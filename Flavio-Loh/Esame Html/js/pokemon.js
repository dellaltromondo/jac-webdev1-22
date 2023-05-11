function Input() {
    const nomePokemon = document.getElementById("nomePokemon").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const descrizionePokemon = document.getElementById("DescrizionePokemon").value;
  
    const divCard = document.createElement("div");
    divCard.classList.add("card");
  
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("imgBackground");
   
    divCard.appendChild(img); 
    const divDescription = document.createElement("div");
    divDescription.classList.add("description");
  
    const h2 = document.createElement("h2");
    h2.innerHTML = nomePokemon;
    divDescription.appendChild(h2);
  
    const p = document.createElement("p");
    p.innerHTML = descrizionePokemon;
    divDescription.appendChild(p);

    divCard.appendChild(divDescription); 
    const Pokemon = document.getElementById("Pokemon");
    Pokemon.appendChild(divCard);
  
    document.getElementById("nomePokemon").value = "";
    document.getElementById("imageUrl").value = "";
    document.getElementById("DescrizionePokemon").value = "";
}
  