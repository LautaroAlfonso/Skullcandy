document.addEventListener("DOMContentLoaded", () => {
    let showProducts = document.getElementById("showProducts");
    let showAllProducts = document.getElementById("showAllProducts");
    const div = document.querySelector(".div");
  
   
    let cart = cargarCarritoDesdeLocalStorage();
  
    // MOSTRAR PRODUCTOS //
  
    function mostrarProductos() {
      Products.forEach((Product) => {
        let card = document.createElement("div");
        showAllProducts.append(card);
        let img = document.createElement("img");
        img.setAttribute("src", Product.img);
        let name = document.createElement("h3");
        name.innerText = Product.name;
        let price = document.createElement("p");
        price.innerText = Product.price;
        let btnAgregar = document.createElement("button");
        btnAgregar.innerText = "Agregar";
        card.append(img, name, price, btnAgregar);
  
        btnAgregar.addEventListener("click", function () {
          cart.push(Product);
          Toastify({

            text: "Agregaste " + Product.name +" al carrito",
            
            duration: 3000,
           
            }).showToast();
          btnAgregar.addEventListener("click", guardarCarritoEnLocalStorage);
         
  
          div.innerHTML = "";
          showCart();
        });
      });
    }
    
  
    mostrarProductos();
    
    const contador = document.getElementById("contador")
    contador.innerHTML = cart.length
  
    // MOSTRAR CARRITO//
  
    let cartView = document.getElementById("showProductsCart");
    let goToCart = document.getElementById("goToCart");
    
    let carrito = document.getElementById("mostrarCarrito");
  
    let alertCart = document.createElement("h2");
    alertCart.setAttribute = ("class", "alerta");
  
    if (!cart.length) {
      alertCart.innerText = "El carrito esta vacio";
      div.append(alertCart);
    }
  
    function showCart() {
      alertCart.remove();
  
      cart.forEach((Product) => {
        const divCart = document.createElement("li");
        divCart.innerHTML += ` 
          <img src = "${Product.img}">
          <h3> ${Product.name}</h3>
          <h3>$ ${Product.price}</h3>
         `;
  
        div.appendChild(divCart);
      });
  
    
  
      // REDUCE PRECIO TOTAL DEL CARRITO //
  
      const total = cart
        .map((Product) => parseInt(Product.price))
        .reduce(
          (cartTotalPrice, currentProductPrice) =>
            cartTotalPrice + currentProductPrice,
          0
        );
      console.log(total);
  
      let totalCompra = document.createElement("h4");
      totalCompra.innerText = "Total: " + total;
      div.append(totalCompra);
      
      // Vaciar carrito //
  
      let deleteCart = document.createElement("button");
      deleteCart.innerText = "Vaciar carrito";
      div.append(deleteCart);
      
  
      deleteCart.onclick = () => {
        cart = [];
        div.innerHTML = ``;
        console.log(cart);
        
        localStorage.clear();
      };
    }
  
  
    // Guardar Lista //
    let saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", function () {

      Toastify({

        text: "Se han guardado los productos del carrito correctamente",
        
        duration: 5000
        
        }).showToast();
    
  })
    
    saveButton.addEventListener("click", guardarCarritoEnLocalStorage);
  
    // Storage y JSON //
  
    function guardarCarritoEnLocalStorage() {
      console.log("here");
    
      localStorage.setItem("cart", JSON.stringify(cart));
     
    }
  
    function cargarCarritoDesdeLocalStorage() {
     
      if (localStorage.getItem("cart") !== null) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    
      return [];
    }
  
    localStorage.setItem("Products", JSON.stringify(Products));
  

  
    //Filtrar Productos //
  
    let buscador = document.getElementById("inputSearch");
    let filtrar = document.getElementById("filtrar");
  
  
    function filtrarPorCat() {
      let Products = localStorage.getItem("favoritos");
      let verTodo = document.createElement("button");
      verTodo.innerText = "Ver Todo";
      showProducts.append(verTodo);
      const filteredProducts = Products.filter(
        (Product) => Product.category === buscador.value
      );
      console.log(filteredProducts);
  
      filteredProducts.forEach((filter) => {
        let cardFilter = document.createElement("div");
        showAllProducts.append(card);
        let imgFilter = document.createElement("img");
        imgFilter.setAttribute("src", Product.img);
        let nameFilter = document.createElement("h3");
        nameFilter.innerText = Product.name;
        let priceFilter = document.createElement("p");
        priceFilter.innerText = Product.price;
        let buyButtonFilter = document.createElement("button");
        buyButtonFilter.innerText = "Agregar al carrito";
        cardFilter.append(imgFilter, nameFilter, priceFilter, buyButtonFilter);
      });
  
      verTodo.onclick = () => {
        showAllProducts.innerHTML = ``;
        mostrarProductos();
      };
    }
  
    buscador.onchange = () => {
      showAllProducts.innerHTML = ``;
      filtrarPorCat();
    };
  
    filtrar.onclick = () => {
      showAllProducts.innerHTML = ``;
      filtrarPorCat();
    };
   




  });
  