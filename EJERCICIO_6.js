let n1 = 2;
let n2 = 7;

console.log(`Numeros entre ${n1} y ${n2}:`);

if (n1 < n2) {
    for (let i = n1 + 1; i < n2; i++) {
    console.log(i);
    }
} else if (n1>n2){
    for (let i = n2 + 1; i < n1; i++) {
    console.log(i);
    }
} else {
console.log("Los numeros tienen el mismo valor.");
}