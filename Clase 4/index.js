/* ESTRUCTURA DE UNA FUNCION */
/* function nombreFuncion(){
    codigo a ejecutar por la funcion
} */

/* function saludar(){
    let nombre = prompt("Ingrese el nombre");
    let mensaje = `Hola ${nombre}`;
    alert (mensaje);
}

saludar(); // nombreFuncion() para ejecutar la funcion */

/* ESTRUCTURA DE UNA FUNCION CON PARAMETROS

function nombreFuncion(parametro1, parametro2, parametro3){
    codigo a ejecutar por la funcion
} 
*/
/* 
function sumar(numero1, numero2){
    console.log(numero1 + numero2);
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

sumar(num1, num2); */

/* function sumar(numero1, numero2){
    alert(numero1 + numero2);
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

sumar(num1, num2); */

/* function sumar(x, y){
    return x + y;  //retorno de la funcion
}


console.log("retorno de la suma", sumar(4,5)); */

/* function calculadora(numero1, numero2, operacion){
    switch(operacion){
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            return numero1 / numero2;
            break;
        default:
            return "operacion no valida";
            break;
    }
}

let numero1 = parseInt(prompt("Ingrese numero uno"));
let numero2 = parseInt(prompt("Ingrese numero dos"));
let operacion = prompt("Ingrese operacion");
let resultado = calculadora(numero1, numero2, "*");

alert(resultado);
 */

/* function saludar(x, y){
    console.log("hola");
    return // termina la funcion
    console.log("chau");
} */

//SCOPE

/* function saludar(){
    let mensaje = "Hola"; //variable local dentro de llaves
    return mensaje;
}

saludar();
console.log(mensaje); //no reconoce porque no reconoce variables fuera del bloque de codigo
 */

//FUNCION ANONIMA

/* const suma = function (a, b){
    return a + b;
}; */

/* let suma = (a, b) => {return a + b;} //FUNCION FLECHA

console.log(suma(6, 8));
 */

//EJEMPLO DE FUNCION EXPLICADO PASO A PASO

/* const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                = resta(suma(500, iva(500)), 50);
                = resta(suma(500, 105), 50);
                = resta(605, 50);
                = 555; */

