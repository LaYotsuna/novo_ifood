"use strict";

function abrirMenuMobile() {
  const menuMobile = document.querySelector(".menu-nav.mobile");
  const iconeMenuMobile = document.querySelector(".icone-menu");

  iconeMenuMobile.addEventListener("click", function () {
    menuMobile.classList.toggle("mobile");
  });
}

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
