const alumnos = [
    {name: 'Pepe Viyuela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

function aprobados(parametro) {

    let aprobados = 0;
       parametro.forEach((element)=> {
            for (let indice in element){
                if(element[indice] === true){
                    aprobados += 1;
                    console.log('Es true: ' + element[indice] + ' y lleva aprobados: ' + aprobados)
                }else{
                    console.log('Es false: ' + element[indice] + ' y lleva aprobados: ' + aprobados)
                }
            }
            if ((aprobados) => 2){
                element.isApproved = aprobados; 
            }
            aprobados = 0;
        });
}

aprobados(alumnos);
console.log(alumnos);
