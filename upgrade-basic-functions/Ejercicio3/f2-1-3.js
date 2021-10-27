const numbers = [1, 2, 3, 5, 45, 37, 58];
total = sum_arr(numbers);
function sum_arr(numbers) {
   let total=0;
   numbers.forEach(function (numero){
      total+=numero;
   })
   return total;
}
sum_arr(total);

