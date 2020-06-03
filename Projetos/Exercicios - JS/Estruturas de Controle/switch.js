function nota(nota){
    switch(Math.floor(nota)){
        case 10: case 9: console.log('Aluno de mérito')
        break
        case 6: case 7:  
        case 8: console.log('Aprovado')
        break
        case 3: case 4: case 5: console.log('Rec') 
        break
        case 0: case 1: case 2: console.log('reprovado')
        break
        default: console.log('valor inexistente')
    }
}

nota(2)