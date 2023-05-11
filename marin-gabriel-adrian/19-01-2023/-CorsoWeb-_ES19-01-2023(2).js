const checkCommit=document.getElementById("CommitButton");
checkCommit.addEventListener("click",function() {
    const inputName=document.getElementById("InputName").value;
    const inputSurname=document.getElementById("InputSurname").value;

    const nuovoElemento=document.createElement("section");
    nuovoElemento.innerText="Ciao";
    nuovoElemento.setAttribute("class","schedeEl");
    const elementoSchede=document.getElementById("Schede");
    elementoSchede.appendChild(nuovoElemento);
    const appendNuovoElemento=document.createElement("p");
    appendNuovoElemento.innerText="Nome:"+inputName;
    const appendElementoSchede=document.getElementsByClassName("schedeEl");
    appendElementoSchede.appendChild(appendNuovoElemento);
    const appendNuovoElemento2=document.createElement("p");
    appendNuovoElemento2.innerText="Cognome:"+inputSurname;
    appendElementoSchede.appendChild(appendNuovoElemento2);
});