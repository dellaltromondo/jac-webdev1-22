
function registraCodice() {
  const promoInput = document.getElementById('promoInput');
  const codicePromo = promoInput.value;
  return codicePromo;
}
 

class Prodotto {

  constructor(id,nome, prezzo, codicePromo, elimina) {

    this.id = id;
    this.nome = nome;
    this.prezzo = prezzo;
    this.codicePromo = codicePromo;
    this.elimina = elimina; 

  }

}


var counter=1;

function creaProdotto(element) {

  const selezione = element.dataset.value;
  
  var prodotto;

  

  if (selezione == 'Straps') {

    prodotto = new Prodotto(counter,"Straps", 9.99,"Non inserito");

      }else if(selezione == 'Creatina'){
        prodotto = new Prodotto(counter,"Creatina",19.99,"Non inserito");

      }else if(selezione == 'Proteine'){
        prodotto = new Prodotto(counter,"Proteine",24.99,"Non inserito");

      }else if(selezione == 'T-shirt'){
        prodotto = new Prodotto(counter,"T-shirt",19.99,"Non inserito");

      }else if(selezione == 'Short'){
        prodotto = new Prodotto(counter,"Short",29.99,"Non inserito");

      }else if(selezione == 'Pre-workout'){
        prodotto = new Prodotto(counter,"Pre-workout",29.99,"Non inserito");

      }else if(selezione == 'Fit-shoes'){
        prodotto = new Prodotto(counter,"Fit-shoes",49.99,"Non inserito");

      }else if(selezione == 'Amminoacidi'){
        prodotto = new Prodotto(counter,"Creatina",12.95,"Non inserito");

      }else if(selezione == 'Ammino'){
        prodotto = new Prodotto(counter,"Creatina",15.99,"Non inserito");
        
  }

  console.log(prodotto)

counter++;
 aggiungiAlCarrello(prodotto);

 }


function aggiungiAlCarrello(prodotto) {
  const newElementTr = document.createElement('tr');

  const newElementTh = document.createElement('th');
  const textId = document.createTextNode(prodotto.id);
  newElementTh.appendChild(textId);

  const newElementTdName = document.createElement('td');
  const textName = document.createTextNode(prodotto.nome);
  newElementTdName.appendChild(textName);

  const newElementTdPrezzo = document.createElement('td');
  const textPrezzo = document.createTextNode(prodotto.prezzo);
  newElementTdPrezzo.appendChild(textPrezzo);

  const newElementTdPromo = document.createElement('td');
  const textPromo = document.createTextNode(prodotto.codicePromo);
  newElementTdPromo.appendChild(textPromo);

  const newElementTdElimina = document.createElement('td');

  const deleteButton = document.createElement("button");
  deleteButton.style = "color:white; border-color: white; background-color: white; box-shadow: 3px;";

  const deleteImage = document.createElement("img");
  deleteImage.src = "immagini/delete.png";
  deleteImage.style = "width:30px; height:30px";

  deleteButton.appendChild(deleteImage);
  deleteButton.onclick = function() {
    deleteRow(this);
  };

  newElementTdElimina.appendChild(deleteButton);

  newElementTr.appendChild(newElementTh);
  newElementTr.appendChild(newElementTdName);
  newElementTr.appendChild(newElementTdPrezzo);
  newElementTr.appendChild(newElementTdPromo);
  newElementTr.appendChild(newElementTdElimina);

  document.getElementById('corpo').appendChild(newElementTr);
}


function deleteRow(btn) {
  // Traverse up the DOM to find the closest <tr> element
  var row = btn.closest("tr");
  // Remove the row from the table
  row.remove();
}


function scrollToSection() {
  const dropdown = document.getElementById("productDropdown");
  const selectedIndex = dropdown.selectedIndex;
  
  if (selectedIndex > 0) {
    const sections = document.getElementsByTagName("section");
    const section = sections[selectedIndex - 1];
    section.scrollIntoView({ behavior: "smooth" });
  }
}



//SLIDER:

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slide = document.getElementsByClassName("mySlides");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) { slideIndex = 1 }
  slide[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Cambia immagine ogni 2 secondi
}

//-------------------------------------------------------------



