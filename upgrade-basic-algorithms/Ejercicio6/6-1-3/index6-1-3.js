let numeros=[1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < 10; i++) {
    if (numeros[i]===10){
        console.log("dormido")
    }else if (numeros[i]%2===0){
        console.log("intentando dormir")
    }else {
        console.log("ovejas")
    }
}
