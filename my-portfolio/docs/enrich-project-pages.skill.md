---
name: enrich-project-pages
description: >
  Enrich the portfolio's per-project detail pages with accurate, vivid content
  pulled from each project's real source repo. Use when continuing work on
  Ryan Chen's portfolio project showcase pages (/projects/:slug).
---

# Skill: Enrich project detail pages from real source

## Goal

Each portfolio project has a detail page at `/projects/:slug`, driven by
`src/data/projects.ts`. The current `overview`/`highlights` were written from
memory, not the actual code. This task replaces them with accurate, specific,
human-sounding content drawn from each project's real repository, and wires up
real `repoUrl`/`demoUrl` links.

## Where things are

- Portfolio app: `/Users/hao/Desktop/MyWebSite/my-portfolio` (git root one level up).
- Data to edit: `src/data/projects.ts` (the `projects: Project[]` array).
- Detail page renderer: `src/pages/ProjectDetail.tsx` (+ `ProjectDetail.css`).
- Project → source repo mapping: see `docs/HANDOVER.md` (table). Summary:
  - `vancouver-land-value` → `/Users/hao/Desktop/BigData/cmpt733_project/cmpt733-final-project` (SFU Enterprise remote; branch `rc-dataVisualize`)
  - `microservices-game-backend` → `/Users/hao/Desktop/BigData/cmpt756_project/cmpt756-final-project` (github.com/HaoC916/Microservices-Game-Backend)
  - `reddit-sentiment-analysis` → `/Users/hao/Desktop/BigData/2025-Canada-Election-Sentimen` (github.com/HaoC916/2025-Canada-Election-Sentimen)
  - `course-planner` → `/Users/hao/Desktop/SFU/2024/cmpt213/CMPT213_A5_CoursePlanner_RyanChen` (no git remote locally — ask Ryan)

## Steps

1. **Sync each source repo** before reading (repos may be behind / have local
   edits). For each git-backed project:
   ```bash
   git -C <local-path> status        # check for uncommitted work first
   git -C <local-path> pull --ff-only   # or fetch + review if dirty
   ```
   Do NOT discard Ryan's uncommitted changes — if a repo is dirty, review/stash
   with care or ask before pulling. `course-planner` is local-only (read in place).

2. **Read each repo** to extract the truth: `README.md`, `docs/`, entry points
   (`app.py`, `src/`, `frontend/`, `infra/`, `build.gradle`, etc.), and any
   reports/notebooks. Note: real architecture, what was actually built, concrete
   numbers, the actual tech stack, and any live demo / repo URL.

3. **Update `src/data/projects.ts`** for each project:
   - `overview[]` — 2–4 short paragraphs, accurate and specific to the repo.
   - `highlights[]` — concrete, verifiable bullets (real numbers/tech).
   - `tags[]` — match the real stack.
   - `repoUrl` / `demoUrl` — set when a public link exists (buttons auto-render).
   - Keep the `Project` type/shape unchanged; keep slugs stable (they're URLs).

4. **Build & verify:**
   ```bash
   cd /Users/hao/Desktop/MyWebSite/my-portfolio && npm run build && npm run lint
   ```
   Optionally preview and click through `/projects/<slug>` for each project.

5. **Ship:** commit on `main` and `git -C /Users/hao/Desktop/MyWebSite push origin main`
   (only when Ryan asks). Deploy is automatic on push.

## Voice & constraints

- Write like a person, not a brochure: specific, a little dry-humored, no
  buzzword soup. Match the existing tone in `src/data/projects.ts`.
- **Never fabricate** metrics, links, or features — if it's not in the repo or
  confirmed by Ryan, leave it out.
- Keep the light theme and existing component/CSS patterns; don't add UI deps.
- The SFU Enterprise repo (`vancouver-land-value`) may need Ryan's access/auth to
  pull; if it fails, read the local copy as-is and confirm details with him.

## Nice-to-have extensions (ask first)

- A screenshots/gallery section on the detail page (needs an image asset folder,
  e.g. `src/assets/projects/<slug>/`, and an `images?: string[]` field).
- A "next project" link at the bottom of each detail page.
