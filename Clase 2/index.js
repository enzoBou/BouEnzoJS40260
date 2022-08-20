/* 
Estructura del if
if (condicion) {
    codigo a ejecutar cuando la condicion es verdadera
}
*/
/* 
let nombre = "andres";

if(nombre === "andres"){
    console.log("entramos");
}

console.log("terminamos"); */

/* let nombre = prompt("ingrese su nombre");

if(nombre === "felipe"){
    alert("Hola Felipe");
}

alert("terminamos"); */

/* Estructura If Else
if(condicion){
    codigo a ejecutar cuando la condicion es verdadera
}else{
    codigo a ejecutar cuando la condicion es falsa
} */

/* let nombre = prompt("ingrese su nombre");

if(nombre === "felipe"){
    alert("Hola Felipe");
}else{
    alert("quien eres");
}

alert("terminamos"); */

/* let respuesta = prompt("terminaste la tarea");

if(respuesta === "si"){
    alert("puede salir a jugar");
}else{
    alert("no puede salir a jugar");
} */

/* ESTRUCTURA DEL IF ELSE IF
IF (CONDICION1){
    CODIGO A EJECUTAR CUANDO LA CONDICION1 ES VERDADERA
}ELSE IF(CONDICION2){
    CODIGO A EJECUTAR CUANDO LA CONDICION2 ES VERDADERA
}ELSE{
    CODIGO A EJECUTAR CUANDO NINGUNA CONDICION ES VERDADERA
} */


/* let edad = parseInt(prompt("Ingrese su edad"));

if(edad < 15){
    alert("No puedes entrar");
}else if (edad < 18){
    alert("Puede entrar con un adulto");
}else{
    alert("Puede entrar a la fiesta");
} */

/* && es verdadero siempre que todas las condiciones sean verdaderas de lo contrario es false
|| es verdadero cuando al menos una de las condiciones sea verdadera de lo contrario es false */

/* let nombre = prompt("Ingrese su nombre");

if((nombre != "") && (nombre === "andres" || nombre === "ANDRES")){
    alert("hola andres");
}else{
    alert("Nombre no identificado");
} */

/* let nombre = prompt("Ingrese su nombre");

if(nombre != ""){
    alert(`Hola ${nombre}`);
}else{
    alert("Nombre no identificado");
} */

/* let nombre = "camila";

console.log("Hola " + nombre);
console.log(`Hola ${nombre}`); /* reemplaza variable */

let edad = prompt("Ingrese su edad");

if(edad > 1000){
    alert ("es mayor a mil");
}else{
    alert("es menor a mil");
}

