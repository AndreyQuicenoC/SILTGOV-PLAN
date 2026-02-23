/**
 * Página Principal - Finanz
 * @description Script para la página de inicio con gestión de tema
 */

// ==================== Estado de la aplicación ====================
const state = {
  currentTheme: "light",
};

// ==================== Elementos del DOM ====================
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
};

// ==================== Inicialización ====================
/**
 * Inicializa la aplicación
 */
function init() {
  console.log("Iniciando página principal...");
  try {
    loadTheme();
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
