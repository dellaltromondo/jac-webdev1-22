
/*- Sistemare la tabella del carrello
- sistemare il totale nel carrello
- Impostare il tasto elimina del carrello
- Messaggio di errore se il carrello é vuoto*/




//---------------------------------FUNZIONE PER AGGIUNGERE AL CARRELLO--------------------------------
function atc(nomeProdotto){
    for(i=0; i<8; i++){
        if(nomeProdotto == listaProdotti[i].title){
            const test = 0;
            const sizeCart = cart.length;
            cart[sizeCart] = listaProdotti[i];
            console.log(cart[sizeCart].title);
            //console.log(cart[sizeCart].price);
        }
    }
}



//-------------------------FUNZIONE PER MOSTRARE LA HOME PAGE----------------------------------
function backHome(){
    const collection = document.getElementById("collection");
    collection.style.display = "flex";
    //collection.style.marginLeft = "5%";
    const carrello = document.getElementById("carrello");
    carrello.style.display = "none";
}


//-----------------------FUNZIONE PER MOSTRARE IL CARRELLO----------------------------------
let statusCart = 0;
let cartPrice = 0;
function showCart(){
    const collection = document.getElementById("collection");
    collection.style.display = "none";
    const carrello = document.getElementById("carrello");
    carrello.style.display = "block";
    const totalPrice = document.getElementById('totalPrice');
    
    
    for(i=statusCart;i<cart.length;i++){
        const table = document.getElementById("tableCart");
        const row = document.createElement('tr');
        const imgTD = document.createElement('td');
        const img = document.createElement('img');
        img.src = cart[i].img;
        img.setAttribute("class", "imgNelTD");
        imgTD.appendChild(img);
        imgTD.setAttribute("class", "imgTD");
        const name = document.createElement('td');
        name.innerText = cart[i].title;
        name.setAttribute("class", "titleTD");
        const price = document.createElement('td');
        price.innerText = cart[i].price;
        price.setAttribute("class", "priceTD");
        row.appendChild(imgTD);
        row.appendChild(name);
        row.appendChild(price);
        table.appendChild(row);
        carrello.appendChild(table);

        statusCart++;
        cartPrice = cartPrice + cart[i].price;
    }
    totalPrice.textContent = cartPrice+" $";
    //totalPrice.append(cartPrice);
    console.log(cartPrice);
}



let cart = [];

//---------------------------ARRAY CON TUTTI I PRODOTTI-------------------------------
const listaProdotti = [
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DD1391-100/1.png",
        title:"scarpa 1",
        price:130 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DD1391-100/1.png",
        title:"scarpa 2",
        price:150 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DD1391-100/1.png",
        title:"scarpa 3",
        price:200 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DD1391-100/1.png",
        title:"scarpa 4",
        price:300 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DD1391-100/1.png",
        title:"scarpa 5",
        price:300 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DD1391-100/1.png",
        title:"scarpa 6",
        price:300 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DD1391-100/1.png",
        title:"scarpa 7",
        price:300 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DD1391-100/1.png",
        title:"scarpa 8",
        price:300 
    }
]


const collection = document.getElementById('collection');

listaProdotti.forEach (function(prodotto){
    const product = document.createElement('div');
    product.setAttribute("class", "product");
    const image = product.innerHTML += "<img class='imgProduct' src='"+prodotto.img+"'>";
    const titleOfProduct = product.innerHTML += "<h3 class='titleProduct'>"+prodotto.title+"</h3>";
    const priceOfProduct = product.innerHTML += "<p class='priceProduct' >"+prodotto.price+" $</p>";
    const buttonCart = product.innerHTML += "<button class='cartProduct' onclick='atc(\"" + prodotto.title + "\")' ><img class='imgCart' src='immagini/product_cart(1).png'></button>";

    collection.appendChild(product);
});






    
    

