const checkCommit = document.getElementById("CommitButton");
checkCommit.addEventListener("click", function () {
    const inputName = document.getElementById("InputName").value;
    const inputSurname = document.getElementById("InputSurname").value;

    const ElementUl = document.createElement("ul");
    ElementUl.setAttribute("class", "Elenco");
    const ElementGetTagBody = document.getElementById("Elenchi");
    ElementGetTagBody.appendChild(ElementUl);
    const ElementLi = document.createElement("li");
    ElementLi.setAttribute("class", "Valore_Elenco");
    ElementUl.appendChild(ElementLi);
    const ElementPNome = document.createElement("p");
    let StringIdentificativaValoreP = "Nome: ";
    ElementPNome.innerText = StringIdentificativaValoreP + inputName;
    ElementLi.appendChild(ElementPNome);
    const ElementPCognome = document.createElement("p");
    StringIdentificativaValoreP = "Cognome: ";
    ElementPCognome.innerText = StringIdentificativaValoreP + inputSurname;
    ElementLi.appendChild(ElementPCognome);
});