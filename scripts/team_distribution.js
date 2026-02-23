// ===================================
// Team Distribution - Dynamic Rendering
// ===================================

// Estado de la aplicación
const state = {
  expandedRoles: new Set(),
  expandedSprints: new Set(),
};

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderTeamDistribution();
});

// ===================================
// Theme Management
// ===================================
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector(".theme-icon");
  if (themeIcon) {
    themeIcon.textContent = theme === "light" ? "Oscuro" : "Claro";
  }
}

// ===================================
// Main Render Function
// ===================================
function renderTeamDistribution() {
  try {
    // Hide loading state
    const loading = document.getElementById("loading");
    if (loading) loading.hidden = true;

    // Set description
    const description = document.getElementById("team-description");
    if (description && TEAM_DATA.descripcion) {
      description.textContent = TEAM_DATA.descripcion;
    }

    // Render each section
    renderRoles();
    renderSprints();
  } catch (error) {
    showError("Error al cargar la información del equipo: " + error.message);
  }
}

// ===================================
// Render Roles Section with Toggles
// ===================================
function renderRoles() {
  const container = document.getElementById("roles-container");
  if (!container) return;

  const rolesHTML = TEAM_DATA.roles
    .map((role, index) => {
      const roleId = `role-${role.id}`;
      const isExpanded = state.expandedRoles.has(roleId);

      return `
      <div class="zone-container" data-role-id="${roleId}">
        <div class="zone-header" onclick="handleRoleToggle('${roleId}')">
          <div class="zone-header-left">
            <div class="role-icon" style="background: linear-gradient(135deg, ${
              role.color
            }, ${adjustColor(role.color, -20)});">
              ${role.icono}
            </div>
            <div>
              <h3 class="zone-name">${role.nombre}</h3>
              <div class="zone-count">${role.miembros.join(", ")}</div>
            </div>
          </div>
          <button class="zone-toggle" aria-label="Expandir/Colapsar">
            <span class="toggle-icon">${isExpanded ? "−" : "+"}</span>
          </button>
        </div>
        <div class="zone-content" ${
          !isExpanded ? 'style="display: none;"' : ""
        }>
          <div class="role-responsibilities">
            <h4>Responsabilidades principales:</h4>
            <ul>
              ${role.responsabilidades
                .map((resp) => `<li>${resp}</li>`)
                .join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = rolesHTML;
}

function handleRoleToggle(roleId) {
  const container = document.querySelector(`[data-role-id="${roleId}"]`);
  if (!container) return;

  const content = container.querySelector(".zone-content");
  const toggleIcon = container.querySelector(".toggle-icon");

  if (state.expandedRoles.has(roleId)) {
    state.expandedRoles.delete(roleId);
    content.style.display = "none";
    toggleIcon.textContent = "+";
  } else {
    state.expandedRoles.add(roleId);
    content.style.display = "block";
    toggleIcon.textContent = "−";
  }
}

// ===================================
// Render Sprints Section with Toggles
// ===================================
function renderSprints() {
  const container = document.getElementById("sprints-container");
  if (!container) return;

  const sprintsHTML = TEAM_DATA.sprints
    .map((sprint, index) => {
      const sprintId = `sprint-${sprint.id}`;
      const isExpanded = state.expandedSprints.has(sprintId);

      return `
      <div class="zone-container" data-sprint-id="${sprintId}">
        <div class="zone-header sprint-header" onclick="handleSprintToggle('${sprintId}')" style="background: linear-gradient(135deg, ${
        sprint.color
      }, ${adjustColor(sprint.color, -20)});">
          <div class="zone-header-left">
            <div class="sprint-number">${index + 1}</div>
            <div>
              <h3 class="zone-name" style="color: white;">${sprint.nombre}</h3>
              <div class="zone-count" style="color: rgba(255,255,255,0.9);">${
                sprint.duracion
              } • ${sprint.enfoque}</div>
            </div>
          </div>
          <button class="zone-toggle" aria-label="Expandir/Colapsar" style="background: rgba(255,255,255,0.2); color: white;">
            <span class="toggle-icon">${isExpanded ? "−" : "+"}</span>
          </button>
        </div>
        <div class="zone-content" ${
          !isExpanded ? 'style="display: none;"' : ""
        }>
          <div class="sprint-tasks">
            ${sprint.tareas
              .map(
                (tarea) => `
              <div class="sprint-task-group">
                <h4 class="task-role">${tarea.rol}</h4>
                <ul class="task-list">
                  ${tarea.actividades.map((act) => `<li>${act}</li>`).join("")}
                </ul>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = sprintsHTML;
}

function handleSprintToggle(sprintId) {
  const container = document.querySelector(`[data-sprint-id="${sprintId}"]`);
  if (!container) return;

  const content = container.querySelector(".zone-content");
  const toggleIcon = container.querySelector(".toggle-icon");

  if (state.expandedSprints.has(sprintId)) {
    state.expandedSprints.delete(sprintId);
    content.style.display = "none";
    toggleIcon.textContent = "+";
  } else {
    state.expandedSprints.add(sprintId);
    content.style.display = "block";
    toggleIcon.textContent = "−";
  }
}

// ===================================
// Utility Functions
// ===================================
function adjustColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const r = (num >> 16) + percent;
  const g = ((num >> 8) & 0x00ff) + percent;
  const b = (num & 0x0000ff) + percent;

  const newR = Math.min(255, Math.max(0, r));
  const newG = Math.min(255, Math.max(0, g));
  const newB = Math.min(255, Math.max(0, b));

  return (
    "#" + ((newR << 16) | (newG << 8) | newB).toString(16).padStart(6, "0")
  );
}

function showError(message) {
  const loading = document.getElementById("loading");
  const errorState = document.getElementById("error-state");
  const errorMessage = document.getElementById("error-message");

  if (loading) loading.hidden = true;
  if (errorState) {
    errorState.hidden = false;
    if (errorMessage) errorMessage.textContent = message;
  }
}
