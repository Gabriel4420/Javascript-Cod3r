let isAtivo = false //uso de let pra alterar variavel
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo)

console.log(!isAtivo)


console.log('\nos verdadeiros .... \n ')

console.log(!!3)

console.log(!!-1)

console.log(!!'   ')

console.log(!![])

console.log(!!{})

console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('\nos falsos .... \n')

console.log(!!0)

console.log(!!'')

console.log(!!null)

console.log(!!NaN)

console.log(!!undefined)

console.log(!!(isAtivo=false))



let nome = ''

console.log(nome||'\ndesconhecido')

nome = '\ngabriel'

console.log(nome||'desconhecido')
