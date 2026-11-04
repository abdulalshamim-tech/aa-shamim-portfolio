# A.A. SHAMIM — Portfolio Website

A custom-coded, responsive bilingual (English/Bangla) portfolio starter for Abdul All Shamim.

## Included
- `index.html` — all website sections and editable content
- `styles.css` — responsive white/black corporate design, motion and hover styles
- `script.js` — mobile menu, language switch, scroll reveals and subtle desktop cursor
- `assets/aa-shamim-logo.svg` — provisional vector wordmark
- `assets/profile-placeholder.svg` — replace with your profile photo
- `assets/favicon.svg` — browser icon

## Before publishing
1. Replace `assets/profile-placeholder.svg` with your own portrait. Keep the filename the same, or update the image path in `index.html`.
2. Replace the three sample project cards with real work. The current cards are clearly marked as concept demos.
3. Review the About and Experience wording and edit anything that does not accurately describe your work.
4. Add LinkedIn, Behance, Instagram and GitHub links when ready.
5. The current logo is a simple provisional SVG wordmark, not a final custom identity. It can be replaced later.

## Preview locally
Open `index.html` in a browser. For a local development server, use VS Code's Live Server extension or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Free deployment with GitHub + Cloudflare Pages
1. Create a free GitHub account and a new repository, for example `aa-shamim-portfolio`.
2. Upload all files and folders in this project to the repository root.
3. Sign in to Cloudflare and open **Workers & Pages → Create → Pages → Connect to Git**.
4. Select the GitHub repository.
5. For a plain static site, leave the build command empty and set the build output directory to `/` (or `.` if the dashboard requires a relative directory).
6. Deploy. Cloudflare will provide a `*.pages.dev` address.
7. If `shamim.pages.dev` is available, set the Pages project name to `shamim`. The requested name is not guaranteed until Cloudflare accepts it.

No paid domain, hosting, WordPress, theme or plugin is required for this static website.
