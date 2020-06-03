//Função sem retorno 
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,3,4,5,6,8,8,1,23)
imprimirSoma()

//Função com retorno 
function Soma(a=0,b=0){
    return a+b
}

console.log(Soma())
console.log(Soma(2,1))
console.log(Soma(2))

function S(a,b){
    return a+b
}
console.log(S())

/* O conceito de função

Imagine a função como sendo uma receita de bolo
uma função é um verbo uma açao, ela executa um processo baseado 
em uma sentença de código, a função define um bloco associado
no qual tem todas as sentenças de codigos que serão executadas quando voce 
invocar aquela função, que nada mais é do que um trecho de código naqual pode 
se reutilizar dentro do seu programa

Então uma função, como numa receita de bolo, ela recebe alguns ingredientes 
de entradas que são os dados que voce vai receber, dentro da função voce vai fazer 
todo o passo-a-passo que é a receita misturar os ingredientes e no final você retorna 
um resultado 

A função é um bloco de código nomeado, ou seja ele agrupa varías sentenças de código ou uma sentença.
Apesar de existirem funções anônimas, geralmente dá- se um nome para a função criada 
Ela pode receber parâmetros de entrada e você executa o algorítmo que no final retorna um valor

Uma função pode:

    * Não receber nenhum parâmetro 
    * Não retornar dados (null)
    * Receber dados de entrada
    * Receber e retornar 

*/
