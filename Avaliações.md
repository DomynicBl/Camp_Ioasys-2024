# Feedback e sugestões dos professores:

## Avaliação do Exercicio 3  

### Total - 77,5 / 100

### Página funcional - Até 50 pts

- Resultado: 45 pts
  - Links externos normalmente são utilizados com o atributo target=”_blank” para abrir uma nova aba;

### HTML Semântico - Até 20 pts

- Resultado: 10 pts
  - Utilizou \<h2\> mas não tinha \<h1\>; 
  - Faltou utilizar \<ul\> em conjunto com \<li\> na lista de links;

### Acessibilidade - Até 20 pts

- Resultado: 15 pts
  - Faltou atributos "title" nos links ou botões;

### Extra - Até 10 pts

- Resultado: 7,5 pts
  - [x] 5 pts - Responsividade;
  - [x] 2,5 pts - Organização geral;
  - [  ] 2,5 pts - Extra (Design criativo, animações, hovers etc);

<br><br>

## Avaliação do Exercicio 5  

### Muuuito bom mesmo, fez até mais coisa do que eu pedi. 

Vou deixar algumas dicas de melhorias aqui no chat pra você mas acho que o objetivo da aula que era entender como escrever os testes você atingiu 100%. Agora é só acostumar com algumas boas práticas na hora de testar.

- Buscar elementos na página com seletores mais objetivos e mais acertivos. Vi que você utilizou bastante "getByPlaceholderText" ou "getByText". Talvez buscar por ID ou até mesmo adicionar um testId seria uma boa. O testId eu gosto mais porque quando você está lidando com o JSX, ele te da uma ideia do que ja foi testado.

- Usar userEvent ao invés de fireEvent para testar interações do usuário. Exemplo: Ao clicar em um botão, você utilizou o fireEvent. A diferença é que o fireEvent vai executar o evento de qualquer forma mesmo que o botão não esteja aparecendo na tela (ele é algo mais "máquina executando") e o userEvent vai fazer vários mini testes para simular 100% a interação de um usuário, então se o botão não estiver aparecendo na tela por algum css por exemplo, ele não vai clicar sacou?