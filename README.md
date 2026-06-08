# Beera Bhavani Sankar — Portfolio Website

A modern, dark-mode portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Deployed on Vercel.

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        ← Root layout + SEO metadata
│   ├── page.tsx          ← Main page (assembles all sections)
│   └── globals.css       ← Tailwind base + custom animations
├── components/
│   ├── Navbar.tsx        ← Sticky nav with mobile menu
│   ├── Hero.tsx          ← Hero with CTA buttons
│   ├── About.tsx         ← Stats + bio cards
│   ├── Skills.tsx        ← Categorized tech stack grid
│   ├── Projects.tsx      ← Project cards with stack badges
│   ├── Experience.tsx    ← Timeline + certifications
│   └── Contact.tsx       ← Contact links + Formspree form
├── public/               ← Static assets (add your photo here)
├── .env.example          ← Environment variable template
├── vercel.json           ← Vercel deployment config
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env.local

# 3. Run the dev server
npm run dev

# Open http://localhost:3000
```

---

## Formspree Setup (Contact Form)

1. Go to https://formspree.io and create a free account
2. Create a new form — copy the Form ID (looks like `xrgvpkzw`)
3. Open `components/Contact.tsx`
4. Replace `YOUR_FORMSPREE_ID` with your actual ID:
   ```ts
   const res = await fetch("https://formspree.io/f/xrgvpkzw", ...);
   ```

---

## Deploy to Vercel

### Step 1 — Push to GitHub

```bash
# From the portfolio folder
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2 — Import on Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `portfolio` repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site goes live at `https://your-project.vercel.app`

### Step 3 — Custom Domain (Optional)

1. In your Vercel project → **Settings** → **Domains**
2. Add your domain (e.g. `bhavani.dev`)
3. Add the DNS records Vercel provides to your domain registrar
4. Wait ~5 minutes → your site is live on your custom domain with HTTPS

---

## Customization

| What to change      | Where                        |
|---------------------|------------------------------|
| Name / contact info | `components/Hero.tsx`, `components/Contact.tsx` |
| Projects            | `components/Projects.tsx` — edit the `projects` array |
| Skills              | `components/Skills.tsx` — edit the `skillGroups` array |
| Timeline / certs    | `components/Experience.tsx`  |
| Accent color        | `tailwind.config.ts` → `accent` color |
| SEO metadata        | `app/layout.tsx` → `metadata` object |
| Profile photo       | Add `public/photo.jpg`, import in `Hero.tsx` |

---

## Performance & SEO

- Server-side rendered with Next.js App Router
- OG metadata set in `app/layout.tsx`
- Google Fonts loaded via `next/font` (zero layout shift)
- Images: use `next/image` for any photos added later
- Lighthouse score target: 95+ on Performance, Accessibility, SEO

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Contact Form**: Formspree
- **Deployment**: Vercel
- **Fonts**: Inter (Google Fonts via next/font)
