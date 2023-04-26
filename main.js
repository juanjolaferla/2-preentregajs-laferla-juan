let numero = parseFloat (prompt("Ingresa el monto deseado hasta $500000"));
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


class Cliente {
    constructor(dni, nombre, apellido, edad) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

let dni = prompt("iNGRESE SU DNI")
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("ingrese su apellido ")

let unCliente = new Cliente(dni, nombre, apellido);

console.log("los nuevos datos son", unCliente);