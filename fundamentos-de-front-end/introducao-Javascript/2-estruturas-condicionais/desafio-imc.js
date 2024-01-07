//  O IMC é o Indice de Massa Corporal
//
//  Formula do IMC
//      IMC = peso / (altura*altura)

//  Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

//      IMC em adultos - Condição
//          Abaixo de 18.5 - abaixo do peso;
//          Entre 18.6 e 25 - peso normal;      
//          Entre 25 e 30 - Acima do peso;
//          Entre 30 e 40 - Obesidade;
//          Acima de 40 - Obesidade grave;
//   

const peso = 60;
const altura = 1.57;
const imc = peso/(altura*altura);
console.log(imc.toFixed(2))

if (imc < 18.5){
    console.log('abaixo do peso');
} else if (imc > 18.5 && imc <=25){
    console.log('peso normal');
} else if (imc > 25 && imc <=30){
    console.log('acima do peso');
} else if (imc > 30 && imc <= 40){
    console.log('obesidade');
} else{
    console.log('obesidade grave');
}