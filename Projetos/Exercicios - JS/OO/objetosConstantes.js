// pessoa -> 123 -> {...} 
// variavel constante porém objeto variavel.
const pessoa = {
    nome: 'João'
}

console.log(pessoa.nome);

pessoa.nome = 'Pedro';

console.log(pessoa);

// Pessoa -> 456 -> {...}
// pessoa = {nome : 'ana'}


// objeto constante 
Object.freeze(pessoa);

pessoa.nome = 'Mariar';

pessoa.end = 'Rua ABC';

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

//objeto constante que não muda

const pessoaConstante = Object.freeze({
    nome: 'ANA'
});

console.log(pessoaConstante);