let numeros = [35,6,23,55,72];
let suma_num_pares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0){
        suma_num_pares += numeros[i];
    }
} console.log("La suma de los elementos pares es: " + suma_num_pares)