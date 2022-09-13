/* let boton = document.getElementById("boton");
const respuesta = () => {
    console.log("Hola click");
}; */
/* boton.addEventListener("click", respuesta); */ //primera forma
/* boton.onclick = respuesta; */ //segunda y mejor forma

/* let boton = document.getElementById("boton");
const respuesta = (nombre) => {
    console.log("Hola click " + nombre);
};
boton.addEventListener("click",() => respuesta("andres")); */

//EVENTOS DEL MOUSE
/* let saludo = document.getElementById("boton");
let boton = document.getElementById("boton"); */

//boton.addEventListener("mousedown", () => console.log("mousedown"));// apretar sin soltar el click
//boton.addEventListener("mouseup", () => console.log("mouseup"));// funcion de clik pero mas veloz
//boton.addEventListener("mouseover", () => console.log("mouseover"));// es como un hover
//boton.addEventListener("mouseout", () => console.log("mouseout"));
//boton.addEventListener("mousemove", () => console.log("mousemove"));
//boton.addEventListener("click", () => console.log("click"));// funcion default

//EVENTOS DEL TECLADO

/* let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre"); */

//nombre.addEventListener("keyup", () => console.log(("keyup"))); ejecuta cada vez que se levanta la tecla
//nombre.addEventListener("keydown", () => console.log(("keydown"))); ejecuta cada vez que se presiona la tecla
/* nombre.addEventListener("keyup", (e) => {
    if(e.key === "a"){
        saludo.className = "rojo";
    }else if(e.key === "s"){
        saludo.className = "azul";
    }else if(e.key === "d"){
        saludo.className = "verde";
    }
}); */

/* nombre.addEventListener("change", () => {
    if(!nombre.ariaValueMax.includes("@")){
        saludo.className = "rojo";
    }else{
        saludo.className = "azul";
    }
}) */

/* nombre.addEventListener("input", () => {
    console.log(nombre.value);
})  */
/* let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //previene la recarga de la pag
    
    let inputs = e.target.children;
    if(!inputs[0].value.includes("@")){
        contenedor.innerHTML
        let div = document.createElement("div");
        div.innerHTML = "correo incorrecto";

        contenedor.append(div);
    }else{
        contenedor.innerHTML = "";
    }
}) */
let productos = [];
let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML = "";
  let inputs = e.target.children;
  productos.push(inputs[0].value);

  productos.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML = producto;
    contenedor.append(div);
  })

  inputs[0].value = "";
})


