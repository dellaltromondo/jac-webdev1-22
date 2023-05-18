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
            let container = createSubjectContainer(subject);
            let subjectsContainer = document.getElementById("subjects-container");
            subjectsContainer.appendChild(container);
        }
}

function getColore(id) 
{
    colore=document.getElementById(id).style.backgroundColor;
}

function createSubjectContainer(subject) 
{

    let container = document.createElement("div");
    container.className = "subject-container";

    if(colore === "" && subject.getColore() === "")
    {
        alert("Non hai selezionato un colore!");
        return;
    }

    container.style.backgroundColor = subject.getColore();

    let title = document.createElement("p");
    title.className = "subject-title";
    title.textContent = subject.getMateria();
    container.appendChild(title);
    
    let teacherName = document.createElement("p");
    teacherName.className = "teacher-name";
    teacherName.textContent = subject.getDocente();
    container.appendChild(teacherName);

    colore = "";
    return container;
}

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let subjectName = document.getElementById("subject-name").value;
    let teacherName = document.getElementById("teacher-name").value;

    const subject = new Subjects(subjectName,teacherName, colore, localStorage.getItem("idUtente"));
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
    let container = createSubjectContainer(subject);
    let subjectsContainer = document.getElementById("subjects-container");
    subjectsContainer.appendChild(container);
    form.reset();
  })
  .catch(error => {
    alert("Errore di comunicazione colserver");
    console.error('There was a problem with the fetch operation:', error);
  });
});