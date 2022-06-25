const Products = [

    {
        id: "1",

        category: "Earbuds",

        description: "True Wireless Earbuds",

        name: "Grind®",

        price: "8800",

        img: "img/imagen2.png"

        
    },

    {
        id: "2",

        category: "Earbuds",

        description: " Active True Wireless Earbuds",

        name: "Pit Viper Push™ ",

        price: "7000",
        
        img: "img/imagen4.png"

        
    },

    {
        id: "3",

        category: "Earbuds",

        description: "True Wireless Earbuds",

        name: "Pit Viper Grind®®",

        price: "8600",
        
        img: "img/imagen5.png"

        
    },

    {
        id: "4",

        category: "Airdots",

        description: "Fuel True Wireless Earbuds",

        name: "Indy™",

        price: "6500",
        
        img: "img/imagen6.png"

        
    },

    {
        id: "5",

        category: "Airdots",

        description: " Noise Canceling True Wireless Earbuds",

        name: "Indy™ ANC",

        price: "5500",
        
        img: "img/imagen7.png"

        
    },

    {
        id: "6",

        category: "Earbuds",

        description: "Budweiser Dime® True Wireless Earbuds",

        name: "Grind®",

        price: "9000",
        
        img: "img/imagen8.png"

        
    },


]

// let carrito;

// if (JSON.parse(localStorage.getItem("carrito"))) {
//     carrito = JSON.parse(localStorage.getItem("carrito"))
// } else{
//     localStorage.setItem("carrito", JSON.stringify([]))
//     carrito = JSON.parse(localStorage.getItem("carrito"))
// }


// function mostrarCarrito() {
//     for (let i = 0; i < Products.length; i++) {
//         const element = Products[i];
//         const {id, name, price, img} = element
//         const card = `
//         <div >
        
//         <div>
//         <img class = imgProducto src = "${img}">
//         <h3> ${name}</h3>
//         <h3>$ ${price}</h3>
//         </div>

//         <div class= "btn-container">
//         <button id= ${id} class = btnAgregar>Agregar</button>
//         </div>

//         </div>
//         `   
         
     
//         const showAllProducts = document.getElementById("showAllProducts")
//         showAllProducts.innerHTML += card
         

//     }

// }
// const btnAgregar = document.getElementsByClassName("btnAgregar")

// for (let i = 0; i < btnAgregar.length; i++) {
//     const element = btnAgregar[i];
//     element.addEventListener("click", agregarAlCarrito)
    
// }

// mostrarCarrito()



// function agregarAlCarrito(e){
//     const btn = e.target;
//     const id = btn.getAttribute("id")
//     const prodEncontrados = Products.find( prod = Prod.id == id)

//     console.log(prodEncontrados)

// }