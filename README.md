# ChilliFestë — melos

Faqja zyrtare e **ChilliFestë** (Hot Edition · 7–9 Gusht 2026 · Krushë e Madhe).

## Si ta hapësh faqen

**Mos e hap `index.html` me dyklikim** — nuk funksionon sepse projekti është React + Vite (duhet server).

### Më e lehta (Windows)

Dykliko **`HAP-FAQEN.bat`** në këtë folder. Hap automatikisht shfletuesin në `http://localhost:5173`.

### Me terminal

```bash
npm install
npm run dev
```

Hap [http://localhost:5173](http://localhost:5173).

## Build për prodhim

```bash
npm run build
npm run preview
```

Skedarët statikë në `dist/` — ngarko në çdo host (Netlify, Vercel, etj.).

## GitHub → Network Solutions (automatik)

Çdo `git push` ndërton faqen dhe e ngarkon vetë me FTP te Network Solutions (shih `.github/workflows/deploy.yml`).

### 1. Ngarko kodin në GitHub (një herë)

```bash
git init
git add .
git commit -m "ChilliFest faqja"
git branch -M main
git remote add origin https://github.com/<perdoruesi>/chillifest.git
git push -u origin main
```

(Ose me GitHub CLI: `gh repo create chillifest --private --source=. --push`.)

### 2. Vendos FTP secrets në GitHub

Repo në GitHub → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**. Shto 4:

| Emri | Vlera (nga Network Solutions) |
|------|-------------------------------|
| `FTP_SERVER` | `ftp.chillifeste.com` |
| `FTP_USERNAME` | username i FTP-së |
| `FTP_PASSWORD` | password i FTP-së |
| `FTP_SERVER_DIR` | `/public_html/` (ose rrënja e faqes) |

### 3. Gati

Çdo herë që bën `git push` te `main`, GitHub e ndërton dhe e ngarkon faqen vetë. Mund ta nisësh edhe manualisht: repo → **Actions** → workflow → **Run workflow**.

> Pa FTP secrets, hapat lart vetëm ruajnë kodin. Atëherë ngarko `dist` me dorë (shih më poshtë).

## Network Solutions (domain + hosting)

1. **Build** lokale:
   ```bash
   npm install
   npm run build
   ```
2. Hyr te [Network Solutions](https://www.networksolutions.com) → **My Account** → **Hosting** (ose **Websites**).
3. **FTP** (rekomandohet FileZilla) ose **File Manager** në panel:
   - Server: `ftp.chillifeste.com`
   - Port: `21`, **Passive FTP**: on
   - Kredencialet: nga paneli → FTP Accounts / Website FTP
4. Hap folderin **`public_html`** (rrënja e faqes).
5. **Fshi** përmbajtjen e vjetër në `public_html` (backup nëse duhet), pastaj ngarko **çdo gjë brenda** folderit `dist/` (jo folderin `dist` vetë):
   - `index.html`, `assets/`, `robots.txt`, `.htaccess`, etj.
6. Domain **`chillifeste.com`**: nëse domain-i dhe hostingu janë në të njëjtin llogari, shpesh lidhen automatikisht. Nëse jo: **DNS** → `A` për `@` te IP-ja e hostingut (e tregon paneli) dhe `www` → `chillifeste.com` ose CNAME sipas udhëzimeve të NS.
7. Pas 15–60 min provo: `https://www.chillifeste.com`

`.env` duhet të ketë `VITE_SITE_URL=https://www.chillifeste.com` **para** `npm run build`.

## Faqe private

- **Fjalëkalim:** vendoset në skedarin `.env` → `VITE_SITE_PASSWORD=...`
- Parazgjedhja lokale: `chillifeste2026` (ndryshoje në `.env` para publikimit)
- **Google:** `noindex` + `robots.txt` bllokon indeksimin
- **Rrjeti:** serveri dev/preview dëgjon vetëm në `127.0.0.1` (jo në Wi‑Fi)

Për ta çaktivizuar fjalëkalimin, fshi rreshtin `VITE_SITE_PASSWORD` nga `.env`.

## Facebook dhe domain

**Domain:** [chillifeste.com](https://www.chillifeste.com) (me `www` ose pa — vendos të njëjtën formë kudo).

1. **Krijo faqen në Facebook** (nëse nuk e ke): [facebook.com/pages/create](https://www.facebook.com/pages/create) → emri *ChilliFestë*, handle `@chillifeste` nëse është i lirë.
2. **Vendos linkun e faqes në `.env`** para `npm run build`:
   - `VITE_SITE_URL=https://www.chillifeste.com`
   - `VITE_FACEBOOK_URL=https://www.facebook.com/ChilliFeste`
3. **Lidhe domain-in me hostingun** (Netlify, Cloudflare Pages, etj.): DNS `A` / `CNAME` te provideri i domain-it → deploy folder `dist/`.
4. **Në Facebook Page** → *About* → *Contact info* → **Website**: vendos të njëjtin URL si `VITE_SITE_URL`.
5. **Preview kur ndan linkun**: pas deploy, hap [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/), fut URL-në e faqes, kliko *Scrape Again* që të lexojë banner-in (Open Graph).

Nëse Meta kërkon **verifikim domain-i** (për reklama ose Business): *Meta Business Settings* → *Brand safety* → *Domains* → shto domain-in dhe ndiq udhëzimet (rekord DNS `TXT` ose meta tag në `index.html`).
