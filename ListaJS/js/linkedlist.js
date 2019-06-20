class LinkedList{
    // Instancia e utiliza o método de outra classe no construtor
    constructor(){
        this.head=null;
        this.length=0;
    }
// se head for igual a null, esvazie
    isEmpty() {
        return this.head === null;
    }
    //acrescente elementos
    append(element){
		// crie um novo nó, onde o novo elemento sempre fica na cabeça
        let node = new Node(element),
            current = this.head;
        // se isEmpty estiver vazio, this.head é o principal 
		if(this.isEmpty()){
            this.head = node;
        }else{
			// senão, vá para o próximo nó 
            while(current.next)
                current= current.next;
            current.next = node;
        }
        //adiciona mais um elemento 
		this.length++;
    }
// exiba separação
    show(separator = ', ') {}
//insira nova posição no elemento
    insert(position, element){
    }
    //remova a posição
    removeAt(position){
    }
    //remova o elemento 
    remove(element){
    }
    //mostre o indice dos elementos
    indexOf(element){
    }
    
    //mostre o tamanho 
    size(){
    }
    // pegue a posição do elemento
    getElement(position){
    }
	//pesquise o valor
    search(value){
    }

}