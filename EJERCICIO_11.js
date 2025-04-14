let palabra = "introduccion";
let conteo = {};

for (let i = 0; i < palabra.length; i++){
    let letra = palabra [i];
   
    if(conteo [letra]) {
        conteo[letra]++;
    } else {
        conteo[letra] = 1;
    }
}
for (let letra in conteo){
    console.log(`${letra} = ${conteo[letra]}`);
}