# Advantages of Age — website

A multi-page React website for Advantages of Age, built to the Sept 2026 rebrand
(Warm / Human palette, DM Serif Display + DM Sans). All copy is carried over from
the current DirectoryUp site.

## Open it

Double-click `index.html` — the site is already built (`js/app.js`) and works
straight from the folder, no server needed. Fonts and images are all local.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `members.html` | Search AofA Members (Individual & Ambassadors directory) |
| `organisations.html` | Search Organisations |
| `search.html` | Full member directory ("View all") |
| `profile.html?id=<slug>` | Member / organisation listing (e.g. `?id=rose-rouse`) |
| `events.html` | Upcoming Events & Activities |
| `resource-hub.html` | Resource Hub |
| `about.html` | About Us |
| `join.html` | Membership plans + FAQ |
| `signup.html?plan=<plan>` | Create account (`individuals`, `ambassador`, `not-for-profit`, `for-profit`) |
| `login.html` / `reset-password.html` | Member login / password retrieval |
| `contact.html` | Contact Us |
| `privacy.html` / `terms.html` | Privacy Policy / Terms of Use |

## Editing

- **Copy and listings:** `src/data.js` (members, organisations, articles, plans, FAQs…)
- **Legal text:** `src/legal.js`
- **Layout / components:** `src/components.jsx` and `src/pages/*.jsx`
- **Styles and brand tokens:** `css/styles.css` (colours and fonts are at the top)
- **Images:** `assets/img`, logos in `assets/logo`

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
