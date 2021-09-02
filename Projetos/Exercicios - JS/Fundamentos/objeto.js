const prod1 = {}

prod1.nome = 'Sansung js'
prod1.preco = 485.62
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome : 'camisa polo' ,
    preco : 79.80
   
}
'{ "Nome": "Camisa Polo", "preco": 79.80}' //JSON: Não é a mesma coisa que objeto, pois é um formato textual. 
//Porem você consegue apartir de um objeto gerar um JSON
console.log(prod2)

/* JSON: É um formato textual que serve para comunicação entre sistemas,
serve como uma forma de trocar dados entre sistemas 
JAVA SCRIPT OBJETC NOTATION (JSON) apesar do nome em extenso,
JSON é texto. Objeto tem a ver com atributos,comportamentos e até mesmo
O proprio codigo*/ 