function tratarErroeLancar(erro){
//throw new Error('...')
//throw 10
//throw false or true
//throw 'mensagem'

throw {
    nome : erro.name,
    msg: erro.msg,
    date: new Date
}
}
function ImprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase()+'!!!')
} catch(e){
    tratarErroeLancar(e)
} finally{
    console.log('Final')
}
}

const obj= {name:'roberto'}

ImprimirNomeGritado(obj)