// Um pouco de Node 



let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'
console.log(a)

console.log(this.a === this)

console.log(this.c)

console.log(global.b)

console.log(module.exports.c)

console.log(module.exports ==this)

console.log(module.exports)

// THIS = MODULE.EXPORTS
//module.exports = { k: 456, f: false, g: 'teste' }

// CRIANDO UMA VARIAVEL MALUCA: SEM VAR OU LET
abc = 123 // Não faça isso

console.log(global.abc)