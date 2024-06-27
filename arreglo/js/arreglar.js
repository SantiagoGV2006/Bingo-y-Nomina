/**
 * Primer Ejercicio con arreglos
 * Autor: Santiago Gonzalez vasquez
 * 26 de abril de 2024
 */

let arregloNumeros = [];
let arregloFrutas = [];
let iteracion
let consecutivo=0;

arregloNumeros = [1,2,3,4,5,6];
arregloFrutas = ["Banano", "Mora", "Maracuya", "Borojo", "Chontaduro"];

let sizeArrayoNum = arregloNumeros.length;
let sizeArrayoFruit = arregloFrutas.length;

console.log("Cantidad Numero " +sizeArrayoNum)
console.log("Cantidad Frutas " +sizeArrayoFruit)

console.log(arregloFrutas)

console.log(arregloFrutas[2])

arregloFrutas.push("Manzana");
sizeArrayoFruit = arregloFrutas.length
console.log("Cantidad Frutas "+sizeArrayoFruit);

console.log(arregloFrutas);
console.log(arregloFrutas[5]);

for(iteracion=0; iteracion<arregloFrutas.length; iteracion++){
    consecutivo = consecutivo + 1;
    console.log(consecutivo+": "+arregloFrutas[iteracion])
}