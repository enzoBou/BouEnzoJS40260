
// Quiero ingresar mediante un prompt cualquier actividad y que me devuelva un alert con "te has suscripto..."


class Membresia{
    constructor(nombre, horario, precio, cupos){
        this.nombre = nombre;
        this.horario = horario;
        this.precio = precio;
        this.cupos = cupos;
    }
    vender(){
        alert(parseInt(prompt("Bienvenido a Kohler Gym, ingrese su actividad")));
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


//Conversor de moneda con objetos que no entiendo como hacerlo funcionar

class Monedas{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    convertir(moneda1, moneda2){
        alert(moneda1 * moneda2);
    }
}

const moneda1 = new Monedas ("USD", parseInt(prompt("Ingrese el primer numero")));
const moneda2 = new Monedas ("ARS", parseInt(prompt("Ingrese el segundo numero"))); 
convertir(moneda1, moneda2);

//CONVERSOR QUE FUNCIONA

function convertir(numero1, numero2){
    alert("Cantidad de ARS " + numero1 * numero2);
}

let num1 = parseInt(prompt("Ingrese cantidad de USD oficial a convertir en ARS"));
let num2 = parseInt(138);

convertir(num1, num2);
