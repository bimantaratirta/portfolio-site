# 🖼️ Image guide — replacing the placeholder mockups

The site ships with auto-generated SVG mockups so it looks complete. Swap them for **real screenshots** to make it convincing. You don't have to do all 18 at once — do the strongest ones first (the **5 featured** especially).

---

## 1. Specs (read once)

| Thing | Value |
|---|---|
| **Aspect ratio** | **16:10** for every image (e.g. `1600×1000`, or `3200×2000` for retina) |
| **Format** | **PNG** for UI/screens (crisp text) · **JPG** for photo-heavy (e.g. AI Photo Editor) |
| **File size** | Keep each **under ~400 KB** (compress — see tools) |
| **Mobile shots** | Don't drop a raw tall phone screenshot — **frame the phone on a 16:10 background** so it fills the slot (the current placeholders already look like this) |
| **Cover** | Image **#1** is the cover (shows in the hero marquee, featured block, gallery, and detail hero). It's the most important — make #1 your best shot |
| **Consistency** | Use a similar background tone across your phone frames so the gallery feels cohesive |

---

## 2. How to swap (per project)

1. Export your images at 16:10.
2. Name them with the project's **id** (see table): `images/<id>-1.png`, `<id>-2.png`, `<id>-3.png`.
3. Open **`data.js`**, find that project, and add **`shots: 3,`** to it. That switches it from placeholder → your PNGs.
   - Only have 1 good shot? Use `shots: 1`.
   - Files are `.jpg`? Add `ext: 'jpg'` as well.
   - Custom filenames? Instead use `images: ['images/foo.png','images/bar.jpg']`.
4. Refresh. Projects without `shots` keep the placeholder, so you can go one at a time.

> Example — `data.js`:
> ```js
> { id:'ai-photo', title:'AI Photo Editor', shots: 3, ext:'jpg', /* ...rest unchanged... */ }
> ```

---

## 3. What to capture, per project

Cover = shot **#1**. "App" = capture from the running app; "stores" = reuse your published store screenshots.

| id | Project | #1 (cover) | #2 | #3 | Capture from |
|---|---|---|---|---|---|
| `damdex` | Damdex Platform | Company-profile homepage | Product page / store-locator map | CMS dashboard | Live website + CMS (browser) |
| `bpr-ams` | Bank Attendance | Admin dashboard (charts/map) | Mobile check-in (selfie + GPS) | Attendance report | Web admin + mobile app |
| `bpr-pms` | Field Credit Survey | Mobile survey screen | Map w/ officer location | Generated credit doc / evaluation | Mobile app + backend |
| `sib` | Street-Lighting Field Ops | Mobile map w/ survey points | Watermarked photo capture | Job/progress list or Swagger docs | Mobile app + API docs |
| `myistiqlal` | Mosque Super-App | Mobile home / prayer times | Donation (kotak amal) flow | CMS or landing page | App (or **stores**) + CMS |
| `orbit-cbt` | Online Exam Platform | Exam-taking screen | Admin question bank | Results page | Web app + admin |
| `orbit-digilib` | Digital Library | Mobile reader / catalog | Web dashboard | Book detail / desktop build | App (or **stores**) + web |
| `pii` | Org Website + CMS | Public website homepage | Inner content page | CMS editor | Live website + CMS |
| `marhaen` | Payments App | PIN / login screen | Wallet dashboard | Payment (Midtrans) flow | **Stores** / mobile app |
| `sales` | Sales Analytics Dashboard | Dashboard (charts + KPIs) | Geographic sales map | CSV upload / detail | Web app |
| `asha-int` | Media Intelligence | Main dashboard | Network / entity graph | Sentiment map or word cloud | Web app |
| `orbit-mon` | Operations Monitor | Monitoring overview | Per-product section | Trend charts | Web app |
| `prim` | Sustainability (ESG) | Main dashboard (emissions) | Water/energy/biodiversity view | Comparison / report | Web app |
| `icbt` | Lockdown Exam App | Exam question screen | Kiosk / multimedia question | Results / home | **Stores** / mobile app |
| `asha-os` | Conversational Life OS | **WhatsApp chat with the bot** | Web dashboard (priority matrix) | Task / money / health view | Phone (WhatsApp) + web |
| `ai-photo` | AI Photo Editor | Before/after transform | Editor UI | Result / gallery | **Stores** / mobile app |
| `ecomo` | Marketplace Crawler | The scraped data spreadsheet | Terminal run / logs | Config or a simple architecture diagram | Excel + terminal + Excalidraw |
| `anggreani` | Brand Landing Site | Landing hero | Content / gallery section | Contact / another section | Live website (browser) |

> **Backend-only projects** (`ecomo`, and the API side of others) have no UI — screenshot the **Swagger/API docs**, a **terminal run**, the **resulting spreadsheet/CSV**, or draw a quick **architecture diagram**. That's still convincing.

---

## 4. Tools

**Capture**
- Web: Chrome (clean window, hide bookmarks) → `Cmd+Shift+4`; or DevTools device toolbar → "Capture screenshot".
- Mobile: iOS **Simulator** (`Cmd+S`), Android **Emulator** (camera button), or a real device.
- Published apps: pull the screenshots you already uploaded to **App Store Connect** (Media Manager) and **Play Console** (Store listing → Graphics) — they're already framed and polished.

**Make it look pro (framing on a nice background)**
- Browser frames: [shots.so](https://shots.so), [screely.com](https://screely.com), [pika.style](https://pika.style), CleanShot X.
- Phone frames: [mockuphone.com](https://mockuphone.com), [shots.so](https://shots.so), [previewed.app](https://previewed.app), Rotato (3D), or Figma device kits.
- Diagrams: [Excalidraw](https://excalidraw.com), tldraw, Figma.

**Compress** → [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app), ImageOptim.

---

## 5. Your published apps = easiest wins

For anything live on the **App Store / Play Store**, reuse the store screenshots (already device-framed) and consider adding **"Download on the App Store / Get it on Google Play"** badges + links on those project pages — a strong trust signal. (Ask me to wire those in; I just need the store URLs.)
