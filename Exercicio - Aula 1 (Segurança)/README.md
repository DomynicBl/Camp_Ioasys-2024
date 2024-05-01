# Exercício - Aula 1 (Segurança)

## Resumo

Essa atividade consiste em analisar um código desenvolvido pelo professor, uma aplicação JavaScript para a manipulação de usuários no banco de dados, encontrar as vulnerabilidades de segurança e por fim corrigi-las. 

- A pasta "Fork da Atividade (Original)" contém os arquivos originais do projeto (códigos vulneráveis);
- Os arquivos fora dessa pasta são os códigos com as correções e alterações necessárias;
- O arquivo "Report.md" é o relatório das vulnerabilidades, explicando como elas comprometiam a aplicação e mostrando as correções que foram feitas.

## Detalhes

- Autor: [Domynic Barros Lima](https://github.com/DomynicBl)
- Instituição: [Ioasys](https://ioasys.com.br/)
- Professor Responsável: José Lucas Santos

## Requisitos

- Realizar um fork deste [projeto](https://github.com/ioasys/camp-security-practice) no Github de vocês;
- Subir a aplicação localmente na máquina, levando em consideração que esta aplicação possui acesso a banco de dados e identificar as possíveis falhas de segurança existentes;
- Essas falhas de segurança deverão ser corrigidas na aplicação;
- Essas correções aplicadas deverão ser enviadas no fork do projeto realizado no próprio Github de vocês previamente realizado no passo 1;
- Deverá criar um pequeno documento de report sobre as falhas identificadas e quais os problemas que essas falhas podem acarretar;
- Este documento juntamente com o link do fork do projeto na conta de vocês, poderão ser enviados no Google Chat ou via o e-mail ioasys do professor.

## Instruções de utilização:

- **1º** Instale o [Node.js](https://nodejs.org/en) em sua máquina,
  - Após a instalação, verifique se a mesma foi concluída corretamente, executando o comando `node -v`;
- **2º** Instale o gerenciador de pacotes [NPM](https://www.npmjs.com/),
  - Após a instalação, verifique se a mesma foi concluída corretamente, executando o comando `npm -v`;
- **3º** Depois de abrir o código na sua IDE de preferência, execute no terminal o comando `npm i`, isso instalará as dependências necessárias para o projeto;
- **4º** Para configurar as variáveis de ambiente, crie um arquivo `.env` na raiz do projeto, e adicione as seguintes variáveis de ambiente:
  - Substituindo as informações do exemplo pelas informações corretas do seu banco de dados PostgreSQL:

```dotenv
DB_HOST=seu_host_do_banco_de_dados
DB_PORT=sua_porta_do_banco_de_dados
DB_NAME=nome_do_banco_de_dados
DB_USER=seu_usuario_do_banco_de_dados
DB_PASS=sua_senha_do_banco_de_dados
```
> OBS.: Para testar esse projeto, foi utilizado um serviço de SQL online, o [Elefant SQL](https://www.elephantsql.com/),caso queira utilizar essa mesma plataforma, crie sua conta e adicione as variáveis fornecidas pelo site como as variáveis de ambiente ao arquivo  `.env`

```
DB_HOST = sua_url_do_elephantsql
DB_PORT = 5432
DB_NAME = nome_do_banco_de_dados
DB_USER = seu_usuario_do_elephantsql
DB_PASS = sua_senha_do_elephantsql
```

- **5º** No terminal, execute o comando `npx sequelize-cli db:migrate`, para aplicar as migrações do banco de dados;
- **6º** No terminal, execute o comando `npx sequelize-cli db:seed:all`, para adicionar dados de exemplo;
- **7º** No terminal, execute o comando `npm start`, para iniciar o servidor;
- **8º** Para testar a  aplicação, abra o seu navegador de preferência, no endereço "localhost:3000",
  - Para fazer login: acesse o endereço `localhost:3000/login`;
  - Envie uma requisição POST contendo um objeto JSON com 'username' e 'password', como no exemplo de requisição utilizando JavaScript abaixo:

  ```
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'seu_nome_de_usuario',
        password: 'sua_senha'
  })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
  ```
  - Para listar os usuários: acesse o endereço `localhost:3000/users`;
    - Você verá uma lista de usuários no formato JSON;
  - Para ver o perfil do usuário logado: acesse o endereço `localhost:3000/profile?username=seu_nome_de_usuario`;
  - Substitua 'seu_nome_de_usuario' pelo nome de usuário que deseja visualizar.
    - Você verá o perfil do usuário no formato JSON, sem a senha;

> OBS.: Para testar esse projeto, foi utilizado um programa que facilita o envio de requisições HTTP, o [Postman](https://www.postman.com/), caso queira utilizar essa mesma plataforma, crie sua conta e baixe o programa para a sua maquina, ele apresenta uma interface grafica mais amigavel, utilize os seguintes comandos:
- `/login`, para fazer login, envie um POST contendo um objeto JSON com username e password;
- `/users`, para listar os usuários, envie um GET;
- `/profile`, para ver o perfil do usuário logado, envie um GET com um parâmetro de consulta username.

