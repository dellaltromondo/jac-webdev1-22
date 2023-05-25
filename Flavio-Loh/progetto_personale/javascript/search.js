
// js per la barra di ricerca 

// recupera tutti gli elementi della lista degli articoli
const items = document.querySelectorAll('.item');

// funzione per filtrare gli articoli in base alla ricerca
function filterItems(searchTerm) {

  // converte il testo di ricerca in minuscolo
  searchTerm = searchTerm.toLowerCase();

  // itera su ogni elemento e nasconde quelli che non corrispondono alla ricerca
  items.forEach(function (item) {

    const name = item.querySelector('h3').textContent.toLowerCase();

    // controlla se il nome dell'elemento inizia con la lettera o le lettere cercate
    if (name.startsWith(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// gestisce l'evento di modifica dell'input di ricerca
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', function () {
  filterItems(this.value);
});