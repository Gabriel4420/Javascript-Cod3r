//IF ENCADEADO
Number.prototype.entre = function(inicio,fim){
return this>=inicio && this <= fim
}


const ImprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('\n Aluno de Honra \n')
    }
    else if(nota.entre(6,8)){
        console.log('\n Bom Aluno \n')
    }
    else if(nota.entre(3.5,5)){
        console.log('\n Dá pra melhorar \n')
    }
    else if(nota.entre(0,3)){
        console.log('\n Irrecuperavel \n')
    }
    else{
        console.log('\n valor fora de parâmetro \n')
    }
}

ImprimirResultado(5)