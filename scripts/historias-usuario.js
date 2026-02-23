/**
 * Visualizador de Historias de Usuario - Finanz
 * @description Aplicación para visualizar y filtrar historias de usuario del proyecto
 */

// ==================== Estado de la aplicación ====================
const state = {
  currentProject: "finanz",
  allStories: [],
  filteredStories: [],
  currentTheme: "light",
  epics: new Set(),
};

// ==================== Constantes ====================
const PROJECTS = {
  finanz: {
    name: "Gestor de Finanzas Personales",
  },
};

// ==================== Elementos del DOM ====================
const elements = {
  themeToggle: document.getElementById("theme-toggle"),
  searchInput: document.getElementById("search-input"),
  epicFilter: document.getElementById("epic-filter"),
  sprintFilter: document.getElementById("sprint-filter"),
  storiesContainer: document.getElementById("stories-container"),
  emptyState: document.getElementById("empty-state"),
  errorState: document.getElementById("error-state"),
  errorMessage: document.getElementById("error-message"),
  retryButton: document.getElementById("retry-button"),
  totalStories: document.getElementById("total-stories"),
  visibleStories: document.getElementById("visible-stories"),
  modal: document.getElementById("modal"),
  modalContent: document.getElementById("modal-content"),
  modalOverlay: document.getElementById("modal-overlay"),
};

// ==================== Inicialización ====================
/**
 * Inicializa la aplicación
 */
function init() {
  console.log("Iniciando aplicación...");
  try {
    loadTheme();
    setupEventListeners();
    loadStories();
    console.log("Aplicación inicializada correctamente");
  } catch (error) {
    console.error("Error al inicializar:", error);
    showError("Error al inicializar la aplicación: " + error.message);
  }
}

/**
 * Configura todos los event listeners
 */
function setupEventListeners() {
  console.log("Configurando event listeners...");

  elements.themeToggle.addEventListener("click", toggleTheme);
  elements.searchInput.addEventListener("input", debounce(handleSearch, 300));
  elements.epicFilter.addEventListener("change", handleEpicFilter);
  elements.sprintFilter.addEventListener("change", handleSprintFilter);
  elements.retryButton.addEventListener("click", loadStories);

  // Event listeners del modal
  elements.modalOverlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !elements.modal.hidden) {
      closeModal();
    }
  });

  console.log("Event listeners configurados");
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
  const icon = elements.themeToggle.querySelector(".theme-icon");
  icon.textContent = state.currentTheme === "light" ? "Oscuro" : "Claro";
}

// ==================== Carga de datos ====================
/**
 * Carga las historias del proyecto actual
 */
function loadStories() {
  console.log("Cargando historias del proyecto:", state.currentProject);

  try {
    // Usar datos embebidos en lugar de fetch
    if (
      typeof EMBEDDED_DATA === "undefined" ||
      !EMBEDDED_DATA[state.currentProject]
    ) {
      throw new Error("No se encontraron datos para el proyecto seleccionado");
    }

    const data = EMBEDDED_DATA[state.currentProject];
    state.allStories = data.userStories || [];

    console.log(`${state.allStories.length} historias cargadas`);

    // Extraer épicas únicas
    state.epics.clear();
    state.allStories.forEach((story) => {
      state.epics.add(story.epic);
    });

    populateEpicFilter();
    applyFilters();
  } catch (error) {
    showError(error.message);
    console.error("Error cargando historias:", error);
  }
}

/**
 * Muestra un mensaje de error
 * @param {string} message - Mensaje de error
 */
function showError(message) {
  elements.emptyState.hidden = true;
  elements.errorState.hidden = false;
  elements.errorMessage.textContent = message;
}

/**
 * Muestra el estado vacío
 */
function showEmptyState() {
  elements.errorState.hidden = true;
  elements.emptyState.hidden = false;
}

// ==================== Renderizado ====================
/**
 * Renderiza las historias filtradas
 */
function renderStories() {
  console.log(`Renderizando ${state.filteredStories.length} historias`);
  elements.errorState.hidden = true;

  if (state.filteredStories.length === 0) {
    showEmptyState();
    return;
  }

  elements.emptyState.hidden = true;

  try {
    const storiesHTML = state.filteredStories
      .map((story) => createStoryCard(story))
      .join("");
    elements.storiesContainer.innerHTML = storiesHTML;

    // Agregar event listeners a las tarjetas
    document.querySelectorAll(".story-card").forEach((card, index) => {
      card.addEventListener("click", () => {
        console.log(`Abriendo historia ${state.filteredStories[index].code}`);
        openModal(state.filteredStories[index]);
      });
    });

    updateStats();
    console.log("Historias renderizadas correctamente");
  } catch (error) {
    console.error("Error al renderizar historias:", error);
    showError("Error al renderizar historias: " + error.message);
  }
}

/**
 * Crea el HTML de una tarjeta de historia
 * @param {Object} story - Objeto de historia de usuario
 * @returns {string} HTML de la tarjeta
 */
function createStoryCard(story) {
  const acceptanceCriteriaCount = Array.isArray(story.acceptanceCriteria)
    ? story.acceptanceCriteria.length
    : 0;
  const definitionOfDoneCount = Array.isArray(story.definitionOfDone)
    ? story.definitionOfDone.length
    : 0;

  // Calcular esfuerzo total
  const totalEffort =
    (story.ux || 0) +
    (story.design || 0) +
    (story.front || 0) +
    (story.back || 0);

  return `
        <article class="story-card" role="button" tabindex="0" aria-label="Ver detalles de ${
          story.code || "historia"
        }">
            <div class="story-header">
                <span class="story-code">${escapeHtml(
                  story.code || "N/A"
                )}</span>
                <span class="story-epic">${escapeHtml(
                  story.epic || "Sin épica"
                )}</span>
                ${
                  story.sprint
                    ? `<span class="story-sprint" style="background: var(--accent-color); color: black; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">${escapeHtml(
                        story.sprint
                      )}</span>`
                    : ""
                }
            </div>
            <h3 class="story-title">${escapeHtml(
              story.title || "Sin título"
            )}</h3>
            <p class="story-description">${escapeHtml(
              story.description || "Sin descripción"
            )}</p>
            <div class="story-footer">
                <span class="badge">
                    ${acceptanceCriteriaCount} criterios
                </span>
                <span class="badge">
                    ${definitionOfDoneCount} DoD
                </span>
            </div>
            ${
              totalEffort > 0
                ? `
            <div class="story-effort" style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; font-size: 0.75rem;">
                <div style="text-align: center;">
                    <div style="color: var(--text-secondary); font-weight: 600;">UX</div>
                    <div style="color: var(--text-primary); font-weight: 700; margin-top: 0.25rem;">${
                      story.ux || 0
                    }</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: var(--text-secondary); font-weight: 600;">Design</div>
                    <div style="color: var(--text-primary); font-weight: 700; margin-top: 0.25rem;">${
                      story.design || 0
                    }</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: var(--text-secondary); font-weight: 600;">Front</div>
                    <div style="color: var(--text-primary); font-weight: 700; margin-top: 0.25rem;">${
                      story.front || 0
                    }</div>
                </div>
                <div style="text-align: center;">
                    <div style="color: var(--text-secondary); font-weight: 600;">Back</div>
                    <div style="color: var(--text-primary); font-weight: 700; margin-top: 0.25rem;">${
                      story.back || 0
                    }</div>
                </div>
                <div style="text-align: center; background: var(--primary-color); color: white; border-radius: 4px; padding: 0.25rem;">
                    <div style="font-weight: 600;">Total</div>
                    <div style="font-weight: 700; margin-top: 0.25rem;">${totalEffort}</div>
                </div>
            </div>
            `
                : ""
            }
        </article>
    `;
}

/**
 * Actualiza las estadísticas mostradas
 */
function updateStats() {
  elements.totalStories.textContent = state.allStories.length;
  elements.visibleStories.textContent = state.filteredStories.length;
}

// ==================== Filtros ====================
/**
 * Puebla el selector de épicas
 */
function populateEpicFilter() {
  const options = Array.from(state.epics)
    .sort()
    .map(
      (epic) =>
        `<option value="${escapeHtml(epic)}">${escapeHtml(epic)}</option>`
    )
    .join("");

  elements.epicFilter.innerHTML = `<option value="all">Todas las épicas</option>${options}`;
}

/**
 * Aplica todos los filtros activos
 */
function applyFilters() {
  let filtered = [...state.allStories];

  // Filtro de búsqueda
  const searchTerm = elements.searchInput.value.toLowerCase().trim();
  if (searchTerm) {
    filtered = filtered.filter(
      (story) =>
        story.code.toLowerCase().includes(searchTerm) ||
        story.title.toLowerCase().includes(searchTerm) ||
        story.description.toLowerCase().includes(searchTerm) ||
        story.epic.toLowerCase().includes(searchTerm) ||
        (story.sprint && story.sprint.toLowerCase().includes(searchTerm))
    );
  }

  // Filtro de épica
  const selectedEpic = elements.epicFilter.value;
  if (selectedEpic !== "all") {
    filtered = filtered.filter((story) => story.epic === selectedEpic);
  }

  // Filtro de sprint
  const selectedSprint = elements.sprintFilter.value;
  if (selectedSprint !== "all") {
    filtered = filtered.filter((story) => story.sprint === selectedSprint);
  }

  state.filteredStories = filtered;
  renderStories();
}

/**
 * Maneja la búsqueda
 */
function handleSearch() {
  applyFilters();
}

/**
 * Maneja el filtro de épica
 */
function handleEpicFilter() {
  applyFilters();
}

/**
 * Maneja el filtro de sprint
 */
function handleSprintFilter() {
  applyFilters();
}

// ==================== Modal ====================
/**
 * Abre el modal con los detalles de una historia
 * @param {Object} story - Historia de usuario
 */
function openModal(story) {
  if (!story) {
    console.error("No se proporcionó una historia válida");
    return;
  }

  const acceptanceCriteria = Array.isArray(story.acceptanceCriteria)
    ? story.acceptanceCriteria
    : [];
  const definitionOfDone = Array.isArray(story.definitionOfDone)
    ? story.definitionOfDone
    : [];

  const totalEffort =
    (story.ux || 0) +
    (story.design || 0) +
    (story.front || 0) +
    (story.back || 0);

  const modalContent = `
    <div style="padding: 2rem;">
      <div style="margin-bottom: 1.5rem;">
        <h2 style="margin: 0 0 0.5rem 0; color: var(--text-primary); font-size: 1.75rem;">${escapeHtml(
          story.code || "N/A"
        )} - ${escapeHtml(story.title || "Sin título")}</h2>
        <div style="display: flex; gap: 0.75rem; margin-top: 0.75rem; flex-wrap: wrap;">
          <span style="background: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 6px; font-size: 0.875rem;">${escapeHtml(
            story.code || "N/A"
          )}</span>
          <span style="background: var(--border-color); color: var(--text-primary); padding: 0.25rem 0.75rem; border-radius: 6px; font-size: 0.875rem;">${escapeHtml(
            story.epic || "Sin épica"
          )}</span>
          ${
            story.sprint
              ? `<span style="background: var(--accent-color); color: black; padding: 0.25rem 0.75rem; border-radius: 6px; font-size: 0.875rem;">${escapeHtml(
                  story.sprint
                )}</span>`
              : ""
          }
        </div>
      </div>
      
      ${
        totalEffort > 0
          ? `
      <div style="margin-bottom: 1.5rem; padding: 1.5rem; background: var(--background-secondary); border-radius: 8px;">
        <h3 style="color: var(--text-primary); margin: 0 0 1rem 0; font-size: 1.25rem;">Esfuerzo Estimado (Story Points)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">
          <div style="text-align: center; padding: 1rem; background: var(--background-primary); border-radius: 6px; border: 2px solid var(--border-color);">
            <div style="color: var(--text-secondary); font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;">UX</div>
            <div style="color: var(--primary-color); font-size: 1.5rem; font-weight: 700;">${
              story.ux || 0
            }</div>
            <div style="color: var(--text-secondary); font-size: 0.75rem; margin-top: 0.25rem;">pts</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: var(--background-primary); border-radius: 6px; border: 2px solid var(--border-color);">
            <div style="color: var(--text-secondary); font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;">Design</div>
            <div style="color: var(--primary-color); font-size: 1.5rem; font-weight: 700;">${
              story.design || 0
            }</div>
            <div style="color: var(--text-secondary); font-size: 0.75rem; margin-top: 0.25rem;">pts</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: var(--background-primary); border-radius: 6px; border: 2px solid var(--border-color);">
            <div style="color: var(--text-secondary); font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;">Frontend</div>
            <div style="color: var(--primary-color); font-size: 1.5rem; font-weight: 700;">${
              story.front || 0
            }</div>
            <div style="color: var(--text-secondary); font-size: 0.75rem; margin-top: 0.25rem;">pts</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: var(--background-primary); border-radius: 6px; border: 2px solid var(--border-color);">
            <div style="color: var(--text-secondary); font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;">Backend</div>
            <div style="color: var(--primary-color); font-size: 1.5rem; font-weight: 700;">${
              story.back || 0
            }</div>
            <div style="color: var(--text-secondary); font-size: 0.75rem; margin-top: 0.25rem;">pts</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: var(--primary-color); color: white; border-radius: 6px; border: 2px solid var(--primary-color);">
            <div style="font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;">Total</div>
            <div style="font-size: 1.5rem; font-weight: 700;">${totalEffort}</div>
            <div style="font-size: 0.75rem; margin-top: 0.25rem;">pts</div>
          </div>
        </div>
      </div>
      `
          : ""
      }
      
      
      <div style="margin-bottom: 1.5rem;" id="description-section">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
          <h3 id="description-title" style="color: var(--text-primary); margin: 0; font-size: 1.25rem;">Descripción</h3>
          <button 
            class="copy-description-btn"
            style="padding: 0.5rem; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;"
            onmouseover="this.style.background='var(--accent-color)'; this.style.transform='scale(1.1)';"
            onmouseout="this.style.background='var(--primary-color)'; this.style.transform='scale(1)';"
            onclick="copyDescriptionSection(this)"
            title="Copiar descripción">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
        <p id="description-content" style="color: var(--text-secondary); line-height: 1.8; margin: 0; white-space: pre-line;">${escapeHtml(
          story.description || "Sin descripción disponible"
        )}</p>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <h3 style="color: var(--text-primary); margin: 0 0 0.75rem 0; font-size: 1.25rem;">Criterios de Aceptación</h3>
        ${
          acceptanceCriteria.length > 0
            ? `
        <ul style="color: var(--text-secondary); line-height: 1.8; margin: 0; padding-left: 0; list-style: none;">
          ${acceptanceCriteria
            .map(
              (criterion) =>
                `<li style="margin-bottom: 0.75rem; display: flex; align-items: start; gap: 0.5rem; padding: 0.75rem; background: var(--background-secondary); border-radius: 6px; position: relative;">
                  <span style="flex: 1; padding-left: 1.5rem; position: relative;">
                    <span style="position: absolute; left: 0; top: 0; color: var(--primary-color); font-weight: 600;">•</span>
                    ${escapeHtml(criterion)}
                  </span>
                  <button 
                    class="copy-criterion-btn" 
                    data-text="${escapeHtml(criterion)}"
                    style="flex-shrink: 0; padding: 0.5rem; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;"
                    onmouseover="this.style.background='var(--accent-color)'; this.style.transform='scale(1.1)';"
                    onmouseout="this.style.background='var(--primary-color)'; this.style.transform='scale(1)';"
                    onclick="copyToClipboard('${escapeHtml(criterion).replace(
                      /'/g,
                      "\\'"
                    )}', this)"
                    title="Copiar criterio">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </li>`
            )
            .join("")}
        </ul>
        `
            : '<p style="color: var(--text-secondary); margin: 0;">No hay criterios de aceptación definidos.</p>'
        }
      </div>
      
      <div id="dod-section">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
          <h3 id="dod-title" style="color: var(--text-primary); margin: 0; font-size: 1.25rem;">Definición de Hecho</h3>
          <button 
            class="copy-dod-btn"
            style="padding: 0.5rem; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;"
            onmouseover="this.style.background='var(--accent-color)'; this.style.transform='scale(1.1)';"
            onmouseout="this.style.background='var(--primary-color)'; this.style.transform='scale(1)';"
            onclick="copyDoDSection(this)"
            title="Copiar definición de hecho">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
        ${
          definitionOfDone.length > 0
            ? `
        <ul id="dod-content" style="color: var(--text-secondary); line-height: 1.8; margin: 0; padding-left: 1.5rem;">
          ${definitionOfDone
            .map(
              (item) =>
                `<li style="margin-bottom: 0.5rem;">${escapeHtml(item)}</li>`
            )
            .join("")}
        </ul>
        `
            : '<p id="dod-content" style="color: var(--text-secondary); margin: 0;">No hay definición de hecho disponible.</p>'
        }
      </div>
    </div>
  `;

  elements.modalContent.innerHTML = modalContent;
  elements.modal.style.display = "flex";
  elements.modal.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
}

/**
 * Cierra el modal
 */
function closeModal() {
  elements.modal.style.display = "none";
  elements.modal.setAttribute("hidden", "");
  document.body.style.overflow = "";
}

// ==================== Utilidades ====================
/**
 * Escapa caracteres HTML para prevenir XSS
 * @param {string} text - Texto a escapar
 * @returns {string} Texto escapado
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Implementa debounce para funciones
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Milisegundos de espera
 * @returns {Function} Función con debounce
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Copia la sección completa de descripción (título + contenido)
 * @param {HTMLElement} button - Botón que activó la copia
 */
function copyDescriptionSection(button) {
  const titleElement = document.getElementById("description-title");
  const contentElement = document.getElementById("description-content");

  if (titleElement && contentElement) {
    const title = titleElement.textContent;
    const content = contentElement.textContent;
    const fullText = `${title}\n\n${content}`;

    copyToClipboard(fullText, button);
  }
}

/**
 * Copia la sección completa de Definición de Hecho (título + lista)
 * @param {HTMLElement} button - Botón que activó la copia
 */
function copyDoDSection(button) {
  const titleElement = document.getElementById("dod-title");
  const contentElement = document.getElementById("dod-content");

  if (titleElement && contentElement) {
    const title = titleElement.textContent;

    // Si es una lista (ul), extraer cada item
    if (contentElement.tagName === "UL") {
      const items = Array.from(contentElement.querySelectorAll("li"))
        .map((li) => `- ${li.textContent}`)
        .join("\n");
      const fullText = `${title}\n\n${items}`;
      copyToClipboard(fullText, button);
    } else {
      // Si es un párrafo (sin contenido)
      const content = contentElement.textContent;
      const fullText = `${title}\n\n${content}`;
      copyToClipboard(fullText, button);
    }
  }
}

/**
 * Copia texto al portapapeles y muestra feedback visual
 * @param {string} text - Texto a copiar
 * @param {HTMLElement} button - Botón que activó la copia
 */
function copyToClipboard(text, button) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showCopyFeedback(button, true);
      })
      .catch((err) => {
        console.error("Error al copiar:", err);
        fallbackCopy(text, button);
      });
  } else {
    fallbackCopy(text, button);
  }
}

/**
 * Método fallback para copiar al portapapeles
 * @param {string} text - Texto a copiar
 * @param {HTMLElement} button - Botón que activó la copia
 */
function fallbackCopy(text, button) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    showCopyFeedback(button, successful);
  } catch (err) {
    console.error("Error al copiar (fallback):", err);
    showCopyFeedback(button, false);
  }

  document.body.removeChild(textArea);
}

/**
 * Muestra feedback visual al copiar
 * @param {HTMLElement} button - Botón a actualizar
 * @param {boolean} success - Si la copia fue exitosa
 */
function showCopyFeedback(button, success) {
  const originalContent = button.innerHTML;
  const originalBg = button.style.background;

  if (success) {
    button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>`;
    button.style.background = "#10b981";
  } else {
    button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>`;
    button.style.background = "#ef4444";
  }

  setTimeout(() => {
    button.innerHTML = originalContent;
    button.style.background = originalBg;
  }, 1500);
}

// ==================== Inicio de la aplicación ====================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
