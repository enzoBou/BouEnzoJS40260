class Membresia{
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
console.log(membresia1);