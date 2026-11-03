# Advantages of Age — website

A multi-page React website for Advantages of Age, styled to the AoA Living Brand
System v4 (Designed to Evolve, Oct 2026): League Spartan headlines, Inter body,
cream / deep purple / turquoise / coral / yellow, flat surfaces and no decorative
animation. The homepage follows the brandbook's "Website in action" concept.
All copy is carried over from the current DirectoryUp site.

Accessibility choices against the brandbook's contrast table: primary buttons are
turquoise with purple text (white on turquoise fails), coral headline words on cream
use `--coral-ink` (#E5502F), and text on the coral band uses `--plum-deep`.

## Open it

Double-click `index.html` — the site is already built (`js/app.js`) and works
straight from the folder, no server needed. Fonts and images are all local.

## Pages

Built to the proposed sitemap (Studio KAIL, Oct 2026). Main menu:
Directory · What's On · Magazine · About · Membership, plus Log in / Join Free.

| File | Page |
| --- | --- |
| `index.html` | Home (7 sections) |
| `directory.html?type=all\|members\|organisations` | Directory with tabs |
| `profile.html?id=<slug>` | Member / organisation listing (e.g. `?id=rose-rouse`) |
| `events.html` | What's On: events & activities (holding content until `EVENTS` in `data.js` has entries) |
| `awards.html` | AofA Awards |
| `conference.html` | AofA Conference: recap + register interest |
| `resource-hub.html` | Resource Hub. Hidden from the menu until `SHOW_RESOURCE_HUB` is `true` |
| `about.html` (`#press`) | About, with Press & partnerships |
| `contact.html` | Contact (under About) |
| `join.html` (`#ambassador`, `#organisations`, `#faq`) | Membership plans + FAQ |
| `signup.html?plan=<plan>` | Create account (`individuals`, `ambassador`, `not-for-profit`, `for-profit`) |
| `login.html` / `reset-password.html` | Log in / password retrieval |
| `privacy.html` / `terms.html` / `accessibility.html` | Legal pages |
| `404.html` | Page not found |
| `members.html`, `organisations.html`, `search.html` | Retired: redirect to `directory.html` |

The menu and footer links live in `NAV` and `FOOTER` in `src/data.js`. Page titles
and redirects are in `scripts/pages.mjs`.

## Editing

- **Copy and listings:** `src/data.js` (members, organisations, articles, plans, FAQs…)
- **Legal text:** `src/legal.js`
- **Layout / components:** `src/components.jsx` and `src/pages/*.jsx`
- **Styles and brand tokens:** `css/styles.css` (colours and fonts are at the top)
- **Images:** `assets/img` (brandbook photography in `assets/img/brand`), logos in `assets/logo`

After editing anything in `src/`, rebuild:

```
npm install
npm run build      # regenerates the .html files and js/app.js
npm run dev        # live-rebuilding preview at http://localhost:8080
```

## Not wired up yet

Forms (sign-up, login, contact, newsletter, "Send message") validate and show a
confirmation, but don't send anywhere — connect them to the membership platform,
Substack or a form service before going live.
