var queue = new StaticQueue(); //Cria objeto da classe StaticQueue()

$().ready(function() { //Quando o documento for carregado...

    $('#enqueue').on('click', enqueueElement); //Quando o elemento #enqueue for clicado, chama função de adicionar elemento na fila
    $('#item').keydown(function(e) { //Verifica se uma tecla do teclado foi precionada
        if (e.which == 13) enqueueElement(); //Se enter for clicado chamar função de adicionar elemento na fila
    });
    $('#dequeue').on('click', dequeueElement); //Quando o elemento #dequeue for clicado, chama função de remover elemento na fila
    $('#clear').on('click', clearQueue); //Quando o elemento #clear for clicado, chama função de limpar fila
});

function enqueueElement() { //Funçao de adicionar elemento na fila
    var item = $('#item').val(); // Variavel item recebe o valor do elemento #item
    if (item) { // Se item existir
        queue.enqueue(item); //O valor de item será colocado no objeto queue
        $('#item').val(''); //O valor do elemento #item será zerado (limpado)
        showQueue(); //Mostra os elementos da fila
    }
}

function dequeueElement() { //Função de tirar elemento da fila
    if (queue.isEmpty() == false) { //Se a fila não for vazia 
        alert('Foi removido o elemento ' + queue.dequeue()); //Objeto queue chama função de remover elemento da fila e mostra a mensagem informando qual elemento foi removido 
        showQueue(); // Mostra os elementos da fila
    } else {
        alert('Fila Vazia'); //Se a fila for vazia, mostra mensagem que a fila está vazia
    }
}

function clearQueue() { //Função de limpar fila
    queue.clear(); //Objeto queue chama função clear para limpar a fila
    showQueue(); //Mostra a fila
}

function showQueue() { //Função de mostrar elementos da fila
    $('#output').empty(); //
	//Adiciona as div's estilizadas e mostra os elementos da fila
    $('#output').append('<div class="ui label">' + queue.print('</div><div class="ui label">') + '</div></div>');
}