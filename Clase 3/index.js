/* 
estructura del for

for(desde; hasta; actualizacion){
    codigo a repetir
}
*/
// i = i + 1   i++

/* for(let i = 0; i < 100; i++){
    console.log("Hola");
} */

/* let numero = parseInt(prompt("Ingrese un numero"));

for(let i = 0; i <= 10; i++){
    let multiplicacion = numero * i;
    let mensaje = `${numero} * ${i} = ${multiplicacion}`;

    alert(mensaje);
} */

/* for (let turno = 1; turno <= 10; turno++){
    let nombre = prompt("ingrese su nombre para asignar el turno");
    let mensaje = `Turno #${turno} Nombre: ${nombre}`;
    alert(mensaje);
}
alert("No tenemos mas turnos"); */

/* for(let i = 0; i <= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log("Terminamos"); */

/* ESTRUCTURA DEL WHILE
while(condicion){
    codigo a repetir mientras las condiciones sean verdaderas
} */

/* let repetir = true;

while(repetir){
    console.log("Hola");
} /* bucle infinito */ 

/* let usuario = prompt("Ingrese su usuario");

while(usuario != "Andres"){
    alert("Usuario incorrecto");
    usuario = prompt("Ingrese su usuario");
}

alert("Bienvenido"); */

/* let i = 0;

while(i < 100){
    console.log("Hola");
    i++;
} */

/* estructura del do while 
do{
    codigo a ejecutar por primera vez y cuando la condicion sea verdadera
}while(condicion);
EJECUTA ANTES DE PENSAR, SE EJECUTA EL CODIGO UNA VEZ POR LO MENOS*/ 

/* let repetir = false;

/* while(repetir){
    console.log("Entramos")
} 

do{
    console.log("Entramos")
}while(repetir); */

/* ESTRUCTURA DEL SWITCH
switch(valor){
    case valor1:
        codigo a ejecutar en caso de que valor sea valor1
        break;
    case valor2:
        codigo a ejecutar en caso de que valor sea valor2
        break;
    default:
        codigo a ejecutar en caso de que valor no coincida con ninguno de los anteriores
        break;
} */

/* let moneda = "clp";

switch(moneda){
    case "cop":
        console.log("Moneda de Colombia");
        break;
    
    case "clp":
        console.log("Moneda de Chile");
        break;

    case "ars":
        console.log("Moneda de Argentina");
        break;
    
    default:
        console.log("Moneda no identificada");
        break;

} */



