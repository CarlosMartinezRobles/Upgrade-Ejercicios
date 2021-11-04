const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

let nombre= 'Bruce';

function finderName (param, name) {
    if (param.includes (name)){
        console.log(('Existe el elemento en el array: TRUE, en la posición (no índice) ' + parseInt(param.indexOf(nombre))+1))
    };
    
};

finderName(nameFinder,nombre);