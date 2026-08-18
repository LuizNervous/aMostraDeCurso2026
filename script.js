/* =========================================================
   DADOS DOS PROJETOS
   ========================================================= */

const projetosIIW25 = [
  {
    codigo: "IIW25A",
    titulo: "GuiAssis",
    autor: "Bruno Eduardo, Luiz Gustavo, Gabriel Tostes",
    status: "Em andamento",
    desc: "Site feito para ser um guia para as pessoas novas na cidade conseguirem se localizar.",
    tags: ["HTML", "CSS", "JS", "MYSQL"],
    imagem: "GuiAssis.png",
    link: "https://site-guia-assis.vercel.app"
  },
  {
    codigo: "IIW25A",
    titulo: "GeoIF Banco de Dados",
    autor: "Raphael Lombardi",
    status: "Em andamento",
    desc: "Site feito para registrar as amostras de rochas e minerais do GeoIF de forma online em nuvem.",
    tags: ["React", "Node.JS", "PostgreSQL"],
    imagem: "geoIF.png",
    link: "https://geoifdb.vercel.app/"
  },
  {
    codigo: "IIW25A",
    titulo: "Aura The Clicker",
    autor: "Daniel Flores",
    status: "Em andamento",
    desc: "O melhor jogo clicker já feito usando JavaScript. Tem muita aura e ego 67 bandido resenha.",
    tags: ["HTML", "CSS", "JavaScript"],
    imagem: "aura.png",
    link: "https://aura-the-clicker.vercel.app/"
  },
  {
    codigo: "IIW25A",
    titulo: "Conway",
    autor: "Daniel Flores",
    status: "Concluído",
    desc: "Um simulador simples do Jogo da Vida de Conway.",
    tags: ["HTML", "CSS", "JavaScript"],
    imagem: "cow.png",
    link: "https://conway-eosin.vercel.app/"
  },
  {
    codigo: "IIW25A",
    titulo: "Labirinticos",
    autor: "Daniel Flores",
    status: "Concluído",
    desc: "Tente completar labirintos gerados pelo computador em dificuldades cada vez maiores.",
    tags: ["HTML", "CSS", "JavaScript"],
    imagem: "labirinto.png",
    link: "https://labirintico.vercel.app/"
  },
  {
    codigo: "IIW25A",
    titulo: "Ergoritmos",
    autor: "Daniel Flores",
    status: "Concluído",
    desc: "Crie sequências de instruções simples e veja os resultados ao vivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    imagem: "algoritmos.png",
    link: "https://ergorithm.vercel.app/"
  },
  {
    codigo: "IIW25A",
    titulo: "CheckMente",
    autor: "Emanoelly Borges",
    status: "Terminado",
    desc: "Um site para você desabafar e fazer seu check-in emocional.",
    tags: ["HTML", "CSS", "JS", "Supabase"],
    imagem: "mente.png",
    link: "https://tangerine-dragon-ed8965.netlify.app/"
  }
];

const projetosPFC24 = [
  {
    codigo: "IIW24A",
    titulo: "APASBAC - Site",
    autor: "Luana Sathler, Kamilla Maria",
    status: "Em andamento",
    desc: "Site desenvolvido para mostrar animais em adoção na APASBAC.",
    tags: ["HTML", "CSS", "JS"],
    imagem: "apasbac.png",
    link: "https://apasbac.vercel.app"
  },
  {
    codigo: "IIW24A",
    titulo: "Agenda Acadêmica Digital",
    autor: "Luana Borborema, Ana Paula Marcussi",
    status: "Em testes finais",
    desc: "Uma Solução de Organização e Acessibilidade para Estudantes do IFPR",
    tags: ["HTML", "CSS", "JS"],
    imagem: "agenda.png",
    link: "https://agenda-academica-backend-w48m.onrender.com"
  }
];

/* ========================================================= */

const imagemPadrao = "https://via.placeholder.com/600x350/182A52/9AACC7?text=Sem+Imagem";

function obterCaminhoImagem(imagem) {
  if (!imagem) return imagemPadrao;
  if (imagem.startsWith("http://") || imagem.startsWith("https://")) return imagem;
  return `imagens/${imagem}`;
}

// Anima um número subindo de 0 até o valor final nas estatísticas do topo
function animarContador(elemento, valorFinal, duracaoMs = 900) {
  if (!elemento) return;
  const inicioTempo = performance.now();

  function passo(agora) {
    const progresso = Math.min((agora - inicioTempo) / duracaoMs, 1);
    const valorAtual = Math.round(valorFinal * progresso);
    elemento.textContent = valorAtual;
    if (progresso < 1) requestAnimationFrame(passo);
  }

  requestAnimationFrame(passo);
}

function renderMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track) return;

  const todosProjetos = [...projetosIIW25, ...projetosPFC24];
  const listaDuplicada = [...todosProjetos, ...todosProjetos];

  track.innerHTML = listaDuplicada.map(p => {
    const imgSrc = obterCaminhoImagem(p.imagem);
    return `
      <div class="card-passive">
        <div class="card-passive-img">
          <img src="${imgSrc}" alt="${p.titulo || 'Projeto'}" loading="lazy">
        </div>
        <span class="code-tag" style="align-self: flex-start; font-size:10px;">${p.codigo || 'S/N'}</span>
        <h4>${p.titulo || 'Sem título'}</h4>
        <p class="autor">${p.autor || ''}</p>
      </div>
    `;
  }).join("");
}

function cardGridHTML(p) {
  const url = p.link || "#";
  const imgSrc = obterCaminhoImagem(p.imagem);
  const tagsList = Array.isArray(p.tags) ? p.tags : [];

  return `
    <a class="card" href="${url}" target="_blank" rel="noopener noreferrer">
      <div class="card-img">
        <img src="${imgSrc}" alt="${p.titulo || 'Projeto'}" loading="lazy">
      </div>
      <div class="card-top">
        <span class="code-tag">${p.codigo || 'S/N'}</span>
        <span class="status">${p.status || ''}</span>
      </div>
      <h3>${p.titulo || 'Sem título'}</h3>
      <p class="autor">${p.autor || ''}</p>
      <p class="desc">${p.desc || ''}</p>
      <div class="card-footer">
        <div class="tags">${tagsList.map(t => `<span>${t}</span>`).join("")}</div>
        <span class="link-icon">Ver projeto ↗</span>
      </div>
    </a>
  `;
}

function renderGrids() {
  const gridIIW25 = document.getElementById("grid-iiw25");
  const gridPFC = document.getElementById("grid-pfc");

  if (gridIIW25) gridIIW25.innerHTML = projetosIIW25.map(cardGridHTML).join("");
  if (gridPFC) gridPFC.innerHTML = projetosPFC24.map(cardGridHTML).join("");
}

function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  const tabsWrap = document.getElementById("tabs");
  const gridIIW25 = document.getElementById("grid-iiw25");
  const gridPFC = document.getElementById("grid-pfc");

  if (!tabs.length || !gridIIW25 || !gridPFC) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.target;
      if (tabsWrap) tabsWrap.dataset.active = target;

      if (target === "iiw25") {
        gridIIW25.style.display = "grid";
        gridPFC.style.display = "none";
      } else {
        gridPFC.style.display = "grid";
        gridIIW25.style.display = "none";
      }
    });
  });
}

function inicializarStats() {
  const todosProjetos = [...projetosIIW25, ...projetosPFC24];
  const totalTurmas = new Set(todosProjetos.map(p => p.codigo)).size;

  animarContador(document.getElementById("stat-projetos"), todosProjetos.length);
  animarContador(document.getElementById("stat-turmas"), totalTurmas || 2);
}

document.addEventListener("DOMContentLoaded", () => {
  renderMarquee();
  renderGrids();
  initTabs();
  inicializarStats();
});