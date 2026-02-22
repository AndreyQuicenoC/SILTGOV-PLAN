/**
 * team_distribution.js
 * Distribucion por sprints - historias, tareas y asignaciones
 * Proyecto: SILTGOV - Equipo ClustLayer
 */

// ==================== Utilidades ====================
function escapeHtml(text) {
  if (typeof text !== "string") return String(text || "");
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==================== Tema ====================
let currentTheme = "light";

function loadTheme() {
  currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.querySelector("#theme-toggle .theme-icon");
  if (icon) icon.textContent = currentTheme === "light" ? "Oscuro" : "Claro";
}

// ==================== Funciones de render ====================
function renderMetrics(data) {
  const sec = document.getElementById("metrics-section");
  const container = document.getElementById("metrics-container");
  if (!sec || !container) return;

  container.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px,1fr)); gap:1rem; margin-bottom:2rem;">
      <div class="sprint-metric-card">
        <span class="sprint-metric-value">${data.totalSprints}</span>
        <span class="sprint-metric-label">Sprints</span>
      </div>
      <div class="sprint-metric-card">
        <span class="sprint-metric-value">${data.velocity}</span>
        <span class="sprint-metric-label">Velocidad (pts/sprint)</span>
      </div>
      <div class="sprint-metric-card">
        <span class="sprint-metric-value">${data.totalPoints}</span>
        <span class="sprint-metric-label">Puntos Totales</span>
      </div>
      <div class="sprint-metric-card">
        <span class="sprint-metric-value">${(data.epics || []).length}</span>
        <span class="sprint-metric-label">Epicas</span>
      </div>
    </div>
  `;
  sec.hidden = false;
}

function renderTaskRow(task) {
  return `
    <div class="task-row">
      <span class="task-id">${escapeHtml(task.id || "")}</span>
      <span class="task-title">${escapeHtml(task.title || "")}</span>
      <span class="task-assignee">${escapeHtml(task.assignedTo || "")}</span>
      <span class="task-role-badge">${escapeHtml(task.role || "")}</span>
    </div>
  `;
}

function renderStoryBlock(story) {
  const tasks = Array.isArray(story.tasks) ? story.tasks : [];
  const tasksHTML = tasks.length > 0
    ? `<div class="story-tasks">
        <div class="tasks-header">
          <span class="tasks-col tasks-col-id">ID</span>
          <span class="tasks-col tasks-col-title">Tarea</span>
          <span class="tasks-col tasks-col-assignee">Asignado a</span>
          <span class="tasks-col tasks-col-role">Rol</span>
        </div>
        ${tasks.map(renderTaskRow).join("")}
       </div>`
    : `<p class="no-tasks">Sin tareas registradas.</p>`;

  return `
    <div class="story-block">
      <div class="story-block-header">
        <span class="story-block-code">${escapeHtml(story.code || "")}</span>
        <span class="story-block-title">${escapeHtml(story.title || "")}</span>
        <span class="story-block-pts">${story.points || 0} pts</span>
        <span class="story-block-assignee">Responsable: ${escapeHtml(story.assignedTo || "")}</span>
      </div>
      ${tasksHTML}
    </div>
  `;
}

function renderSprintCard(sprint) {
  const stories = Array.isArray(sprint.stories) ? sprint.stories : [];
  const storiesHTML = stories.length > 0
    ? stories.map(renderStoryBlock).join("")
    : `<p class="no-stories">Sin historias asignadas.</p>`;

  return `
    <div class="sprint-card" style="border-left: 4px solid ${escapeHtml(sprint.color || "#64748b")}">
      <div class="sprint-card-header">
        <div class="sprint-card-info">
          <h3 class="sprint-card-name">${escapeHtml(sprint.name || "")}</h3>
          <p class="sprint-card-goal">${escapeHtml(sprint.goal || "")}</p>
          ${sprint.teamNote ? `<p class="sprint-team-note">${escapeHtml(sprint.teamNote)}</p>` : ""}
        </div>
        <div class="sprint-card-meta">
          <span class="sprint-pts-badge">${sprint.totalPoints || 0} pts</span>
          <span class="sprint-duration">${escapeHtml(sprint.duration || "")}</span>
        </div>
      </div>
      <div class="sprint-stories">
        ${storiesHTML}
      </div>
    </div>
  `;
}

// ==================== Main ====================
function init() {
  loadTheme();

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  try {
    if (typeof TEAM_DATA === "undefined") {
      throw new Error("No se encontraron datos del equipo (TEAM_DATA).");
    }

    // Descripcion
    const descEl = document.getElementById("team-description");
    if (descEl) {
      descEl.textContent =
        `${TEAM_DATA.team} - "${TEAM_DATA.slogan}". ` +
        (TEAM_DATA.description || "");
    }

    renderMetrics(TEAM_DATA);

    const container = document.getElementById("sprints-container");
    if (!container) throw new Error("Contenedor de sprints no encontrado.");

    const sprints = Array.isArray(TEAM_DATA.sprints) ? TEAM_DATA.sprints : [];
    if (sprints.length === 0) {
      container.innerHTML = "<p>No hay sprints definidos.</p>";
      return;
    }

    container.innerHTML = sprints.map(renderSprintCard).join("");

  } catch (err) {
    console.error("Error en team_distribution:", err);
    const errState = document.getElementById("error-state");
    const errMsg = document.getElementById("error-message");
    if (errState) errState.hidden = false;
    if (errMsg) errMsg.textContent = err.message;
  }
}

document.addEventListener("DOMContentLoaded", init);
