/* const array1 = [];
const numeros = [2, 3, 1, 5, 6, 7, 56, 7];
const nombres = ["andres", "camila", "mariano", "andrea"];
const valores = [true, false, true, false];
const varios = [true, 1, "andrea"];

// console.log(nombres[2]);
// console.log(numeros[3] + numeros[0]);

for(let index = 0; index < nombres.length; index++){
    alert(nombres[index]);
} */

/* const nombres = ["andres", "camila"];
nombres.push("mariano");  //agrega elementos al final del array
nombres.unshift("lucas"); //agrega elementos al principio del array

nombres.pop(); //saco el ultimo elemento 
nombres.shift(); //saco el primer elemento

console.log(nombres);
 */

/* const nombres = ["andres", "camila", "mariano"];
nombres.splice(2, 1); //eliminar elementos del array (desde donde, cuantos elementos) */

/* const nombres = ["andres", "camila", "mariano"];
console.log(nombres.join("/"));  //.join une los elementos del array y los separa con el simbolo que necesite */

/* const nombres = ["andres", "camila", "mariano"];
const perros = ["pedro", "luli", "zeus"];
const varios = nombres.concat(perros); //concatena dos arreglos
console.log(varios); */

/* const nombres = ["andres", "camila", "mariano"];
const copia = nombres.slice(1, 3); //crea una copia de un fragmento del array (desde donde, hasta uno anterior al indicado)
console.log(copia); */

/* const nombres = ["andres", "camila", "mariano"];
console.log(nombres.indexOf("camila"));  //busca la posicion de un elemento dentro de un array */

/* const nombres = ["andres", "camila", "mariano"];
let nombre = prompt("Ingrese el nombre");
alert(nombres.includes(nombre)); //valida si un elemento existe o no dentro de un array */

/* const nombres = ["andres", "camila", "mariano"];
nombres.reverse();  //da vuelta el orden de un array

console.log(nombres); */

/* class Persona{
    constructor(info){
      this.ojos = info.ojos;
      this.pelo = info.pelo;
    }
  }
  
  new Persona({
    ojos: "amarillos",
    pelo: "morado"
  }); */

/* const nombres = ["andres", "camila", "andrea"];

const eliminarPersona = (nombre) => {
    let posicion = nombres.indexOf(nombre);

    if(posicion != -1){
        nombres.splice(posicion, 1);
    }

    console.log(nombres);
}

eliminarPersona("andres"); */

//ARRAYS DE OBJETOS

/* const productos = [
  {id: 1, nombre: "camisa", precio: 1000},
  {id: 2, nombre: "gorra", precio: 700},
  {id: 3, nombre: "pantalon", precio: 1250},
  {id: 4, nombre: "zapato", precio: 2000}
];
// console.log(productos[1].nombre); 

for(const item of productos){
  console.log(item.nombre);
  console.log(item.precio); 
} */

// OTRA MANERA DE HACER EL FOR PARA EL ARRAY DE OBJETOS
/* for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  console.log(element);
  
} */

/* class Producto{
  constructor(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const productos = [
  new Producto(1, "camisa", 1000),
  new Producto(2, "gorra", 700),
  new Producto(3, "pantalon", 1250),
]
console.log(productos); */

class Persona {
  constructor(nombre){
    this.nombre = nombre;
  }
  hablar(){
    console.log("hola soy " + this.nombre);
  }
}
let persona = {
  nombre: "andres"
}
console.log(persona);

let persona1= new Persona ("andres")
console.log(persona1);