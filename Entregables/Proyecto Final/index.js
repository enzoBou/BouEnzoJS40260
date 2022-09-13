/* class Suplementos{
    constructor(id, nombre, precio, peso){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.peso = peso;
    }
}
const creatina = [
    new Suplementos (01, "Creatina Star Nutrition Monohidratada", 10800, "300grs"),
    new Suplementos (02, "Creatina Star Nutrition Monohidratada", 25600, "1000grs"),
    new Suplementos (03, "Creatina Xtrenght Micronizada", 10000, "250grs"),
    new Suplementos (04, "Creatina +Growth", 2490, "300grs"),
];
const proteina = [
    new Suplementos (01, "Proteina Star Nutrition", 5510, "907grs"),
    new Suplementos (02, "Proteina HTN Gold XT", 7000, "1015grs"),
    new Suplementos (03, "Proteina ENA Sport True Made", 5599, "930grs"),
    new Suplementos (04, "Proteina ENA Whey X-Pro", 7999, "907grs"),
];
const prework = [
    new Suplementos (01,"Pre Entreno Star Nutrition Pump V8", 3499, "285grs"),
    new Suplementos (02, "Pre Entreno Cellucor C4", 18499, "390grs"),
    new Suplementos (03, "Pre Entreno Pre War ENA", 3499, "400grs"),
];

class Ropa{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const remera = [
    new Ropa (01, "Remera Gris Logo Kohler Gym", 2499),
    new Ropa (02, "Remera Blanca Logo Kohler Gym", 2499),
    new Ropa (03, "Remera Negra Logo Kohler Gym", 2499),   
]
const campera = [
    new Ropa (01, "Campera Gris Logo Kohler Gym", 3499),
    new Ropa (02, "Campera Negra Logo Kohler Gym", 3499),
]
const pantalon = [
    new Ropa (01, "Pantalon Negro Adidas", 2999),
    new Ropa (02, "Pantalon Gris Adidas", 2999),
    new Ropa (02, "Pantalon Negro Nike", 3299),
    new Ropa (02, "Pantalon Gris Nike", 3299),
    new Ropa (02, "Pantalon Liso Negro Logo Kohler Gym", 2999),
] 

class Membresia{
    constructor(id, nombre, horario, precio, cupos){
        this.id = id;
        this.nombre = nombre;
        this.horario = horario;
        this.precio = precio;
        this.cupos = cupos;
    }
}

const membresias = [
    new Membresia (01, "Spinning", "20:00hs", 2000, 10),
    new Membresia (02, "Musculacion", "09:00 a 21:00hs", 2500, 200),
    new Membresia (03, "Funcional", "19:00hs", 2000, 20),
    new Membresia (04, "Jumping", "18:00hs", 2500, 10),
] */
/* let membresiaFilter = membresias.find(item => item.nombre === nombre);
let pantalonFilter = pantalon.find(item => item.nombre === nombre);
let camperaFilter = campera.find(item => item.nombre === nombre);
let remeraFilter = remera.find(item => item.nombre === nombre);
let creatinaFilter = creatina.find(item => item.nombre === nombre);
let proteinaFilter = proteina.find(item => item.nombre === nombre);
let preworkFilter = prework.find(item => item.nombre === nombre);  */

//CARRITO DE COMPRAS            

/* const productos = [
  membresias,
  pantalon,
  campera,
  remera,
  creatina,
  proteina,
  prework
]; */



let contenedor = document.getElementById("contenedor");
const productos = [
    { id: 01, nombre: "Spinning", horario: "Lunes y Miercoles 20:00hs", precio: 2000, cupos: 10 },
    { id: 02, nombre: "Musculacion", horario: "Lunes a Viernes 09:00 a 21:00hs", precio: 2800, cupos: 200 },
    { id: 03, nombre: "Funcional", horario: "Martes y Jueves 19:00hs", precio: 2200, cupos: 20 },
    { id: 04, nombre: "Jumping", horario: "Martes y Jueves 18:00hs", precio: 2500, cupos: 10 },
];

let precio = parseInt(prompt("Ingrese el valor minimo"));
let filtrados = productos.filter(item => item.precio > precio);
for(const producto of filtrados){
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>${producto.nombre}</h2>
    <p>ID: ${producto.id}</p>
    <p>Horarios: ${producto.horario}</p>
    <p>Cantidad de cupos: ${producto.cupos}</p>
    <b>$${producto.precio}</b>
  `;
  contenedor.append(div);
}
let carrito = [];
const respuesta = () => {
    let seleccion = prompt("Desea comprar alguna membresia ingrese si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresar si o no")
    seleccion = prompt("Hola desea comprar una membresia ingrese si o no")
}
if(seleccion == "si"){
    alert("Nuestras clases son")
    let todoslosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);
    alert(todoslosProductos.join(" / "))
}else if(seleccion == "no"){
    alert("Gracias por visitar nuestra pagina, hasta pronto!")
}
while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "spinning" || producto == "musculacion" || producto == "funcional" || producto == "jumping"){
        switch(producto) {
            case "spinning":
                precio = 2000
                break;
            case "musculacion":
                precio = 2800
                break;
            case "funcional":
                precio = 2200
                break;
            case "jumping":
                precio = 2500
                break;
            default:
                break;
        }
    let usuarios = parseInt(prompt("Cuantas membresias desea comprar?"))

    carrito.push({producto, usuarios, precio})
    console.log(carrito)
    }else{
        alert("No tenemos ese producto");
    }

    seleccion = prompt("Desea seguir comprando?")
    while(seleccion == "no"){
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.usuarios}, 
            total a pagar: ${carritoFinal.usuarios * carritoFinal.precio}`);
        })
        break;
    }
const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.usuarios, 0)
alert(`El total a pagar por su compra es: ${total}`);
}
}
let boton = document.getElementById("boton5");
boton.innerHTML = `
Iniciar compra`
boton.addEventListener("click", respuesta);
