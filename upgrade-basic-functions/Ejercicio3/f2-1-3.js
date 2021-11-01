const numbers = [1, 2, 15, 5, 45, 37, 58];
let suma=0;
function sumaTotal (i){
   suma=i+suma;
  //console.log(i);
  
}

numbers.forEach(sumaTotal)

console.log(suma);
//sumaTotal(suma);