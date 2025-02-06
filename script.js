const form = document.getElementById("formulario"); // Primeiro inserimos uma constante com nome form para pegar nosso formulario inteiro e adicionar em uma variavel para que seja mais facil de manipular.

//função de comparação, que compara dois valores de entrada, e retorna como verdadeiro ou falso baseado na comparação
function comparacao(valorA, valorB) {
  return valorB > valorA; //retorna verdadeiro se B for maior que A e falso se B não for maior que A.
}

form.addEventListener("submit", function (e) {
  //Pegando a variável do formulario e adicionando um "Ouvinte" para que toda vez que tiver uma ação dentro do formulário do tipo "Submit" que é acionada pelo nosso botão então ele aciona a função criada abaixo
  
  e.preventDefault(); //Funcção que cancela envio do formulário.

  //Criado Constantes para caputurar o input dentro do Html
  const campoB = document.querySelector("#field-b"); //"Document.QuerySelector("#id")"seleciona dentro do Html Que é o "DOCUMENT"
  const campoA = document.querySelector("#field-a"); //Atráves do comando "QuerySelector" seleciona o ID do campo

  //Criado variavel que armazena o valor dos inputs dos campos como NUMBER para não causar conflito
  const valorA = Number(campoA.value); //adicinando a uma variavel constante que captura um valor que se encontra dentro do campo através  do ".Value"
  const valorB = Number(campoB.value);

  //definindo as mensagens personalizadas de cada um dos possiveis resultados.
  //E guardando dentro de uma Constante.
  const msgError = `Errado! </br> O Campo A: ${valorA} é maior que o Campo B: ${valorB}`;
  const msgPositive = ` Correto! </br> O Campo B: ${valorB} é maior que o Campo A: ${valorA}`;

  //Definindo em uma variavel constante uma seleção dos iD'S de erro e acerto, criados no HTML e escondidos no CSS através do comando "Display: none;".
  const mensagemContainerError = document.querySelector(".msg-error");
  const mensagemContainerPositive = document.querySelector(".msg-success");

  //Pegando a variavel constendo os iD'S e definindo para none, Para que toda vez que alguém acione o evento do envio de formulário, o display dessas duas mensagens fiquem escondidas com o NONE no display.
  mensagemContainerError.style.display = "none";
  mensagemContainerPositive.style.display = "none";

  //ultilizando a comparação IF com uma função que recebe os dois valores dos campos A e B para acionar determinadas ações.
  //O ! antes da função de comparação indica que se a função retornar Falso, então o IF irá acionar a primeira ação, se retornar verdadeiro Ele irá acionar o Else que vai mandar a mensagem possitiva.
  if (!comparacao(valorA, valorB)) {
    //Ação de erro.

    mensagemContainerError.innerHTML = msgError; //Aqui ele entra dentro do container de mensagens de erro e adiciona a mensagem personalizada criada la em cima no html que está escondido pelo NONE.

    mensagemContainerError.style.display = "block"; //Em seguida muda o estilo do container para block, retirando o NONE e fazendo o container aparecer com a mensagens de erro.

    campoB.style.border = "solid red"; // E aqui ele deixa a borda vermelha do campo que está errado que no caso é o B para indicar aonde está o erro.
  } else {
    //Ação de erro.

    mensagemContainerPositive.innerHTML = msgPositive; //Aqui ele entra dentro do container de mensagens de Acerto e adiciona a mensagem personalizada criada la em cima no html que está escondido pelo NONE.

    mensagemContainerPositive.style.display = "block"; //Em seguida muda o estilo do container para block, retirando o NONE e fazendo o container aparecer com a mensagens de Acerto.

    campoB.style.border = "none"; // e se por acaso a borda esteja vermelha, aqui ele muda para borda padrão para poder tirar a impressão de erro já que está certo.
  }
});
