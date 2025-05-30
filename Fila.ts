import leia, { question } from 'readline-sync'

/* fila tipo string 
ter um menu com as opções
*/
interface queueInterface<Type> {
   enqueue(dataItem: Type): void;
   dequeue(): Type | undefined;
   isEmpty(): boolean;
   count(): number;
   printQueue(): void;
   peek(): Type | undefined;
   contains(dataItem: Type): boolean;
   clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {

   private QueueData: Array<Type> = [];

   constructor() { }

   isEmpty(): boolean {
      let result = this.QueueData.length <= 0;
      return result;
   }

   enqueue(dataItem: Type): void {
      this.QueueData.push(dataItem);
   }

   dequeue(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData.shift();
         return element;
      }
   }

   count(): number {
      let len = this.QueueData.length;
      return len;
   }

   printQueue(): void {
      for (let i = 0; i < this.QueueData.length; i++) {
         console.log(this.QueueData[i]);
      }
   }

   peek(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData[0];
         return element;
      }
   }

   contains(dataItem: Type): boolean {
      if (this.QueueData.includes(dataItem)) {
         return true;
      } else {
         return false;
      }
   }

   clear(): void {
      this.QueueData.length = 0;
   }

}

const fila = new Queue<string>();
let opcoes 
let p = true

console.log('*****Menu*****')
console.log('\n1 - Adicionar cliete na fila')
console.log('\n2 - Listar clientes')
console.log('\n3 - Retirar cliente da fila')
console.log('\n0 - Encerrar')



while(p) {
    opcoes = leia.questionInt('\nDigite uma opcao: ')

    if(opcoes === 1){
    fila.enqueue(question('Digite o nome do cliente: '))
    console.log('\nCliente adicionado com sucesso!')

} else if (opcoes === 2){
        console.log('Lista de clientes: ')
        fila.printQueue()

} else if (opcoes === 3){
    fila.dequeue()
    console.log('Cliente removido!\n')
    fila.printQueue()
} else if (opcoes === 0){
    p = false
    console.log('Programa Encerrado!')
}

} 




