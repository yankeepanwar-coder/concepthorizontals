# Concept Horizontals — Website

A multi-page static website. No frameworks, no build tools — every file is readable and editable.

## What each file does

| File | Purpose |
|---|---|
| `index.html` | Home page (hero, proof strip, services overview, audience, CTA) |
| `services.html` | The five service pillars + engagement model |
| `insights.html` | Article listing page |
| `article-outcome-equation.html` | The launch article (condensed — see note inside to paste your full version) |
| `about.html` | Firm story, How We Think, 7P Philosophy |
| `contact.html` | Contact form + direct channels |
| `css/styles.css` | All design: colors, fonts, layout (one file for the whole site) |
| `js/main.js` | One small script: opens/closes the menu on phones |
| `assets/` | Put your logo SVG/PNG files here when you want to swap in the real wordmark |

## How to view it on your MacBook

1. Unzip the folder (double-click the zip).
2. Open the folder, then double-click `index.html` — it opens in Safari/Chrome.
3. Click through all pages. Resize the window narrow to see the mobile view.

## Three things to update before going live

1. **Email** — `contact.html` uses `hello@concepthorizontals.com` as a placeholder. Set up your real domain email and replace it.
2. **LinkedIn links** — every page's footer and the contact page have `href="#"` placeholders. Replace `#` with your LinkedIn profile URL.
3. **Contact form** — sign up free at formspree.io, create a form, and replace `YOUR_FORM_ID` in `contact.html`. Until then the form displays but doesn't send.

Optional: replace the condensed Outcome Equation article with your full 3,500-word version — markers inside `article-outcome-equation.html` show exactly where.

## Going live on concepthorizontals.com

1. Create a free GitHub account and upload this folder as a repository (Claude Code can do this for you).
2. Sign up free at netlify.com or vercel.com and connect the repository — the site goes live on a temporary URL in about a minute.
3. In Netlify/Vercel's domain settings, add `concepthorizontals.com` and follow their DNS instructions at your domain registrar.

Hosting cost for this site: ₹0.
