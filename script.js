const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  if (!navigation || !menuButton) return;
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开导航");
  menuButton.textContent = "☰";
}

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
    menuButton.textContent = open ? "×" : "☰";
  });
  navigation.addEventListener("click", event => {
    if (event.target.closest("a")) closeMenu();
  });
}

function renderGuide() {
  const guide = document.querySelector("#project-guide");
  guide.innerHTML = PROJECTS.map(project => `
    <a class="guide-item ${project.layout} tone-${project.tone}" href="project.html?id=${project.id}" aria-label="进入 ${project.title} 项目">
      <img src="${project.image}" alt="${project.alt}" loading="lazy">
      <span class="guide-index">${project.index}</span>
      <div class="guide-label">
        <p>${project.type}</p>
        <h3>${project.title}</h3>
        <span>${project.status}</span>
      </div>
      <b aria-hidden="true">↗</b>
    </a>
  `).join("");
}

function actionMarkup(action) {
  if (!action) return "";
  return `<a class="detail-action" href="${action.href}" ${action.external ? 'target="_blank" rel="noopener"' : ""} ${action.download ? "download" : ""}>${action.label}</a>`;
}

function renderProject() {
  const target = document.querySelector("#project-detail");
  const id = new URLSearchParams(window.location.search).get("id");
  const index = PROJECTS.findIndex(project => project.id === id);
  if (index < 0) {
    document.title = "Record Not Found / HDT";
    target.innerHTML = `<section class="not-found"><p>RECORD NOT FOUND</p><h1>404</h1><a href="index.html#guide">← RETURN TO GUIDE</a></section>`;
    return;
  }
  const project = PROJECTS[index];
  const previous = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  document.title = `${project.title} / HDT`;
  document.querySelector("#footer-record").textContent = `RECORD ${project.index} / 07`;
  target.innerHTML = `
    <article class="detail tone-${project.tone}" id="top">
      <section class="detail-hero">
        <img src="${project.image}" alt="${project.alt}">
        <div class="detail-shade"></div>
        <div class="detail-title">
          <p>RECORD ${project.index} / 07 · ${project.type}</p>
          <h1>${project.title}</h1>
          <span>${project.status}</span>
        </div>
      </section>
      <section class="detail-overview">
        <p class="detail-lead">${project.lead}</p>
        <div class="detail-meta">
          <dl><div><dt>ENGINE</dt><dd>${project.engine}</dd></div><div><dt>STATE</dt><dd>${project.status}</dd></div></dl>
          <ul>${project.tags.map(tag => `<li>${tag}</li>`).join("")}</ul>
        </div>
      </section>
      <section class="detail-story">
        <div><p>${project.description}</p>${actionMarkup(project.action)}</div>
      </section>
      ${project.video ? `<figure class="detail-media"><video src="${project.video}" poster="${project.image}" controls muted loop playsinline preload="metadata"></video><figcaption>PLAYABLE DEMO / CAPTURE</figcaption></figure>` : ""}
      <figure class="detail-media secondary-media"><img src="${project.secondary}" alt="${project.secondaryAlt}" loading="lazy"><figcaption>SECONDARY RECORD / ${project.title}</figcaption></figure>
      <nav class="record-nav" aria-label="相邻项目">
        <a href="project.html?id=${previous.id}"><span>← PREVIOUS</span><strong>${previous.title}</strong></a>
        <a href="index.html#guide"><span>PROJECT</span><strong>GUIDE</strong></a>
        <a href="project.html?id=${next.id}"><span>NEXT →</span><strong>${next.title}</strong></a>
      </nav>
    </article>`;
}

if (document.body.dataset.page === "guide") renderGuide();
if (document.body.dataset.page === "project") renderProject();

if (header) {
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}