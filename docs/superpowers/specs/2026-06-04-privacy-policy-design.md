# Privacy Policy Page — Design Spec

**Date:** 2026-06-04  
**Status:** Approved

## Summary

Add a standalone `/privacy-policy` subpage. Accessible by direct URL only — no navigation links from the menu or profile card. English only. Content is a placeholder to be replaced with user-provided markdown.

## Route

`/privacy-policy` → `src/app/privacy-policy/page.tsx`

## Layout

- Full-screen centered layout matching existing pages: `w-screen h-screen flex justify-center items-center bg-light dark:bg-dark`
- Card: `max-w-2xl`, `overflow-y-auto`, `max-h-[80vh]` using existing DaisyUI card classes
- Dark/light mode works automatically via existing Tailwind theme tokens
- `"use client"` directive (consistent with other pages)

## Content (Placeholder)

- Small `← Back` link at the top pointing to `/`
- `<h1>` heading: "Privacy Policy"
- Placeholder paragraph noting content will be added

## Internationalization

None. English only. No `useTranslation` hook.

## Dependencies

No new packages required.

## Out of Scope

- Navigation links (menu, profile card, footer)
- Markdown rendering (user will paste content directly)
- Multiple language support
