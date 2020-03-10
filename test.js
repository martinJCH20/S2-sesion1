// 1) Si hay Sandia en el mercado mostrar en pantalla la cantidad de sandias que hay disponibles.
// 2) Teniendo 95 soles en la billetera quiero comprar (20,10,5,10,50)
//    un pantalón que cuesta 15 retornar el monto del vuelto y mostrarlo en pantalla .
//    Si el monto es mayor o igual a 20 indicar que no tienes cambio (sencillo).
//    Sino retornar el monto del cambio.    

//1)
let cantsandias = 0;
const existsSandia = (cantsandias >= 1) ? 'Hay '+ cantsandias + ' sandias': 'No hay sandias en el mercado'
console.log(existsSandia);

//2)
let saldoBilletera = 95;
let costoPantalon = 15;

// if(saldoBilletera - costoPantalon>=20){
//     console.log('no cuento con cambio');
// }else if (costoPantalon < 20){
//     console.log('vuelto: ', saldoBilletera - costoPantalon);
// }else{
//     console.log('Valor inexistente');
// }
const monto = saldoBilletera - costoPantalon;
switch(true){
    case monto >= 20 :
        console.log('no cuento con cambio');
        break;
    case monto < 20 :
        console.log('vuelto: ', monto);
        break;
    default :
        console.log('Valor inexistente');
}

console.log(monto);