/* class Membresia{
    constructor(nombre, horario, precio, cupos){
        this.nombre = nombre;
        this.horario = horario;
        this.precio = precio;
        this.cupos = cupos;
    }
    vender(){
        alert("Bienvenido a Kohler Gym");
        this.nombre = prompt("Ingrese la actividad que desea inscribirse");
        alert("Te has suscripto a " + this.nombre + " por un valor de " + this.precio + " en el horario de " + this.horario);
        this.cupos = this.cupos - 1;
    }
    }


const membresia1 = new Membresia ("Spinning", "20:00hs", 2000, 10);
const membresia2 = new Membresia ("Musculacion", "09:00 a 21:00hs", 2500, 200);
const membresia3 = new Membresia ("Funcional", "19:00hs", 2000, 20);
const membresia4 = new Membresia ("Jumping", "18:00hs", 2500, 10);
membresia1.vender()
console.log(membresia1); */

//APLICANDO ARRAYS AL PROYECTO

const productos = [
    { id: 1, nombre: "Spinning", precio: 2000, horario: "20:00hs" },
    { id: 2, nombre: "Musculacion", precio: 2500, horario: "09:00hs a 21:00hs" },
    { id: 3, nombre: "Funcional", precio: 2000, horario: "19:00hs"},
    { id: 4, nombre: "Jumping", precio: 2500, horario: "18:00hs" },
  ];

let nombre = prompt("Ingrese el nombre de la actividad a realizar");
let producto = productos.find(item => item.nombre === nombre);
let mensaje = `
  Id: ${producto.id}
  Nombre: ${producto.nombre}
  Precio: ${producto.precio}
  Horario: ${producto.horario}
  `;
alert(mensaje);
