


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
    cliente.getTotal()
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
