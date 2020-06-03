//break e continue influenciam dentro de um laço for e um laço while 
//CUIDADO NÃO USAR !!!!
const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
if (x == 5)
        break
    console.log('x = '+nums[x])
    
}
console.log('Fim !!')
console.log('\n')

for(x in nums){
    if(x ==5)continue
    console.log(x+' = '+ nums[x])
    
}

console.log('fim')
console.log('\n')

//rotulo 
externo: for(a in nums){
for(b in nums){
    if(a==2 && b==3)break externo

    console.log('Par:'+a+','+b)
}
}

console.log('Fim !!')