const productos = [
    { id: 01, nombre: "Spinning", horario: "Lunes y Miercoles 20:00hs", precio: 2000, cupos: 10 },
    { id: 02, nombre: "Musculacion", horario: "Lunes a Viernes 09:00 a 21:00hs", precio: 2800, cupos: 200 },
    { id: 03, nombre: "Funcional", horario: "Martes y Jueves 19:00hs", precio: 2200, cupos: 20 },
    { id: 04, nombre: "Jumping", horario: "Martes y Jueves 18:00hs", precio: 2500, cupos: 10 },
];
let contenedor = document.getElementById("contenedor");
function mostrarProductosFiltrados (){
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
}
let boton = document.getElementById("boton5");
boton.innerHTML = `
Iniciar compra`
boton.addEventListener("click", respuesta);

let precio = parseInt(prompt("Ingrese el valor minimo"));

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

/* let contenedor = document.getElementById("contenedor");
const productos = [
    { id: 01, nombre: "Spinning", horario: "Lunes y Miercoles 20:00hs", precio: 2000, cupos: 10 },
    { id: 02, nombre: "Musculacion", horario: "Lunes a Viernes 09:00 a 21:00hs", precio: 2800, cupos: 200 },
    { id: 03, nombre: "Funcional", horario: "Martes y Jueves 19:00hs", precio: 2200, cupos: 20 },
    { id: 04, nombre: "Jumping", horario: "Martes y Jueves 18:00hs", precio: 2500, cupos: 10 },
];

/* const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto))
}
localStorage.setItem("carrito", JSON.stringify(productos));

let precio = parseInt(prompt("Ingrese el valor minimo"));
function mostrarProductosFiltrados (){
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

 */