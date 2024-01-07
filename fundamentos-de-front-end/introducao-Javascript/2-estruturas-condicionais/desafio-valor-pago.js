/* Elabore um algoritmo que calcule o que deve ser pago por um produto,
   considerando o preço normal de etiqueta e a escolha da condição de pagamento.
   Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida
   e efetuar o cálculo adequado.

   Código de condição de pagamento:
    1- À vista Débito, recebe 10% de desconto;
    2- À vista no Dinheiro ou Pix, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, o preço normal de etiqueta + juros de 10%;
*/
const valorEtiqueta = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1){
    console.log('Na forma de pagamento ' + formaDePagamento + ' o desconto é de ' + valorEtiqueta * 0.1);
    console.log('O valor final é '+ (valorEtiqueta - (valorEtiqueta * 0.1)));
} else if (formaDePagamento === 2){
    console.log('Na forma de pagamento ' + formaDePagamento + ' o desconto é de ' + valorEtiqueta *0.15);
    console.log('O valor final é '+ (valorEtiqueta - (valorEtiqueta * 0.15)));
} else if (formaDePagamento === 3){
    console.log('O valor final é '+ valorEtiqueta);
} else{
    console.log('Na forma de pagamento ' + formaDePagamento + ' há juros de ' +  (valorEtiqueta *0.1));
    console.log('O valor final é '+ (valorEtiqueta + (valorEtiqueta * 0.1)));
}
