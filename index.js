// let numero=1

// for (let index = 0; index <=12; index++) {
    
//     let resultado = numero * index
//     console.log('resultado: ' + index + '*' + numero + "=" + resultado)
    
//     if(index==9){
//         continue;
//     }

//     if(index == 12){
//         break;
//     }
    


// }


// let number=2

// for (let y= 0; y <=20; y++) {
    
//     let resultado = number * y
//     console.log( "resultado: " + y + "*" +  number + "=" + resultado )

//     if(resultado == 10 ){
//         continue;
//     }

//     if(resultado == 40 ){
//         break;
//     }



    
// }



// let numero = 1

// for (let i = 1; i <=12; i++) {
//     resultado = i * numero

//     console.log("resultado :" + i + "*" + numero + "=" + resultado)
    
 
//     for (let y = 1; y <=12; y++) {
//          resultado = y * numero
//         console.log("resultado :" + y + "*" + numero + "=" + resultado);
//     }

    
    
//      if( resultado = 12 * i){
//          numero++;
        
//      }

    
    
    
//  }

//  console.log("finalizado")




class Product0 {
    constructor (name, price, description){
    this.name = name
    this.price = price
    this.description = description
    }
    calculatePriceIva(){
    return(this.price) + ((this.price * IVA)/100)
    }
}

const IVA = 21

const earbuds1 = new Product0 ("Grind", 8800, "True Wireless Earbuds")

const earbuds2= new Product0 ("Pit Viper Push", 7000, "Active True Wireless Earbuds")

const earbuds3= new Product0 ("Pit Viper", 8600, "True Wireless Earbuds")

const earbuds4= new Product0 ("Indy", 6500, "Fuel True Wireless Earbuds")

const earbuds5= new Product0 ("Indy ANC", 5500, "Noise Canceling True Wireless")

const earbuds6= new Product0("Budweiser Dime", 9000, "True Wireless Earbuds")

console.log(earbuds1.name)

console.log(earbuds1.price)

console.log(earbuds1.calculatePriceIva())


console.log(earbuds2.name)

console.log(earbuds2.price)

console.log(earbuds2.calculatePriceIva())


function solicitarNombre(){
    let nombre = prompt ("Ingrese su nombre")
    alert("Nombre ingresado: " + nombre)
}


class carritoDeCompras{
    constructor(){
        this.productos = []
        this.name = ""
        this.total = 0
    }
    setName(value){this.name = value}
    addProduct(Product){this.productos.push(Product)}
    removeLastProduct(){this.productos.pop()}
    removeFirstProduct(){this.productos.shift()}

    getTotal() {
        for ( const producto of this.productos) {
        this.total = this.total + producto.price}
         console.log(this.total)
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