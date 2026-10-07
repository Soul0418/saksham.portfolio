# Portfolio customization guide

This is the Magic UI portfolio template, kept on its original design and section layout. Personal content lives in one place: `src/data/resume.tsx`.

## Content to personalize

- **Intro / hero:** `name`, `initials`, `description`, `avatarUrl`, `location`
- **About:** `summary` (supports Markdown links)
- **Skills:** `skills`
- **Experience:** `work`
- **Education:** `education`
- **Projects:** `projects`
- **Hackathons / events:** `hackathons`
- **Contact and social links:** `contact`

As you provide details, update the matching section in `src/data/resume.tsx`. Replace remaining sample content and assets before publishing. The existing `/blog` section is part of the template too.

## Run locally

Install dependencies with `pnpm install`, then run `pnpm dev` and open the local URL printed by Next.js.
