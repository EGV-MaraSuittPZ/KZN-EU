// ==========================================
//  KAIZEN R6S — SCRIPT.JS
//  Datos cargados desde archivos externos:
//  · matches-data.js      → matchesData
//  · roster-data.js       → rosterData
//  · achievements-data.js → achievementsStats / achievementsList / achievementsEmpty
//  · sponsors-data.js     → sponsorsData
//  · mvp-data.js          → mvpData
// ==========================================

// ── Helpers ───────────────────────────────────────────
function getInitials(name) {
  if (!name) return "?";
  const parts = name.split(/[-_\s]/);
  return parts.length >= 2
    ? (parts[0][0] + (parts[1][0] || "")).toUpperCase()
    : name.slice(0, 2).toUpperCase();
}

function buildCard(p, index, extraClass) {
  extraClass = extraClass || "";
  const initials = getInitials(p.name);
  const num = String(index + 1).padStart(2, "0");
  return `
    <div class="mw-player-card ${extraClass} reveal">
      ${p.position ? `<span class="mw-badge">${p.position}</span>` : ""}
      <span class="mw-num">${num}</span>
      <div class="mw-avatar">
        ${p.photo
          ? `<img src="${p.photo}" alt="${p.name}"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
             <div class="mw-avatar-bg" style="display:none"><div class="mw-glow"></div><span class="mw-initial">${initials}</span></div>`
          : `<div class="mw-avatar-bg"><div class="mw-glow"></div><span class="mw-initial">${initials}</span></div>`
        }
      </div>
      <div class="mw-info">
        <div class="mw-name">${p.name || "TBD"}</div>
        ${p.position ? `<div class="mw-pos">${p.position}</div>` : ""}
      </div>
      ${p.twitter ? `
        <div class="mw-social-popup">
          <a href="https://x.com/${p.twitter}" target="_blank" title="Twitter/X">
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>` : ""}
    </div>`;
}

// ── Roster ────────────────────────────────────────────
function renderRoster() {
  const grid = document.getElementById("roster-grid");
  const subs = document.getElementById("roster-subsections");
  if (!grid) return;

  const jugadores  = rosterData.filter(p => p.role === "jugador"  && p.name);
  const streamers  = rosterData.filter(p => p.role === "streamer" && p.name);
  const direccion  = rosterData.filter(p => p.role === "staff"    && p.name);

  grid.innerHTML = jugadores.map((p, i) => buildCard(p, i, "")).join("");

  if (!subs) return;
  subs.innerHTML = "";

  if (streamers.length > 0) {
    subs.innerHTML += `
      <div class="mw-subsection">
        <div class="mw-subsection-title">// Streamers Asociados</div>
        <div class="mw-sub-grid">
          ${streamers.map((p, i) => buildCard(p, i, "streamer-card")).join("")}
        </div>
      </div>`;
  }

  if (direccion.length > 0) {
    subs.innerHTML += `
      <div class="mw-subsection">
        <div class="mw-subsection-title">// Dirección</div>
        <div class="mw-sub-grid">
          ${direccion.map((p, i) => buildCard(p, i, "staff-card")).join("")}
        </div>
      </div>`;
  }
}

// ── MVP ───────────────────────────────────────────────
function renderMvp() {
  const grid = document.getElementById("mvp-grid");
  if (!grid || !mvpData || mvpData.length === 0) return;
  grid.innerHTML = mvpData.map(m => `
    <div class="mvp-card${m.current ? " current" : ""} reveal">
      ${m.current ? '<span class="mvp-badge-current">MVP ACTUAL</span>' : ''}
      <div style="text-align:center;margin-bottom:6px;">
        <span style="font-family:'Share Tech Mono',monospace;font-size:0.75rem;color:#888;">
          ${m.month} ${m.year}
        </span>
      </div>
      <img class="mvp-img" src="${m.image}" alt="${m.player}"
        onerror="this.style.display='none'">
      <div style="text-align:center;margin-top:10px;font-family:'Bebas Neue',sans-serif;
        font-weight:700;font-size:1.1rem;color:#fff;text-transform:uppercase;">${m.player}</div>
    </div>
  `).join("");
}

// ── Partidos ──────────────────────────────────────────
let activeStatus = "all";
let activeLeague = "all";

function renderMatches() {
  const container = document.getElementById("matches-list");
  if (!container) return;
  container.innerHTML = "";

  const filtered = matchesData.filter(m => {
    const okStatus = activeStatus === "all" || m.status === activeStatus;
    const okLeague = activeLeague === "all" || m.league === activeLeague;
    return okStatus && okLeague;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center;color:#888;padding:40px;
      font-family:'Share Tech Mono',monospace;">No hay partidos con este filtro.</div>`; **…**

_This response is too long to display in full._
