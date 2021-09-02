  const a = {name: 'teste'}

  console.log(a)
  
  //Atribuição por referência
  const b = a
  
  /* 
   (b) recebe o mesmo endereço apontado na memoria, 
   visto então, se eu mudar o valor de (b), o valor de (a), 
   apesar da ser uma constante ira mudar, pois o que eu 
   estou mudando é o valor da memoria apontada
   e não a variavel em si.
   
   */

  /* O que de fato a constante (a), armazena?
     a constante (a) não tem o conteúdo do objeto, 
     o que a constante (a) tem é o endereço
     no qual o objeto está localizado.
     Apartir das duas variaveis, você consegue acessar o objeto 

   */

  b.name = 'opa'

  console.log(a)
  //3 ==>tipo básico da linguagem
  let c = 3

  let d = c

  d++

  console.log(d)
  console.log(c)

  /* O valor de (d) é diferente do valor de (c),Pois nesse caso como há o uso de um valor primitivo da linguagem
     em let (d) = (c), foi feita uma cópia por valor.
     
     Essa é a diferença, quando trabalho com tipos primitivos, trabalho com cópias por valor
     ou seja, uma cópia do valor é passado para a variável (d), de tal forma que (d), tem o seu valor,
     (c) tem o seu valor, e esses valores são independentes.
     
     É diferente do que se faz quando se esta trabalhando com objetos em java script 
     que a passagem ou atribuição é feita por referência, ou seja a variável (a) e a variável (b)
     do exemplo trabalhado a pouco, apontam para o mesmo objeto em memória e faz com que se você mudar o
     valor do objeto de (a), a variável (b) ira perceber, e o mesmo vice-versa.
     
     Com esse conceito de referência em mente, você pode imaginar um valor numérico por exemplo
     pra gente abstrair: 1,2,3,4,....n , isso quer dizer em programação, os locais na memória que esses
     valores estão armazenados. Então, qual é o local da memória que aquele objeto está armazenado ?
      quando você copia esse valor, essa referência, você consegue apontar pra o mesmo lugar.

     E ai você tem algumas linguagens que tem esse conceito de referência mais explicito, aonde você pode inclusive operar com esses endereços
     que é o caso do c++, que trabalha com ponteiros e tem aritmética de ponteiro. Porem em JS, as atribuições podem ser por 
     valor, que é o caso de tipos primitivos da linguagem, ou por referência, quando se trabalha com objetos,funções que ai você 
     aponta pro mesmo lugar na memória, e se você fizer uma mudança naquele dado , 
     quem apontar pra aquele dado irá perceber a mudança.
     
  */