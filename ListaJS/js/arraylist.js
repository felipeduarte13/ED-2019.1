class ArrayList{
// Instancia e utiliza o método de outra classe no construtor
    constructor(){
        this.data = [];
    }
// mostra os elementos e retorna o elemento junto ao separador
    show (separator=', '){
        return this.data.join(separator);
    }
    //Acrescenta um novo elemento a data
    append(element){
        this.data.push(element);
    }
// insere uma nova posição 
    insert(position, element){
		// se posição igual ou maior que 1, aumentar o tamanho, juntando com o outro elemento 
        if(position>-1 && position<=this.size())
            this.data.splice(position,0,element);
    }
    // remove uma posição
    removeAt(position){
        if (position > -1 && position < this.size())
            this.data.splice(position,1);
    }
    // remove o elemento pelo index
    remove(element){
        let index = this.indexOf(element);
        this.removeAt(index);
    }
    // mostra o indice dos elementos
    indexOf(element){
		// se o elemento tiver index, igual a zero, crie um novo index
        for (let index = 0; index < this.data.length; index++)
			// se o elemento tiver o mesmo valor e tipo do index, retorne -1 
            if(element===this.data[index]) 
                return index;
        return -1;
    }
    // se o elemento tiver tamanho zero, esvazie
    isEmpty(){
        return this.size()===0;
    }
    //retorna o comprimento de data
    size(){
        return this.data.length;
    }
    //pegando elemento >> se a posição for maior ou igual a zero, compare se a posição é menor que o this.size. 
    getElement(position){
        if (position >= 0 && position < this.size())
		// retorna a posição 	
	   return this.data[position];
	   // retorna nulo 
        return null;
    }
	// pesquisa o valor em data 
    search(value){
        return this.data.some((n)=> n===value)
    }
}