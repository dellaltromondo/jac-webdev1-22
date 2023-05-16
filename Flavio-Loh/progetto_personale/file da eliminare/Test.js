window.addEventListener("load", function() {
    let cart = sessionStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }
    
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
  
  const addToCartButton = document.querySelectorAll(".add-to-cart");
  addToCartButton.forEach(button => {
    button.addEventListener("click", function () {
      const name = this.dataset.name;
      const price = this.dataset.price;
      const quantity = this.dataset.quantity;
      const item = { name, price, quantity };
      let cart = sessionStorage.getItem("cart");
      if (cart) {
        cart = JSON.parse(cart);
      } else {
        cart = [];
      }
      let incrementaQuantita = false;
      for (const itemCart of cart){
        if(itemCart.name === item.name){
          incrementaQuantita = true;
          itemCart.quantity++;
          sessionStorage.setItem("cart", JSON.stringify(cart));
          break;
        }
      }
      if(!incrementaQuantita){
        item.quantity = 1;
        cart.push(item);
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
    });
  });
  