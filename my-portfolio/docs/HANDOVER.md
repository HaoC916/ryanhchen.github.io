# Portfolio — Handover & Summary

Context handover so a fresh session/agent can continue without the prior chat history.

## What this is

Ryan Chen's personal portfolio — **Vite + React 19 + TypeScript**, plain
per-component CSS (no UI framework), light theme. Deployed to **GitHub Pages**
on the custom domain **ryanhchen.com**.

- **Git repo root (work here):** `/Users/hao/Desktop/MyWebSite` — branch `main`.
- **App lives in:** `/Users/hao/Desktop/MyWebSite/my-portfolio`
- **Deploy:** `.github/workflows/deploy.yml` runs on every push to `main` →
  `npm ci && npm run build` inside `my-portfolio/` → publishes `dist/` to Pages.
- **State at handover:** `main` == `origin/main` == `48ad55a` (fully pushed & in sync).
- Note: there is a Claude Code worktree under
  `.claude/worktrees/peaceful-bouman-407fac` — ignore it; work in the main checkout.

## Run / build / deploy

```bash
cd /Users/hao/Desktop/MyWebSite/my-portfolio
npm install        # first time
npm run dev        # local dev (http://localhost:5173)
npm run build      # tsc -b && vite build  (also emits dist/404.html)
npm run lint       # eslint — keep this clean
# deploy: commit to main, then:  git -C /Users/hao/Desktop/MyWebSite push origin main
```

## Architecture

- **Routing:** React Router v7 (`BrowserRouter` in `src/main.tsx`).
  - `/` → `src/pages/Home.tsx` (the one-page portfolio)
  - `/projects/:slug` → `src/pages/ProjectDetail.tsx`
  - GitHub Pages deep links work because `vite.config.ts` copies
    `dist/index.html` → `dist/404.html` (SPA fallback).
- **Project data (single source of truth):** `src/data/projects.ts`
  (`Project` type with `slug`, `title`, `period`, `category`, `tone`, `blurb`,
  `highlights[]`, `tags[]`, `overview[]`, optional `repoUrl`/`demoUrl`).
- **Sections (Home):** `Navbar`, `Intro` (the "Hello" splash), `Hero`,
  `Stack` (tilt-on-scroll marquee), `Projects` (Experience timeline +
  Projects card grid), `Contact`.
- **Shared bits:** `components/Reveal.tsx` (scroll-reveal), `components/Tags.tsx`,
  `.title-shine` (breathing gradient headline, in `index.css`).
- **Nav:** Stack / Work (`#work`) / Projects (`#projects` sub-group) / Contact.
  Returning from a detail page sets a one-shot `sessionStorage('returnTo')` flag
  so Home skips the intro and scrolls to the right section; fresh loads play the
  intro and start at the top (`history.scrollRestoration = 'manual'`).
- **Perf note:** avoid `backdrop-filter` on many/animated elements (it caused
  scroll jank earlier). The marquee and cards use plain translucent backgrounds.

## The four showcased projects — where the real source lives

These power the cards and detail pages. To write accurate detail content, **pull
the latest and read the real repos** (see the skill doc). Mapping by `slug`:

| slug | local path | remote | notes |
|---|---|---|---|
| `vancouver-land-value` | `/Users/hao/Desktop/BigData/cmpt733_project/cmpt733-final-project` | `git@github.sfu.ca:cla429/cmpt733-property-value-prediction-system.git` (SFU Enterprise) | on branch `rc-dataVisualize`, has uncommitted changes |
| `microservices-game-backend` | `/Users/hao/Desktop/BigData/cmpt756_project/cmpt756-final-project` | `https://github.com/HaoC916/Microservices-Game-Backend.git` | `main`, clean. Godot game + Nakama + telemetry + infra/loadtest |
| `reddit-sentiment-analysis` | `/Users/hao/Desktop/BigData/2025-Canada-Election-Sentimen` | `https://github.com/HaoC916/2025-Canada-Election-Sentimen.git` | `main`, 1 uncommitted file |
| `course-planner` | `/Users/hao/Desktop/SFU/2024/cmpt213/CMPT213_A5_CoursePlanner_RyanChen` | **none (not a git repo locally)** | Gradle **Spring Boot** (Java). Ask Ryan for the GitHub repo if one exists |

(Each repo may have local uncommitted changes — `git stash`/review before pulling.)

## What the last session did

Built the **per-project detail pages** end to end:
- Added React Router + the two routes + the 404.html fallback.
- Moved project data into `src/data/projects.ts` with slugs + `overview`.
- Made project cards link to `/projects/:slug` (with a "View project →" CTA).
- Built `ProjectDetail` (category chip, gradient title, blurb, Overview,
  Highlights, Tech stack, optional Code/Demo buttons, back-to-projects).
- Per-page `<title>`; extracted shared `Tags`; fixed a glow layout bug.

Before that, the session also did: the "Hello" intro, big hero, tilt marquee
(Express.js + React Native added), frosted gradient navbar, breathing gradient
titles, the Contact section (email/GitHub/LinkedIn cards + availability + "Say
hello"), continuous page gradient, mobile responsiveness, and perf fixes.

## Open follow-ups

1. **Enrich each project's detail page from the real source repos** — see
   `docs/enrich-project-pages.skill.md`. The current `overview` copy is written
   from memory of the cards, not the actual code.
2. Add **`repoUrl` / `demoUrl`** per project in `src/data/projects.ts` → the
   Code / Live demo buttons appear automatically. (Course Planner has no remote
   yet — confirm with Ryan.)
3. Optional: add **screenshots/images** to detail pages (no asset pipeline yet).
4. The two experience entries in `Projects.tsx` are generic — Ryan may want the
   real company (current full-stack co-op) and specifics.
