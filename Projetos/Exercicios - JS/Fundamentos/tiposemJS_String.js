const escola = "Cod3r"

console.log('letra do indice 4:',escola.charAt(4))
console.log("charAt : ".concat(escola.charAt(5)))
console.log("CharCode At: ".concat(escola.charCodeAt(3))) //valor na tabela unicode ou asc
console.log("index of : ".concat(escola.indexOf('3')))//busca de indice associado ao valor 
console.log("substring : ".concat(escola.substring(1)))//retira a letra do indice indicado
console.log("substring que conta os indices e retira o ultimo indicado : ".concat(escola.substring(0,3)))
console.log("referente ao concat : ",'Escola '.concat(escola).concat("!"))
console.log("substituição de letra por busca, replace: ",escola.replace(3,'e'))
console.log("\nsubstituição de todas as letra por busca indicada, replace: ",escola.replace(/\w/g,'e'))//ajax
console.log('Ana,Maria,Pedro'.split(/,/)) //conversão em ARRAY, que é uma estrutura linear, que é como se fosse um agrupador de variaveis.  