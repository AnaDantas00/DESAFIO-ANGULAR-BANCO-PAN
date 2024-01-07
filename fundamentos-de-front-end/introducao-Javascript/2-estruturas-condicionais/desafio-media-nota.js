//  
//  Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima sua media e a sua classificação conforme a tabela abaixo.

//      *****Média = (nota 1 + nota 2 + nota 3) / 3;
//      Classificação:^
//      - Media menor que 5, reprovação;
//      - Media entre 5 e 7 , recuperação;
//      - Media acima de 7, passou de semestre;


const nota1 = 8;
const nota2 = 8;
const nota3 = 8;
const media = (nota1+nota2+nota3)/3


if (media < 5){
    console.log('A media de nota foi ' + media + ' e você está reprovado');
} else if(media >= 5 && media< 7){
    console.log('A media de nota foi ' + media + ' e você está de recuperação')
}else {
    console.log('A media de nota foi '+ media + ' e você passou de semestre')
}