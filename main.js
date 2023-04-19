/*let numero = parseFloat (prompt("Ingresa el monto deseado hasta $500000"));
let cuotas = parseInt (prompt ("Cantidad de cuotas"));
let porcentaje ;

switch(cuotas){
    case 3:
    porcentaje = 20;
    break;
    case 6:
    porcentaje = 40;
    calcularPorcentaje(numero , porcentaje)
    break;
    case 12:
    porcentaje = 60;
    calcularPorcentaje(numero , porcentaje)
    break;
}

function calcularPorcentaje (numero,porcentaje){
    return numero / 100 * porcentaje;
}
alert  (calcularPorcentaje(numero , porcentaje));

total = (calcularPorcentaje(numero , porcentaje)) + numero;

totalCuota= total / cuotas;
 

console.log("--> El valor final del credito " + total);
console.log("--> El valor final de cuota " + totalCuota);

*/
/*let numeroPacientes = parseInt(prompt ( "Cuantos pacientes voy a aternder "));
for (let turno =  1; turno < numeroPacientes; turno++) {
    let nombre = prompt( "¿Como se llama el paciente " + turno + " ? ");
    console.log("El paciente " + nombre + " , tiene asignado el turno numero " + turno);
    alert ("El paciente" + nombre + " , tiene asignado el turno numero" + turno);
    
}*/
/*let numero =parseInt (prompt("cuantos dijitos quieres imprimir"));
for (let i = 1; i <= 10;  i++) {
    if (numero + 1 == i) {
        continue;
    }
    console.log(i);
}*/
/*let numero= 0;
do {
    numero = prompt ("ingresa un numero ");
    alert( "El numero ingresado es " + numero);
    console.log (numero);
    console.log ("El resulado del pardenint" , parseInt(numero));
    
} while (parseInt(numero));*/

/*function restar(numero1, numero2) {
    let resultado = numero1 - numero2;
    return resultado;
}
let num1 = prompt("ingrese el valor de numero 1");
//let num2 = prompt("ingrese el valor de numero 2");//


let resultado = restar (num1, 10);
alert("El resuladi es " + resultado);*/
/*function passwordValidation(password, repeatPassword) {
    if (password == "" || repeatPassword == "") {
        console.log("Las contrasenas deben tener caracteres")
    }
    if (password != repeatPassword) {
        console.log("Las contraseñas no son iguales")
    }
    if (password.length < 8) {
        console.log("La contraseña debe tener mas de 8 caracteres")
    }
    if (password.length > 15) {
        console.log("La contraseña no debe tener mas de 15 caracteres")
    }
    if (repeatPassword.length < 8) {
        console.log("La contraseña debe tener mas de 8 caracteres")
    }
    if (repeatPassword.length > 15) {
        console.log("La contraseña no debe tener mas de 15 caracteres")
    }

}

passwordValidation( "123, pass")*/

let zapatosMujer = {
    botas: "bota1",
    chatas:"chata1",
    precio:"precio",

}
zapatosMujer.botas