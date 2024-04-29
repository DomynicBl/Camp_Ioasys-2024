# Exercício - Aula 4 (Introdução a React)

## Resumo

Essa atividade consiste em dois exercícios:
- Tarefa 1 - Card Node.js: Recriar o "Exercício - Aula 3 (Front-End)" utilizando React.
- Tarefa 2 - Lista de Tarefas: Criar uma aplicação simples de lista de tarefas utilizando React, utilizando as features apresentadas ao longo das aulas.

## Detalhes

- Autor: [Domynic Barros Lima](https://github.com/DomynicBl)
- Instituição: [Ioasys](https://ioasys.com.br/)
- Professor Responsável: Francisko de Moraes Rezende

## Requisitos

### Tarefa 1:
- Refazer o exercício da Aula 3, Card LinkTree Front-End, utilizando React.

### Tarefa 2:
- O aplicativo deve ter um formulário onde os usuários possam inserir uma nova tarefa com título e descrição.
- O aplicativo deve exibir uma mensagem informando que nenhuma tarefa foi registrada, quando for o caso.
- Os usuários devem poder enviar o formulário para adicionar a tarefa à lista.
- Cada tarefa deve ser exibida como um componente separado.
- Os usuários devem poder marcar as tarefas como concluídas.
- Os usuários podem excluir tarefas.
- A aplicação exibe um resumo informando quantas tarefas estão registradas no momento e quantas foram concluídas.

- Bônus 1: Utilize um contexto para compartilhar as informações entre a lista de tarefas e o resumo.
- Bônus 2: Coloque o resumo em outra página da sua aplicação.

- Modelo do [Figma](https://www.figma.com/file/xtP8Qx4vLr5n1rQZQYt2zr/Exerc%C3%ADcio---Aula-4-(React)?type=design&mode=design&t=JEK8rWjGMccuCeqy-1)

## Instruções de utilização:

### Instruções Gerais
- 1º Instale o gerenciador de pacotes ["NPM"](https://www.npmjs.com/).
- 2º Após a instalação, verifique se a mesma foi concluída corretamente, executando o comando "npm -v".
- 3º Abra o repositório na sua IDE preferida, entre nas pastas de cada projeto:
  - "cd '.\Exercicio - Aula 4 (React)\Tarefa 1 - Card LinkTree\' "
  - "cd '.\Exercicio - Aula 4 (React)\Tarefa 2 - Lista de Tarefas\' "
- 4º Instale as dependências do projeto, com o comando "npm i".
- 5º Inicie um servidor local React, com o comando "npm run dev".
  - No terminal irá aparecer uma porta para acessar o servidor, clique nela segurando o botão "Ctrl" para acessar.

### Instruções Tarefa 1
- Como o projeto é uma página estática, a única forma de interagir com a mesma é clicando nos botões das redes sociais, sendo redirecionado para cada rede.
<div style="display:flex; justify-content:center; margin-top: 70px;">
    <img src="..\Exercicio - Aula 4 (React)\Tarefa 1 - Card LinkTree\src\assets\demo_tela-notebook2.png" alt="Exemplo do Projeto no Notebook" style="max-width: auto; height: 400px;">
    <img src="..\Exercicio - Aula 4 (React)\Tarefa 1 - Card LinkTree\src\assets\demo_tela-mobile2.png" alt="Exemplo do Projeto no Mobile" style="max-width: auto; height: 400px; margin-left:150px">
</div>

<br><br><br>

### Instruções Tarefa 2
- Ao inserir um título e uma descrição para a sua tarefa, quando clicado no botão com o símbolo "+", essa tarefa é adicionada para a sua lista.
- Ao clicar no nome de uma tarefa em sua lista, ela é marcada como concluída, e se clicada novamente, ela é marcada como não concluída.
- Na sua lista de tarefas, ao clicar no botão com o símbolo "x", a tarefa é excluída da lista.
- A barra de pesquisa no canto superior esquerdo, serve como uma ferramenta de busca, para caso o usuário queira procurar uma tarefa específica.
- A caixa de seleção no canto superior esquerdo, serve como um filtro, para caso o usuário queira exibir todas as tarefas, apenas as tarefas completas ou apenas as incompletas.
- No canto superior direito, existem dois contadores, que servem como um resumo para saber rapidamente quantas tarefas existem no total, e quantas tarefas já foram concluídas.

<div style="display:flex; justify-content:space-evenly; margin-top: 70px;">
    <img src="..\Exercicio - Aula 4 (React)\Tarefa 2 - Lista de Tarefas\src\assets\demo_tela-notebook4.png" alt="Exemplo do Projeto no Notebook" style="max-width: auto; height: 400px;">
    <img src="..\Exercicio - Aula 4 (React)\Tarefa 2 - Lista de Tarefas\src\assets\demo_tela-mobile4.png" alt="Exemplo do Projeto no Mobile" style="max-width: auto; height: 400px; margin-left:150px">
</div>