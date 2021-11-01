const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
let strings= 0;
let numbers= 0;
for (let i= 0;i<mixedElements.length;i++){
  if (typeof mixedElements[i]==="number"){
    numbers+=  mixedElements[i];
  }
  else {
  strings += mixedElements[i].length;
  }
  }
  console.log(numbers);
  console.log(strings);
}

//  function averageWord(param) {
// for (i = 0; i <mixedElements.length; i++){
//   if (typeof mixedElements[i] === "number"){
//   numeros += mixedElements[i];
//   } else {
//   strings += mixedElements[i].length;
//   }
//   }
//   console.log(numeros);
//   console.log(strings);
//   }
averageWord(mixedElements);