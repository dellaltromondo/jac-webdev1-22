     if(!sessionStorage.getItem('prodotti_carrello')) {
        let Carrello = [];
        sessionStorage.setItem('prodotti_carrello', JSON.stringify(Carrello));
    }

    function addToCart(productName, price) {
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push({ name: productName, price: price });
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }


      

   
