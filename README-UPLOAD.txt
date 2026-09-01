HAN AN HUA V28 — CLEAN INTERACTIVE TAIWAN MAP

GitHub Pages upload:
1. Extract this ZIP.
2. Upload index.html, styles-v25-additions.css, i18n-v25-additions.js, .nojekyll, and the complete assets folder to the ROOT of the repository.
3. Do not rename the assets folder.
4. index.html must stay at repository root.

V28 map changes:
- New Taiwan artwork is clean: no baked-in city names, pins, or left/right information cards.
- Pins and city names are real HTML/CSS layers, so they animate when the map enters the screen.
- Hover on desktop or tap on mobile opens the partner tooltip.
- City labels appear sequentially with the pins on desktop/tablet; on small phones labels are hidden to avoid overlap, while tap tooltips remain available.
- The map image uses a local relative path: assets/taiwan-partner-map-clean-v28.png.
- Image fallback remains enabled for other page images.


V29 MULTILINGUAL UPDATE
- Languages: Bahasa Indonesia, English, Traditional Chinese, Simplified Chinese, Japanese, Korean, Spanish, French, German, Arabic.
- Language selector is a compact dropdown so the header remains clean on desktop and mobile.
- The selected language is remembered locally in the browser.
- Map labels, map tooltip descriptions/status, program content, facilities, journey, contact, and footer are translated.
- Official hotel/company brand names remain in their official spelling where appropriate.
- Arabic uses RTL text direction; the map canvas remains LTR so pin positions do not flip.
