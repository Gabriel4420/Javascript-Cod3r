//Função em JS: é First-Class object (Citizens)
//Higher- Order function

//Varias maneiras de se trabalhar com função.

// Criar de forma literal

function fun1(){ }


//armazenar uma função em uma variavel


const fun2 = function (){} //função anonima 


// Armazenar em um array

const array = [function(a,b){return a + b}, fun1, fun2]

console.log(array[0](2,3))


// Armazenar em um atributo de objeto 

const obj = {}
obj.falar = function () {return 'fala aê'}

console.log(obj.falar())
// function como parâmetro 
function run (fun){
    fun()
}

run(function() {console.log('Executando...')})


// Uma função pode retornar/conter uma outra função 

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

const cinco = soma(2,3)
cinco(4)