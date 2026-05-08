# STA304 Course Website

A static course website ready to deploy on GitHub Pages.

## File Structure

```
sta304/
├── index.html          ← Homepage
├── style.css           ← Shared styles (edit colours/fonts here)
├── nav.js              ← Shared sidebar navigation (edit nav links here)
├── schedule/
│   └── index.html      ← Weekly schedule & due dates
├── syllabus/
│   └── index.html      ← Syllabus, grading, policies
├── office-hours/
│   └── index.html      ← Office hours table
├── guides/
│   ├── markus.html     ← MarkUs submission guide
│   └── jupyterhub.html ← JupyterHub guide
└── week1/ … week12/
    ├── lecture/
    │   └── index.html  ← Lecture page (link your PDF here)
    └── homework/
        └── index.html  ← Homework page (link your PDF here)
```

## Deploying to GitHub Pages

1. Create a GitHub organization named `sta304` (or use your personal account).
2. Create a repo named `sta304-20261` (adjust term code as needed).
3. Push all files in this folder to the `main` branch.
4. Go to **Settings → Pages → Source: Deploy from branch → main / root**.
5. Your site will be live at `https://sta304.github.io/sta304-20261/`

## Customizing

### Add your details
- **`nav.js`** — Update course title, term, week names, and number of weeks.
- **`index.html`** — Fill in instructor name, lecture time, room.
- **`schedule/index.html`** — Fill in dates and topics per week.
- **`syllabus/index.html`** — Fill in grading, textbook, prerequisites.
- **`office-hours/index.html`** — Fill in TA names and times.

### Link your PDFs
In each `week*/lecture/index.html` and `week*/homework/index.html`, replace the `href="#"` on the pdf-btn links with the path to your uploaded PDF, e.g.:
```html
<a class="pdf-btn" href="sta304-week1-lecture.pdf">...</a>
```
Place the PDF file in the same folder as the `index.html`.

### Add/remove weeks
Edit the `weeks` array in `nav.js` and add/remove the corresponding week folders.
