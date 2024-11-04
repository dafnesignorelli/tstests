class ListNode {
    val: number;
    next: ListNode | null;
  
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  
  function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    let dummy = new ListNode(0); // Nó inicial fictício
    let current = dummy; // Nó atual para construção da lista
    let carry = 0; // Inicializa o carry como 0
  
    // Loop enquanto houver nós em l1 ou l2, ou um carry restante
    while (l1 !== null || l2 !== null || carry > 0) {
      const val1 = l1 ? l1.val : 0; // Valor de l1, ou 0 se for nulo
      const val2 = l2 ? l2.val : 0; // Valor de l2, ou 0 se for nulo
  
      // Soma dos valores e do carry
      const sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10); // Atualiza o carry para o próximo nó
      const newNode = new ListNode(sum % 10); // Novo nó com o dígito da unidade
  
      // Encadeia o novo nó na lista resultante
      current.next = newNode;
      current = current.next;
  
      // Avança para o próximo nó em l1 e l2
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
  
    return dummy.next; // Retorna o próximo de dummy, que é a cabeça da lista resultante
  }
  
  // Exemplo de teste
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Representa o número 342
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Representa o número 465
  console.log(addTwoNumbers(l1, l2)); // Esperado: 7 -> 0 -> 8 (807)
  