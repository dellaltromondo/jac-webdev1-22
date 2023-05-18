var listaPokemon = {

    Pikachu: {
    nome: 'Pikachu' ,
    categoria: 'elettro',
    livello: 10,
    immagine : "https://media.pokemoncentral.it/wiki/5/5e/Artwork0025_RFVF.png", 
    descrizione: 'Pikachu è un Pokémon di tipo Elettro introdotto in prima generazione.'
    },

    Charmender: {
        nome: 'Charmender' ,
        categoria: 'fuoco',
        livello: 50,
        immagine : "https://media.pokemoncentral.it/wiki/a/ab/Artwork0004_RFVF.png", 
        descrizione: 'Charmander è un Pokémon di tipo Fuoco introdotto in prima generazione'
    },
    
    Squirtle: {
        nome: 'Squirtle' ,
        categoria: 'acqua',
        livello: 30,
        immagine : "https://media.pokemoncentral.it/wiki/8/8d/Artwork0007_RFVF.png", 
        descrizione: "Squirtle è un Pokémon di tipo Acqua introdotto in prima generazione."
    },

    Bulbasaur: {
        nome: 'Bulbasaur' ,
        categoria: 'erba/veleno',
        livello: 20,
        immagine : "https://media.pokemoncentral.it/wiki/thumb/9/9b/Artwork0001_RFVF.png/1024px-Artwork0001_RFVF.png", 
        descrizione: "Bulbasaur è un Pokémon di doppio tipo Erba/Veleno introdotto in prima generazione."
    }
};

function MostraPika(pokemon){
    const img = document.createElement("img"); 
    const DivPika = document.getElementById("Pikachu");
    img.src = pokemon.Pikachu.immagine ;
    DivPika.appendChild(img);
    document.getElementsByTagName("body")[0].style.display="none";
}

function MostraCharme(pokemon){
    const img2 = document.createElement("img"); 
    const DivCharme = document.getElementById("Charmender");
    img2.src = pokemon.Charmender.immagine ;
    DivCharme.appendChild(img2);
    document.getElementsByTagName("body")[0].style.display="none";
}

function MostraSqui(pokemon){
    const img3 = document.createElement("img"); 
    const DivSqui = document.getElementById("Squirtle");
    img3.src = pokemon.Squirtle.immagine ;
    DivSqui.appendChild(img3);
    document.getElementsByTagName("body")[0].style.display="none";
}

function MostraBulba(pokemon){
    const img4 = document.createElement("img"); 
    const DivBulba = document.getElementById("Bulbasaur");
    img4.src = pokemon.Charmender.immagine ;
    DivBulba.appendChild(img4);
    document.getElementsByTagName("body")[0].style.display="none";
}