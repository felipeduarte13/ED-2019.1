//Adiciona um elemento e mostra os botões de adicionar e limpar elemento
var stack = new StaticStack();

$().ready(function() {

    $('#push').on('click', pushElement);
    $('#item').keydown(function(e) {
        if (e.which == 13) pushElement();
    })
    $('#pop').on('click', popElement);
    $('#clear').on('click', clearStack);
});
// função de empurrar o elemento
function pushElement() {
    var item = $('#item').val(); // variavel item recebe o valor #item
    if (item) { // se item existir
        stack.push(item) // o valor de item é adiconado a pilha
        $('#item').val(''); // se o valor de #item for zero 
        showStack(); // mostra os elementos empilhados
    }
}
//Se a pilha estiver cheia será removido um elemento e avisará se a pilha estiver vazia
function popElement() {
    if (stack.isEmpty() == false) {
        alert('Foi removido o elemento ' + stack.pop());
        showStack();
    } else {
        alert('Pilha Vazia');
    }
}
//Essa função vai limpa a pilha
function clearStack() { 
    stack.clear();
    showStack();
}

function showStack() { // função de mostrar os elementos na pilha
    // adicionando as DIVS ultilizadas e mostrar os elementos empilhados 
    $('#output').empty();
    $('#stackSize').empty();
    $('#stackPeek').empty();
    $('#output').append(stack.print('<br />'));
    $('#stackSize').append(stack.size());
    $('#stackPeek').append("indice "+ stack.peek());
}