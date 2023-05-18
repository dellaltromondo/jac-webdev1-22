let colore = "";
/* la logiut riporta alla pagina di login, che quando viene caricata cancella i dati dell'utente salvati in localStorage */
function logOut()
{
  window.location.href = "login.html";
}

/* la loadDati al carcamento della pagina viene richiamata e con la fetch riceve dal server una lista completa delle materie
   che l'utente loggato ha salvato nel database (l'id dell'utente loggato l'hosalvato nel localStorage in fase di login, in
   modo tale da averlo disponibile dutante tutta la sessione) */

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

/* la getColore semplicemente legge il colore selezionato nel form ricevendo come arametro l'id del div 
   che rappresenta il colore scelto e lo ritorna */

function getColore(id) 
{
    colore=document.getElementById(id).style.backgroundColor;
}

/*La createSubjectContainer riceve come parametro un oggetto Materia che viene creato dopo aver letto i valori inseriti nel form
  in seguito crea il container che conterrà il nome della materia e del docente, sotto la media dei voti della materia (funzione non implementata)*/

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
/* questo event listener quando il form viene submittato legge i dati del form e crea l'oggetto Materia,
   tramite la fetch e manda il json dell'oggetto al server che a sua volta lo salva nel database. solo dopo 
   aver ricevuto una risposta positiva dal server richiamo la createSubjectContainer che mi crea il container
   e lo appende alla section che contiene tutte le materie*/
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