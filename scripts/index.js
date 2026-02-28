/**
 * Pagina Principal - SILTGOV
 * @description Script para la pagina de inicio con gestion de tema y renderizado dinamico desde INDEX_DATA
 */

// ==================== Estado de la aplicación ====================
const state = {
  currentTheme: "light",
};

// ==================== Elementos del DOM ====================
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  pageTitle: document.getElementById("page-title"),
  pageSubtitle: document.getElementById("page-subtitle"),
  welcomeTitle: document.getElementById("welcome-title"),
  welcomeDescription: document.getElementById("welcome-description"),
  navigationGrid: document.getElementById("navigation-grid"),
  footerLine1: document.getElementById("footer-line1"),
  footerLine2: document.getElementById("footer-line2"),
};

// ==================== Renderizado desde INDEX_DATA ====================

/**
 * Renderiza el encabezado de la pagina
 */
function renderHeader() {
  if (elements.pageTitle) elements.pageTitle.textContent = INDEX_DATA.header.title;
  if (elements.pageSubtitle) elements.pageSubtitle.textContent = INDEX_DATA.header.subtitle;
}

/**
 * Renderiza la seccion de bienvenida
 */
function renderWelcome() {
  if (elements.welcomeTitle) elements.welcomeTitle.textContent = INDEX_DATA.welcome.title;
  if (elements.welcomeDescription) elements.welcomeDescription.textContent = INDEX_DATA.welcome.description;
}

/**
 * Crea el HTML de una card de navegacion
 * @param {Object} card - Datos de la card
 * @returns {string} HTML de la card
 */
function createCardHTML(card) {
  return `
    <a href="${card.href}" class="nav-card">
      <div class="nav-card-header">
        <div class="nav-card-icon nav-icon-${card.iconType}"></div>
        <h3 class="nav-card-title">${card.title}</h3>
      </div>
      <p class="nav-card-description">${card.description}</p>
      <span class="nav-card-arrow">&#8594;</span>
    </a>
  `;
}

/**
 * Renderiza la cuadricula de navegacion
 */
function renderNavigationGrid() {
  if (!elements.navigationGrid) return;
  elements.navigationGrid.innerHTML = INDEX_DATA.cards.map(createCardHTML).join("");
}

/**
 * Renderiza el pie de pagina
 */
function renderFooter() {
  if (elements.footerLine1) elements.footerLine1.textContent = INDEX_DATA.footer.line1;
  if (elements.footerLine2) elements.footerLine2.textContent = INDEX_DATA.footer.line2;
}

// ==================== Inicialización ====================
/**
 * Inicializa la aplicación
 */
function init() {
  console.log("Iniciando página principal...");
  try {
    loadTheme();
    renderHeader();
    renderWelcome();
    renderNavigationGrid();
    renderFooter();
    setupEventListeners();
    console.log("Página principal inicializada correctamente");
  } catch (error) {
    console.error("Error al inicializar:", error);
  }
}

/**
 * Configura todos los event listeners
 */
function setupEventListeners() {
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", toggleTheme);
  }
}

// ==================== Gestión de tema ====================
/**
 * Carga el tema guardado del localStorage
 */
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  state.currentTheme = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon();
}

/**
 * Alterna entre tema claro y oscuro
 */
function toggleTheme() {
  state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", state.currentTheme);
  localStorage.setItem("theme", state.currentTheme);
  updateThemeIcon();
}

/**
 * Actualiza el icono del botón de tema
 */
function updateThemeIcon() {
  const icon = elements.themeToggle?.querySelector(".theme-icon");
  if (icon) {
    icon.textContent = state.currentTheme === "light" ? "Oscuro" : "Claro";
  }
}

// ==================== Inicio de la aplicación ====================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
