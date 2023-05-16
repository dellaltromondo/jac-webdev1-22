window.addEventListener("load", function() {
  // Quando la pagina è stata completamente caricata, carica il carrello dall'archiviazione di sessione
  let cart = sessionStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }
  
  // Crea una tabella per il carrello e aggiungi ogni prodotto come una riga nella tabella
  const cartTable = document.querySelector("#cart-items");
  for (const item of cart) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;   
    const quantityCell = document.createElement("td");  
    quantityCell.textContent = item.quantity;
    const priceCell = document.createElement("td");
    priceCell.textContent = "$" + item.price*item.quantity;
    const removeButtonCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Rimuovi";
    // Aggiungi un evento di click al pulsante "Rimuovi" per rimuovere il prodotto dal carrello
    removeButton.addEventListener("click", function () {
      const index = cart.indexOf(item);
      if (item.quantity > 1) {
        item.quantity--;
        quantityCell.textContent = item.quantity;
        priceCell.textContent = "$" + item.price*item.quantity;
        sessionStorage.setItem("cart", JSON.stringify(cart));
      } else {
        cart.splice(index, 1);
        row.remove();
        priceCell.textContent = "$" + item.price;
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
    });
    removeButtonCell.appendChild(removeButton);
    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    row.appendChild(removeButtonCell);
    cartTable.appendChild(row);
  }
});

// Aggiungi un evento di click a ogni pulsante "Aggiungi al carrello"
const addToCartButton = document.querySelectorAll(".add-to-cart");
addToCartButton.forEach(button => {
  button.addEventListener("click", function () {
    const name = this.dataset.name;
    const price = this.dataset.price;
    const quantity = this.dataset.quantity;
    const item = { name, price, quantity };
    let cart = sessionStorage.getItem("cart");
    // Se il carrello esiste già, aggiungi il prodotto al carrello, altrimenti crea un nuovo carrello
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }
    let incrementaQuantita = false;
    for (const itemCart of cart){
      // Se il prodotto esiste già nel carrello, aumenta la quantità
      if(itemCart.name === item.name){
        incrementaQuantita = true;
        itemCart.quantity++;
        sessionStorage.setItem("cart", JSON.stringify(cart));
        break;
      }
    }
    // Se il prodotto non esiste nel carrello, aggiungi il prodotto al carrello con una quantità di 1
    if(!incrementaQuantita){
      item.quantity = 1;
      cart.push(item);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  });
});