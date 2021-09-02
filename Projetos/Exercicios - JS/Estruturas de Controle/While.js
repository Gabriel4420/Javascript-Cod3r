function getAleatorioentre(min,max){
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}
let op = 0
while(op != -1){
    op=getAleatorioentre(-1,10)
console.log("valor do aleatório:"+op)
}

