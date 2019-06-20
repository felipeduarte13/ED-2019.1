class BinaryTree{ // Criando a classe BinaryTree
    constructor(){ // Definindo construtor da classe BinaryTree
        this.root = null; // inicializa a raiz da arvore como sendo nula
    }
    insert(element){ // Implementação do método insert (Responsável por inserir elementos)
        this.root = this.insertNode(this.root, element); // Insere um elemento na árvore
    }
    insertNode(rootNode, value){ // Implementação do método inserNode (Responsável por inserir um nó) e, recebe um valor
        if (rootNode==null) { 
            return new Node(value); // Se o valor for nulo, pede para que seja digitado novamente um valor
        }
        if(value>rootNode.content){
            rootNode.right = this.insertNode(rootNode.right, value); // Se o valor digitado for maior que o nó, insere o elemento do lado direito
        }else{
            rootNode.left = this.insertNode(rootNode.left, value); // Se o valor digitado for menor que o nó, insere o elemento do lado esquerdo
        }
        return rootNode; // Retorna o nó raiz
    }

   
    search(value) { // Busca um valor na árvore
        return this.searchNode(this.root, value); // Retorna true se o valor já existir na árvore
    }
    searchNode(rootNode, value){ // Busca o nó da árvore (O valor contido no nó)
        if (rootNode == null) return false; // Retorna false, caso o nó seja nulo
        if (rootNode.content == value) return true; // Se o valor foi igual ao conteúdo da busca, é retornado true
        if (value > rootNode.content) 
            return this.searchNode(rootNode.right, value); // Vai retornar a procura à direita
        else
            return this.searchNode(rootNode.left, value); //  Se não achar à procura do nó pela direita, retorna a busca do nó pela esquerda
    }



    inOrderTraverse(callback){ // PERCORRE A SUBÁRVORE ESQUERDA, VAI PARA A RAIZ, PERCORRE A SUBÁRVORE DIREITA
        this.inOrder(this.root, callback); // Executa a função callback em ordem
    }
    inOrder(rootNode, callback) {
        if (rootNode == null) return; 
        this.inOrder(rootNode.left, callback); // Faz a busca dos elementos da esquerda em ordem
        callback(rootNode.content); // Retorna para a raiz da árvore
        this.inOrder(rootNode.right, callback); // Faz a busca dos elementos da direita em ordem
    }

    
    preOrderTraverse(callback){ // VAI PARA A RAIZ, PERCORRE A SUBÁRVORE ESQUERDA, PERCORRE A SUBÁRVORE DIREITA
        this.preOrder(this.root, callback); // Executa a função callback em pré-ordem
    }
    preOrder(rootNode, callback) {
        if (rootNode == null) return; 
        callback(rootNode.content); // Retorna para a raiz da árvore
        this.preOrder(rootNode.left, callback); // Faz a busca dos elementos da esquerda em pré-ordem
        this.preOrder(rootNode.right, callback); // Faz a busca dos elementos da direita em pré-ordem
    }
    
    
    postOrderTraverse(callback) {  // PERCORRE A SUBÁRVORE ESQUERDA, PERCORRE A SUBÁRVORE DIREITA, VAI PARA A RAIZ
            this.posOrder(this.root, callback); // Executa a função callback em pós-ordem
    }
    posOrder(rootNode, callback) {
        if (rootNode == null) return;
        this.posOrder(rootNode.left, callback); // Faz a busca dos elementos da esquerda em pós-ordem
        this.posOrder(rootNode.right, callback); // Faz a busca dos elementos da direita em pós-ordem
        callback(rootNode.content); // Retorna para a raiz da árvore
    }
    
   
    remove(value){
        this.root = this.removeNode(this.root, value); // Remove um valor existente e o retorna
    }
    removeNode(rootNode, value){
        if(rootNode==null) 
            return null; // Caso o valor do nó raiz seja nulo, retorna nulo
        if(value==rootNode.content){ // Caso o valor for igual do que o conteudo do nó raiz só remove (No caso uma folha da árvore)
            if(rootNode.left===null && rootNode.right===null){
                rootNode = null; // Caso o nó da esquerda e direita sejam nulo, retorna nulo
            } else if (rootNode.right == null) { 
                rootNode = rootNode.left; // Se não, o nó da direita é retornado nulo e é mostrado o nó da esquerda
            } else if (rootNode.left == null) { 
                rootNode = rootNode.right; // Se não, o nó da esquerda é retornado nulo e é mostrado o nó da direita
            } else { // Caso nenhum dos nós anteriores seja nulo
                let i = rootNode.right; // i recebe o conteúdo do nó da direita
                while(i.left!=null){ // enquanto o nó não a esquerda for nulo...
                    i = i.left;  // ...i recebe conteúdo do nó da esquerda de i
                }
                i.left = rootNode.left; // o nó da esquerda de i recebe conteúdo do nó da esquerda de rootNode (nó raiz) 
                rootNode = rootNode.right; // rootNode (nó raiz) recebe o conteúdo do nó da direita dele
            }
        }else if(value>rootNode.content){ // Caso o valor seja maior que o conteudo do nó raiz
            rootNode.right = this.removeNode(rootNode.right, value); // O nó da direita da raiz recebe a função removeNode fazendo a recursão
        }else{ // Caso contrário 
            rootNode.left = this.removeNode(rootNode.left, value); // A esquerda da raiz recebe a função removeNode fazendo a recursão
        }
        return rootNode; // retorna rootNodem (nó raiz) com o nó removido
    }

    
    heigth(){
        return this.heigthNode(this.root); // Retorna a raiz e exibe a altura da arvore    
    }
    heigthNode(node){
        if(node==null)
            return -1; // Recebe -1 se o nó for nulo
        let leftHeigth = this.heigthNode(node.left), // Mostra a altura da esquerda
            rightHeigth = this.heigthNode(node.right); // Mostra a altura da direita
        if(leftHeigth > rightHeigth){
            return 1 + leftHeigth; // Se a altura da esquerda for maior que a da direita é retorna 1 + esquerda
        }else{
            return 1 + rightHeigth; // Se não retorna 1 + direita
        } 
    }

    size(){
        return this.sumNodes(this.root); // Retorna a quantidade de nós da árvore
    }
    sumNodes(node){
        if(node==null) 
            return 0; // Retorna 0, caso o nó seja nulo
        return 1 + this.sumNodes(node.left)+this.sumNodes(node.right); // Retorna os nós da esquerda + direita de forma recursiva
    }

    //Mostra o menor valor da árvore
    min() {
        let node = this.root; // let node recebe a raiz da árvore 
        if (node == null) return null; // Retorna nulo caso o nó seja nulo
        while (node.left != null)
            node = node.left; // Enquanto o nó a esquerda for diferente de nulo, o nó continua recebendo o nó a esquerda
        return node.content; // É retornado o menor conteúdo do nó
    }

    //Mostra o maior valor da árvore
    max() {
        let node = this.root; // let node recebe a raiz da árvore
        if (node == null) return null; // Retorna nulo caso o nó seja nulo
        while (node.right != null) 
            node = node.right; // enquanto o nó a direita for diferente de nulo, o nó continua recebendo o nó a direita
        return node.content; // É retornado o maior conteúdo do nó
    }
}