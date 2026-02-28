/**
 * design_patterns.js - Renderizador de la pagina de Patrones de Diseno
 * SILTGOV - Sistema Integrado de Liquidaciones del Gobierno
 * Equipo ClustLayer | Dev on time
 */

// ==================== Estado ====================
const state = {
  currentTheme: "light",
  expandedPatterns: new Set(),
};

// ==================== Elementos ====================
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  dpIntro: document.getElementById("dp-intro"),
  dpToc: document.getElementById("dp-toc"),
  dpCategories: document.getElementById("dp-categories"),
};

// ==================== Renderizado de Intro ====================

function renderIntro() {
  if (!elements.dpIntro) return;
  const { meta } = DESIGN_PATTERNS_DATA;
  elements.dpIntro.innerHTML = `
    <div class="dp-intro-badge">
      <span class="dp-badge">Arquitectura de Software</span>
    </div>
    <h2 class="dp-intro-title">${meta.title}</h2>
    <p class="dp-intro-subtitle">${meta.subtitle}</p>
    <p class="dp-intro-description">${meta.description}</p>
  `;
}

// ==================== Tabla de Contenidos ====================

function renderToc() {
  if (!elements.dpToc) return;
  const { categories } = DESIGN_PATTERNS_DATA;

  const links = categories
    .map(
      (cat) => `
    <a href="#cat-${cat.id}" class="toc-link toc-color-${cat.color}">
      <span class="toc-count">${cat.patterns.length}</span>
      <span class="toc-label">${cat.name}</span>
    </a>
  `
    )
    .join("");

  elements.dpToc.innerHTML = `
    <h2 class="toc-title">Categorias</h2>
    <div class="toc-grid">${links}</div>
  `;
}

// ==================== Patrones ====================

function togglePattern(patternKey) {
  const content = document.getElementById(`pattern-body-${patternKey}`);
  const btn = document.getElementById(`pattern-toggle-${patternKey}`);
  if (!content || !btn) return;

  if (state.expandedPatterns.has(patternKey)) {
    content.style.maxHeight = "0";
    content.setAttribute("aria-hidden", "true");
    btn.classList.remove("expanded");
    state.expandedPatterns.delete(patternKey);
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.setAttribute("aria-hidden", "false");
    btn.classList.add("expanded");
    state.expandedPatterns.add(patternKey);
  }
}

function createBenefitsList(benefits) {
  return benefits
    .map((b) => `<li class="benefit-item"><span class="benefit-dot"></span>${b}</li>`)
    .join("");
}

function createRelatedFiles(files) {
  return files
    .map((f) => `<span class="related-tag">${f}</span>`)
    .join("");
}

function createPatternCard(cat, pattern) {
  const key = `${cat.id}-${pattern.id}`;
  return `
    <div class="pattern-card" id="pattern-${key}">
      <button
        class="pattern-header"
        id="pattern-toggle-${key}"
        aria-expanded="false"
        aria-controls="pattern-body-${key}"
        onclick="togglePattern('${key}')"
      >
        <div class="pattern-header-info">
          <span class="pattern-type-badge type-color-${cat.color}">${pattern.type}</span>
          <h4 class="pattern-name">${pattern.name}</h4>
        </div>
        <span class="pattern-chevron" aria-hidden="true">&#8250;</span>
      </button>

      <div
        class="pattern-body"
        id="pattern-body-${key}"
        role="region"
        aria-hidden="true"
        aria-labelledby="pattern-toggle-${key}"
      >
        <div class="pattern-body-inner">

          <div class="pattern-section">
            <span class="section-label">Intencion</span>
            <p>${pattern.intent}</p>
          </div>

          <div class="pattern-rows">
            <div class="pattern-section">
              <span class="section-label section-label-problem">Problema que resuelve</span>
              <p>${pattern.problem}</p>
            </div>
            <div class="pattern-section">
              <span class="section-label section-label-solution">Solucion aplicada</span>
              <p>${pattern.solution}</p>
            </div>
          </div>

          <div class="pattern-section">
            <span class="section-label section-label-benefits">Beneficios en SILTGOV</span>
            <ul class="benefits-list">${createBenefitsList(pattern.benefits)}</ul>
          </div>

          <div class="pattern-section">
            <span class="section-label">Archivos relacionados</span>
            <div class="related-files">${createRelatedFiles(pattern.relatedFiles)}</div>
          </div>

        </div>
      </div>
    </div>
  `;
}

function createCategoryBlock(cat) {
  const cards = cat.patterns.map((p) => createPatternCard(cat, p)).join("");
  return `
    <div class="dp-category-block" id="cat-${cat.id}">
      <div class="dp-category-header border-color-${cat.color}">
        <div class="dp-category-header-row">
          <h3 class="dp-category-name">${cat.name}</h3>
          <span class="dp-count-badge bg-color-${cat.color}">${cat.patterns.length} patrones</span>
        </div>
        <p class="dp-category-desc">${cat.description}</p>
      </div>
      <div class="dp-patterns-list">
        ${cards}
      </div>
    </div>
  `;
}

function renderCategories() {
  if (!elements.dpCategories) return;
  elements.dpCategories.innerHTML =
    DESIGN_PATTERNS_DATA.categories.map(createCategoryBlock).join("");
}

// ==================== Gestion de tema ====================

function loadTheme() {
  const saved = localStorage.getItem("theme") || "light";
  state.currentTheme = saved;
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon();
}

function toggleTheme() {
  state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", state.currentTheme);
  localStorage.setItem("theme", state.currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = elements.themeToggle?.querySelector(".theme-icon");
  if (icon) {
    icon.textContent = state.currentTheme === "light" ? "Oscuro" : "Claro";
  }
}

function setupEventListeners() {
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", toggleTheme);
  }
}

// ==================== Inicializacion ====================

function init() {
  console.log("Inicializando pagina de Patrones de Diseno...");
  try {
    loadTheme();
    renderIntro();
    renderToc();
    renderCategories();
    setupEventListeners();
    console.log("Pagina de Patrones de Diseno inicializada correctamente");
  } catch (error) {
    console.error("Error al inicializar Patrones de Diseno:", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
