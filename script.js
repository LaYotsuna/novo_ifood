"use strict";
/* Não finalizado */
document.getElementById("icone-menu").addEventListener("click", function () {
  let menu = document.getElementById("menu-mobile");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
});

// Quando o cursor estiver na navbar a notficação aparecerá
function notificacaoCaraNova() {
  const navbar = document.querySelector(".navbar");
  const notificacao = document.querySelector(".notificacao");

  navbar.addEventListener("mouseover", (event) => {
    notificacao.classList.remove("escondido");
    navbar.addEventListener("mouseout", (event) => {
      notificacao.classList.add("escondido");
    });
  });
}

// Ao enviar o formulário com sucesso cria um alerta
function onSubmit() {
  alert("Feedback enviado com sucesso!");
}

notificacaoCaraNova();
abrirMenuMobile();
