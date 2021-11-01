let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

 globalBasePrice =25000;

 car1.finalPrice= (car1.basePrice + globalBasePrice);
 car1.finalPrice= (car2.basePrice + globalBasePrice);
 console.log(car1.finalPrice);
 console.log(car2.finalPrice);

 function finalPrice (coche){
     coche.finalprice = coche.basePrice +globalBasePrice;
     console.log(coche.finalPrice);
 }

 finalPrice(car1);
 finalPrice(car2);