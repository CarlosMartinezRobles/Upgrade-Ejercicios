
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average() {
   avg=0;
   let sum = numbers.reduce((previous, current) => current += previous);
   let avg = sum / numbers.length; 
   return(numbers) 
}
average(numbers);