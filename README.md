<img src="Imagens/Save.png" style="margin-bottom: 30px;">

<img alt="Static Badges" src="https://img.shields.io/badge/version-1.2-blue"> <img alt="Static Badges" src="https://img.shields.io/badge/JS--green"> <img alt="Static Badges" src="https://img.shields.io/badge/CSS--green"> <img alt="Static Badges" src="https://img.shields.io/badge/HTML--green"> <img alt="Static Badges" src="https://img.shields.io/badge/English--purple">


<h1 style="font-family: Arial; margin-top: 20px;">Introduction</h1>

<h3>This project aims to create a user registration system using JavaScript. In it, the user's name will be inserted into a table to facilitate data management and visualization.</h3>
<h3>Functions in JavaScript play a crucial role in interacting with tables on a web page, making the application more dynamic and functional. They allow data to be entered, manipulated and displayed in the table efficiently and interactively. Therefore, the project will have the following functions:</h3>

 - [x] email login and password
 - [x] Redirect to registration
 - [x] Registration of Name, Email, Password and CPF
 - [x] Data interface through table
 - [x] Delete and edit in real time

<h1>Development</h1> 

<h3> Neste capítulo será apresentada as funções em JavaScript que se relacionam com a experiência do usuário de tal forma que a muda para uma maneira mais dinâmica e funcional.</h3>

<h3> 1. Function "Acessar"</h3>

#### This function checks whether the email and password fields are filled in and, if so, redirects the user to another page. Otherwise, it displays a message asking you to fill in all the fields.
<img src="Imagens/Function acessar.png" style="height: 180px;">

<h3>2° Função "salvarUser"</h3>

#### Este código permite que o usuário insira um nome em um campo de texto. Se o nome for fornecido, ele é salvo em uma lista e a interface é atualizada para refletir o novo dado. Se o campo estiver vazio, o usuário recebe um alerta pedindo para inserir um nome.

<img src="Imagens/function salvarUser.png" style="height: 400px;">

### 3° Função "criaLista"

#### Esta função criaLista() gera dinamicamente uma tabela HTML que lista todos os nomes de usuários armazenados em dadosLista. Ela também adiciona botões "Editar" e "Excluir" para cada linha, permitindo que o usuário interaja com os dados diretamente na tabela, tornando a página mais interativa e funcional.
![Screenshot_20240808-193624~3](https://github.com/user-attachments/assets/6e00156c-251e-41ad-9cf3-8d671aa70085)

### 4° Função "Editar Nomes"

#### A função editar é uma ferramenta para modificar uma lista de nomes, permitindo que você selecione um nome, edite-o em um campo de texto e atualize a lista original com a nova informação.
![Screenshot_20240808-195124~2](https://github.com/user-attachments/assets/8c1d1c13-65a2-4f1d-bab5-ea94704bf22a)

### 5° Função "Excluir Nomes" 

#### A função excluir é como uma tesoura para listas e tabelas. Você indica qual item deseja cortar (pelo índice) e ela remove tanto da lista interna (onde os dados são armazenados) quanto da tabela visual (onde o usuário vê a lista).

#### Essa função é muito comum em aplicações web que permitem aos usuários gerenciar listas de itens, como listas de tarefas, contatos, produtos em um carrinho de compras, etc. Ao clicar em um botão "Excluir" ao lado de um item, essa função seria chamada para remover o item da lista e da interface.
![Screenshot_20240808-195124~3](https://github.com/user-attachments/assets/5cbbf544-3e34-42b1-b289-4cbd88cbc5a8)

# Conclusões 

### Uma aplicação web que permite ao usuário criar uma tabela com nomes inseridos por ele, com as funcionalidades de exclusão e edição, uma aplicação como essa oferece uma interface simples e intuitiva para o usuário gerenciar uma lista de nomes, proporcionando as funcionalidades básicas de editar e excluir.

# Resultados Finais 

 - <img src="Imagens/exemplo 1.png">
 - <img src="Imagens/exemplo 2.png">
 - <img src="Gifs/exemplo-gif.gif">

# 1° Atualização do Projeto 

#### Nesta atualização foram feitas diversas alterações tanto na estilização mostrada abaixo mas também nas funcões do arquivo em JavaScript com a adição de mais um campo para inserção do email do usuário. Portanto será mostrado abaixo as imagens e gifs da nova versão deste projeto.

<img src="Imagens/exemploATZ.png">
<img src="Imagens/exemploATZ2.png">
<img src="Gifs/gifATZ.gif">

# 2° Atualização do Projeto (Campo para inserir o CPF)

<img src="Imagens/gif_atz_cpf3.png">

# Principais Alterações

## Criação  de array destinado ao CPF

#### A variável cpfLista está destinada a armazenar uma lista de CPFs (Cadastro de Pessoas Físicas, um número de registro individual usado no Brasil). Esses CPFs podem ser armazenados como strings ("123.456.789-09") ou como números (12345678909), dependendo de como o código for projetado.

<img src="Imagens/gif_atz_cpf.png">

## Implementação de validação do CPF

#### Este código JavaScript valida a entrada de um CPF e fornece feedback ao usuário. Ele verifica primeiro se um CPF foi inserido e, em seguida, utiliza a função "validarCPF" para determinar sua validade. Se o CPF for inválido, uma mensagem em vermelho é exibida; se for válido, a mensagem aparece em verde. O uso de cores e mensagens claras melhora a experiência do usuário, garantindo que erros de entrada sejam tratados adequadamente.

<img src="Imagens/gif_atz_cpf2.png">

# Resultado Final

<img src="Imagens/gif_atz_cpf4.png">


# Tecnologias Utilizadas 

 - **[HTML5](https://html.spec.whatwg.org/)**
 - **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**
 - **[BootStrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)**
 - **[Adobe Express](https://www.adobe.com/br/express/)**
 - **[Padlet](https://padlet.com/victorevangelista153/meu-padlet-diferenciado-pblfh23dlv5iaoi1)**