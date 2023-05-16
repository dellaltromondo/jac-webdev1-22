function mostrapokemon(pokemon) {
  var caselle = document.querySelectorAll(".casellapokemon");
  for (var i = 0; i < caselle.length; i++) {
    caselle[i].classList.remove("hidden");
    if (caselle[i].classList.contains("unicavisualizzazione")) {
      caselle[i].classList.remove("unicavisualizzazione");
    }
    if (caselle[i].id != pokemon) caselle[i].classList.add("hidden");
    else caselle[i].classList.add("unicavisualizzazione");
  }  
}

function mostratutti() {
  var caselle = document.querySelectorAll(".casellapokemon");
  for (var i = 0; i < caselle.length; i++) {
    caselle[i].classList.remove("unicavisualizzazione");
    caselle[i].classList.remove("hidden");
  }
}

function creapokemon() {
  var nome = document.getElementById("nome").value;
  if (nome == "") {
    window.alert("Nome richiesto!");
    return;
  }
  var immagine = document.getElementById("immagine").value;
  if (immagine == "") {
    window.alert("Immagine richiesta!");
    return;
  }
  var descrizione = document.getElementById("descrizione").value;
  if (descrizione == " ") {
    window.alert("Descrizione richiesta !");
    return;
  }
  var div = document.createElement("pokemon");
  div.classList.add("casellapokemon");
  var immaginepokemon = document.createElement("img");
  immaginepokemon.src = immagine;
  div.appendChild(immaginepokemon);
  var nomepokemon = document.createElement("h1");
  nomepokemon.appendChild(document.createTextNode(nome));
  div.appendChild(nomepokemon);
  div.id = nome;
  var descrizionepokemon = document.createElement("p");
  descrizionepokemon.appendChild(document.createTextNode(descrizione));
  div.appendChild(descrizionepokemon);
  var container = document.getElementById("immagini");
  container.appendChild(div);
  var pulsantepokemon = document.createElement("input");
  pulsantepokemon.type = "button";
  pulsantepokemon.className = "bottonepokemon";
  pulsantepokemon.id = "bottone" + nome;
  pulsantepokemon.value = nome;  
  pulsantepokemon.addEventListener("click",mostrapokemon(nome));
  var bottoniricerca = document.getElementById("listapokemon");
  bottoniricerca.appendChild(pulsantepokemon);
}
