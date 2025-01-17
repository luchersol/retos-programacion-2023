/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

//let numeros = Array.from({length: 100}, (_, i) => i + 1);

let numeros = [ ]

for (let i = 1 ; i<=100 ; i++){
    numeros.push(i)
}

numeros.forEach(numero => {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("fizzbuzz");
    } else if (numero % 3 === 0) {
        console.log("fizz");
    } else if (numero % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(numero);
    }
});