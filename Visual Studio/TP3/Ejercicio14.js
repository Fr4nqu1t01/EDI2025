/*14) Realiza un script que dada una lista de números devuelva el mayor y el menor de esa lista y 
donde se encuentra cada uno.*/

let lista = [20,17,22,33,44,5,6,7,8,9,21];
let mayor = 0, menor, indiceMayor = 0 , indiceMenor = 0;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] > mayor) {
        mayor = lista[i];
        indiceMayor = i;
    } else if (lista[i] < mayor) {
        menor = lista[i];
        indiceMenor = i;
    }
}
console.log(`El numero mayor es ${mayor} y el menor es ${menor}. el mayor se encuentra en la posicion (${indiceMayor}) y el menor se encuentra en la posicion (${indiceMenor})`);