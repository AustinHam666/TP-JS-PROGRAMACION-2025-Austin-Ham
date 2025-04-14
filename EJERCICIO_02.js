let n1 = 4;
let n2 = 5;
let n3 = 1;

let numero_mayor = 0;
let numero_menor =0;

if(n1 < n2 && n1 < n3) {
    numero_menor = n1;
} else if (n2 < n1 && n2 < n3){
    numero_menor = n2;
} else {
    numero_menor = n3;
}

if(n1 > n2 && n1 > n3) {
    numero_mayor = n1;
} else if (n2 > n1 && n2 > n3){
    numero_mayor = n2;
} else {
    numero_mayor = n3;
}

console.log("El valor menor es: " + numero_menor);
console.log("El valor mayor es: " + numero_mayor);