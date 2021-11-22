const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

placesToTravel.forEach(function(ciudad, placesToTravel) {
    if ((ciudad.id == 11)||(ciudad.id == 40)){
        placesToTravel.splice(index,1);
    }
}
);
console.log(placesToTravel)

