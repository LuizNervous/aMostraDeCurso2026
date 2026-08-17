/* =========================================================
   DADOS DOS PROJETOS — Altere com as informações reais
   ========================================================= */

const projetosIIW25 = [
  {
    codigo: "IIW25A", 
    titulo: "GeoIF",
    autor: "Raphael Lombardi",
    status: "Em andamento",
    desc: "Site feito para registrar as amostras de rochas e minerais do GeoIF de forma online em nuvem.",
    tags: ["React", "Node.JS", "PostgresSQL"],
    link: "https://geoifdb.vercel.app/"
  },
  {
    codigo: "IIW25-02",
    titulo: "Nome do Projeto 2",
    autor: "Autor 3",
    status: "Protótipo",
    desc: "Descrição detalhada do projeto para a mostra do curso.",
    tags: ["React", "Node.js"],
    link: "https://seusite.com/projeto2"
  },
  {
    codigo: "IIW25-03",
    titulo: "Nome do Projeto 3",
    autor: "Autor 4, Autor 5",
    status: "Concluído",
    desc: "Descrição detalhada do projeto para a mostra do curso.",
    tags: ["Python", "Flask"],
    link: "https://seusite.com/projeto3"
  }
];

const projetosPFC24 = [
  {
    codigo: "PFC24-01",
    titulo: "Nome do PFC 1",
    autor: "Autor A, Autor B",
    status: "Concluído",
    desc: "Descrição do projeto final de curso.",
    tags: ["PHP", "MySQL"],
    link: "https://seusite.com/pfc1"
  },
  {
    codigo: "PFC24-02",
    titulo: "Nome do PFC 2",
    autor: "Autor C",
    status: "Concluído",
    desc: "Descrição do projeto final de curso.",
    tags: ["Java", "Spring"],
    link: "https://seusite.com/pfc2"
  }
];

/* ========================================================= */

// 1. Renderiza o Carrossel Passivo (Marquee Superior)
function renderMarquee() {
  const track = document.getElementById("marquee-track");
  const todosProjetos = [...projetosIIW25, ...projetosPFC24];
  
  // Duplicamos o array para criar a ilusão de loop infinito na animação CSS
  const listaDuplicada = [...todosProjetos, ...todosProjetos];

  track.innerHTML = listaDuplicada.map(p => `
    <div class="card-passive">
      <span class="code-tag" style="align-self: flex-start; font-size:10px;">${p.codigo}</span>
      <h4>${p.titulo}</h4>
      <p class="autor">${p.autor}</p>
    </div>
  `).join("");
}

// 2. Renderiza os Cards Interativos da Grade
function cardGridHTML(p) {
  const url = p.link || "#";
  return `
    <a class="card" href="${url}" target="_blank" rel="noopener noreferrer">
      <div class="card-top">
        <span class="code-tag">${p.codigo}</span>
        <span class="status">${p.status}</span>
      </div>
      <h3>${p.titulo}</h3>
      <p class="autor">${p.autor}</p>
      <p class="desc">${p.desc}</p>
      <div class="card-footer">
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <span class="link-icon">Ver projeto ↗</span>
      </div>
    </a>
  `;
}

function renderGrids() {
  document.getElementById("grid-iiw25").innerHTML = projetosIIW25.map(cardGridHTML).join("");
  document.getElementById("grid-pfc").innerHTML = projetosPFC24.map(cardGridHTML).join("");
}

// 3. Controle das Abas na Grade
const tabs = document.querySelectorAll(".tab");
const tabsWrap = document.getElementById("tabs");
const gridIIW25 = document.getElementById("grid-iiw25");
const gridPFC = document.getElementById("grid-pfc");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    
    const target = tab.dataset.target;
    tabsWrap.dataset.active = target;

    if (target === "iiw25") {
      gridIIW25.style.display = "grid";
      gridPFC.style.display = "none";
    } else {
      gridPFC.style.display = "grid";
      gridIIW25.style.display = "none";
    }
  });
});

// Inicialização
renderMarquee();
renderGrids();