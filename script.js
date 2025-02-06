const form = document.getElementById("formulario");

function comparacao(valorA, valorB) {
  return valorB > valorA;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
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
    mensagemContainerError.innerHTML = msgError;
    mensagemContainerError.style.display = "block";
    campoB.style.border = "solid red";
  } else {
    mensagemContainerPositive.innerHTML = msgPositive;
    mensagemContainerPositive.style.display = "block";
    campoB.style.border = "none";
  }
});
