// Ottieni il modal
var modal = document.getElementById("myModal");

// Ottieni il bottone che apre il modal
var btn = document.getElementById("myBtn");

// Ottieni l'elemento di chiusura del modal
var span = document.getElementsByClassName("modal-close")[0];

// Quando l'utente clicca sul bottone, apri il modal
btn.onclick = () => {
  modal.style.display = "block";
}

// Quando l'utente clicca sull'elemento di chiusura, chiudi il modal
span.onclick = () => {
  modal.style.display = "none";
}

// Quando l'utente clicca fuori dal modal, chiudi il modal
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
