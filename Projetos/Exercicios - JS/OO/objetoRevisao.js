//coleção dinâmica de pares chave/valor

const produto = new Object;

produto.nome = 'cadeira';

produto['marca do produto'] = 'Generico';

produto.preco = 220;


console.log(produto);

//objeto complexo
const carro = {
    modelo:'A4',
    valor:84900,
    proprietario:{
        nome:'Raul',
        idade:56,
        endereco: {
            logradouro:'Rua Abc',
            numero:451
        }
    }, 
    condutores:[{
        nome:'Junior',
        idade:20
    },{
        nome:'Ana',
        idade:32
    }],
    calcularValorSeguro:()=>{
        //...
    }
};

