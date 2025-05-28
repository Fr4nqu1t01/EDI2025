let num1 = 10, num2 = 15, num3 = 1, num4 = 4;

let suma = num1 + num2 + num3 + num4;
let multiplicacion = num1 * num2 * num3 * num4;

let sumaEsMayor = suma > 30;
let multiplicacionEsMenor = multiplicacion < 400;

console.log(`La suma ${sumaEsMayor ? "es" : "NO es"} mayor a 30. Es: ${suma}`);
console.log(`La multiplicación ${multiplicacionEsMenor ? "es" : "NO es"} menor a 400. Es: ${multiplicacion}`);

if (sumaEsMayor && multiplicacionEsMenor) {
    console.log("AMBAS condiciones se cumplieron.");
} else if (!sumaEsMayor && !multiplicacionEsMenor) {
    console.log("Ninguna de las dos condiciones se cumplió.");
} else if (sumaEsMayor) {
    console.log("Solo se cumplió la condición de la suma.");
} else {
    console.log("Solo se cumplió la condición de la multiplicación.");
}
