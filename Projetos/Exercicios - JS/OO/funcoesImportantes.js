const pessoa = {
    nome : ' Rebeca',
    idade: 2,
    peso:13
}
//chave
console.log(Object.keys(pessoa));
//valor
console.log(Object.values(pessoa));
//Array chave valor
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}:${e[1]}\n`);
});

//destructering
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}:${valor}\n`);
});


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, 
    value: '01/01/2019'
});

Object.defineProperty(pessoa, 'dataNascimento2', {
    enumerable: false,
    writable: false, 
    value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2029';

console.log(pessoa.dataNascimento);

console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)


const dest = {a:1};
const o1 = {b:2};
const o2 = {c:3, a:4};
// dest <= o1, o2;
const objDestiny = Object.assign(dest, o1, o2);
// Congela o objeto e faz com que o valor não mude.
Object.freeze(objDestiny);

objDestiny.c = 1234;

console.log(objDestiny);




