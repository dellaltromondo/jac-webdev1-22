
// js per il carrello
window.addEventListener("load", function () {
  let cart = sessionStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }
  const cartTable = document.querySelector("#cart-items");
  let total = 0;

  for (const item of cart) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;
    const priceCell = document.createElement("td");
    priceCell.textContent = "$" + item.price * item.quantity;
    const removeButtonCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Rimuovi";
    removeButton.addEventListener("click", function () {
      const index = cart.indexOf(item);
      if (item.quantity > 1) {
        item.quantity--;
        quantityCell.textContent = item.quantity;
        priceCell.textContent = "$" + item.price * item.quantity;
      } else {
        cart.splice(index, 1);
        row.remove();
      }
      sessionStorage.setItem("cart", JSON.stringify(cart));
      updateCartTotal();
    });
    removeButtonCell.appendChild(removeButton);
    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    row.appendChild(removeButtonCell);
    cartTable.appendChild(row);

    total += item.price * item.quantity;
  }

  updateCartTotal();

  function updateCartTotal() {
    total = 0;
    for (const item of cart) {
      total += item.price * item.quantity;
    }
    const totalElement = document.querySelector("#total");
    totalElement.innerHTML = "<h3>Totale: $" + total.toFixed(2) + "</h3>";
  }
});

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", function () {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    const quantity = parseInt(button.dataset.quantity);
    const item = {
      name: name,
      price: price,
      quantity: quantity
    };
    let cart = sessionStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }
    let incrementaQuantita = false;
    for (const itemCart of cart) {
      if (itemCart.name === item.name) {
        incrementaQuantita = true;
        itemCart.quantity++;
        break;
      }
    }
    if (!incrementaQuantita) {
      item.quantity = 1;
      cart.push(item);
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCartTotal();
  });
});





// js per la barra di ricerca 

// recupera tutti gli elementi della lista degli articoli
const items = document.querySelectorAll('.item');

// funzione per filtrare gli articoli in base alla ricerca
function filterItems(searchTerm) {

  // converte il testo di ricerca in minuscolo
  searchTerm = searchTerm.toLowerCase();

  // itera su ogni elemento e nasconde quelli che non corrispondono alla ricerca
  items.forEach(function (item) {

    const name = item.querySelector('h3').textContent.toLowerCase();

    // controlla se il nome dell'elemento inizia con la lettera o le lettere cercate
    if (name.startsWith(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// gestisce l'evento di modifica dell'input di ricerca
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', function () {
  filterItems(this.value);
});


