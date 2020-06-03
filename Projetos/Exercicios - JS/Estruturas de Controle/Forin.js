const notas = [6.7,7.4,9.8,8.1,7.7]

for(let i in notas){
    console.log(i, notas[i])
}


const pessoa = {
    nome : 'ana',
    sobrenome :'silva',
    idade: 18,
    sexo:'f',
    peso:48

}

for(let atribb in pessoa){
    console.log(atribb + '=' + pessoa[atribb])
}