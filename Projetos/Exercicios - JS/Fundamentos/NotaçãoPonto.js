console.log('Console é um '+typeof console)

console.log('retorna um numero maior do que o do parâmetro 6, que é '+Math.ceil(6.01))


const obj1 = {}

obj1.Nome = 'bola'
obj1['Nome2']= 'bola2'

console.log(obj1.Nome2)
console.log(obj1.Nome)

function object(nome){
    this.nome = nome
    this.exec = function(){
        console.log('jantar')
    }
}


const obj2 = new object('cadeira')
const obj3 = new object('mesa')

console.log(obj2.nome + '\n'+ obj3.nome)
obj3.exec()


//Notação ponto é forma de se acessar os membros, atributos, funções e etc...