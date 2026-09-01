HAN AN HUA V30 — GITHUB PAGES FIXED

ROOT CAUSE FIXED
The V29 page depended on a remote base stylesheet:
https://kaitochae.github.io/hananhua/styles-v9.css?v=9
If that file is missing/404 on GitHub Pages, the browser shows mostly unstyled HTML.
V30 no longer depends on that remote base CSS or the remote V9 UI/i18n scripts.

CRITICAL FILES ARE LOCAL
- index.html
- styles-v30-base.css
- styles-v25-additions.css
- i18n-core-v30.js
- i18n-v25-additions.js
- i18n-v29-world.js
- site-v30.js
- assets/
- .nojekyll

UPLOAD METHOD
1. Extract the ZIP.
2. Upload THE CONTENTS directly to the repository root.
3. index.html must be visible at the repository root, not inside another folder.
4. GitHub > Settings > Pages > Deploy from branch > main / root.
5. After deployment, hard refresh the browser (Ctrl+F5 / Cmd+Shift+R).

NOTES
- The Taiwan map background and all newly added site assets are local.
- Some original historical photos are still served from the existing kaitochae.github.io/hananhua asset URLs because those source files were not included in the supplied V25 ZIP. If one fails, the page uses a local image fallback.
- The website layout remains styled even if Google Fonts or remote images are unavailable.
