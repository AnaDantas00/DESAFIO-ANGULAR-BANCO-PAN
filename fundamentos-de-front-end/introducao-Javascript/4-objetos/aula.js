class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    
    constructor(nome, idade){
        this.nome= nome;
        this.idade= idade;
        this.anoDeNascimento= 2023 - idade;
    }

    descrever() /**não precisa declarar function dentro da class **/ {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
}

const ana = new Pessoa('Ana',23);
const graciele = new Pessoa('Graciele',30);

console.log(ana);
console.log(graciele);


ana.descrever();
graciele.descrever();

/* constructor é para preparar atributos que são deduções
com base nas outras strings. Exemplo:  constructor(){ano atual - idade => ano de nascimento}*/