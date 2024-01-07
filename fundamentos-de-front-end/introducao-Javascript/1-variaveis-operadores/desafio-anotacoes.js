 /* Faça um programa para calcular o valor de uma viagem
    Você terá 3 variáveis. Sendo elas:
        1- Preço do combustível;
        2- Gasto médio do combustível do carro por KM;
        3- Distância do KM da viagem; 

    Imprima no console o valor que será gasto de combustível para realizar está viagem
*/


const precoCombustivel = 5.79;
console.log("O preço do combustível é " + precoCombustivel)

const litroKm = 16;
console.log("O carro faz " + litroKm + " litros por KM")

const kmFeito = 210;
console.log("O carro percorreu a distancia de  " + kmFeito.toFixed(2) + "km")

const gastoMedio = kmFeito/litroKm;
console.log("O gasto médio do carro é de Litro por KM é " + gastoMedio.toFixed(2))

valorGasto = gastoMedio * precoCombustivel;
console.log("O valor gasto pra percorrer a distancia de " + kmFeito + " é de " + valorGasto.toFixed(2))