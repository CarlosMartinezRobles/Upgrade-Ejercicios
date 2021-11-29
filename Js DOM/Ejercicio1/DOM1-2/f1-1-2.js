////2.1 Inserta dinamicamente en un html un div vacio con javascript./////////////////////////////////////////////////////////////////////////////
let divAñadidoConJs = document.createElement('div');
console.log(divAñadidoConJs);

/////2.2 Inserta dinamicamente en un html un div que contenga una p con javascript./////////////////////////////////////////////////////////////////

let divConP = document.createElement('div');
let divConP = document.createElement('p');

////// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.///////////////////////////////////////////////

const divLoop = document.createElement('div');
            for (let i= 0; i<=6; i++) {
                newDivTres.innerHTML += (`<p> texto random ${index}</p>`)
            }
            
let div3 = document.getElementById('div-tres');
document.body.insertBefore(divLoop, div3);
        
/////////// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'///////////////////////////////////////////////////

let pDinamico = document.createElement('p');
let textoP = document.createTextNode('Soy muy dinamico');
pDinamico.appendChild(textoP);
document.body.appendChild(pDinamico);

//////////// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.////////////////////////////////////////////////////////

let h2 =document.querySelector('h2');

/*o tambien*/

h2.innerHTML = 'Wubba Lubba dub dub'; 

////////////////2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array///////////////////////////////////////////////////

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

let listaDeApps = document.createElement ('ul');

apps.forEach(element => {
    console.log(element);
    listaDeApps.innerHTML += `<li>${element}</li>`
});

let elemento = document.getElementById('lista');
document.body.insertBefore(listaDeApps, elemento);


//////////2.7 Elimina todos los nodos que tengan la clase .fn-remove-me//////////////////////////////////////////////////////////////////////////////////////

let elementosBorrados = document.querySelectorAll('.fn-remove-me')
elementosBorrados.parentNode.removeChild(elementosBorrados);
console.log(elementosBorrados)
        
////////// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. ////////////////////////////////////////////////////////////////////////////

const divMitad = document.querySelector('div');
const p = document.createElement('p');
var newContenido = document.createTextNode('Voy en medio!'); p.appendChild(newContenido);
divMitad.appendChild (p);
