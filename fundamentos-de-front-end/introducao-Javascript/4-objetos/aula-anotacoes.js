/*um objeto literal é quando uma constante/variavel ganham incrementos
*/


const pessoa = { 
    nome: 'Ana S Dantas',
    idade: 23,

    descrever: function () { /* ESSE COMANDO ATRIBUI UMA FUNCAO DENTRO DO OBJETO*/

        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
};

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.descrever();


/*sintaxe pra acessar mais dinamicamente o atributo no objeto */

const atributo = 'idade';

console.log(pessoa['nome']);



/** CLASSE E INSTANCIA */

/**classe é uma definição  do que deve ser especificado no objeto e instancia é uma ocorrencia no objeto*/

class Pessoas {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

class Pessoa {
    nome;
    idade;

    descrever() /**não precisa declarar function dentro da class **/ {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
}

const ana = new Pessoa();
ana.nome = 'Ana Samaria Dantas'
ana.idade = 23;


const graciele = new Pessoa();
graciele.nome = "Graciele Reis"
graciele.idade = 30;

console.log(ana);
console.log(graciele);


ana.descrever();
graciele.descrever();


/* constructor é para preparar atributos que são deduções
com base nas outras strings. Exemplo:  constructor(){ano atual - idade => ano de nascimento}*/