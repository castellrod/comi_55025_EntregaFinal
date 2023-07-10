console.log("Probando el proyecto")

/* Local STORAGE*/
let usuarioLocalStorage = prompt("Ingrese su usuario: ")

localStorage.setItem("usuarioX",usuarioLocalStorage)

let usuarioRX = localStorage.getItem("usuarioX")

/*Capturando id de titulo para cambiar por nombre de usuario*/
let nuevoNombreUser = document.getElementById("userN")
let botonlocalX = document.getElementById("botonLS")
let titulo = document.getElementById("title")
//console.log(titulo)

botonlocalX.addEventListener("click", ponerUsuarioLS)

function ponerUsuarioLS(){
    nuevoNombreUser.innerHTML = usuarioRX
    //titulo.innerHTML= usuarioRX
}

/*let nuevoNombreUser = (document.innerHTML = `<h2>${usuarioRX}</h2>`)

nombreUser.append(nuevoNombreUser)*/




//Crear el array para el carrito de compras
let carritoCompras = []
let carritoComprasQ = []
let productos=[]



const lista2 = document.getElementById('contenedorProductos')

//console.log(lista2)

fetch('./data.json')
.then( (res) => res.json())
.then( (data) => {
    productos=data
    /*Creando los contenedores para cada uno de los productos disponibles, con sus caracteristicas*/
    data.forEach((productoSolo) => {
        const li = document.createElement('div')
        li.innerHTML = `
        <div class="col">
        <div class="card">
            <img src="${productoSolo.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${productoSolo.nombre}</h5>
                <H2>Q. ${productoSolo.precio}</H2>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="d-grid gap-2">
                <button id="botonComprar${productoSolo.id}" class="btn btn-primary" type="button">Comprar</button>
            </div>
        </div>
    </div>
        `

        lista2.append(li)
    })

    /* BOTONES DE COMPRAR*/
    let botonComprar1= document.getElementById("botonComprar1")
    botonComprar1.addEventListener("click",agregarCarrito1)
    let botonComprar2= document.getElementById("botonComprar2")
    botonComprar2.addEventListener("click",agregarCarrito2)
    let botonComprar3= document.getElementById("botonComprar3")
    botonComprar3.addEventListener("click",agregarCarrito3)
    let botonComprar4= document.getElementById("botonComprar4")
    botonComprar4.addEventListener("click",agregarCarrito4)
    let botonComprar5= document.getElementById("botonComprar5")
    botonComprar5.addEventListener("click",agregarCarrito5)
    let botonComprar6= document.getElementById("botonComprar6")
    botonComprar6.addEventListener("click",agregarCarrito6)
    let botonComprar7= document.getElementById("botonComprar7")
    botonComprar7.addEventListener("click",agregarCarrito7)
    let botonComprar8= document.getElementById("botonComprar8")
    botonComprar8.addEventListener("click",agregarCarrito8)
})




/*Agregando al carrtio de compras*/
function agregarCarrito1(){
    console.log("Agregar carrito Producto001")

    const enJSON1 = JSON.stringify(productos[0])
    localStorage.setItem("Producto001",enJSON1)
    carritoCompras.push(productos[0])
    carritoComprasQ.push(productos[0].precio)
}
function agregarCarrito2(){
    console.log("Agregar carrito Producto002")

    const enJSON2 = JSON.stringify(productos[1])
    localStorage.setItem("Producto002",enJSON2)
    carritoCompras.push(productos[1])
    carritoComprasQ.push(productos[1].precio)
}
function agregarCarrito3(){
    console.log("Agregar carrito Producto003")

    const enJSON3 = JSON.stringify(productos[2])
    localStorage.setItem("Producto003",enJSON3)
    carritoCompras.push(productos[2])
    carritoComprasQ.push(productos[2].precio)
}
function agregarCarrito4(){
    console.log("Agregar carrito Producto004")

    const enJSON4 = JSON.stringify(productos[3])
    localStorage.setItem("Producto004",enJSON4)
    carritoCompras.push(productos[3])
    carritoComprasQ.push(productos[3].precio)
}
function agregarCarrito5(){
    console.log("Agregar carrito Producto005")

    const enJSON5 = JSON.stringify(productos[4])
    localStorage.setItem("Producto005",enJSON5)
    carritoCompras.push(productos[4])
    carritoComprasQ.push(productos[4].precio)
}
function agregarCarrito6(){
    console.log("Agregar carrito Producto006")

    const enJSON6 = JSON.stringify(productos[5])
    localStorage.setItem("Producto006",enJSON6)
    carritoCompras.push(productos[5])
    carritoComprasQ.push(productos[5].precio)
}
function agregarCarrito7(){
    console.log("Agregar carrito Producto007")

    const enJSON7 = JSON.stringify(productos[6])
    localStorage.setItem("Producto007",enJSON7)
    carritoCompras.push(productos[6])
    carritoComprasQ.push(productos[6].precio)
}
function agregarCarrito8(){
    console.log("Agregar carrito Producto008")

    const enJSON8 = JSON.stringify(productos[7])
    localStorage.setItem("Producto008",enJSON8)
    carritoCompras.push(productos[7])
    carritoComprasQ.push(productos[7].precio)
}




const productoCapturadoLocalParseado1 = JSON.parse(localStorage.getItem("Producto001"))
const productoCapturadoLocalParseado2 = JSON.parse(localStorage.getItem("Producto002"))
const productoCapturadoLocalParseado3 = JSON.parse(localStorage.getItem("Producto003"))
const productoCapturadoLocalParseado4 = JSON.parse(localStorage.getItem("Producto004"))
const productoCapturadoLocalParseado5 = JSON.parse(localStorage.getItem("Producto005"))
const productoCapturadoLocalParseado6 = JSON.parse(localStorage.getItem("Producto006"))
const productoCapturadoLocalParseado7 = JSON.parse(localStorage.getItem("Producto007"))
const productoCapturadoLocalParseado8 = JSON.parse(localStorage.getItem("Producto008"))



function llamarSweet(d){
    Swal.fire({
        title: 'Carrito de compras',
        text: d,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
     
}




/*  FUNCION PAGAR CON BOTON*/
let pagar = document.getElementById("botonPago")
pagar.addEventListener("click",pagoCarro)


function carritoTotal(){
    let todos=""
    carritoCompras.forEach((x) => {
    //alert(carritoCompras);
        todos+=" - " + x.nombre + " - " + x.precio +", \n"
    })
    alert(todos)
 
}

function pagoCarro(){
    let total = carritoComprasQ.reduce((a, b) => a + b, 0);
        
    carritoTotal()
    let debe = "Total a pagar: "+total;
    llamarSweet(debe)

    const TAPQ = document.getElementById('tapQ')


    const t = document.createElement('div')
        t.innerHTML = ` <H5>Q. ${total}</H5> `

        TAPQ.append(t)
}



/* FUNCION VACIAR CARRITO CON BOTON */
let vaciarCarrito = document.getElementById("botonVC")

vaciarCarrito.addEventListener("click", vaciarCarritoFinal)

function vaciarCarritoFinal(){

    localStorage.clear()
    carritoCompras=[];
    carritoComprasQ=[];

}