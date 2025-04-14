let n1 = 59;
let n2 = 95;
 
if (n1 < n2){
    for (let i = n1 + 1; i < n2; i++) {
        if(i % 3 == 0) {
            console.log(i);
        }
    }
} else if (n1 > n2) {
    for (let i = n2 + 1; i < n1; i++) {
        if (i % 3 == 0)
            console.log(i);
     
    }
} else {
    console.log("No se encuentran multiplos de por medio entre estos valores.");
}