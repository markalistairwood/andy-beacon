# Church of Seeing Stars — Beacon
Mobile-first “space station” panel for QR visitors. Press **Activate Beacon** to light the siren and reveal the message.

## Local dev
Open `site/index.html` directly in a browser. No build step, no deps.

## Customise text
Edit `HEADLINE_TEXT` and `SUB_TEXT` at the top of `site/app.js`.

## Deploy (GitHub Pages)
1. Create repo, commit the `/site` folder and the workflow above to `main`.
2. Push. The **Deploy to GitHub Pages** action will publish `/site` at:  
   `https://<your-username>.github.io/<repo>/`
3. Point the QR codes at that URL.
