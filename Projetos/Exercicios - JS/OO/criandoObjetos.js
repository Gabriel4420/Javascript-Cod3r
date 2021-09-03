// usando a notação literal se
const obj1 = {}

console.log(obj1)

// Notação literal de Objeto em JS

console.log(typeof Object, typeof new Object);

const obj2 = new Object;

console.log(obj2);

//funções construtuoras 

function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);

const p2 = new Produto('Notebook Asus', 2998.99, 0.25);

console.log(`${p1.nome}: R$ ${p1.getPrecoComDesconto()} 
\n${p2.nome}: R$ ${p2.getPrecoComDesconto()}`);


//Função Factory


const criarFuncionario = (nome, salarioBase, faltas) => {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Jão', 7980, 4);
const f2 = criarFuncionario('Ana', 11400, 1);

console.log(`\n\nFuncionarioª ${f1.nome}: R$ ${f1.getSalario()} 
\nFuncionarioª ${f2.nome}: R$ ${f2.getSalario()}`);

//Object.Create 

const children  = Object.create(null);

children.name = 'Ana';

console.log(children.name);

// JSON.Parse function

const fromJSON = JSON.parse('{ "info" : "sou um json" }');


console.log(fromJSON.info);