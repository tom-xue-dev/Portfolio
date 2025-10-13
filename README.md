## Self Introduction Portfolio (Next.js 14 + Tailwind)

Production-ready personal site inspired by `rahman-tamim-portfolio` design cues and tailored for `tom-xue-dev` projects.

### Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

### Local Development
```bash
npm install
npm run dev
# open http://localhost:3000
```

### Configuration
- Update `metadataBase` and links in `app/layout.tsx`, `public/robots.txt`, and `app/sitemap.ts` with your actual domain once deployed.
- Replace `mailto:` link in `app/page.tsx`.
- Projects auto-fetch from `https://api.github.com/users/tom-xue-dev/repos` with ISR hourly.

### Deploy to Vercel
1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Framework preset: Next.js. No extra env vars required.
4. Set production domain in Vercel; update `metadataBase` accordingly.

### Customization
- Edit content in `app/page.tsx` (hero/about/contact).
- Add custom components in `components/` and styles in `app/globals.css`.



