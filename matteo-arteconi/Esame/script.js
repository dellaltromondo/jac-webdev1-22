const form = document.querySelector('form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const pkmName = document.querySelector('#pkmName').value;
    const pkmUrl = document.querySelector('#pkmUrl').value;
    const descrizione = document.querySelector('#descrizione').value;

    const nuovoPokèmon = document.createElement('div');
    nuovoPokèmon.innerHTML = `
  <img src=${pkmUrl} >
  <h4>${pkmName}</h4>
  <p>${descrizione}</p>
  `;

    const contenitore = document.querySelector('.cards');
    contenitore.appendChild(nuovoPokèmon);

    
    function aggiungiClasse(elemento, classe) {
        elemento.setAttribute('class', classe);
      }


});




/* tentativo di aggiungere pokemon con lo stile delle altre cards
const cardsStyle = getComputedStyle(document.querySelector('.card'));*/
