/**
 * Arquivo: index.js
 * Data: 21/04/2024
 * Descrição: Arquivo responsável por um Chatbot utilizando o uma api da OpenAI
 * Autor: Domynic BL
 * Projeto: Camp 2024 - Desenvolvimento de Software com Node.js
 * Instituição: Ioasys
 */

const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");                // Importando a biblioteca do OpenAI, com as dependencias necessarias para o funcionamento do chatbot
const readline = require('readline');                                                 // Importando a biblioteca readline, para ler entradas do usuário a partir do terminal 
require('dotenv').config();                                                           // Importando a biblioteca dotenv, para carregar variáveis de ambiente a partir de um arquivo .env

const apiKey = process.env.OpenAI_Key;                                                // Obtem a chave de acesso ao OpenAI a partir de uma variável de ambiente
const modelo = process.env.OpenAi_Model;                                              // Obtem o modelo de linguagem a ser utilizado a partir de uma variável de ambiente

const client = new OpenAIClient(                                                      // Criando uma nova instancia do cliente para o OpenAI, com a chave de acesso e a URL do serviço
    'https://br-openai-demo-dev001.openai.azure.com/',
    new AzureKeyCredential(apiKey),
);

const rl = readline.createInterface({                                                 // Criando uma interface para ler entradas do usuário e exibir a saída do chatbot
    input: process.stdin,
    output: process.stdout,
});

const getMensagem = async (mensagem) => {                                             // Essa função "assincrona" recebe como parametro a mensagem do usuário e envia para a API retornar a resposta
    try {
        const resposta = await client.getCompletions(modelo, mensagem,{               // "Modelo" é o modelo de linguagem que será utilizado para responder a mensagem
            maxTokens: 50,                                                            // Limite o tamanho da resposta do chatbot (50 tokens)
        });

        return resposta.choices[0].text.trim();                                       // Retorna a primeira resposta do chatbot, removendo espaços em branco extras do inicio e fim
    } catch (error) {                                                                 // Caso ocorra um erro, exibe a mensagem de erro e retorna uma mensagem padrão
        console.error(error);
        return 'Algo deu errado';
    }
};

const Questionamento = (question) => {                                                // Essa função exibe uma pergunta para o usuário e retorna a resposta
    return new Promise((resolve) => {                                                 // Função que retorna uma promessa, que será resolvida quando o usuário digitar a resposta
        rl.question(question, (answer) => resolve (answer));                          // Exibe a pergunta e aguarda a resposta do usuário
    });    
};

    (async () => {                                                                    // Função principal do chatbot, função anônima assíncrona (IIFE)
    console.log('Bem-vindo ao chatbot');
    console.log('Digite "sair" para sair');

    try{
        var continuar = true;

        while(continuar === true){                                                    // Loop para manter o chatbot em execução até que o usuário digite "sair"
            const mensagem = await Questionamento('User: ');                          // Pergunta ao usuário qual a mensagem que ele deseja enviar ao chatbot

            if(mensagem.toLowerCase() === 'sair'){                                    // Se o usuário digitar "sair", mudara a condição do laço e encerra o chatbot
                console.log('Bot: Saindo...');
                rl.close();
                continuar = false;
            }

            const resposta = await getMensagem(mensagem);                            // Envia a mensagem do usuário para o OpenAI e recebe a resposta do chatbot
            console.log(`Bot: ${resposta}`);                                         // Exibe a resposta do chatbot para o usuário
        }   

        process.exit(0);                                                             // Encerra o chatbot com sucesso, código de saída 0

    } catch (error) {                                                                // Caso ocorra um erro, exibe a mensagem de erro e encerra o chatbot
        console.error(error);
        rl.close();
        process.exit(1);                                                             // Encerra o chatbot com erro, código de saída 1
    }
})();