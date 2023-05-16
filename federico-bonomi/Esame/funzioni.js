function inserisciPokemon()
{
    if(document.getElementById('nomePokemon').value=='')
    {
        alert("Inserisci il nome del Pokèmon");
        return;
    }
    else if(document.getElementById('imagePokemon').value=='')
    {
        alert("Inserisci l'URL dell'immagine");
        return;
    }
    else if(document.getElementById('descriptionPokemon').value=='')
    {
        alert("Inserisci la descrizione");
        return;
    }
    const nome=document.getElementById('nomePokemon').value;

    //creo il link per l'ancora
    const link=document.createElement('a');
    link.setAttribute("href", `#${nome}`);
    link.innerText=nome;
    const indice=document.getElementById("indice");
    indice.appendChild(link);

    const nuovoPokemon = document.createElement('li');
    nuovoPokemon.setAttribute("class", "card");

    //creo l'ancora
    const a = document.createElement('a');
    a.setAttribute("id", document.getElementById('nomePokemon').value);
    nuovoPokemon.appendChild(a);

    //creo l'immagine
    const imgPokemon = document.createElement('img');
    imgPokemon.setAttribute("src", document.getElementById('imagePokemon').value);
    imgPokemon.setAttribute("alt", document.getElementById('nomePokemon').value);
    nuovoPokemon.appendChild(imgPokemon);

    //creo la div contenente il nome e la descrizione
    const div = document.createElement('div');
    div.setAttribute("class", "container");
    div.appendChild(creaSezione('nomePokemon','strong'));
    div.appendChild(creaSezione('descriptionPokemon','p'));
    nuovoPokemon.appendChild(div);

    const pokemon = document.getElementById('pokemon');

    pokemon.appendChild(nuovoPokemon);

    document.getElementById('nomePokemon').value='';
    document.getElementById('imagePokemon').value='';
    document.getElementById('descriptionPokemon').value=''
    hideForm();
}

function creaSezione(inputId, tipo)
{
    const elemento = document.getElementById(inputId).value;
    const nuovoElemento = document.createElement(tipo);
    nuovoElemento.innerText =elemento;
    return nuovoElemento;
}

function hideForm()
{
    const form=document.getElementById("aggiungi");
    form.setAttribute("class", "scompari")
}

function seeForm()
{
    const form=document.getElementById("aggiungi");
    form.setAttribute("class", "compari")
}