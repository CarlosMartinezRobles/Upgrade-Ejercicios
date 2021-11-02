const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
let noDoubles =[];
noDoubles = duplicates.filter((element,allOfElements)=>{
  return duplicates.indexOf(element) === allOfElements;})
console.log(noDoubles); 
///////////////////////////////////////////////////////////
duplicates.forEach((item)=>{
    if(!noDoubles.includes(item)){
    noDoubles.push(item);
  }
})
console.log(noDoubles);
