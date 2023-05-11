    const addToCartButton = document.querySelectorAll(".add-to-cart");


    addToCartButton.forEach(button => {
        button.addEventListener("click", function () {
            // Recupera i dati dall'elemento button
            const name = this.dataset.name;
            const price = this.dataset.price;

            // Crea un oggetto per memorizzare i dati dell'articolo
            const item = { name, price };

            // Controlla se è già presente un carrello nella session storage
            let cart = sessionStorage.getItem("cart");
            if (cart) {
                // Se è presente, lo converte in un oggetto JavaScript
                cart = JSON.parse(cart);
            } else {
                // Se non è presente, crea un nuovo array
                cart = [];
            }

            // Aggiunge l'articolo al carrello
            cart.push(item);

            // Memorizza il carrello nella session storage
            sessionStorage.setItem("cart", JSON.stringify(cart));
        });
    });
    let cart = sessionStorage.getItem("cart");
    if (cart) {
        // Se esiste, lo converte in un oggetto JavaScript
        cart = JSON.parse(cart);
    } else {
        // Se non esiste, lo crea
        cart = [];
    }
    // Recupera la tabella del carrello dalla pagina
    const cartTable = document.querySelector("#cart-items");




    // Itera sul carrello per creare le righe della tabella
    for (const item of cart) {
        // Crea una riga per l'articolo
        const row = document.createElement("tr");

        // Crea le celle per i dati dell'articolo
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = item.price;

        // Crea una cella per il pulsante rimuovi
        const removeButtonCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Rimuovi";
        removeButton.addEventListener("click", function () {
            // Trova la posizione dell'articolo nel carrello
            const index = cart.indexOf(item);

            // Rimuove l'articolo dal carrello
            cart.splice(index, 1);

            // Memorizza il carrello nella session storage
            sessionStorage.setItem("cart", JSON.stringify(cart));

            // Rimuove la riga dalla tabella
            row.remove();
        });

        // Aggiunge il pulsante alla cella
        removeButtonCell.appendChild(removeButton);

        // Aggiunge le celle alla riga
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(removeButtonCell);

        // Aggiunge la riga alla tabella
        cartTable.appendChild(row);
    }


    // Recupera il carrello dalla session storage
    cart = sessionStorage.getItem("cart");
    if (cart) {
        // Se esiste, lo converte in un oggetto JavaScript
        cart = JSON.parse(cart);
    } else {
        // Se non esiste, lo crea
        cart = [];
    }

    // Memorizza il carrello aggiornato nella session storage
    sessionStorage.setItem("cart", JSON.stringify(cart));



