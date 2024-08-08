// Validação de preenchimento
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }
    else{
        //alert('campos preenchidos com sucesso');
        window.location.href = 'cadastro.html';
    }
}
 
//função de criação de array para armazenamento de nomes
 
var dadosLista = [];
// Array criado para um valor indefinido
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
 
    if(nomeUser){   
        dadosLista.push(nomeUser);
        console.log(dadosLista);   
        criaLista(); 
        document.getElementById('nomeUser').value = "";    
    }
    else{
        alert("Favor informar o nome");
    }
}

function criaLista(){

    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuario</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.lenght - 1); i ++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> </td></tr>";
    }

    document.getElementById('tabela')
    innerHTML = tabela;
}

function excluir(i){
    dadosLista.splice((i - 1 ), 1);
    document.getElementById('tabela').deleteRow(i);
}

function editar(i){
    Document.getElementById("nomeUser").value = dadosLista((i - 1)); dadosLista.splice(dadosLista[(i - 1)])

}