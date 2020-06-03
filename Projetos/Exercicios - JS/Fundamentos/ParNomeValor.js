const saudacao = 'opa'// Contexto lexico 1

function exec(){
    const saudacao = 'faala' //contexto lexico 2
    return saudacao
}

/*

var com o mesmo nome da constante (const) sobrescreve o valor da constante;

exemplo :

const saudacao = 'opa'
var saudacao = 'blz'

console.log(saudacao)


o que irá aparecer no console será o valor da var, que irá sobrescrever a const.


*/

const cliente = {
nome: 'Gabriel Rodrigues Perez',
idade:20,
peso:90,
endereco:{
    logradouro:'Rua Natal Lopes',
    numero:3540
}
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

//Objetos são grupos aninhados de pares/valor