import leia from 'readline-sync'

const lista: Array<string> = new Array<string>()

for(let i = 0; i < 5; i++){
    lista.push(leia.question('Digite uma cor: '))
}

console.log('Lista de cores:')

for(let cor of lista){
    console.log(cor)
}


console.log('Cores ordenadas:')
for(let cor of lista.sort()){
    console.log(cor)
}