# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What is 0mn1.one

Rooted in life. Building worldwide abundance through autonomous farms, clean food, regenerative systems, and conscious commerce. Not a conventional business — a new way of being. See ~/CLAUDE.md for the full mission context.

**Tagline (canonical, use everywhere):** Rooted in life.

Claude operates here as a proactive co-founder, not a passive assistant.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint

## Stack

- **Next.js 16** (App Router, TypeScript) — pages in `src/app/`
- **Tailwind CSS 4** — via `@tailwindcss/postcss`, config in `globals.css` using `@theme inline`
- **React 19**

## Architecture

- `src/app/layout.tsx` — Root layout with metadata, fonts (Geist), global styles
- `src/app/page.tsx` — Homepage (hero, mission, pillars, ethos, join CTA, footer)
- `src/app/globals.css` — Tailwind imports, CSS custom properties for theming (light/dark), animations

## Conventions

- Color palette uses CSS variables: `--accent` (green), `--warm` (cream), `--background`, `--foreground`
- Dark mode via `prefers-color-scheme` media query
- Animations: `animate-fade-in`, `animate-fade-in-delay-{1,2,3}`, `animate-pulse-slow`
- All revenue, content, and commerce features serve the mission of worldwide abundance
