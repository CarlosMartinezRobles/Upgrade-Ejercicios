
const numbers = [12, 21, 38, 5, 45, 37, 6];
let Max= Math.max(...numbers);

let Min= Math.min(...numbers);


function average(promedio) {
   promedio = (Max + Min) / 2;
   console.log( 'El promedio de numbers es: '+promedio);
}
average(numbers);