const productos = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
function buscaArray(param,loQueSeIncluye) {
    param.forEach(
        function (elemento) {
            if (elemento.includes(loQueSeIncluye)){
            console.log(elemento)
            }
            else{console.log('no lleva');}
        });

}
let camiseta = 'Camiseta';
buscaArray(productos, camiseta);