# Deployment Guide — VastuSakhhi

This guide covers pushing the project to GitHub, deploying it on Vercel,
connecting a custom domain, and getting the site indexed by Google.

---

## 1. Push to GitHub

```bash
cd vastusakhhi
git init
git add .
git commit -m "Initial commit: VastuSakhhi website"
```

Create a new empty repository on GitHub (no README/license, since you
already have one), then:

```bash
git remote add origin https://github.com/<your-username>/vastusakhhi.git
git branch -M main
git push -u origin main
```

---

## 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. Click **Add New → Project**.
3. Import the `vastusakhhi` repository.
4. Framework Preset: Vercel will auto-detect **Next.js** — leave defaults.
5. Click **Deploy**.

After a couple of minutes you'll get a live URL like
`https://vastusakhhi.vercel.app`.

### Environment variables (optional, for contact form emails)

The contact form currently logs submissions to the server console
(`src/app/api/contact/route.ts`). To actually **email** submissions to
`ambuskarpornima@gmail.com`, the simplest option is
[Resend](https://resend.com) (free tier available):

1. Sign up at resend.com and verify a sending domain (or use their test domain to start).
2. Get an API key.
3. In Vercel: **Project → Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = your key
4. Install the SDK: `npm install resend`
5. In `src/app/api/contact/route.ts`, replace the `// TODO` line with:

   ```ts
   import { Resend } from "resend";
   const resend = new Resend(process.env.RESEND_API_KEY);

   await resend.emails.send({
     from: "VastuSakhhi Website <onboarding@resend.dev>",
     to: "ambuskarpornima@gmail.com",
     subject: `New enquiry from ${name}`,
     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
   });
   ```

6. Redeploy.

Until this is wired up, the form still validates correctly and shows a
success message — you'll just want to check the Vercel function logs, or
simply rely on the direct Call / WhatsApp / Email links, until email
delivery is connected.

---

## 3. Connect Your Custom Domain

Assuming you own (or will buy) a domain such as `vastusakhhi.com`:

1. In the Vercel project: **Settings → Domains → Add**.
2. Enter `vastusakhhi.com` (and optionally `www.vastusakhhi.com`).
3. Vercel will show DNS records to add at your domain registrar (GoDaddy,
   Namecheap, BigRock, Google Domains, etc.):
   - For the root domain: an **A record** pointing to `76.76.21.21`
   - For `www`: a **CNAME record** pointing to `cname.vercel-dns.com`
4. Add those records in your registrar's DNS settings panel.
5. Wait for DNS propagation (usually a few minutes, can take up to 24–48
   hours). Vercel will show a green checkmark once it's verified and will
   auto-provision a free SSL certificate.
6. Set your preferred domain (e.g. redirect `www` → root, or vice versa)
   under **Settings → Domains**.

### Update the site config

Once your final domain is live, update `siteConfig.url` in
`src/lib/constants.ts` to match exactly (this powers canonical URLs,
Open Graph tags, sitemap, and robots.txt):

```ts
url: "https://vastusakhhi.com",
```

Then commit, push, and Vercel will redeploy automatically.

---

## 4. Google Search Console & Indexing

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** → choose **URL prefix** → enter
   `https://vastusakhhi.com`.
3. Verify ownership — the easiest method with Vercel:
   - Choose the **HTML tag** verification method.
   - Copy the `content="..."` value from the meta tag Google gives you.
   - Add it to `src/app/layout.tsx` inside the `metadata` object:
     ```ts
     verification: {
       google: "your-verification-code-here",
     },
     ```
   - Commit, push, redeploy, then click **Verify** in Search Console.
4. Once verified, go to **Sitemaps** in the left sidebar, and submit:
   ```
   https://vastusakhhi.com/sitemap.xml
   ```
5. Use **URL Inspection** on your homepage, certifications, and contact
   URLs, and click **Request Indexing** for each to speed things up.

The site already ships with:
- `robots.txt` at `/robots.txt` (auto-generated, allows all crawlers, points to the sitemap)
- `sitemap.xml` at `/sitemap.xml` (auto-generated, lists all 3 pages)
- Open Graph + Twitter Card metadata on every page
- JSON-LD `ProfessionalService` and `Person` structured data describing
  Pournima, her training, and her services — this helps Google understand
  the business and can surface rich results

### Bing (optional but easy)

Bing Webmaster Tools lets you **import your Google Search Console
property directly** — go to
[bing.com/webmasters](https://www.bing.com/webmasters), sign in, and use
"Import from Google Search Console" to save time.

---

## 5. Performance & Accessibility Checklist (already implemented)

- Images use `next/image` with responsive `sizes` and lazy loading (except the priority hero image)
- Fonts loaded via `next/font` (self-hosted, no render-blocking external requests)
- Semantic landmarks (`header`, `main`, `footer`, `nav`) and a skip-to-content link
- Visible keyboard focus states on all interactive elements
- Color contrast checked against the navy/gold/cream palette
- Mobile-first responsive layout, tested from 360px width upward

Run a quick audit any time with:

```bash
npm run build && npm run start
```

then open Chrome DevTools → Lighthouse, and generate a report.

---

## 6. Ongoing Content Updates

- **Add/remove a service** → edit the `services` array in `src/lib/constants.ts`
- **Add a new certificate** → drop the image in `public/images/`, add an entry to the `certificates` array
- **Change phone/email** → edit `contactInfo` in `src/lib/constants.ts` (updates footer, contact page, WhatsApp link, and JSON-LD automatically)
- **Change site description/keywords** → edit `siteConfig` in the same file
