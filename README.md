# LottoIQ Blog (Eleventy)

Static blog, built with [Eleventy (11ty)](https://www.11ty.dev/), meant to live inside the
`lottoiq-public` repo alongside the rest of the marketing site. Deploys as a static site — no
server, no database, no CMS to maintain.

## Local setup

```
npm install
npm run build     # one-off build → _site/
npm run serve     # local dev server with live reload
```

## Netlify

`netlify.toml` is already configured:
- Build command: `npm run build`
- Publish directory: `_site`

Point a new (or the existing) Netlify site at this folder/repo and it builds itself on every push.
No manual deploy step.

## Adding a post

Every post is one Markdown file in `src/posts/`. Filename becomes the URL slug, e.g.
`src/posts/how-due-score-actually-works.md` → `/posts/how-due-score-actually-works/`.

Frontmatter schema (see `src/posts/how-due-score-actually-works.md` for a working example):

```yaml
---
layout: post.njk
title: How Due Score Actually Works
date: 2026-09-24
category: Due Score              # optional — shows as a small label above the title
image: /images/posts/hero.jpg    # optional — hero image, put the file in src/images/posts/
imageAlt: Alt text for the image
excerpt: One or two sentences shown on the blog index card.
honestPart: >                    # optional — renders in a highlighted callout box
  <p>The plain-language caveat/disclaimer for this specific post.</p>
---

Body content in Markdown goes here.
```

The footer disclaimer and the per-post "informational purposes only" line render automatically on
every post — you don't need to add them yourself. `honestPart` is for the post-specific honesty
note the style guide calls for (separate from the standing legal disclaimer).

## Images

Drop post images into `src/images/posts/` and reference them as `/images/posts/filename.jpg` in
frontmatter or body Markdown. They're copied through to the build untouched.

## What's still to do

- [ ] Replace the sample post with the 24 real posts (14 published + 10 currently-scheduled on Wix)
- [ ] Drop in the real hero images (Cliff has local copies)
- [ ] Point the Netlify site at this repo/folder and confirm the build
- [ ] QC pass on every migrated post before linking it from the live nav
