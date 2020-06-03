function Compras(trabalho1, trabalho2){

    const comprarSorvete = trabalho1||trabalho2

    const comprarTv54 = trabalho1 && trabalho2
    // CONST COMPRARTV32 = !!(TRABALHO1 ^TRABALHO2) BITWISE XOR
    const comprartv32 = trabalho1 != trabalho2 //XOR - OU EXCLUSIVO
    
    const ficarSaudavel = !comprarSorvete //Operador Unario

    return {comprarSorvete , comprarTv54,comprartv32,ficarSaudavel}
}

console.log(Compras(true,true))

console.log(Compras(true,false))

console.log(Compras(false,true))

console.log(Compras(false,false))