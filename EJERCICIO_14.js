let numeros = [34, 3, 23, 76, 4, 3];
let pares = numeros.filter(function(num){
    return num % 2 == 0;
});
console.log ("Numeros pares:", pares);