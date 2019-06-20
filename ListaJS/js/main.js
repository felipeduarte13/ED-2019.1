var list = new LinkedList();
//declarando as funções
$().ready( () => {
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
});
// mostre os dados 
function showData(){
//configurando mensagem   
   let text = `<div class="ui label">
                    ${list.show('</div><div class="ui label">')}
                </div>`
	let out = $('#output');
    out.empty() //remova elementos do array
    out.append(text) // acrescente elementos no array
}
//função inserir 
function insertElement(){
	//capture e analise o argumento inserido 
    let val = parseInt(prompt('digite um valor a ser inserido:'));
    //pesquise	na lista o elemento inserido e exiba a mensagem do alert 
	if (list.search(val)){
         alert("valor já inserido")
    }else{
		//senão, anexa valor inserido na lista e mostre
        list.append(val);
        showData();
    }
}
function insertElementAt(){
    let val = parseInt(prompt('digite um valor a ser inserido:'));
    if (list.search(val)){
        alert("valor já inserido")
   }else{
        let pos = parseInt(prompt('digite uma posição a inserir:'));
        //insira elemento na lista e exiba
		list.insert(pos, val);
        showData();
   }
}

function removeElement(){
	//captura e analisa o valor, remova e exiba
    let val = parseInt(prompt('digite um valor a ser removido:'));
    list.remove(val);
    showData();
}
//procedimento similar ao anterior
function removeElementAt(){
    let pos = parseInt(prompt('digite uma posição a remover:'));
    list.removeAt(pos)
    showData();
}