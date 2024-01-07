// Faça um programa para calcular o valor de uma viagem.
//  Você terá 5 variáveis. Sendo elas:
//      1- Preço do etanol;
//      2- Preço da gasolina;
//      3- O tipo de combustível que está no seu carro
//      4- Gasto médio de combustível do carro por KM;
//      5- Distancia em KM da viagem.
// 
//  Imprima no console o valor que será gasto para realizar está viagem.


const precoEtanol = 3.64;
const precoGasolina = 5.63;
const kmPorLitro = 16;
const kmFeito = 200;
const gastoMedioDeCombustivel = kmFeito/kmPorLitro;
const tipoDeCombustivel = 'Gasolina'


if (tipoDeCombustivel === 'Etanol'){
    valorGasto = gastoMedioDeCombustivel*precoEtanol;
    console.log("O valor gasto de etanol pra percorrer a distancia de " + kmFeito + "km" +" é de " + valorGasto.toFixed(2));
}

else{
    valorGasto = gastoMedioDeCombustivel*precoGasolina;
    console.log("O valor gasto de gasolina pra percorrer a distancia de " + kmFeito + "km" +" é de " + valorGasto.toFixed(2));
}
