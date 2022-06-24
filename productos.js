// const Products = [

//     {
//         id: "1",

//         category: "Earbuds",

//         description: "True Wireless Earbuds",

//         name: "Grind®",

//         price: "8800",

//         img: "img/imagen2.png"

        
//     },

//     {
//         id: "2",

//         category: "Earbuds",

//         description: " Active True Wireless Earbuds",

//         name: "Pit Viper Push™ ",

//         price: "7000",
        
//         img: "img/imagen4.png"

        
//     },

//     {
//         id: "3",

//         category: "Earbuds",

//         description: "True Wireless Earbuds",

//         name: "Pit Viper Grind®®",

//         price: "8600",
        
//         img: "img/imagen5.png"

        
//     },

//     {
//         id: "4",

//         category: "Airdots",

//         description: "Fuel True Wireless Earbuds",

//         name: "Indy™",

//         price: "6500",
        
//         img: "img/imagen6.png"

        
//     },

//     {
//         id: "5",

//         category: "Airdots",

//         description: " Noise Canceling True Wireless Earbuds",

//         name: "Indy™ ANC",

//         price: "5500",
        
//         img: "img/imagen7.png"

        
//     },

//     {
//         id: "6",

//         category: "Earbuds",

//         description: "Budweiser Dime® True Wireless Earbuds",

//         name: "Grind®",

//         price: "9000",
        
//         img: "img/imagen8.png"

        
//     },


// ]


// function guardarCarritoEnLocalStorage(){

// localStorage.setItem("listaDeProductos", JSON.stringify(Products))

// }

// function cargarCarritoEnLocalStorage(){

//     if(localStorage.getItem("listaDeProductos") !==null){
//         Products = JSON.parse(localStorage.getItem("listaDeProductos"))

//     }

// }

// // Inicio //
// cargarCarritoEnLocalStorage()

















// // Guardar Lista //

// let saveButton = document.getElementById("saveButton");

// saveButton.addEventListener("click", saveList);

// function saveList(){

//     alert("Guardaste el carrito")

//     let Products = [];

//     for (let i = 0; i < ProductsList.children.length; i++) {
        
//         let producto = ProductsList.children.item(i);
        

//         Products.push(producto)
//     }

localStorage.setItem("listaDeProductos", JSON.stringify(Products))

   
}

// // Traer lista guardada //
// function loadList(){

//     if(localStorage.getItem("listaDeProductos") !=null){
//         var Products = JSON.parse(localStorage.getItem("listaDeProductos"))

//     }

//     for (let i = 0; i < Products.length; i++) {

//         let producto = Products (i);
//         newProductsItem (producto)

//     }

// }

// loadList()
