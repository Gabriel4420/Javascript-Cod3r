// métodos 


function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome:'Notebook',
  preco:5589,
  desc:0.15,
  getPreco
}

globalThis.preco = 5589
globalThis.desc = 0.1

console.log(getPreco())



console.log(produto.getPreco())

const carro = {
  preco:49990, desc:0.20
}

console.log('passando parametros com call : '+getPreco.call(carro, 0.17, '$'))

//parâmetro espera arrays no 2° parâmetro
console.log('Passando parametros com apply: '+getPreco.apply(carro, [0.10,'$']))
