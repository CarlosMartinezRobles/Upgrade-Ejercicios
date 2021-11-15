const showme= document.querySelector('.showme'); //1.1
console.log(showme);
//////////////////////////////////////////////////////////////////////
const h1= document.querySelector('#pillado');//1.2
console.log(h1);
/////////////////////////////////////////////////////////
const p= document.querySelectorAll('p');//1.3
console.log(p[0]);
console.log(p[1]);
console.log(p[2]);
console.log(p[3]);//1.3
//////////////////////////////////////////queremos hacer una funcion para hacer un loop para sacar todo s los powerRangers//////////////////
let pokemon= document.querySelectorAll('.pokemon');//1.4
console.log(pokemon[0]);
console.log(pokemon[1]);
console.log(pokemon[2]);
console.log(pokemon[3]);//1.4
////////////////////////////////////////////////////////////
let textMe= document.querySelectorAll('span'); //1.5
console.log(textMe[0]);
console.log(textMe[1]);
console.log(textMe[2]);
console.log(textMe[3]);
///////////////////////////////////////////////////////
let textRick= document.querySelector("testMe"); //1.5
console.log(textRick);//no se como va lo de data-selection
////////////////////////////////////////////////////////////////////

let atributo2 = document.querySelectorAll('span');
let contador = 0;
let personajeABuscar = (3 - 1);
console.log(personajeABuscar);
atributo2.forEach(
    function (element) {
        if (contador == personajeABuscar){
        console.log(element.getAttribute('data-function').nodeValue);
        }
        contador += 1;
});

////////////////////////////////////////////////////////////////////////////////////

