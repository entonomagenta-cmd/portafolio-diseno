async function loadProjects() {
  const grid = document.querySelector("#projects-grid");
  const count = document.querySelector("#project-count");
  const empty = document.querySelector("#empty-message");
  try {
    const response = await fetch("/projects/projects.json");
    if (!response.ok) throw new Error("No se pudo cargar la lista de proyectos");
    const data = await response.json();
    const projects = data.projects || [];
    const published = projects.filter(project => project.published !== false);
    count.textContent = `${String(published.length).padStart(2, "0")} PROYECTOS`;
    if (!published.length) {
      empty.hidden = false;
      return;
    }
    grid.innerHTML = published.map(project => {
      const title = escapeHtml(project.title || "Proyecto sin título");
      const category = escapeHtml(project.category || "Diseño");
      const description = escapeHtml(project.description || "");
      const image = project.cover ? `/${project.cover.replace(/^\/+/, "")}` : "";
      const slug = encodeURIComponent(project.slug || "");
      const imageMarkup = image
        ? `<img class="project-image" src="${image}" alt="${escapeHtml(project.cover_alt || project.title || "Imagen del proyecto")}" loading="lazy">`
        : `<div class="project-image image-placeholder" role="img" aria-label="Imagen pendiente"></div>`;
      return `<article class="project-card">
        <a class="project-image-link" href="/project.html?slug=${slug}">${imageMarkup}</a>
        <div class="project-info"><h3 class="project-title"><a href="/project.html?slug=${slug}">${title}</a></h3><span class="project-category">${category}</span></div>
        ${description ? `<p class="project-description">${description}</p>` : ""}
      </article>`;
    }).join("");
  } catch (error) {
    count.textContent = "PORTAFOLIO";
    empty.hidden = false;
    empty.textContent = "No se pudo cargar la lista de proyectos. Comprueba que projects/projects.json exista.";
  }
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
loadProjects();
