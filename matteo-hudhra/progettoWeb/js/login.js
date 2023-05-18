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

