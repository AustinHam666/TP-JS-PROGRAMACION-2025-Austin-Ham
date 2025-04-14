function obtenerDivisores() {
    let minimo = 1;
    let maximo = 10;
    let divisor = 2;    
  
    let divisores = [];
  
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) {
        divisores[divisores.length] = i;
      }
    }
  
    console.log(divisores);
  }
  
obtenerDivisores();