let personas = [
{ nombre: "Valentina", sexo: "f", edad: 18 },
{ nombre: "Rosana", sexo: "f", edad: 47 },
{ nombre: "Santiago", sexo: "m", edad: 16 },
{ nombre: "Ramon", sexo: "m", edad: 87 }
];

let sumaEdad = 0;
let sumaEdadMujeres = 0;
let contadorMujeres = 0;
let mujerMayor = null;
let hombreMenor = null;

for (let persona of personas) {
    sumaEdad += persona.edad;

if (persona.sexo == "f") {
      sumaEdadMujeres += persona.edad;
      contadorMujeres++;
      if (!mujerMayor || persona.edad > mujerMayor.edad) {
        mujerMayor = persona;
      }
    }
    if (persona.sexo == "m") {
      if (!hombreMenor || persona.edad < hombreMenor.edad) {
        hombreMenor = persona;
      }
    }
  }
let promedioEdad = sumaEdad / personas.length;
let promedioEdadMujeres = sumaEdadMujeres / contadorMujeres;

console.log("Promedio de edad general:", promedioEdad);
console.log("Promedio de edad de mujeres:", promedioEdadMujeres);
console.log("Mujer con mayor edad:", mujerMayor.nombre);
console.log("Hombre con menor edad:", hombreMenor.nombre);