     if(!sessionStorage.getItem('prodotti_carrello')) {
        let Carrello = [];
        sessionStorage.setItem('prodotti_carrello', JSON.stringify(Carrello));
    }

    /*function aggiungiprodotto(frase) {
        let carrello = document.getElementById("Carrello");
        let riga = carrello.insertRow();
        let cella = riga.insertCell();
        let CarrelloSingolo = JSON.parse(sessionStorage.getItem('prodotti_carrello'));
        CarrelloSingolo.push(frase);
        sessionStorage.setItem('prodotti_carrello', JSON.stringify(CarrelloSingolo) );
        cella.innerHTML = frase;
        console.log(JSON.parse(sessionStorage.getItem('prodotti_carrello')));
        
    }
    console.log(JSON.parse(sessionStorage.getItem('prodotti_carrello')));*/


    function addToCart(productName, price) {
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push({ name: productName, price: price });
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }


      

   
