const seq = {
    _valor:1,
    get valor(){
        return this._valor++;
    },
    set valor(valor){
        valor > this._valor && ( this._valor = valor );
    }

}

console.log(seq.valor, seq.valor);

seq.valor = 1000;

console.log(seq.valor, seq.valor);
//atribuição vai ser ignorada
seq.valor = 500;

console.log(seq.valor, seq.valor);
