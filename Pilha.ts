import leia, { question } from 'readline-sync'
interface stackInterface<Type> {
    push(dataItem: Type): void;
    pop(): Type | undefined;
    isEmpty(): boolean;
    count(): number;
    printStack(): void;
    peek(): Type | undefined;
    contains(dataItem: Type): boolean;
    clear(): void;
 }
 
 export class Stack<Type> implements stackInterface<Type> {
 
    private StackData: Array<Type> = [];
 
    constructor() { }
 
    isEmpty(): boolean {
       let result = this.StackData.length <= 0;
       return result;
    }
 
    push(dataItem: Type): void {
       this.StackData.push(dataItem);
    }
 
    pop(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.StackData.pop();
          return element;
       }
    }
 
    count(): number {
       let len = this.StackData.length;
       return len;
    }
 
    printStack(): void {
       for (let i = this.StackData.length - 1; i >= 0 ; i--) {
          console.log(this.StackData[i]);
       }
    }
 
    peek(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.StackData[this.StackData.length - 1];
          return element;
       }
    }
 
    contains(dataItem: Type): boolean {
       if (this.StackData.includes(dataItem)) {
          return true;
       } else {
          return false;
       }
    }
 
    clear(): void {
       this.StackData.length = 0;
    }
 
 }

const pilha = new Stack<string>()

console.log('Opcoes:')
console.log('\n1 - Add livro na pilha')
console.log('2 - Mostrar livros da pilha')
console.log('3 - Retirar livro')
console.log('0 - Sair')

let opcao
let p = true

while (p){
    opcao = leia.questionInt('\nQual opcao deseja? ')

    if (opcao === 1){
        pilha.push(question('Digite o nome do livro: '))
        console.log('Livro adicionado!')
    } else if (opcao === 2){
        console.log('Livros da pilha:')
        pilha.printStack()
    } else if (opcao === 3){
        pilha.pop()
        console.log(' um Livro foi removido!')
        pilha.printStack() // mostrar a pilha novamente
    } else if (opcao === 0){
        p = false
        console.log('Programa Encerrado!')
    }
} 

