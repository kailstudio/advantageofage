// Generates one .html file per page. Run: npm run pages
import { writeFileSync } from "node:fs";

const PAGES = [
  ["index", "home", "Advantages of Age — Rethink Ageing. Join the Movement.", "A warm creative community and discovery platform for people and organisations 50+."],
  ["members", "members", "AofA Members — Individual & Ambassadors Directory | Advantages of Age", "Search AofA members and ambassadors."],
  ["organisations", "organisations", "Organisations Directory | Advantages of Age", "Search organisations working with the 50+ community."],
  ["search", "search", "Member Directory | Advantages of Age", "Search people and organisations in the Advantages of Age directory."],
  ["events", "events", "Upcoming Events & Activities | Advantages of Age", "Find events and activities for the 50+ community."],
  ["resource-hub", "resource-hub", "Resource Hub | Advantages of Age", "Practical guides and recommended services."],
  ["profile", "profile", "Listing | Advantages of Age", "Member and organisation listing."],
  ["about", "about", "About Us — Advantages of Age", "Rethinking ageing since 2016. Meet the founders, Suzanne Noble and Rose Rouse."],
  ["join", "join", "Membership Plans for the 50+ Community | Advantages of Age", "Three ways to be part of the movement."],
  ["signup", "signup", "Create Account — Join Advantages of Age", "Create your Advantages of Age account."],
  ["login", "login", "Login — Advantages of Age", "Member login."],
  ["reset-password", "reset-password", "Password Retrieval — Advantages of Age", "Reset your password."],
  ["contact", "contact", "Contact Us — Advantages of Age", "We'd love to hear from you."],
  ["privacy", "privacy", "Privacy Policy — Advantages of Age", "Privacy Policy."],
  ["terms", "terms", "Terms of Use — Advantages of Age", "Terms of Use."],
];

for (const [file, page, title, desc] of PAGES) {
  writeFileSync(`${file}.html`, `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta name="theme-color" content="#22BCB8">
  <link rel="icon" type="image/png" href="assets/logo/badge-turquoise.png">
  <link rel="preload" href="assets/fonts/dm-serif-display-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
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
console.log(`Wrote ${PAGES.length} pages`);
