const a = 1;
const b = 2;
const c = 3;
//antigamente .... permite que mude o nome do atributo
const obj = {a:a, b:b, c:c}
//nova maneira
const obj2 = {a,b,c}

console.log(obj,obj2);

const nomeAttr = 'Nota';

const valorAttr = 7.32

const obj3 = {}

obj3[nomeAttr] =valorAttr;

console.log(obj3)

const obj4 = {[nomeAttr]:valorAttr}

console.log(obj4)

const obj5 = {
    funcao1: function () {
        //...
    },
    //forma reduzida
    funcao2(){
        //...
    }

}

console.log(obj5);

