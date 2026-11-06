# Mushfika's Universe — a second birthday website

A multi-page, mobile-friendly fan page celebrating Mushfika. Built with plain HTML, CSS and JavaScript; no build tools or frameworks required.

## Pages
- `index.html` — homepage and welcome
- `her-vibe.html` — her aesthetic and the details known so far
- `gallery.html` — 12-photo scrapbook gallery for Mushfika
- `little-things.html` — six editable habit/quirk cards
- `reasons.html` — 12 interactive compliment cards
- `love-note.html` — personal letter from Asif

## Personalise it before publishing
The only confirmed personal details currently included are: Mushfika's name, her love of Hello Kitty, and that Asif loves her a lot. The Little Things page includes the personal details Asif supplied: her chidh-chidhi side, the way she comes running over after calming down, her exact playful 'pari' phrase, her childish/chaotic/cute personality, and her first nickname 'Chijjjooooo'.

Edit the compliment list in `script.js` if you want to add more specific reasons. The page currently has 12 interactive reasons (the heading is styled as a 100-reasons concept; update the count/title if you expand the list).

## Add photos
- `her-vibe.html`: put a portrait at `assets/photos/mushfika-portrait.jpg`.
- `index.html`: replace the placeholder block inside `.photo-slot` with an `<img>` element or add your own photo markup.
- Add further images under `assets/photos/` and reference them with relative paths.

## Run locally
Open `index.html` in a browser. All pages link to each other.

## Publish to GitHub Pages
Create a separate repository, e.g. `mushfika-her-universe`, upload all files and folders to the repository root, then go to Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.


## Add lots of photos
The new `gallery.html` page has 12 photo slots. Put her pictures in `assets/photos/` with these names:
`mushfika-01.jpg` through `mushfika-12.jpg`.
The gallery uses a responsive masonry layout. To add more, copy one `<figure class="gallery-photo">` block in `gallery.html`, change its filename and caption, and increment the photo number.

## Background song
The music control is included on every page. The project uses the audio file you previously supplied: **"I Love You" from Bodyguard**. The converted MP3 is at `assets/audio/bodyguard-i-love-you.mp3`. The visitor must tap **Play our song** because browsers generally block autoplay. This is a copyrighted commercial song; before publishing it publicly on GitHub Pages, make sure you have the right to share it. Otherwise replace it with music you have permission to use.
