function escreverMeuNome(nome){
    return 'O meu nome é '+ nome;
}


function verificarIdade(idade){
    if (idade >= 18){
        console.log(escreverMeuNome('Ana') + ' e sou maior de idade');
    } else{
        console.log(escreverMeuNome('Ana') + ' e sou menor de idade');
    }
}

verificarIdade(18);
