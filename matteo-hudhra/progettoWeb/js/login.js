/* la loginUtente una volta letti i dati del form, manda una richiesta al server che risponde con una lista
   di tutti gli utenti salvati nel database. poi ho fatto un ciclo sulla lista finche i dati del form non combaciano:
   se combaciano con un utente allora l'utente esiste e si logga, e salvo in localStorage il suo id (anche username e password)
  che serviranno nelle altre pagine per chiedere al server di ritornare gli elementi legati a quell'utente nel database.
   se non esiste lo creo e faccio la stessa cosa in localStorage dopo aver richiamato con la fetch la lista degli user e preso
   l'ultimo inserito, e si logga.  */

async function loginUtente() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
    let response = await fetch('http://localhost:8080/mydiary/api/v1/users/');
    let responseJson = await response.json();
    for(let i = 0; i< responseJson.length; i++)
    {
      if(responseJson[i].nomeUtente === username && responseJson[i].passwordUtente === password)
      {
          idUtente = responseJson[i].idUtente;
          localStorage.setItem("idUtente", idUtente);
          localStorage.setItem("nomeUtente", username);
          localStorage.setItem("passwordUtente", password);
          window.location.href = "index.html";
      }
    }
    const utente = new Utente(username, password);
    const respo = await fetch('http://localhost:8080/mydiary/api/v1/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(utente)
    });
    if (respo.ok) {
      console.log('Dati inviati correttamente');
      let response = await fetch('http://localhost:8080/mydiary/api/v1/users/');
      let responseJson = await response.json();
      localStorage.setItem("idUtente", responseJson[responseJson.length-1].idUtente);
      localStorage.setItem("nomeUtente", responseJson[responseJson.length-1].nomeUtente);
      localStorage.setItem("passwordUtente", responseJson[responseJson.length-1].passwordUtente);
      window.location.href = "index.html";
    } else {
      console.log('Errore salvataggio dati');
    }
}   

