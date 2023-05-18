//FUNZIONI E VARIABILI PER CAMBIARE L'IMMAGINE DELLO SCHEMA
var imageList = Array();
for (var i = 1; i <= 5; i++) {
  imageList[i] = new Image(70, 70);
  imageList[i].src = "../immagini/schema" + i + ".png";
}
function cambiaImmagine() {
  var selectedImage = document.myForm.switch.options[document.myForm.switch.selectedIndex].value;
  document.myImage.src = imageList[selectedImage].src;
}

//FUNZIONI E COSTANTI PER TRASCINARE I PULSANTI E TRASFERIRE LE LORO SCRITTE ALLE INPUT BAR
const draggableElements = document.querySelectorAll(".bottonigiocatori");
const droppableElements = document.querySelectorAll(".giocatoriattivi");
draggableElements.forEach((elem) => {
  elem.draggable = true;
  elem.addEventListener("dragstart", (e) =>
    e.dataTransfer.setData("text", e.target.innerHTML)
  );
});
droppableElements.forEach((elem) => {
  elem.addEventListener("dragover", (e) => e.preventDefault());
  elem.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.value = e.dataTransfer.getData("text");
    aggiornaContatore();
  });
});

//FUNZONI E COSTANTI PER AGGIORNARE IL CONTATORE STIPENDI
const bottoniNomi = document.querySelectorAll(".bottonigiocatori");
const inputGiocatori = document.querySelectorAll("input[type='text']");
function aggiornaContatore() {
  const stipendi = document.querySelectorAll(".stipendio");
  let somma = 0;
  inputGiocatori.forEach((input) => {
    const nomeGiocatore = input.value;
    stipendi.forEach((stipendio) => {
      const nomeTabella = stipendio.parentNode.children[0].textContent;
      const stipendioGiocatore = parseInt(
        stipendio.textContent.replace(/\./g, "")
      );
      if (nomeGiocatore === nomeTabella) {
        somma += stipendioGiocatore;
      }
    });
  });
  document.getElementById("contatore").textContent = somma;
  document.getElementById("contatore").innerHTML = somma;
  document.getElementById("contatore").value = somma.toLocaleString("it-IT");
}

//FUNZIONI E VARIABILI PER FILTRARE I BOTTONI
function filterButtons() {
  var classes = [];
  var checkboxes = document.querySelectorAll("input[type='checkbox']");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      classes.push(checkboxes[i].id);
    }
  }
  var filterValue = document.getElementById("filter").value.toUpperCase();
  var buttons = document.querySelectorAll(".button");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var buttonText = button.textContent || button.innerText;

    if (
      (classes.length === 0 ||
        classes.some((c) => button.classList.contains(c))) &&
      (filterValue === "" || buttonText.toUpperCase().indexOf(filterValue) > -1)
    ) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }
  }
}
document.addEventListener("DOMContentLoaded", function (event) {
  var checkboxes = document.querySelectorAll("input[type='checkbox']");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
    checkboxes[i].addEventListener("change", filterButtons);
  }
  var filterInput = document.getElementById("filter");
  filterInput.addEventListener("input", filterButtons);
  filterButtons();
});

//FUNZIONI E VARIABILI PER MOSTRARE E NASCONDERE LE RIGHE DELLA TABELLA
const filter = document.getElementById("filter");
const checkboxes = document.querySelectorAll(".checkbox");
const table = document.getElementById("tabella");
filter.addEventListener("input", filterTable);
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", filterTable)
);
function filterTable() {
  const nameFilter = filter.value.toLowerCase();
  const positionFilter = [...checkboxes]
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  const rows = table.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    const name = rows[i]
      .getElementsByTagName("td")[0]
      .textContent.toLowerCase();
    const position = rows[i].getElementsByTagName("td")[2].textContent;
    const showRow =
      (!nameFilter || name.includes(nameFilter)) &&
      (!positionFilter.length || positionFilter.includes(position));
    rows[i].style.display = showRow ? "" : "none";
  }
}

//FUNZIONI E VARIABILI PER AGGIORNARE I CONTATORi RUOLI
function aggiornacontruoli() {
  var pgcont = 0;
  var sfcont = 0;
  var ccont = 0;
  var sgcont = 0;
  var pfcont = 0;
  var pgnumero = document.getElementById("contatoreruolopg");
  var pfnumero = document.getElementById("contatoreruolopf");
  var sgnumero = document.getElementById("contatoreruolosg");
  var sfnumero = document.getElementById("contatoreruolosf");
  var cnumero = document.getElementById("contatoreruoloc");
  const righe = table.getElementsByTagName("tr");
  const giocatori = document.querySelectorAll(".giocatoriattivi");
  giocatori.forEach((elem) => {
    if (elem.value != "") {
      for (let i = 1; i < righe.length; i++) {
        var nome = righe[i].getElementsByTagName("td")[0].textContent;
        var ruolo = righe[i].getElementsByTagName("td")[2].textContent;
        if (nome == elem.value)
          break;
      }
      if (ruolo == "PG") pgcont++;
      if (ruolo == "SG") sgcont++;
      if (ruolo == "SF") sfcont++;
      if (ruolo == "C") ccont++;
      if (ruolo == "PF") pfcont++;
    }
  });
  pgnumero.textContent = pgcont;
  pfnumero.textContent = pfcont;
  sgnumero.textContent = sgcont;
  sfnumero.textContent = sfcont;
  cnumero.textContent = ccont;
}

//FUNZIONI PER CONTROLLARE CHE CI SIANO 4 SQUADRE DIVERSE E COMINCIARE IL CAMPIONATO
function controllasquadre() {
  var menu1 = document.getElementById('menu_1').value;
  var menu2 = document.getElementById('menu_2').value;
  var menu3 = document.getElementById('menu_3').value;
  var menu4 = document.getElementById('menu_4').value;
  if ((menu1 != menu2) && (menu1 != menu3) && (menu1 != menu4) && (menu2 != menu3) && (menu2 != menu4) && (menu3 != menu4))
    return true;
  else
    return false;
}

function cominciacampionato() {
  start = controllasquadre();
  if (!start)
    window.alert("Seleziona quattro squadre diverse!");
  else {
    document.getElementById("submit").onclick = function () {
      location.href = "../php/campionato2.php";
    };
  }
}

