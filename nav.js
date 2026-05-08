// nav.js — injects sidebar + mobile bar into every page
// Usage: <script src="../../nav.js" data-root="../../"></script>
// data-root should point to the repo root from the current page

(function () {
  const script = document.currentScript;
  const root = script ? (script.getAttribute('data-root') || './') : './';

  const weeks = [
    { n: 1, date: 'TBD', lec: 'Week 1 Lecture', hw: 'Homework 1' },
    { n: 2, date: 'TBD', lec: 'Week 2 Lecture', hw: 'Homework 2' },
    { n: 3, date: 'TBD', lec: 'Week 3 Lecture', hw: 'Homework 3' },
    { n: 4, date: 'TBD', lec: 'Week 4 Lecture', hw: 'Homework 4' },
    { n: 5, date: 'TBD', lec: 'Week 5 Lecture', hw: 'Homework 5' },
    { n: 6, date: 'TBD', lec: 'Week 6 Lecture', hw: 'Homework 6' },
    { n: 7, date: 'TBD', lec: 'Week 7 Lecture', hw: 'Homework 7' },
    { n: 8, date: 'TBD', lec: 'Week 8 Lecture', hw: 'Homework 8' },
    { n: 9, date: 'TBD', lec: 'Week 9 Lecture', hw: 'Homework 9' },
    { n: 10, date: 'TBD', lec: 'Week 10 Lecture', hw: 'Homework 10' },
    { n: 11, date: 'TBD', lec: 'Week 11 Lecture', hw: 'Homework 11' },
    { n: 12, date: 'TBD', lec: 'Week 12 Lecture', hw: 'Homework 12' },
  ];

  const cur = window.location.pathname;

  function isActive(href) {
    return cur.includes(href.replace(/^\.\//, '').replace(/index\.html$/, ''));
  }

  function navLink(href, label) {
    const active = isActive(href) ? ' active' : '';
    return `<a class="nav-link${active}" href="${root}${href}">${label}</a>`;
  }

  const weeksHtml = weeks.map(w => {
    const wStr = String(w.n).padStart(2, '0');
    return `
    <details class="week-item">
      <summary><span>Week ${w.n}</span><span class="chev">›</span></summary>
      <a class="week-sub" href="${root}week${w.n}/lecture/">📄 ${w.lec}</a>
      <a class="week-sub" href="${root}week${w.n}/homework/">📝 ${w.hw}</a>
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

    <div class="nav-section-label" style="margin-top:10px">Guides</div>
    ${navLink('guides/markus.html', 'MarkUs Guide')}

    <div class="nav-section-label" style="margin-top:10px">Weekly Content</div>
    ${weeksHtml}
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
