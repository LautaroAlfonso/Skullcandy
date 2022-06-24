document.addEventListener("DOMContentLoaded", () =>{




let showProducts = document.getElementById("showProducts")
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector(".div")

let cart = []


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



// MOSTRAR PRODUCTOS //

function mostrarProductos() {
    Products.forEach((Product)=> {
        let card = document.createElement("div")
        showAllProducts.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", Product.img)
        let name = document.createElement("h3")
        name.innerText = (Product.name)
        let price = document.createElement("p")
        price.innerText = (Product.price)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Agregar")
        card.append(img, name, price, buyButton)

        buyButton.addEventListener("click", function()
        {
            cart.push(Product)
            alert ("Agregaste " + Product.name + " al carrito")
            
            div.innerHTML = ""
            showCart()
        })
    })
}
mostrarProductos()




// MOSTRAR CARRITO//

let cartView = document.getElementById("showProductsCart")
let goToCart = document.getElementById("goToCart")
let carrito = document.getElementById ("mostrarCarrito")

let alertCart = document.createElement("h2")
alertCart.setAttribute = ("class", "alerta")

if (!cart.length){
    alertCart.innerText = ("El carrito esta vacio")
    div.append(alertCart)
}

function showCart() {
    alertCart.remove()

    cart.forEach((Product)=>{
        const divCart = document.createElement("li")
        divCart.innerHTML += ` 
        <img src = "${Product.img}">
        <h3> ${Product.name}</h3>
        <h3>$ ${Product.price}</h3>
       ` 
        

        div.appendChild(divCart)

       
    })

    let eliminarItem = document.querySelector(".eliminar")




// REDUCE PRECIO TOTAL DEL CARRITO //


const total = cart.map((Product)=> parseInt(Product.price)).reduce((cartTotalPrice, currentProductPrice) => cartTotalPrice + currentProductPrice, 0);
console.log(total);

let totalCompra = document.createElement("h4")
totalCompra.innerText = ("Total: " + total)
div.append(totalCompra)




// Vaciar carrito //

 let deleteCart = document.createElement("button")
deleteCart.innerText = ("Vaciar carrito")
div.append(deleteCart)

 deleteCart.onclick = () => {
    cart =[]
    div.innerHTML = ``
    console.log(cart) 
                            }
                            localStorage.clear();
}

buttonCart.onclick = () => {
    div.innerHTML = ``

    showCart()
}


// Filtrar Productos //

let buscador = document.getElementById("inputSearch")
let filtrar = document.getElementById("filtrar")
favoritos.addEventListener("click",favoritos);

function filtrarPorCat(){

    let favoritos = localStorage.getItem("favoritos")
    let verTodo = document.createElement("button")
    verTodo.innerText = ("Ver Todo")
    showProducts.append(verTodo)
    const filteredProducts = Products.filter((Product)=> Product.category === buscador.value)
    console.log(filteredProducts)


    filteredProducts.forEach((filter)=> {

    let cardFilter = document.createElement("div")
    showAllProducts.append(card)
    let imgFilter = document.createElement("img")
    imgFilter.setAttribute("src", Product.img)
    let nameFilter = document.createElement("h3")
    nameFilter.innerText = (Product.name)
    let priceFilter = document.createElement("p")
    priceFilter.innerText = (Product.price)
    let buyButtonFilter = document.createElement("button")
    buyButtonFilter.innerText = ("Agregar al carrito")
    cardFilter.append(imgFilter, nameFilter, priceFilter, buyButtonFilter)
    } )

verTodo.onclick = () => {
    showAllProducts.innerHTML = ``
    mostrarProductos()
}

}

buscador.onchange = () => {
    showAllProducts.innerHTML = ``
    filtrarPorCat()
}

filtrar.onclick = () => {
    showAllProducts. innerHTML= ``
    filtrarPorCat()
}


// Guardar Lista //

let saveButton = document.getElementById("saveButton");
saveButton.innerText = ("Guardaste el carrito")
div.append(saveButton)

function saveList(){

    let  = [];
   
    for (let i = 0; i < ProductsList.children.length; i++) {
        
        let Products = ProductsList.children.item(i);
        
       
        Products.push(Products)
    }

}
saveList()

localStorage.setItem("Products", JSON.stringify(Products))




// Storage y JSON //

function guardarCarritoEnLocalStorage(){

    miLocalStorage.setItem("carrito", JSON.stringify(carrito))
    
    }
    guardarCarritoEnLocalStorage();
    
    function cargarCarritoEnLocalStorage(){
    
        if(miLocalStorage.getItem("carrito") !==null){
            carrito = JSON.parse(localStorage.getItem("carrito"))
    
        }
    
    }
     
    cargarCarritoEnLocalStorage();
   
   

localStorage.setItem("miListaDeProductos", Products)

// Clases carrito de compras//


// class carritoDeCompras{
//     constructor(){
//         this.productos = []
//         this.name = ""
//     }
//     setName(value){this.name = value}
//     addProduct(Product){this.productos.push(Product)}
//     removeLastProduct(){this.productos.pop()}
//     removeFirstProduct(){this.productos.shift()}

//     getTotal() {
//        let totalCalculado = 0;
//         for ( const producto of this.productos){
//             totalCalculado = totalCalculado + producto.price;
//         }
//          return totalCalculado;
//     }
//     getProductByName(Text) {
//         return this.productos.filter((El)=> El.nombre.includes(Text));
//       }
// }

//     class Product{
//         constructor(name, price){
//         this.name = name
//         this.price = price}
//     }

//     const cliente = new carritoDeCompras()
//     const p1 = new Product ("Grind", 8800)
//     const p2 = new Product ("Pit Viper Push", 7000)
//     const p3 = new Product ("Pit Viper", 8600)
//     const p4 = new Product ("Indy", 6500)
//     const p5 = new Product ("Indy ANC", 5500)
//     const p6 = new Product ("Budweiser Dime", 9000)


//     cliente.addProduct(p1)
//     cliente.addProduct(p2)
//     cliente.addProduct(p3)
//     cliente.addProduct(p4)
//     cliente.addProduct(p5)
//     cliente.addProduct(p6)
//     cliente.getTotal()

//     console.log(cliente.getTotal())




   
//     // Inicio //
//     cargarCarritoEnLocalStorage()

// localStorage.setItem("listaDeProductos", JSON.stringify(Products))

})
