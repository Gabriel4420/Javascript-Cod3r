function teste1(num){
    if(num>=7)
    console.log(num)
    console.log('final')
}
function teste2(num2){
if(num2>=5) ; {
    console.log('Agora vai dar') //Cuidado com ';'.Tendo em vista que ele é opcional, caso vc use em 
    //estruturas de decisao ele vai ler o ';' e não o que vc queria que ele lê-se.
}
}
teste1(8)
teste2(6)