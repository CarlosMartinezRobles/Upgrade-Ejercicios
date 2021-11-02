const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let sumElements=0;
function averageWord(param) {
param.forEach(
  function (element){
  if (typeof element === 'string'){
    sumElements+=element.length;
  }else{sumElements+= element}
});
console.log(sumElements);
}

averageWord(mixedElements);