# ANC Industrial Services — Website

Vite + React one-pager. Multilingual (EN / ES / IT).

## Images

Copy these files to `/public/` before building:

- `anc_logo.png` — ANC logo (transparent PNG)
- `hero_bg.png` — Hero background (F&B production line)
- `img_filling.png` — Filling machine photo
- `img_conveyor.png` — Conveyor / bottles photo
- `img_machinery.png` — Machinery hall photo

All images are extracted from the official ANC brochure (PP_definitivo_ANC_2_0.pptx).

## Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
npm run build
vercel --prod
```

### Option B — GitHub + Vercel dashboard

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import that repo
3. Framework Preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Deploy

### Option C — Drag & drop

1. `npm run build` → creates `dist/` folder
2. Go to vercel.com → drag & drop the `dist/` folder

## Customization

All content (text in 3 languages, clients, services) is in `src/App.jsx` in the `LANGS` and `CLIENTS` constants — easy to edit without touching any other file.

## Contact

contact.tech@ancindustrialservice.com  
+56 9 8718 9018
