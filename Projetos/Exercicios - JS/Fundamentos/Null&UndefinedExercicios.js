let valor // não inicializada

/*  Quando eu for imprimir essa variável no console
    vamos ver o conceito de undefined, indefinido
    
    Então, o valor inicial dessa variável é undefined pois
    não defini nada pra essa variável, essa variável nunca foi inicializada
    então o valor dela por padrão é undefined
    
    É diferente de você tentar usar uma variável sem estar declarada
    Null significa , que se você tem uma variável ela não está apontando pra 
    nenhum endereço de memória, ela tambem não tem nenhum valor, com é o valor primitivo
    por exemplo: 3, true, false, 'a'. Não possui nenhum valor.

    Quando se trabalha com tipos que são referência, que tem dentro dele um endereço de memória, o nulo 
    faz sentido, pois o nulo quer dizer que você tinha uma variável, que aponta pra um determinado endereço de memória
    que tem o objeto pessoa, você quer que esta variável não aponte mais para ninguem 
    é só ir lá e atribuir null.
*/



console.log(valor)


valor = null //Ausência de valor

console.log(valor)