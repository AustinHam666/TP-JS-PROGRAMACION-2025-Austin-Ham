let personas = [
{ nombre: "Valentina", sexo: "f", edad: 18 },
{ nombre: "Rosana", sexo: "f", edad: 47 },
{ nombre: "Santiago", sexo: "m", edad: 16 },
{ nombre: "Ramon", sexo: "m", edad: 87 }
];

    function promedioEdadGeneral(lista) {
    let suma = 0;
    for (let persona of lista) {
    suma += persona.edad;
    }
    return suma / lista.length;
    }   

function promedioEdadMujeres(lista) {
    let suma = 0;
    let contador = 0;
    for (let persona of lista) {
    if (persona.sexo === "f") {
    suma += persona.edad;
    contador++;
    }
    }
    return contador > 0 ? suma / contador : 0;
}

    function mujerMayorEdad(lista) {
    let mayor = null;
    for (let persona of lista) {
    if (persona.sexo === "f") {
    if (!mayor || persona.edad > mayor.edad) {
    mayor = persona;
    }
    }   
}

return mayor ? mayor.nombre : "No hay mujeres";
}

    function hombreMenorEdad(lista) {
    let menor = null;
    for (let persona of lista) {
    if (persona.sexo === "m") {
    if (!menor || persona.edad < menor.edad) {
    menor = persona;
    }
    }
}

return menor ? menor.nombre : "No hay hombres";
}

console.log("Promedio de edad general:", promedioEdadGeneral(personas));
console.log("Promedio de edad de mujeres:", promedioEdadMujeres(personas));
console.log("Mujer con mayor edad:", mujerMayorEdad(personas));
console.log("Hombre con menor edad:", hombreMenorEdad(personas));