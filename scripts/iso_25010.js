/**
 * iso_25010.js - Renderizador de la pagina de Marco Legal ISO 25010
 * SILTGOV - Sistema Integrado de Liquidaciones del Gobierno
 * Equipo ClustLayer | Dev on time
 */

// ==================== Estado ====================
const state = {
  currentTheme: "light",
  openAccordions: new Set(),
};

// ==================== Elementos ====================
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  isoIntro: document.getElementById("iso-intro"),
  isoSummaryTable: document.getElementById("iso-summary-table"),
  isoCategories: document.getElementById("iso-categories"),
};

// ==================== Renderizado de Intro ====================

function renderIntro() {
  if (!elements.isoIntro) return;
  const { meta } = ISO_25010_DATA;
  elements.isoIntro.innerHTML = `
    <div class="intro-badge">
      <span class="standard-badge">${meta.standard}</span>
    </div>
    <h2 class="intro-title">${meta.title}</h2>
    <p class="intro-subtitle">${meta.subtitle}</p>
    <p class="intro-description">${meta.description}</p>
    <div class="intro-scope">
      <span class="scope-label">Alcance:</span>
      <span class="scope-text">${meta.scope}</span>
    </div>
  `;
}

// ==================== Tabla de Resumen ====================

function getPriorityLabel(level) {
  const labels = {
    critical: "Critica",
    high: "Alta",
    medium: "Media",
    low: "Baja",
  };
  return labels[level] || level;
}

function renderSummaryTable() {
  if (!elements.isoSummaryTable) return;
  const { categories } = ISO_25010_DATA;

  const rows = categories
    .map(
      (cat) => `
    <tr class="summary-row priority-${cat.priorityLevel}">
      <td class="summary-name">
        <a href="#cat-${cat.id}" class="anchor-link">${cat.name}</a>
      </td>
      <td class="summary-sub-count">${cat.subcategories.length}</td>
      <td class="summary-priority">
        <span class="priority-badge priority-badge-${cat.priorityLevel}">${cat.priority}</span>
      </td>
      <td class="summary-desc">${cat.summary}</td>
    </tr>
  `
    )
    .join("");

  elements.isoSummaryTable.innerHTML = `
    <table class="iso-table" role="table" aria-label="Resumen categorias ISO 25010">
      <thead>
        <tr>
          <th>Caracteristica</th>
          <th>Subcategorias</th>
          <th>Prioridad en SILTGOV</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

// ==================== Acordeones de categorias ====================

function toggleAccordion(categoryId, subId) {
  const key = `${categoryId}-${subId}`;
  const content = document.getElementById(`accordion-content-${key}`);
  const toggle = document.getElementById(`accordion-toggle-${key}`);
  if (!content || !toggle) return;

  if (state.openAccordions.has(key)) {
    content.style.maxHeight = "0";
    content.setAttribute("aria-hidden", "true");
    toggle.classList.remove("open");
    state.openAccordions.delete(key);
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.setAttribute("aria-hidden", "false");
    toggle.classList.add("open");
    state.openAccordions.add(key);
  }
}

function createSubcategoryAccordion(cat, sub) {
  const key = `${cat.id}-${sub.id}`;
  return `
    <div class="accordion-item" id="sub-${key}">
      <button
        class="accordion-header"
        id="accordion-toggle-${key}"
        aria-expanded="false"
        aria-controls="accordion-content-${key}"
        onclick="toggleAccordion('${cat.id}', '${sub.id}')"
      >
        <span class="accordion-title">${sub.name}</span>
        <span class="accordion-chevron" aria-hidden="true">&#8250;</span>
      </button>
      <div
        class="accordion-content"
        id="accordion-content-${key}"
        role="region"
        aria-hidden="true"
        aria-labelledby="accordion-toggle-${key}"
      >
        <div class="accordion-body">
          <div class="sub-definition">
            <span class="label-tag">Definicion ISO</span>
            <p>${sub.definition}</p>
          </div>
          <div class="sub-application">
            <span class="label-tag label-tag-app">Aplicacion en SILTGOV</span>
            <p>${sub.application}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createCategorySection(cat) {
  const accordions = cat.subcategories
    .map((sub) => createSubcategoryAccordion(cat, sub))
    .join("");

  return `
    <div class="category-section" id="cat-${cat.id}">
      <div class="category-header priority-header-${cat.priorityLevel}">
        <div class="category-header-main">
          <h3 class="category-name">${cat.name}</h3>
          <span class="priority-indicator priority-badge-${cat.priorityLevel}">${cat.priority}</span>
        </div>
        <p class="category-summary">${cat.summary}</p>
      </div>
      <div class="category-body">
        ${accordions}
      </div>
    </div>
  `;
}

function renderCategories() {
  if (!elements.isoCategories) return;
  elements.isoCategories.innerHTML =
    ISO_25010_DATA.categories.map(createCategorySection).join("");
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
  console.log("Inicializando pagina ISO 25010...");
  try {
    loadTheme();
    renderIntro();
    renderSummaryTable();
    renderCategories();
    setupEventListeners();
    console.log("Pagina ISO 25010 inicializada correctamente");
  } catch (error) {
    console.error("Error al inicializar ISO 25010:", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
