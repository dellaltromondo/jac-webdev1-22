


//-------------------------ARRAY CONTENTENTE I POKÉMON-----------------------------------
let listaProdotti = [
    {
        img:"https://i.pinimg.com/236x/4d/5a/8f/4d5a8fc7f7b0fd6752c501cade63869a.jpg",
        title:"SEAKING",
        description:"descrizione" 
    },
    {
        img:"https://i.pinimg.com/564x/d0/a8/bc/d0a8bc53afc614433949f7ee24f7cd00.jpg",
        title:"ARCANINE",
        description:"descrizione"  
    },
    {
        img:"https://i.pinimg.com/564x/46/12/1b/46121bfde76640535a7ebc4b6d828815.jpg",
        title:"POLIWHIRL",
        description:"descrizione"  
    },
    {
        img:"https://i.pinimg.com/564x/15/ca/3e/15ca3e1cc06bcdbc380662f2432008ee.jpg",
        title:"PIDGEY",
        description:"descrizione"  
    }
]

//--------------------------STAMPO L'ARRAY DEI POKEMON----------------------------------
const collection = document.getElementById('collection');

listaProdotti.forEach (function(prodotto){
    const product = document.createElement('div');
    product.setAttribute("class", "product");
    const image = product.innerHTML += "<img class='imgProduct' src='"+prodotto.img+"'>";
    const titleOfProduct = product.innerHTML += "<h3 class='titleProduct'>"+prodotto.title+"</h3>";
    const priceOfProduct = product.innerHTML += "<p class='priceProduct' >"+prodotto.description+" </p>";
    collection.appendChild(product);

    
});



//-------------------------aggiungo alla sidebar il titlePokemon-----------------------------
const sidebar = document.getElementById('PokemonSidebar');
for(i=0;i<4;i++){
    const titleOfProduct = sidebar.innerHTML += "<p class='titlePokemon'>"+listaProdotti[i].title+"</p>";
}







//----------------------------aggiungere un nuovo pokemon nell'array------------------------------
const form = document.querySelector('#my-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const formData = new FormData(event.target);
  
  const titleForm = formData.get('PokemonName');
  const imgUrlForm = formData.get('imgUrl');
  const descriptionForm = formData.get('descriptionUrl');
  const newElement = {
    img: titleForm,
    title: imgUrlForm,
    description: descriptionForm
  };
  listaProdotti.push(newElement);
  console.log(listaProdotti);
  

  event.target.reset();

  //---------------------stampo il nuovo pokemon-------------------------------
  const product = document.createElement('div');
  product.setAttribute("class", "product");
  const image = product.innerHTML += "<img class='imgProduct' src='"+imgUrlForm+"'>";
  const titleOfProduct = product.innerHTML += "<h3 class='titleProduct'>"+titleForm+"</h3>";
  const priceOfProduct = product.innerHTML += "<p class='priceProduct' >"+descriptionForm+" </p>";
  
  collection.appendChild(product);
  const titleOfPokemon = sidebar.innerHTML += "<p class='titlePokemon'>"+titleForm+"</p>";
});