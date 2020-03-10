// 1) Si hay Sandia en el mercado mostrar en pantalla la cantidad de sandias que hay disponibles.
// 2) Teniendo 50 soles en la billetera quiero comprar 
//    un pantalón que cuesta 10 retornar el monto del vuelto y mostrarlo en pantalla .
//    Si el monto es mayo a 40 indicar que no tienes cambio (sencillo).
//    Sino retornar el monto del cambio.    

//1)
let cantsandias = 0;
const existsSandia = (cantsandias >= 1) ? 'Hay '+ cantsandias + ' sandias': 'No hay sandias en el mercado'
console.log(existsSandia);

//2)
let saldoBilletera = 50;
let costoPantalon = 43;

if(costoPantalon>40){
    console.log('no cuento con cambio');
}else if (costoPantalon <=40){
    console.log('vuelto: ', saldoBilletera - costoPantalon);
}