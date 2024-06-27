/**
 * Bingo
 * Autor: Santiago Gonzalez Vasquez
 * 26 de abril de 2024
 */

let bingo = [];
let iteracion1;
let iteracion2;
let contador = 0;
let tabla;
let interno = [];

for (iteracion1 = 0; iteracion1<5; iteracion1++){
    interno = [];
    for (iteracion2 = 0; iteracion2<5; iteracion2++){
        contador = contador + 1;
        tabla = contador * 2;
        interno.push(tabla);
    }
    bingo.push(interno);
}

console.log(bingo)

console.log("Letra B \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][0]+ " ")
}

console.log("Letra I \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][1]+ " ")
}

console.log("Letra N \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][2]+ " ")
}

console.log("Letra G \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][3]+ " ")
}

console.log("Letra O \n");
for (iteracion2 = 0; iteracion2 < 5; iteracion2++){
    console.log(bingo[iteracion2][4]+ " ")
}

x = [
    [2,6,14,22,26],
    [6, 10, 18, 26, 30],
    [24, 28, 36, 44, 48]
]


console.log("Numeros que salieron:");
console.log(x)

let bingox = bingo.length;
let x2 = x.length;

for(let iteracion1=0; iteracion1<bingo.length; iteracion1++){
    for(let iteracion2=0; iteracion2<bingo[iteracion1].length; iteracion2++){
        for(let iteracion3=0; iteracion3<x.length; iteracion3++){
            if(x[iteracion3][iteracion2] === bingo[iteracion1][iteracion2]){
                bingo[iteracion1][iteracion2] = "X";
                break;
            }
        }
    }
}
console.log("Tabla del bingo con las X:");
console.log(bingo);