//Exercicio 1

function operators(a, b) {
    console.log(`mux: ${a*b}`)
    console.log(`divisão: ${a/b}`)
    console.log(`subtração: ${a-b}`)
    console.log(`soma: ${a+b}`)
}

operators(10,20)

// exercicio 2 

const  qualTriangulo = (a,b,c) => {
    try {
        if(a == b && b == c && c == a){
          console.log('Triângulo equilátero')
        } else if(a==b && a ==c || b == a && b == c || c == a ){
          console.log('Triângulo isóceles')
        }else if(a!=b && b!=c ){
          console.log('Triângulo escaleno')
        }
      } catch (error) {
          console.error('Deu ruim', error)
      }
  };
  
  qualTriangulo('a')
  
  //exercicio 3 

  const xp = (base, expoente) => {
        return base ** expoente
  }

  console.log(xp(2,2))

  //exercicio 4 

  const dd = (dendo,visor) => {
           const  resultado = dendo/visor
            console.log(`Resultado da divisão: ${resultado}`)
            console.log(`Resto da divisão: ${dendo%visor}`)
  }

  console.log(dd(3,3))

  