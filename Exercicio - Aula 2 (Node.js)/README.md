# Exercício - Aula 2 (Aplicação Node.js com API OpenAI)

## Resumo:

Essa atividade consiste em criar uma aplicação node.js, onde ela se conecte com a [API da OpenAI](https://platform.openai.com/overview), e por meio do terminal o usuario possa fazer perguntas e a IA devera responder.

## Detalhes

- Autor: [Domynic Barros Lima](https://github.com/DomynicBl)
- Instituição: [Ioasys](https://ioasys.com.br/)
- Professor Responsável: Nelson Sinis

## Requisitos:

- A aplicação deverá ser escrita inteiramente em Node
- Deverá conter um README contendo o passo a passo para utilização da mesma
- Nenhuma credencial será permitida ser commitado, use variável de ambiente
- O código deverá ser disponibilizado no Github e enviado o link para o email do professor
- Utilizar o serviço Azure OpenAI

## Instruções de utilização
- 1º Baixe o [Node.js](https://nodejs.org/en) em sua maquina;
- 2º Depois de abrir o código na sua IDE de preferência, execute no terminal o comando "npm install --save @azure/openai", isso instalará as dependencias necessasrias do Node;
- 3º Crie um arquivo ".env" dentro dele deve conter duas linhas com as seguintes informações "OpenAI_Key = xxxx" e "OpenAi_Model = yyyy", aonde "xxxx" é a sua chave de API e "yyyy" o seu modelo de linguagem para respostas;
- 4º Depois execute no terminal o comando "npm install dotenv", isso instalará as dependencias necessasrias para usar as variaveis de ambiente;
- 5º Por fim, no terminal digite "node index.js" para executar o arquivo e iniciar a aplicação, basta fazer uma pergunta que a IA da OpenAI ira responde, digite "sair" a qualquer momento quando quiser encerrar a aplicação. 