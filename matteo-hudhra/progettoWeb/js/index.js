let colore = "";
function logOut()
{
  window.location.href = "login.html";
}
async function loadDati()
{
    const materie = await fetch('http://localhost:8080/mydiary/api/v1/materia/'+localStorage.getItem("idUtente")+'/materia');
    const materieJson = await materie.json();
    for(let i = 0; i < materieJson.length; i++)
        {
            const subject = new Subjects(materieJson[i].nomeMateria, materieJson[i].nomeDocente, materieJson[i].coloreMateria, materieJson[i].codUtente);
            var container = createSubjectContainer(subject);
            // Aggiunta del contenitore alla pagina
            var subjectsContainer = document.getElementById("subjects-container");
            subjectsContainer.appendChild(container);
        }
}

function getColore(id) 
{
    colore=document.getElementById(id).style.backgroundColor;
}

function createSubjectContainer(subject) 
{
    // Creazione del contenitore
    var container = document.createElement("div");
    container.className = "subject-container";

    if(colore === "" && subject.getColore() === "")
    {
        alert("Non hai selezionato un colore!");
        return;
    }

    container.style.backgroundColor = subject.getColore();

    // Aggiunta del titolo della materia
    var title = document.createElement("p");
    title.className = "subject-title";
    title.textContent = subject.getMateria();
    container.appendChild(title);
    
    // Aggiunta del nome del professore
    var teacherName = document.createElement("p");
    teacherName.className = "teacher-name";
    teacherName.textContent = subject.getDocente();
    container.appendChild(teacherName);

    colore = "";
    return container;
}

var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Leggo i dati del form
    var subjectName = document.getElementById("subject-name").value;
    var teacherName = document.getElementById("teacher-name").value;
    
    // Creo l'oggetto materia
    const subject = new Subjects(subjectName,teacherName, colore, localStorage.getItem("idUtente"));

    //funzione fetch per collegarsi al server e salvare l'oggetto materia in caso di connessione riuscita
    fetch('http://localhost:8080/mydiary/api/v1/materia/', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(subject)
})
.then(response => {
    if (!response.ok) {
      throw new Error('Errore del server');
    }
    // Se la risposta è positiva, aggiungi la materia all'array e crea il contenitore
    var container = createSubjectContainer(subject);
    // Aggiunta del contenitore alla pagina
    var subjectsContainer = document.getElementById("subjects-container");
    subjectsContainer.appendChild(container);
    // Reset del form
    form.reset();
  })
  .catch(error => {
    alert("Errore di comunicazione colserver");
    console.error('There was a problem with the fetch operation:', error);
  });
});