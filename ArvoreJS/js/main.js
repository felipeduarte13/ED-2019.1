let tree = new BinaryTree(); //Criação da árvore
$().ready(()=>{ //Criação dos butões para manipulação das funções no navegador
    $('#btnInserir').click(inserir);
    $('#btnBuscar').click(buscar);
    $('#btnMenor').click(menor);
    $('#btnMaior').click(maior);
    $('#btnRemover').click(remover);
    $('#btnEmOrdem').click(mostrarEmOrdem);
    $('#btnPreOrdem').click(mostrarPreOrdem);
    $('#btnPosOrdem').click(mostrarPosOrdem);
    $('#btnAltura').click(mostrarAltura);
    $('#btnTamanho').click(mostrarTamanho);
});
function mostrarItem(item){ //Função responsável por exibir os valores solicitados ao clicar em alguns dos butões anteriores
    let el = $('#saida');
    el.empty();
    el.append(`<span class="ui label">${item}</span>`);
}
function incluir(item){ //Função responsável pela inclusão do valor, quando solicitado
    $('#saida').append(`<span class="ui label">${item}</span>`);
}

function inserir(){ //Função responsável por inserir um valor na árvore
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));
    if(tree.search(num)) //faz a verificação se o valor ja existe na árvore
        mostrarItem('O elemento já existe!'); // Msensagem afirmando que o valor existe, caso exista na árvore
    else{
        tree.insert(num); // Caso contrário, insere o valor na árvore e exibe mensagem com o número inserido
        mostrarItem('Inserido: '+num);
    }
       
}
function buscar(){ // Função responsável por buscar um número na árvore
    let num = parseInt(prompt("informe o numero a ser buscado na arvore:"));
    if(tree.search(num)){ // Verifica se o número está incluso na árvore e exibe uma mensagem na tela, confirmando ou negando
        alert('Numero foi encontrado na arvore!');
    }else{
        alert('Numero não encontrado na arvore!');
    }
}
function menor(){ // Função responsável por exibir menor valor da árvore
    alert('menor valor: '+tree.min());
}
function maior(){  // Função responsável por exibir maior valor da árvore
    alert('maior valor: '+tree.max());
}
function remover(){ //Função responsável por remover um valor da árvore
    let num = parseInt(prompt("informe o numero a ser removido na arvore:"));
    if(tree.search(num)){ //Faz a procura do número a ser removido, caso esteja incluso, remove e exibe mensagem confirmando
        tree.remove(num);
        mostrarItem('O elemento foi removido!');
    }else{ // Caso contrário exibe mensagem afirmando que o elemento não existe
        mostrarItem('O elemento não existe');
    }
}
function mostrarEmOrdem(){ // Função responsável por mostrar os valores da árvore em ordem
    $('#saida').empty();
    tree.inOrderTraverse(incluir);
}
function mostrarPreOrdem(){ // Função responsável por mostrar os valores da árvore em Pre ordem
    $('#saida').empty();
    tree.preOrderTraverse(incluir)
}
function mostrarPosOrdem(){ // Função responsável por mostrar os valores da árvore em Pós ordem
    $('#saida').empty();
    tree.postOrderTraverse(incluir)
}
function mostrarAltura(){ // Função responsável por mostrar a altura da árvore
    alert("Altura: "+tree.heigth());
}

function mostrarTamanho(){ // Função responsável por mostrar o tamanho da árvore
    alert("Tamanho: "+tree.size());
}