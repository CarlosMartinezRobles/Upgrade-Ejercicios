const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function maslargo(arr){
  let nombreLargo='';
  for (let i = 0; i < arr.length; i++) {
      let nombre=arr[i];
      if(nombre.length>nombreLargo.length){
          
      nombreLargo=nombre;
      }
  }
  return nombreLargo;
} 
  

let heroeLargo =  maslargo (avengers);
console.log(heroeLargo);