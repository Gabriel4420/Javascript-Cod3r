//ES6
//DESESTRUTURANDO APARTIR DE UM OBJETO.
const pessoa = {
        Nome:'Ana ',
        Idade: 18,
        endereco: //atributo principal
        { //O importante para que de certo a destruturação é justamente o atributo principal, seus sub-atributos por assim dizer não precisariam necessariamente existir
                
                rua:'Natal Lopes',
                numero:3540,
                cep:15133-376 // Apesar de configurado, este atributo cep, poderia não estar ai ;
        }
}

const{Nome, Idade} = pessoa //{} nesse caso significa extração de objeto


console.log('nome da pessoa: '+Nome+'\n'+'Idade: ',Idade)
const {Nome:n, Idade:i}=pessoa

console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log('tipo da variavel sobrenome:'+typeof sobrenome+"\n"+'valor de Sobrenome:'+sobrenome+'\n'+'tipo de bemHumorada:'+typeof bemHumorada)
console.log('Valor de bemHumorada:'+bemHumorada)

const {endereco:{rua, numero, cep}} = pessoa

console.log(rua,numero,cep)

/*
Para desestruturar algum dado aninhado deve-se
para um cuidado especial, para ter certeza de que o caminho
até o dado está configurado. Pois, caso não esteja configurado 
o programa acusara um erro de caminho inexistente.
*/

