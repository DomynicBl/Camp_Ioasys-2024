# Exercício - Aula 5 (Testes Automatizados)

## Resumo

Essa atividade consiste em criar uma Lista de Compras: Criar uma aplicação simples de lista de tarefas utilizando React e posteriormente criar testes automatizados utilizando o [Jest](https://jestjs.io/pt-BR/).

## Detalhes

- Autor: [Domynic Barros Lima](https://github.com/DomynicBl)
- Instituição: [Ioasys](https://ioasys.com.br/)
- Professor Responsável: Ryan Drumond

## Requisitos

- De acordo com o exemplo apresentado durante a aula de testes automatizados do Ioasys Camp, desenvolver um componente de lista de compras e seus testes utilizando TDD; 
- Através de um formulário, o usuário poderá:
  - Adicionar produtos e suas quantidades em uma lista de compras;
  - Remover os produtos da lista, independente de sua quantidade;
  - Aumentar ou diminuir a quantidade de produtos na lista;

- O trabalho deve conter no mínimo três testes automatizados, que testarão as funcionalidades da aplicação.

## Instruções de utilização:

### Instruções Gerais

- 1º Instale o gerenciador de pacotes [NPM](https://www.npmjs.com/);
- 2º Após a instalação, verifique se a mesma foi concluída corretamente, executando o comando `npm -v`;
- 3º Abra o repositório na sua IDE preferida, entre nas pastas do projeto, com o comando `cd '.\Exercicio - Aula 5 (Testes Automatizados)\Tarefa 1 - Lista de Compras'` ;
- 4º Instale as dependências do projeto, com o comando `npm i`;
- 5º Inicie um servidor local React, com o comando `npm run dev`;
  - No terminal irá aparecer uma porta para acessar o servidor, clique nela segurando o botão `Ctrl` para acessar;
  - A aplicação permite que o usuário insira o nome e a quantidade de produtos que deseja adicionar na lista;
  - Após a adição de algum produto, o usuário pode aumentar ou diminuir a quantidade de qualquer produto na lista;
  - O usuário também pode excluir qualquer produto da lista.
- 6º No terminal execute o comando `npm test`;
  - Esse comando rodará o `Jest` com os testes automatizados;
  - Os testes contidos nessa aplicação são:
    - Teste para adicionar um produto à lista;
    - Teste para remover um produto da lista;
    - Teste para aumentar a quantidade de produtos na lista;
    - Teste para diminuir a quantidade de produtos na lista;
    - Teste para tentar adicionar produto com nome vazio;
    - Teste para tentar adicionar produto com quantidade inválida (um valor menor ou igual a zero e valores reais);
    - Teste para diminuir a quantidade de um produto para zero.

<div style="display:flex; justify-content:center; margin-top: 70px;">
    <img src="..\Exercicio - Aula 5 (Testes Automatizados)\Tarefa 1 - Lista de Compras\public\demo_tela-notebook.png" alt="Exemplo do Projeto no Notebook" style="max-width: auto; height: 400px;">
    <img src="..\Exercicio - Aula 5 (Testes Automatizados)\Tarefa 1 - Lista de Compras\public\demo_tela-mobile.png" alt="Exemplo do Projeto no Mobile" style="max-width: auto; height: 400px; margin-left:150px">
</div>
