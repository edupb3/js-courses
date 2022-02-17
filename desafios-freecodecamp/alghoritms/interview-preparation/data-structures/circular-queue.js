/**Criar uma fila circular
Neste desafio, você criará uma fila circular. Uma fila circular é uma fila escreve até o final de uma coleção e que, então, começa a se sobrescrever no início da coleção. Este tipo de estrutura de dados é útil em certas situações. Por exemplo, uma fila circular pode ser usada para streaming de mídia. Quando a fila está cheia, os novos dados de mídia vão sobrescrever os dados antigos.

Uma boa maneira de ilustrar esse conceito é com um array de tamanho 5:

[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
Aqui, a leitura e a escrita estão ambos na posição 0. Agora, a fila recebe 3 novos registros a, b, e c. Nossa fila agora se parece assim:

[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
Como a cabeça de leitura lê, pode remover valores ou mantê-los:

[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
Agora, gravamos os valores d, e e f na fila. Quando a gravação atinge o fim do array, ela retorna ao início:

[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
Esta abordagem requer uma quantidade constante de memória, mas permite que arquivos de um tamanho muito maior sejam processados.

Neste desafio, você criará uma fila circular. A fila circular deve fornecer os métodos enqueue e dequeue, que permitem que você leia e grave na fila. A classe também deve aceitar um argumento inteiro que você pode usar para especificar o tamanho da fila quando criada. Gravamos a versão inicial desta classe para você no editor de código.

Quando você incluir itens na fila, o ponteiro de gravação deve avançar para frente e retornar para o início assim que chegar ao final da fila. O método enqueue deve retornar o item que você colocou na fila se for bem-sucedido. Caso contrário, ele retornará null.

Da mesma forma, o ponteiro de leitura deve avançar enquanto você remove os itens da fila. Quando você remove um item, o item deve ser retornado. Se você não puder remover um item da fila, você deve retornar null.

Não deve ser permitido ao ponteiro de gravação passar pelo ponteiro de leitura (nossa classe não permitirá que você substitua dados que ainda não leu). Além disso, o ponteiro de leitura não deve ser capaz de avançar passando por dados que você gravou. */

class CircularQueue {
    constructor(size) {
  
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
      // Altere apenas o código abaixo desta linha    
      this.queue[this.write] = item
      this.write = this.write < this.max ? this.write+1 : 0    
      return item
      // Altere apenas o código acima desta linha
    }
  
    dequeue() {
      // Altere apenas o código abaixo desta linha
      this.read = this.read <= this.max ? this.read+1 : 0    
      return this.queue.shift()
      // Altere apenas o código acima desta linha
    }
  }
  
  const t = new CircularQueue(3)
  t.enqueue(2)
  t.enqueue(3)
  t.enqueue(4)
  t.enqueue(5)
  
  console.log(t.print());