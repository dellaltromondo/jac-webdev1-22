/* funzione mostra form*/
const button = document.getElementById("prenApp-button");

const openForm = () => {
  const form = document.getElementById("form");
  form.style.display = "block";
};

button.addEventListener("click", openForm);

/* funzione chiudi form*/
const buttonClose = document.getElementById("close-button")

const closeForm = () => {
  const form = document.getElementById("form");
  form.style.display = "none";
};

buttonClose.addEventListener("click", closeForm);

/* media query*/
const menuIcon = document.querySelector('.material-icons');
const menuList = document.querySelector('.menu-icon ul');

menuIcon.addEventListener('click', function () {
  menuIcon.classList.toggleMenu('active');
});

function toggleMenu() {
  const expMenuElement = document.getElementById("expanded-menu");
  if (expMenuElement.style.display !== "flex") {
    expMenuElement.style.display = "flex";
  } else {
    expMenuElement.style.display = "none";
  }
}

/* riepilogo appuntamento*/
const prenota = document.querySelector('.prenota');
prenota.addEventListener("click", function(evento) {
  evento.preventDefault(); //non refresha la pagine dopo submit

  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const tel = document.querySelector('#tel').value;
  const date = document.querySelector('#date').value;
  const dove = document.querySelector('#dove').value;
  const message = document.querySelector('#message').value;

  const riepilogo = document.createElement('div');
  riepilogo.innerHTML = `
  <p>Il tuo nome: ${nome} </p>
  <p>La tua e-mail: ${email}</p>
  <p>Il tuo numero di telefono: ${tel}</p>
  <p>La data da te scelta: ${date}</p>
  <p>Dove: ${dove}</p>
  <p>Il tuo messaggio: ${message}</p>
  `;

  const contenitore = document.querySelector('#riepilogo');
  contenitore.style.display = "block";
  contenitore.appendChild(riepilogo);

});