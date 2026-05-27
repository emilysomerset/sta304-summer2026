// nav.js — injects sidebar + mobile bar into every page
// Usage: <script src="../../nav.js" data-root="../../"></script>
// data-root should point to the repo root from the current page

(function () {
  const script = document.currentScript;
  const root = script ? (script.getAttribute('data-root') || './') : './';

  const lectures = [
    { n: 1, date: 'May 5', title: 'Elements of the sampling problem' },
    { n: 2, date: 'May 7', title: 'Probability sampling & SRS' },
    { n: 3, date: 'May 12', title: 'Properties of estimators under SRS' },
    { n: 4, date: 'May 14', title: 'Stratified Sampling' },
    { n: 5, date: 'May 19', title: 'Ratio and Regression Estimation' },
    { n: 6, date: 'May 26', title: 'Ratio and Regression Estimation and Cluster Sampling' },
  ];

  const cur = window.location.pathname;

  function isActive(href) {
    return cur.includes(href.replace(/^\.\//, '').replace(/index\.html$/, ''));
  }

  function navLink(href, label) {
    const active = isActive(href) ? ' active' : '';
    return `<a class="nav-link${active}" href="${root}${href}">${label}</a>`;
  }

  const lecturesHtml = lectures.map(l => {
    return `
    <details class="week-item">
      <summary><span>Lecture ${l.n} — ${l.date}</span><span class="chev">›</span></summary>
      <a class="week-sub" href="${root}lecture${l.n}/index.html">📄 ${l.title}</a>
    </details>`;
  }).join('');

  const sidebarHtml = `
<aside class="sidebar" id="sidebar">
  <a class="sidebar-brand" href="${root}index.html">
    <div class="brand-eyebrow">STA304</div>
    <div class="brand-name">Surveys, Sampling &amp;<br>Observational Data</div>
    <div class="brand-term">Summer 2026</div>
  </a>
  <nav class="sidebar-nav">
    <div class="nav-section-label">Course</div>
    ${navLink('index.html', '🏠 Home')}
    ${navLink('schedule/index.html', '📅 Schedule')}
    ${navLink('syllabus/index.html', '📋 Syllabus')}
    ${navLink('office-hours/index.html', '🕐 Office Hours')}
    ${navLink('remark-requests/index.html', '📝 Remark Requests')}

    <div class="nav-section-label" style="margin-top:10px">Guides</div>
    ${navLink('guides/jupyterhub.html', '🖥️ JupyterHub')}

      <div class="nav-section-label" style="margin-top:10px">Tests</div>
    ${navLink('Tests/term_test_1.html', '📝 Term test 1')}
        ${navLink('Tests/term_test_2.html', '📝 Term test 2')}
  

    <div class="nav-section-label" style="margin-top:10px">Lecture Content</div>
    ${lecturesHtml}
  </nav>
  <div class="sidebar-footer">
    STA304 · University of Toronto<br>
    Summer 2026
  </div>
</aside>
<div class="sidebar-overlay" id="overlay"></div>`;

  const mobBarHtml = `
<div class="mob-bar">
  <button class="ham" id="ham-btn" aria-label="Open menu">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8">
      <line x1="2" y1="5" x2="18" y2="5"/><line x1="2" y1="10" x2="18" y2="10"/><line x1="2" y1="15" x2="18" y2="15"/>
    </svg>
  </button>
  <span class="mob-title">STA304</span>
</div>`;

  document.body.insertAdjacentHTML('afterbegin', sidebarHtml + mobBarHtml);

  // Toggle
  document.getElementById('ham-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
  });
  document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
  });
})();
