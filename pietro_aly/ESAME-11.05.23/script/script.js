function salvaDati() {
    var nome = document.getElementById("nome").value;
    var urlImmagine = document.getElementById("url").value;
    var descrizione = document.getElementById("desc").value;
  
    var nuovoElemento = document.createElement("div");
    nuovoElemento.className = "card";
    nuovoElemento.innerHTML = `
      <h3>${nome}</h3>
      <img src="${urlImmagine}" alt="Immagine">
      <p>${descrizione}</p>
    `;
  
    var colonnaDestra = document.querySelector(".image-container");
    colonnaDestra.appendChild(nuovoElemento);
  }
  