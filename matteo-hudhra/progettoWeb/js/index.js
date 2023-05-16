// Array delle materie
var subjects = [];
let colore = "";

function getColore(id) {

    colore=document.getElementById(id).style.backgroundColor;
}

function createSubjectContainer(subject) {
    // Creazione del contenitore
    var container = document.createElement("div");
    container.className = "subject-container";

    if(colore === "")
    {
        alert("Non hai selezionato un colore!");
        return;
    }

    container.style.backgroundColor = colore;

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
    
    // Calcolo della media dei voti
    /*
    var sum = 0;
    for (var i = 0; i < subject.voti.length; i++) {
        sum += subject.voti[i];
    }
    var average = sum / subject.voti.length;
    
    // Aggiunta della media dei voti
    var averageGrade = document.createElement("p");
    averageGrade.className = "average-grade";
    averageGrade.textContent = "Media voti: " + average.toFixed(2);
    container.appendChild(averageGrade);*/
    
    
    colore = "";
    return container;
}

// Gestore di eventi per l'aggiunta di una nuova materia
var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Lettura dei dati del form
    var subjectName = document.getElementById("subject-name").value;
    var teacherName = document.getElementById("teacher-name").value;
    
    // Creazione dell'oggetto materia
    const subject = new Subjects(subjectName,teacherName, colore)

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
    subjects.push(subject);
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




/*var Subjects subjects = {
    name: subjectName,
    teacher: teacherName,
    votes: []
};*/


});