# Akhila Nair - Living Systems Portfolio

Static Astro portfolio for Akhila Nair, focused on cloud reliability, platform engineering, and AI-assisted operations.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
```

The site is designed for GitHub Pages via `.github/workflows/deploy.yml`.

## Analytics

The site includes optional PostHog tracking. It is disabled unless these GitHub repository variables are set:

- `PUBLIC_POSTHOG_KEY` — PostHog project API key
- `PUBLIC_POSTHOG_HOST` — PostHog host, for example `https://us.i.posthog.com`

Tracked events avoid form contents and personal message text. They cover page views, résumé downloads, case-study opens, contact starts, and outbound clicks to LinkedIn, Medium, and GitHub.
