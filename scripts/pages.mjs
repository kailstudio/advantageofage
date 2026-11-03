// Generates one .html file per page, plus redirects for retired URLs. Run: npm run pages
import { writeFileSync } from "node:fs";

// [file, data-page, <title>, meta description]
const PAGES = [
  ["index", "home", "Advantages of Age — Rethink Ageing. Join the Movement.", "A warm creative community and discovery platform for people and organisations 50+."],
  ["directory", "directory", "Directory — Members, Ambassadors & Organisations | Advantages of Age", "Search people and organisations in the Advantages of Age directory."],
  ["profile", "profile", "Listing | Advantages of Age", "Member and organisation listing."],
  ["events", "events", "What's On — Events & Activities | Advantages of Age", "Events, activities and flagship moments for the 50+ community."],
  ["awards", "awards", "Advantages of Age Awards", "Celebrating the people and organisations challenging outdated ideas about ageing."],
  ["conference", "conference", "AofA Conference | Advantages of Age", "The Advantages of Age Conference — ideas, visibility and collaboration across later life."],
  ["resource-hub", "resource-hub", "Resource Hub | Advantages of Age", "Practical guides and recommended services."],
  ["about", "about", "About Us — Advantages of Age", "Rethinking ageing since 2016. Meet the founders, Suzanne Noble and Rose Rouse."],
  ["contact", "contact", "Contact Us — Advantages of Age", "We'd love to hear from you."],
  ["join", "join", "Membership Plans for the 50+ Community | Advantages of Age", "Three ways to be part of the movement."],
  ["signup", "signup", "Create Account — Join Advantages of Age", "Create your Advantages of Age account."],
  ["login", "login", "Log in — Advantages of Age", "Member login."],
  ["reset-password", "reset-password", "Password Retrieval — Advantages of Age", "Reset your password."],
  ["privacy", "privacy", "Privacy Policy — Advantages of Age", "Privacy Policy."],
  ["terms", "terms", "Terms of Use — Advantages of Age", "Terms of Use."],
  ["accessibility", "accessibility", "Accessibility Statement — Advantages of Age", "How we make this website accessible, and how to tell us about a problem."],
  ["404", "404", "Page Not Found — Advantages of Age", "We can't find that page."],
];

// Retired pages → where they now live (search terms and #anchors are carried over)
const REDIRECTS = [
  ["members", "directory.html?type=members"],
  ["organisations", "directory.html?type=organisations"],
  ["search", "directory.html?type=all"],
];

for (const [file, page, title, desc] of PAGES) {
  writeFileSync(`${file}.html`, `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${desc}">${page === "404" ? '\n  <meta name="robots" content="noindex">' : ""}
  <meta name="theme-color" content="#22BCB8">
  <link rel="icon" type="image/png" href="assets/logo/badge-turquoise.png">
  <link rel="preload" href="assets/fonts/league-spartan-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="css/fonts.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body data-page="${page}">
  <div id="root"></div>
  <noscript><p style="padding:24px">Please enable JavaScript to view this website.</p></noscript>
  <script src="js/app.js"></script>
</body>
</html>
`);
}

for (const [file, to] of REDIRECTS) {
  writeFileSync(`${file}.html`, `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <title>This page has moved — Advantages of Age</title>
  <meta name="robots" content="noindex">
  <meta http-equiv="refresh" content="0; url=${to}">
  <script>location.replace(${JSON.stringify(to)} + location.search.replace(/^\\?/, "&") + location.hash);</script>
</head>
<body>
  <p>This page has moved to <a href="${to}">the Directory</a>.</p>
</body>
</html>
`);
}
console.log(`Wrote ${PAGES.length} pages and ${REDIRECTS.length} redirects`);
