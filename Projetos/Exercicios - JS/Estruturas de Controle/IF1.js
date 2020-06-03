function boaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com '+nota)
    }
}

boaNoticia(8)
boaNoticia(5)


function SeforVddEuFalo(valor){
    if(valor){
            console.log('É verdade ... '+valor)
    }
}

SeforVddEuFalo()
SeforVddEuFalo(null)
SeforVddEuFalo(undefined)
SeforVddEuFalo(NaN)
SeforVddEuFalo('')
SeforVddEuFalo(' ')
SeforVddEuFalo(-1)
SeforVddEuFalo('?')
SeforVddEuFalo([])
SeforVddEuFalo([1,2])
SeforVddEuFalo({})