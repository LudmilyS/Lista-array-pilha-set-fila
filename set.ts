import leia from 'readline-sync'

const lista: Set<number> = new Set<number>()

for(let i = 0; i < 10; i ++){
    lista.add(leia.questionInt('Digite um Numero: '))
}

console.log('\nOs numero digitador foram:')
for(let numero of lista){
    console.log(numero)
}