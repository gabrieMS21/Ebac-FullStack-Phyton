const form = document.getElementById("formulario");

function comparacao(valorA, valorB) {
  return valorB > valorA;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const campoB = document.querySelector("#field-b");
  const campoA = document.querySelector("#field-a");

  //Criado variavel que armazena o valor dos inputs dos campos como NUMBER para não causar conflito
  const valorA = Number(campoA.value);
  const valorB = Number(campoB.value);

  const msgError = `Errado! </br> O Campo A: ${campoA.value} é maior que o Campo B: ${campoB.value}`;
  const msgPositive = ` Correto! </br> O Campo B: ${campoB.value} é maior que o Campo A: ${campoA.value}`;

  if (!comparacao(valorA, valorB)) {
    const bordaErro = document.querySelector("#field-b");
    const mensagemContainerError = document.querySelector(".msg-error");
    mensagemContainerError.innerHTML = msgError;
    mensagemContainerError.style.display = "block";
    bordaErro.style.border = "solid red";
  } else {
    const mensagemContainerPositive = document.querySelector(".msg-success");
    const bordaAcerto = document.querySelector("#field-b");
    mensagemContainerPositive.innerHTML = msgPositive;
    mensagemContainerPositive.style.display = "block";
    bordaAcerto.style.border = "none";
  }
});
