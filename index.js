let showProducts = document.getElementById("showProducts")
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector(".div")
 
let cart = []

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
        buyButton.innerText = ("Agregar al carrito")
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
        <h3> ${Product.price}</h3>
        <button class="eliminar" data id= ${Product.id}>X</button>` 
        

        div.appendChild(divCart)
        
    })

    let eliminarItem = document.querySelector(".eliminar")



// REDUCE PRECIO TOTAL DEL CARRITO //

const total = cart.map((item)=> item.price ).reduce((cartTotalPrice, currentItemPrice)=> cartTotalPrice + currentItemPrice, 0);
console.log(total)

let totalCompra = document.createElement("h4")
totalCompra.innerText = ("Total: " + total)
div.append(totalCompra)


// VACIAR CORRITO//

 let deleteCart = document.createElement("button")
deleteCart.innerText = ("Vaciar carrito")
div.append(deleteCart)

 deleteCart.onclick = () => {
    cart =[]
    div.innerHTML = ``
    console.log(cart) 
                            }
}

buttonCart.onclick = () => {
    div.innerHTML = ``

    showCart()
}


class carritoDeCompras{
    constructor(){
        this.productos = []
        this.name = ""
    }
    setName(value){this.name = value}
    addProduct(Product){this.productos.push(Product)}
    removeLastProduct(){this.productos.pop()}
    removeFirstProduct(){this.productos.shift()}

    getTotal() {
       let totalCalculado = 0;
        for ( const producto of this.productos){
            totalCalculado = totalCalculado + producto.price;
        }
         return totalCalculado;
    }
}

    class Product{
        constructor(name, price){
        this.name = name
        this.price = price}
    }

    const cliente = new carritoDeCompras()
    const p1 = new Product ("Grind", 8800)
    const p2 = new Product ("Pit Viper Push", 7000)
    const p3 = new Product ("Pit Viper", 8600)
    const p4 = new Product ("Indy", 6500)
    const p5 = new Product ("Indy ANC", 5500)
    const p6 = new Product ("Budweiser Dime", 9000)


    cliente.addProduct(p1)
    cliente.addProduct(p2)
    cliente.addProduct(p3)
    cliente.addProduct(p4)
    cliente.addProduct(p5)
    cliente.addProduct(p6)
    cliente.getTotal()

    console.log(cliente.getTotal())

  const mercaderia =[
    {nombre: "Grind", precio: 8800},
    {nombre: "Pit Viper Push", precio: 7000 },
    {nombre: "Pit Viper", precio: 8600},
    {nombre: "Indy", precio: 6500},
    {nombre: "Indy ANC", precio: 5500},
    {nombre: "Budweiser Dime", precio: 9000},
  ]

const Busqueda = mercaderia.filter((El)=> El.nombre.includes("Viper")

)
console.log(Busqueda)

const Objetos = mercaderia.find((El)=> El.nombre === "Indy")

console.log(Objetos)
