
const container = document.getElementById('image-container');
const loadingText = document.getElementById('loading-text');

// Nascondi il contenitore dell'immagine finché non è stato caricato
container.style.display = "none";

fetch('https://randomfox.ca/floof/')
  .then(response => response.json())
  .then(data => {
    const image = data.image;
    
    // Mostra il contenitore dell'immagine quando l'immagine è stata caricata
    container.style.display = "flex";
    loadingText.style.display = "none";
    
    // Inserisci l'immagine nel contenitore con il bordo
    container.innerHTML = `
      <img src="${image}" alt="fox image" style="width: 100%; height: 100%; object-fit: contain;">
    `;
  })
  .catch(error => console.error(error));