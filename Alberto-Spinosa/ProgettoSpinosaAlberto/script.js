//quantità -> cartItem o Product

class CartItem {
    constructor(id, product) {
        this.id = id;
        this.product = product;
    }
}

class Product {
    constructor(id, name, price,){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return ""
    }
}

class Burger extends Product {
    constructor(id, name, price, ingredients) {
        super(id, name, price);
        this.ingredients = ingredients;
    }

    getDetails() {
        return this.ingredients
    }
}

class Drink extends Product {
    constructor(id, name, price, size){
        super(id, name, price)
        this.size = size;
    }

    getDetails() {
        return this.size
    }
}

var cart = [];
let counter = 1;
let cartCounter = 1;

function addBurgerToCart() {

    const selection = event.target.value;
    var burger;

    if(selection == "Crispy"){

        burger = new Burger(counter, "Crispy", 6.50, ["Pane", "Carne Bovina", "Cheddar", "Bacon", 
        "Salsa Crispy"]);

    }else if(selection == "Filet-O-Fishn't"){

        burger = new Burger(counter, "Filet-O-Fishn't", 5.00, ["Pane", "Merluzzo impanato", "Cheddar", 
        "Salsa tartara"])

    }else if(selection == "Cheesburgern't"){

        burger = new Burger(counter, "Cheesburgern't", 5.50, ["Pane", "Carne Bovina", "Cheddar", "Cipolla", 
        "Ketchup & Senape"]);

    }else if(selection == "His Selection"){

        burger = new Burger(counter, "His Selection", 7.50, ["Insalata", "Carne Bovina", "Guoda stagionato", 
        "Bacon", "Salsa BBQ"]);
        
    }else if(selection == "Mcn't Toast"){

        burger = new Burger(counter, "Mcn't Toast", 1.75, ["Pane", "Prosciutto Cotto", "Formaggio Fuso"]);

    }else if(selection == "Bonsin't ChickenBurger"){

        burger = new Burger(counter, "Bonsin't ChickenBurger", 6.50, ["Pane", "Pollo Impanato", "Cheddar", 
        "Lattuga", "Salsa BBQ"]);

    }
    
    counter++;
    cart.push(burger);
    addProductToTable(burger);
    console.log(cart);

}

function removeBurgerFromCart(){
    const selection = event.target.value;
    console.log(selection);

    cart.splice(parseInt(selection) - 1, 1)
    
    console.log(cart);
}

function addDrinkToCart(element) {
    
    const selection = element.dataset.value;
    var drink;

    if (selection == "Coca-Cola"){
        
        drink = new Drink(counter, "Coca-Cola", 2.50, "Medium");
    }else if (selection == "Pepsi"){
        drink = new Drink(counter, "Pepsi", 2.50, "Medium");
    }else if (selection == "Tè-Pesca"){
        drink = new Drink(counter, "Tè-Pesca", 2.50, "Medium");
    }else if (selection == "Tè-Limone"){
        drink = new Drink(counter, "Tè-Limone", 2.50, "Medium");
    }else if (selection == "Acqua-Naturale"){
        drink = new Drink(counter, "Acqua Naturale", 1.50, "Medium");
    }else if (selection == "Acqua-Frizzante"){
        drink = new Drink(counter, "Acqua Frizzante", 1.50, "Medium");
    }else if (selection == "Fanta"){
        drink = new Drink(counter, "Fanta", 2.50, "Medium");
    }else if (selection == "Birra"){
        drink = new Drink(counter, "Birra", 3.00, "Medium");
    }else if (selection == "RedBull"){
        drink = new Drink(counter, "RedBull", 3.00, "Standard");
    }

    counter++;
    cart.push(drink);
    addProductToTable(drink);
    console.log(cart);
}

function removeDrinkFromCart() {

}

function addProductToTable(product) {

    // APPEND CHILD SCHEME:

    // TABLE
    //     THEAD
    //     TBODY
    //         TR
    //             TH
    //                 ID
    //             TD

    const item = new CartItem(cartCounter++, product);

    const newElementTr = document.createElement('tr');
    const newElementTh = document.createElement('th');

    const newElementTd = document.createElement('td');
    const txtBurger = document.createTextNode(item.product.name);

    const newElemntTdPrice = document.createElement('td');
    const txtPrice = document.createTextNode(item.product.price);

    const newElementTdDetails = document.createElement('td');
    const txtDetails = document.createTextNode(item.product.getDetails());

    const newElementTdAct = document.createElement('td');
    const newButtonDelete = document.createElement('button');
    const newButtonEdit = document.createElement('button');
    const txtDelete = document.createTextNode("❌");
    const txtEdit = document.createTextNode("✏️");
        
    const txt = document.createTextNode(item.product.id);

    newElementTh.setAttribute('class', 'scope="row"');
    newButtonDelete.setAttribute('onClick', 'removeBurgerFromCart()');
    newButtonDelete.setAttribute('value', item.product.id);

    // Append id
    newElementTr.appendChild(newElementTh);
    newElementTh.appendChild(txt);

    // Append Nome Prodotto
    newElementTr.appendChild(newElementTd);
    newElementTd.appendChild(txtBurger);

    // Append Prezzo
    newElemntTdPrice.appendChild(txtPrice);
    newElementTr.appendChild(newElemntTdPrice);

    //Append Dettagli
    newElementTdDetails.appendChild(txtDetails);
    newElementTr.appendChild(newElementTdDetails);

    //Append Actions
    newButtonDelete.appendChild(txtDelete);
    newButtonEdit.appendChild(txtEdit);
    newElementTdAct.appendChild(newButtonDelete);
    newElementTdAct.appendChild(newButtonEdit);
    newElementTr.appendChild(newElementTdAct);

    document.getElementById('tableBody').appendChild(newElementTr);

}

function removeProductFromTable(product) {
    
}