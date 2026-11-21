document.addEventListener('DOMContentLoaded', () => {
    const menuLateral = document.getElementById('menu-lateral');
    const btnAbrir = document.getElementById('btn-menu');
    const btnFechar = document.getElementById('btn-fechar');

    // Verifica se os elementos realmente existem na tela antes de rodar
    if (btnAbrir && btnFechar && menuLateral) {
        
        // Abre o menu
        btnAbrir.addEventListener('click', () => {
            menuLateral.classList.add('aberto');
        });

        // Fecha o menu no X
        btnFechar.addEventListener('click', () => {
            menuLateral.classList.remove('aberto');
        });

        // Fecha o menu ao clicar em um link
        const linksMenu = menuLateral.querySelectorAll('a');
        linksMenu.forEach(link => {
            link.addEventListener('click', () => {
                menuLateral.classList.remove('aberto');
            });
        });
        
    } else {
        console.error("Erro: Um ou mais botões do menu não foram encontrados no HTML.");
    }

    // encolhe o header quando percebe quando o site desce 50px para baixo
    const cabecalho = document.getElementById('cabecalho');

    if (cabecalho) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                cabecalho.classList.add('encolhido');
            } else {
                cabecalho.classList.remove('encolhido');
            }
        });
    }

});

    function myFunction() {
        const element = document.body;
        const isClaro = element.classList.toggle("claro-mode");

        const botaoTema =
            document.getElementById("btn-tema") ||
            document.querySelector("#menu-lateral button[onclick*='myFunction']");

        if (botaoTema) {
            botaoTema.textContent = isClaro ? "Modo escuro" : "Modo claro";
        }
    }

function abrirObra(chave) {
  const obra = obras[chave];

  if (!obra) {
    alert("Essa obra ainda está em preparação para o teste.");
    return;
  }

  const telaCards = document.getElementById("tela-cards");
  const telaLeitura = document.getElementById("tela-leitura");

  if (telaCards) telaCards.classList.add("oculto");
  if (telaLeitura) telaLeitura.classList.remove("oculto");

  document.getElementById("sidebar-titulo").textContent = obra.titulo;
  document.getElementById("sidebar-autor").textContent = "Autora: " + obra.autor;

  const listaLinks = document.getElementById("sidebar-links");
  listaLinks.innerHTML = "";

  (obra.secoes || []).forEach((secao) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${secao.id}">${secao.nome}</a>`;
    listaLinks.appendChild(li);
  });

  document.getElementById("conteudo-obra").innerHTML = obra.html;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function voltarInicio() {
  const telaCards = document.getElementById("tela-cards");
  const telaLeitura = document.getElementById("tela-leitura");

  if (telaLeitura) telaLeitura.classList.add("oculto");
  if (telaCards) telaCards.classList.remove("oculto");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
