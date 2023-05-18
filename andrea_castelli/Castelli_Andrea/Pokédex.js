const Captures=[];
const AllPokemon=[
    {"Name": "Pikachu", "Level": 5, "URL": "https://th.bing.com/th?id=OSK.1b20366f47864b1343de07e867739e3f&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM", "Description": "Pikachu is an Electric type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon."},
    {"Name": "Charmander", "Level": 5, "URL": "https://th.bing.com/th?id=OSK.b8698b476ac9036c8f5b546c6a79d501&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM", "Description": "Charmander is a Fire type Pokémon introduced in Generation 1. It is known as the Lizard Pokémon."},
    {"Name": "Squirtle", "Level": 5, "URL": "https://th.bing.com/th?id=OSK.4003ba6f26c09a8bb4eea41a40f072ba&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM", "Description": "Squirtle is a Water type Pokémon introduced in Generation 1. It is known as the Tiny Turtle Pokémon."},
    {"Name": "Bulbasaur", "Level": 5, "URL": "https://th.bing.com/th?id=OSK.b5b61b25843c29c16640918da40f8180&w=148&h=148&c=7&o=6&dpr=1.3&pid=SANGAM", "Description": "Bulbasaur is a Grass / Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon."}
];
let i=5;

function insertPokémon()
{
    const pokemon={"Name": "", "Level": 0, "URL": "", "Description": ""};

    const name=document.getElementById("name").value;
    const captured=document.getElementById("captured").value;
    const level=document.getElementById("level").value;
    const url=document.getElementById("url").value;
    const description=document.getElementById("description").value;


    const divP=document.createElement("div");

    const nameL=document.createElement("label");
    nameL.setAttribute("class", "nome");
    nameL.innerHTML=name;
    const levelL=document.createElement("label");
    levelL.setAttribute("class", "livello")
    levelL.innerHTML=level;
    const image=document.createElement("img");
    image.setAttribute("class", "immagine");
    image.setAttribute("src", url);
    const descriptionL=document.createElement("label");
    descriptionL.setAttribute("class", "descrizione");
    descriptionL.innerHTML=description;

    const listaP=document.getElementById("listaP");
    listaP.appendChild(divP);
    divP.appendChild(image);
    divP.appendChild(nameL);
    divP.appendChild(descriptionL);


    pokemon.Name=name;
    pokemon.Level=level;
    pokemon.URL=url;
    pokemon.Description=description;
    AllPokemon.push(pokemon);
    console.log(AllPokemon);

    if(document.getElementById("captured").checked)
    {
        Captures.push(pokemon);
        console.log(Captures);
    }
    

    const button=document.createElement("button");
    button.innerHTML=name;
    button.setAttribute("value", name);
    button.setAttribute("id", "p"+i);
    button.setAttribute("onclick", "search(this.id)");
    const li=document.createElement("li");
    const ul=document.getElementById("lista");
    li.appendChild(button);
    ul.appendChild(li);

    i++;
}



function search(id)
{
    const nomePokemon=document.getElementById(id).value;

    let counterLine=0;
    let counter=0;
    for(let j=0; j<AllPokemon.length; j++)
    {
        if(nomePokemon==AllPokemon[j].Name)
        {
            break;
        }

        counter++;
        if(counter==3)
        {
            counter=0;
            counterLine++;
        }
    }

    /*390 è la dimensione media di ogni div contenente i dati sul Pokémon*/
    const height=counterLine*390;
    window.scrollTo({ top: height, behavior: 'smooth'});
}