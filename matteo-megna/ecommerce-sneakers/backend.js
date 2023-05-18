
/*- Sistemare la tabella del carrello
- Scrollbar più figa
- Impostare favicon*/




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
    const div = document.getElementById('emptyCart');
    div.style.display = "none";
}





//-----------------------FUNZIONE PER MOSTRARE IL CARRELLO----------------------------------
let statusCart = 0;
let cartPrice = 0;
const table = document.createElement('table');
table.setAttribute("class", "tableCart");
const rowHead = document.createElement('tr');
const imgTh = rowHead.innerHTML += "<th class='headTableImg'>IMG</th>";
const titleTh = rowHead.innerHTML += "<th class='headTableProduct'>PRODUCT</th>";
const priceTh = rowHead.innerHTML += "<th class='headTablePrice'>PRICE</th>";
const vuoto = rowHead.innerHTML += "<th></th>";
table.appendChild(rowHead);

function showCart(){
    const collection = document.getElementById("collection");
    collection.style.display = "none";
    const carrello = document.getElementById("carrello");
    carrello.style.display = "block";
    const totalPrice = document.getElementById('totalPrice');
    const div = document.getElementById('emptyCart');


    //QUANDO IL CARRELLO è VUOTO FACCIO MOSTRARE SOLO LA SCRITTA E IL BUTTON (CARRELLO VUOTO)
    if(cart.length == 0){
        carrello.style.display = "none";
        div.style.display = "block";
        return;
    }
    
    div.style.display = "none";

    for(i=statusCart;i<cart.length;i++){
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
        price.innerText = cart[i].price+" $";
        price.setAttribute("class", "priceTD");
        //const deleteButtonTD = document.createElement('td');
        
       
        row.appendChild(imgTD);
        row.appendChild(name);
        row.appendChild(price);
        const deleteButtonTD = row.innerHTML += "<td><button class='buttonDelete' onclick='elimina(\"" + cart[i].title + "\")'><img class='deleteImg' src='immagini/x.png'></button></td>"
        //row.appendChild(deleteButtonTD);
        table.appendChild(row);
        carrello.appendChild(table);

        statusCart++;
        cartPrice = cartPrice + cart[i].price;
    }
    totalPrice.textContent = cartPrice+" $";
    //totalPrice.append(cartPrice);
    console.log(cartPrice);
}


let newCart = [];

//---------------------------------ELIMINARE DAL CARRELLO----------------------------------------
function elimina(nomeProdotto){
    for(i=0;i<cart.length;i++){
        if(nomeProdotto == cart[i].title){
            cart.splice(i,1);
            
            //document.getElementsByClassName("headTable").remove();
            var table = document.querySelector(".tableCart");
            while (table.rows.length > 0) {
                table.deleteRow(0);
            }
            break;
        }
    }
    const rowHead = document.createElement('tr');
    const imgTh = rowHead.innerHTML += "<th class='headTableImg'>IMG</th>";
    const titleTh = rowHead.innerHTML += "<th class='headTableProduct'>PRODUCT</th>";
    const priceTh = rowHead.innerHTML += "<th class='headTablePrice'>PRICE</th>";
    const vuoto = rowHead.innerHTML += "<th></th>";
    table.appendChild(rowHead);
    statusCart = 0;
    cartPrice = 0;
    showCart();
    console.log(cart.length);
    console.log(cart);
}






let cart = [];

//---------------------------ARRAY CON TUTTI I PRODOTTI-------------------------------
const listaProdotti = [
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DD1391-100/1.png",
        title:"Dunk low panda",
        price:130 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=400/storage/images/products/DH6927-017/1.png",
        title:"Jordan 4 thunder",
        price:300 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=400/storage/images/products/DH1348-001-2/1.png",
        title:"Patta 1 Monarch",
        price:260 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=400/storage/images/products/555088-702/1.png",
        title:"Jordan 1 volt",
        price:180 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=400/storage/images/products/DD9315-600/1.png",
        title:"Jordan 1 chicago",
        price:400 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=400/storage/images/products/DO9395-400/1.png",
        title:"Dunk SB dodgers",
        price:320 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=400/storage/images/products/B75807/1.png",
        title:"Adidas samba",
        price:100 
    },
    {
        img:"https://cdn.restocks.net/cdn-cgi/image/width=400/storage/images/products/DM0774-111/1.png",
        title:"Dunk SB mummy",
        price:500 
    }
]


const collection = document.getElementById('collection');
//STAMPO TUTTI I PRODOTTI
listaProdotti.forEach (function(prodotto){
    const product = document.createElement('div');
    product.setAttribute("class", "product");
    const image = product.innerHTML += "<img class='imgProduct' src='"+prodotto.img+"'>";
    const titleOfProduct = product.innerHTML += "<h3 class='titleProduct'>"+prodotto.title+"</h3>";
    const priceOfProduct = product.innerHTML += "<p class='priceProduct' >"+prodotto.price+" $</p>";
    const buttonCart = product.innerHTML += "<button class='cartProduct' onclick='atc(\"" + prodotto.title + "\")' ><img class='imgCart' src='immagini/product_cart(1).png'></button>";

    collection.appendChild(product);
});


//BUTTON E TITOLO PER QUANDO IL CARRELLO è VUOTO
const div = document.getElementById('emptyCart');
const emptyCartImg = div.innerHTML += "<img class='emptyCartImg' src='immagini/emptyCart.png'><br>";
const buttonHome = div.innerHTML += "<button class='buttonHomeEmptyCart' onclick='backHome()'><img class='imgbackHome' src='immagini/back-arrow.png'></button>";
const message = div.innerHTML += "<h1 class='messageEmptyCart'> CARRELLO VUOTO </h1>";






    
    

