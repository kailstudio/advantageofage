// All copy below is carried over from https://launch24766.directoryup.com/
// Edit content here — every page reads from this file.

export const LINKS = {
  magazine: "https://advantagesofage.substack.com/",
  magazineHome: "https://www.advantagesofage.com/",
  facebookGroup: "https://www.facebook.com/groups/advantagesofage/",
  facebook: "https://facebook.com/advantagesofage",
  twitter: "https://twitter.com/advantagesofage",
  linkedin: "https://www.linkedin.com/advantagesofage",
  youtube: "https://youtube.com/@advantagesofage",
  instagram: "https://instagram.com/advantagesofage",
  substack: "https://advantagesofage.substack.com",
  email: "hello@advantagesofage.com",
};

export const NAV = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Search AofA Members", href: "members.html", page: "members" },
  { label: "Search Organisations", href: "organisations.html", page: "organisations" },
  { label: "Events", href: "events.html", page: "events" },
  { label: "About Us", href: "about.html", page: "about" },
  { label: "AofA Magazine", href: LINKS.magazine, external: true },
];

export const FOOTER = {
  about:
    "Advantages of Age challenges ageist stereotypes and rethinks what it means to grow older. Founded by Suzanne Noble and Rose Rouse, it celebrates older people doing life their own way.",
  website: [
    { label: "About Us", href: "about.html" },
    { label: "Events", href: "events.html" },
    { label: "Resource Hub", href: "resource-hub.html" },
    { label: "Search", href: "search.html" },
    { label: "AofA Organisations", href: "organisations.html" },
    { label: "AofA Members", href: "members.html" },
  ],
  support: [
    { label: "Manage Account", href: "login.html" },
    { label: "Reset Password", href: "reset-password.html" },
    { label: "Contact Us", href: "contact.html" },
  ],
};

export const JOIN_FREE = "signup.html?plan=individuals";
export const JOIN_PLANS = "join.html";

/* ------------------------------------------------------------------ HOME */

export const HOME = {
  hero: {
    eyebrow: "Age with attitude",
    title: "Join the movement",
    body:
      "A warm creative community and discovery platform for people and organisations 50+ sharing ideas, information, activities, events and opportunities for a resourced and fun later life.",
    sub: "Whether you're looking for yourself or an organisation, there are various pathways in.",
  },
  pathways: {
    title: "Choose how you take part",
    sub: "Whether you're rethinking ageing for yourself or for an organisation, find your way in.",
    items: [
      { title: "Free Members", body: "Discover people, activities, articles, events, and weekly updates from across the community.", cta: "Join Free", href: JOIN_FREE, tone: "turq" },
      { title: "AofA Ambassadors", body: "Build a profile, be discovered, and host Advantages of Age events.", cta: "Become an Ambassador", href: JOIN_PLANS, tone: "pink" },
      { title: "Not-for-Profit Organisations", body: "List your organisation and activities for an engaged age-positive audience.", cta: "List your Organisation", href: JOIN_PLANS, tone: "lime" },
      { title: "Commercial Organisations", body: "Promote your services, events, or expertise to people 50+ looking for relevant offers.", cta: "List your Organisation", href: JOIN_PLANS, tone: "blue" },
    ],
  },
  how: {
    title: "How it works",
    sub: "Three simple steps to start exploring and being discovered.",
    steps: [
      { n: "01", title: "Join", body: "Sign up free in under a minute. No commitment, no spam." },
      { n: "02", title: "Create profile", body: "Tell us who you are or what you do, and what you're interested in." },
      { n: "03", title: "Discover and connect", body: "Find people, events, and organisations who share your interests." },
    ],
  },
  community: {
    title: "Meet the community",
    sub: "Real people and organisations rethinking ageing on their own terms.",
    featured: ["advantages-of-age-limited", "suzanne-noble", "rose-rouse"],
    excerpts: {
      "advantages-of-age-limited": "Advantages of Age is all about Ageing Differently. The Sunday Times Style...",
      "suzanne-noble": "I host the viral Sex Advice for Seniors podcast (180+ episodes, over 200k followers)...",
      "rose-rouse": "I’m a London-based writer, originally from Yorkshire, and I spend part of...",
    },
  },
  platform: {
    title: "More than a directory",
    sub: "Beyond profiles and listings — events, articles, conversations, and resources for life after fifty.",
    items: [
      { title: "People and organisations", body: "Browse profiles of members, ambassadors, and not-for-profit organisations.", icon: "people" },
      { title: "Activities and events", body: "Find local meetups, talks, performances, and online gatherings.", icon: "calendar" },
      { title: "Magazine articles", body: "Honest, smart writing on ageing, work, sex, health, and grief.", icon: "pen" },
      { title: "Weekly newsletter", body: "A curated round-up of what's on and what's worth reading.", icon: "mail" },
      { title: "Facebook group", body: "Join the conversation in our active community of curious 50+ people.", icon: "chat" },
      { title: "Trusted resources", body: "Practical guides and recommended services from people who've been there.", icon: "book" },
    ],
  },
  moments: {
    title: "Awards and Conference",
    sub: "Two moments that bring the community together to celebrate, challenge, and rethink later life.",
    items: [
      { title: "Advantages of Age Awards", body: "Our awards celebrate the people and organisations challenging outdated ideas about ageing.", img: "assets/img/awards-orange.jpg" },
      { title: "AofA Conference", date: "10 October 2026", body: "Our first conference brings together ideas, visibility, and collaboration across later life.", img: "assets/img/conference-trio.jpg" },
    ],
  },
  why: {
    title: "Why join",
    sub: "A handful of practical reasons to be part of what we're building, free of charge.",
    items: [
      "Be seen and heard later in life.",
      "Find people doing things that interest you.",
      "Discover events, services, and ideas.",
      "Get the AofA newsletter every week.",
      "Support a small social enterprise rethinking ageing.",
      "Free to join, easy to use.",
    ],
  },
  magazine: {
    title: "Fresh from the magazine",
    sub: "Honest writing on ageing, work, sex, health, money, grief, and everything in between.",
  },
  connected: {
    title: "Stay connected",
    body: "Get the weekly newsletter for fresh ideas, and join the conversation in our active Facebook community.",
  },
  final: {
    title: "The best chapters are still unwritten.",
    body: "Join people and organisations 50+ rethinking ageing with purpose, curiosity, and attitude.",
  },
};

export const ARTICLES = [
  { date: "16 Jun 2026", tag: "Performance", title: "Why I Wrote a Play About Ageism", href: "https://www.advantagesofage.com/p/why-i-wrote-a-play-about-ageism" },
  { date: "15 Apr 2025", tag: "Body", title: "My 52-Year-Old Body Carries My Life", href: "https://www.advantagesofage.com/p/my-52-year-old-body-carries-my-life" },
  { date: "14 Jan 2025", tag: "Community", title: "We Made a TV Show with Women 50+ (Because Hollywood Wouldn't)", href: "https://www.advantagesofage.com/p/we-made-a-tv-show-with-women-50-because" },
  { date: "3 Jan 2025", tag: "Manifesto", title: "A Brief Manifesto To Ageing Differently", href: "https://www.advantagesofage.com/p/a-brief-manifesto-to-ageing-differently" },
  { date: "2 Aug 2024", tag: "Identity", title: "I'm Okay with Being Called Old — re-imagining that word", href: "https://www.advantagesofage.com/p/im-okay-with-being-called-old-re" },
  { date: "9 Jul 2024", tag: "Voice", title: "The Joys of Opinionated Older Women", href: "https://www.advantagesofage.com/p/the-joys-of-opinionated-older-women" },
];

export const NEWSLETTER_MODAL = {
  title: "Join the weekly newsletter",
  body: "Fresh ideas, real stories, and what's coming up in the community — straight to your inbox every week. Unsubscribe any time.",
  fine: "By subscribing you agree to receive emails from Advantages of Age. We will never share your email.",
};

/* ------------------------------------------------------------- DIRECTORY */

export const DIRECTORY_SIDEBAR = {
  searchTitle: "Find Members",
  what: "What do you need:",
  where: "Search by location:",
  newsletter: { title: "Join Our Newsletter", cta: "Click to Subscribe" },
  community: {
    title: "Join Our Community",
    steps: ["Register an account", "Create a searchable listing", "Connect with more clients"],
    cta: "Get Listed Today",
  },
  sort: [
    { value: "", label: "Sort Results" },
    { value: "reviews", label: "Sort by Most Reviews" },
    { value: "name-asc", label: "Sort by Name A-Z" },
    { value: "name-desc", label: "Sort by Name Z-A" },
    { value: "last-asc", label: "Sort By Last Name A-Z" },
    { value: "last-desc", label: "Sort By Last Name Z-A" },
  ],
};

// type: "member" | "organisation"
export const LISTINGS = [
  {
    slug: "advantages-of-age-limited",
    type: "organisation",
    name: "Advantages of Age Limited",
    category: "Organisations",
    verified: true,
    img: "assets/logo/badge-turquoise.png",
    logo: true,
    tagline: "Age with Attitude",
    summary:
      "Advantages of Age is all about Ageing Differently. The Sunday Times Style magazine called us 'the punks of getting older,' and we agree. We are Suzanne",
    location: "United Kingdom",
    details: [
      ["Company Name", "Advantages of Age Limited"],
      ["Areas of Expertise", "Ageing well, relationships, death, health, creating community, events"],
    ],
    about: [
      "Advantages of Age is all about Ageing Differently. The Sunday Times Style magazine called us 'the punks of getting older,' and we agree.",
      "We are Suzanne Noble - serial entrepreneur/jazz singer - and Rose Rouse - editor/journalist/poet - and we created Advantages of Age in a hot tub in Kilburn. It is a social enterprise which challenges the media narrative around ageing. We are doing it our way, and we hope you'll join us for the ride. Suzanne lives in warmer climates for three months a year - because she can't stand the drab winters here - and Rose travels between North Wales and London because she's in a Living Together Apart relationship, and it's worth the five-hour drive!",
      "We are demanding a different future for older people in this ageist culture where old has only negative connotations. Last November 2023, we held a dazzling Awards Ceremony celebrating pro-ageing organisations and individuals. We're big on personal inspirational stories - like the magnificent Louise Butcher, 51, who runs topless every day to promote not having to have reconstructive surgery after breast cancer, or Wendy Mitchell, 69. who writes powerfully about living on her own and creatively with dementia or Asanga Judge, 80, who has a serious climbing injury, walks with a stick and still climbs both inside and out. If you've got a story to tell - please get in touch at rosejanerouse@yahoo.co.uk",
      "And we have an anthology out - Sex, Death and Other Inspiring Stories - the Advantages of Age handbook to growing old funkily - which contains so many different voices and stories which we'd love you to read.",
      "We are a positive ageing community, and we hope you enjoy our articles. Some of us are journalists and writers; others are new voices in the positive ageing world. We all have something to say. You do, too.",
      "You can find us at Advantages of Age - Baby Boomers and Beyond on Facebook and @advantagesofage on Instagram.",
      "You can support us by becoming a member. Every paid membership helps us to continue to champion positive ageing in the multitude of ways that we do.",
    ],
    related: ["All Organisations", "Organisations in United Kingdom"],
  },
  {
    slug: "rose-rouse",
    type: "member",
    name: "Rose Rouse",
    company: "Advantages of Age Ltd",
    category: "Individual & Ambassadors",
    verified: true,
    img: "assets/img/rose.jpg",
    summary: "In 2016, I co-founded Advantages of Age, a social enterprise dedicated to challenging media stereotypes around ageing.",
    location: "London, England, NW10 5TT, United Kingdom",
    shortLocation: "London, England, NW10 5TT",
    about: [
      "I’m a London-based writer, originally from Yorkshire, and I spend part of the year in North Wales with my partner, Asanga Judge.",
      "In 2016, I co-founded Advantages of Age, a social enterprise dedicated to challenging media stereotypes around ageing. I write and commission content for the website, edit submissions, and curate our Facebook community. In 2019, my Guardian opinion piece on the use of “Granny” in headlines about older women sparked a significant response and led to a surge in new members joining our community.",
      "In 2020, I received a grant from Brent 2020’s Culture Fund to create the Willesden Junction Poets, culminating in the publication of our poetry collection, BeWILDering.",
      "In 2021, I was awarded funding from Arts Council England to develop Dance Me To Death, a performance created in collaboration with choreographers Rhys Dennis and Waddah Sinada of FUBUNATION, alongside a group of non-professional dancers aged over 60. The piece was staged in Kensal Green Cemetery and is currently being submitted to festivals.",
    ],
    related: ["All Individual & Ambassadors", "Individual & Ambassadors in London", "Individual & Ambassadors in England", "Individual & Ambassadors in United Kingdom"],
  },
  {
    slug: "suzanne-noble",
    type: "member",
    name: "Suzanne Noble",
    company: "Advantages of Age Limited",
    role: "Co-Founder at Advantages of Age Limited",
    category: "Individual & Ambassadors",
    verified: true,
    img: "assets/img/suzanne.jpg",
    summary: "I co-founded Advantages of Age, the social enterprise created to challenge the media narrative around ageing. I host Sex Advice for Seniors.",
    location: "London, England, NW6 4NN, United Kingdom",
    shortLocation: "London, England, NW6 4NN",
    offers: 1,
    about: [
      "I host the viral Sex Advice for Seniors podcast (180+ episodes, over 200k followers) and co-lead Advantages of Age, a social enterprise helping 50+ adults thrive. Featured in The Telegraph, FT, BBC News & Guardian.",
      { h: "What I do:" },
      { h: "Sex Advice for Seniors Podcast", list: [
        "Weekly podcast addressing older adults’ honest questions about sex, intimacy, and relationships",
        "200+ episodes tackling taboo subjects: keeping desire alive, sex toys, lubricants, Viagra, paid companionship",
        "TikTok channel went viral with 500K+ views in first week; now 160k followers",
        "Featured spokesperson for The Sun & Independent on sex over 60 following Emma Thompson’s “Good Luck to You, Leo Grande”",
        "Apple Podcasts’ #1 Sex Advice podcast for seniors",
      ] },
      { h: "Advantages of Age (Social Enterprise)", list: [
        "Not-for-profit mission: challenging the media narrative around ageing",
        "Deliver Startup School for Seniors program (6+ years running)",
        "Transforming ageing narratives into entrepreneurial opportunities",
      ] },
      { h: "Impact & Reach:", list: [
        "Over 200k subscribers across Sex Advice for Seniors channels",
        "10K+ LinkedIn network",
        "Mentored 1,000+ business owners through Startup School for Seniors",
        "200+ podcast episodes published",
      ] },
      { h: "Why I do this:" },
      "Ageism in the workplace and stigma around senior sexuality are two critical issues facing 50+ adults. I’m on a mission to challenge both—helping people stay relevant, employed, and sexually fulfilled throughout their lives. My work proves that you can learn new things at any age, and that goes for sex and business alike.",
      { h: "Media & Recognition:", list: [
        "The Telegraph, FT, BBC News, Guardian features",
        "The Sun & Independent sex over 60 spokesperson",
        "Successfully secured equity investment and grant funding",
      ] },
      { h: "Let’s connect if you:", list: [
        "Are 50+ and want to start or grow a business",
        "Want honest, journalism-grade sex advice for older adults",
        "Offer sponsorship/partnership opportunities for my podcast",
        "Need business mentorship or startup support",
        "Want to collaborate on age-positive content",
      ] },
      { list: [
        "Book a consultation",
        "Listen: Sex Advice for Seniors podcast (Apple, Spotify, all platforms)",
        "Visit: advantagesofage.com",
      ] },
    ],
    related: ["All Individual & Ambassadors", "Individual & Ambassadors in London", "Individual & Ambassadors in England", "Individual & Ambassadors in United Kingdom"],
  },
  {
    slug: "andrew-coombs",
    type: "member",
    name: "Andrew Coombs",
    category: "Individual & Ambassadors",
    summary: "I facilitate dance for everyone and make theatre .",
    about: ["I facilitate dance for everyone and make theatre ."],
  },
  {
    slug: "gilly-hanna",
    type: "member",
    name: "Gilly Hanna",
    category: "Individual & Ambassadors",
    summary: "Dance artist. Storyteller. Filmmaker.",
    location: "London, E1W 2XA",
    tagline: "Do it yourself and have fun",
    details: [["Age Bracket", "60–69"]],
  },
  {
    slug: "helene-corr",
    type: "member",
    name: "Helene Corr",
    category: "Individual & Ambassadors",
    summary: "Mistress of creative crafts & Workshops. Passionate maker, creator and bedazzler. I believe in showing people the joys of making with techniques everyone can learn.",
    location: "Lower Clapton, E5 0AX",
    tagline: "Easily Distracted by All Humans 🥰",
    details: [
      ["Honors & Awards", "Recent finalist in Advantages of Age Style Queen award.\nBA Hons Fine Art St.Martins School of Art"],
      ["Age Bracket", "50–59"],
    ],
    about: [
      "Fix-Up Look Sharp! is my maker's motto. I run creative workshops for children and adults and work hard to make them as sustainable as I can by using landfill items and upcycling. A great example is a regular workshop I run; Bird Plumage Headress. It is a stand alone workshop that runs alongside a very successful family show called Bird Rave.",
      "I use unused and landfill headed COVID visors and the decorations are eclectic and use recycled items . I have run Plumage Headress at the RFH South Bank, & Manchester Museum amongst many other venues.",
      "I have run children's workshops at The Create Place, Bethnal Green for several years alongside children's parties and community events.",
      "I regularly run workshops at festivals including Headress, Funk up your Frames, (Glasses) Ear cuffs, Party ponchos, No Sew Kimono and Shoe and bag upcycling using metallic foils.",
      "My aim is to show people a variety of unusual creative techniques to encourage making and crafting as a relaxing and fun way to express themselves alone or with family and friends.",
      "I am a trained primary school teacher so have great skills with motivation, organisation and ensuring everyone is catered for appropriately.",
      "I have a venue in east London or I can travel.",
    ],
  },
  {
    slug: "joy-everley",
    type: "member",
    name: "Joy Everley",
    category: "Individual & Ambassadors",
    summary: "Jewellery Designer I create origianl pieces in Gold and Silver. All available on my website www.joyeverley,co uk I also any enjoy bespoke commissions, especially remodelling",
    location: "London, NW5 2HG",
    tagline: "The Future is Now",
    details: [["Age Bracket", "70–79"]],
    about: [
      "Jewellery Designer",
      "I create origianl pieces in Gold and Silver. All available on my website www.joyeverley,co uk",
      "I also any enjoy bespoke commissions, especially remodelling old jewellery into new creations.",
    ],
  },
  {
    slug: "justine-gaubert",
    type: "member",
    name: "Justine Gaubert",
    category: "Individual & Ambassadors",
    summary: "Founder of Crone Club in Sheffield (UK). We are on a mission to reclaim crone as a positive identity, and to make menopause and female ageing a club women want to join!",
    location: "Loxley, S6 6SG",
    tagline: "Queen of the Crone-R-age.",
    details: [
      ["Honors & Awards", "Crone Club Sheffield were joint winners of the Advantages of Age Social Club award 🔥\nJustine won Women of Steel award (Sheffield Star) for her contribution to Creativity in Sheffield and beyond."],
      ["Age Bracket", "50–59"],
    ],
    about: [
      "Crone Club is a grassroots movement of menopausal (and post meno) mischief makers in Sheffield and across the world.",
      "We started out as a Facebook Group six years ago, and now grown into a global online membership and in person events in Sheffield.",
      { list: [
        "Reclaiming crone Identity: The club aims to reclaim \"crone\" as a positive identity for older women, moving away from negative definitions like \"ugly old woman\" to signify concentrated wisdom and power.",
        "Combating Fear: Making menopause and getting older a phase of life that women do not feel afraid to join.",
        "Reframing Ageing: It seeks to create an alternative narrative for female ageing, viewing it as a \"third act\" that is exciting, liberating, and positive rather than something to fear.",
        "Fierce Acceptance: Encouraging women to know their worth, trust their intuition, and stop relying on the approval of others.",
        "Concentrated Wisdom: A \"crone\" is viewed not as a negative stereotype, but as a person possessing deep, concentrated wisdom and \"juiciness\".",
        "Combating Invisibility: The club addresses the \"injustice of double standards\" where older women often feel invisible or shamed for ageing compared to men.",
        "Power of Sisterhood and creating community: There is a strong belief that \"crones together can change the world\" and that supporting other women is essential to combating isolation, agism and mysognony.",
        "Creating Community: It provides a space for \"sisterhood and belonging\" to combat loneliness among older women who may be caring for others or working from home.",
      ] },
      { h: "How?" },
      { list: [
        "Online and In-Person Connection and events: The community provides a space for women to connect, share experiences, and support one another. This includes a private Facebook group, Zoom meet-ups, and in-person events in Sheffield such as \"CroneLines\" discos and the Crone Spoken Library. The club has an experiment to connect 1,000 \"kick-ass crones\" from around the world.",
        "Training for Ageing: Helping women physically and mentally prepare for later life through activities like strength training, storytelling, and ritual ceremonies. The club promotes activities like strength training and \"Croning Ceremonies\"—rituals designed to celebrate a woman’s entry into this new stage of life. Sheffield Meet-ups include taster intro'ductions to activities like boxing, strength training, and the Alexander Technique to improve physical and mental well-being.",
        "Media and Storytelling: Justine Gaubert produces the Tits to the Wind Substack newsletter and podcast, which serves as a platform for sharing empowering stories and experiences of older women, in addition to personal humorous (and humiliating) menopause stories and ‘How to be Crone A.F’ training for ageing specials.",
        "Activism: The Crone Club advocates for visibility, encourages the creation of spaces for women to share their voices, and aims to influence culture to recognise age as a privilege.",
      ] },
      { h: "Future Initiatives" },
      { list: [
        "Sheffield as \"Crone Capital of the world\": There are plans to make Sheffield the \"Crone Capital of the World\" through bonkers events that get global attention such as \"La Tour De Crone,\" a massive bike ride for menopausal and post-menopausal women.",
      ] },
      "By fostering sisterhood and providing resources for personal growth, the Crone Club seeks to combat loneliness and ensure women feel seen, cherished, and empowered throughout their ageing journey.",
    ],
  },
  {
    slug: "karen-bayly",
    type: "member",
    name: "Karen Bayly",
    category: "Individual & Ambassadors",
    tagline: "Never give up, never surrender.",
    details: [["Honors & Awards", "Why the US spelling?"], ["Age Bracket", "70–79"]],
  },
  {
    slug: "lindsay-hamilton",
    type: "member",
    name: "Lindsay Hamilton",
    category: "Individual & Ambassadors",
    summary: "Psychotherapist and painter. Live in Spain. Mid 60s.",
    location: "Osuna, 41640",
    details: [["Honors & Awards", "MA (Cantab), UKCP Membership"], ["Age Bracket", "60–69"]],
    about: ["Attachment based Psychoanalytic Psychotherapist"],
  },
  {
    slug: "lucy-wills",
    type: "member",
    name: "Lucy Wills",
    category: "Individual & Ambassadors",
    summary: "Founder: http://www.healthheard.com Designer: http://www.seraglia.com design | UX | systems RSA Fellow #healthcare #couture #ActuallyAutistic",
    location: "Farnham",
    details: [["Age Bracket", "50–59"]],
  },
  {
    slug: "nikki-kenward",
    type: "member",
    name: "Nikki Kenward",
    category: "Individual & Ambassadors",
    summary: "age ignorer, author, therapist, healthcare educator, aerial hoop artist, physical theatre director!",
    location: "Marlow, SL7 1DD",
    tagline: "you're not tired, you're uninspired!!!",
    details: [["Honors & Awards", "MA Directing Circus\nEmerging later life artist A of A\nResident Artist at Brighton Dome"], ["Age Bracket", "70–79"]],
  },
  {
    slug: "susan-ardill",
    type: "member",
    name: "Susan Ardill",
    category: "Individual & Ambassadors",
    location: "Sydney",
    details: [["Age Bracket", "70–79"]],
  },
];

/* ----------------------------------------------------------------- ABOUT */

export const ABOUT = {
  title: "About Advantages of Age",
  eyebrow: "Meet the founders",
  story: {
    eyebrow: "Our story",
    title: "Rethinking ageing since 2016",
    body: [
      "It started, as a lot of good things do, with a conversation between friends — in a hot tub in Kilburn. Suzanne Noble and Rose Rouse had had enough of the way the world was talking about getting older: tired stereotypes, invisibility, and the quiet assumption that fifty marked the beginning of the end.",
      "So they founded Advantages of Age as a social enterprise — a way to demand a different future for older people in an ageist culture, and to build a community where the second half of life is treated as the beginning of something, not the end.",
      "Nearly a decade on, we are writers, activists, entrepreneurs, artists, performers and change-makers — fifty, sixty, seventy, eighty and beyond. We are doing it our way. Come join us.",
    ],
  },
  principles: {
    eyebrow: "What we stand for",
    title: "A different conversation about later life",
    sub: "Four principles that shape everything we do.",
    items: [
      { n: "01", title: "Rethink ageing", body: "Later life is not a slow fade. It is a chapter with more freedom, fewer apologies, and as much creative possibility as you choose to claim." },
      { n: "02", title: "Visibility matters", body: "Older people are routinely written out of mainstream media, advertising and culture. We are louder than that — and we are not waiting for permission." },
      { n: "03", title: "Community over isolation", body: "Friendships, collaboration and shared experience are what make ageing well possible. We build the connections that make life richer." },
      { n: "04", title: "Live (and die) well", body: "From everyday joy to the conversations many would rather avoid, we hold space for the full arc of later life — with humour, honesty and real talk." },
    ],
  },
  founders: {
    eyebrow: "Meet the founders",
    title: "The two women behind it all",
    sub: "Two friends, a hot tub in Kilburn, and a refusal to accept the script.",
    people: [
      {
        name: "Suzanne Noble",
        role: "Co-founder & Company Director",
        img: "assets/img/suzanne-awards.jpg",
        body: [
          "Serial entrepreneur, jazz singer, author and broadcaster — Suzanne has spent her career refusing to accept \"too late\" as an answer to anything.",
          "She hosts the podcast Sex Advice for Seniors, a frank, funny and often startling weekly conversation about intimacy, desire and relationships in later life, and is a regular speaker on what it actually takes to start again at fifty, sixty and beyond.",
          "Suzanne brings the operator's eye to Advantages of Age — the discipline of building a real, sustainable enterprise paired with an instinct for the conversations no one else seems willing to have out loud.",
        ],
      },
      {
        name: "Rose Rouse",
        role: "Co-founder",
        img: "assets/img/rose.jpg",
        body: [
          "Editor, journalist and poet, Rose has spent her writing life pushing at the edges of what later life can look like — and feel like.",
          "She brings the voice of the working journalist to the movement, alongside a deep curiosity about the lived experience of getting older: the surprises, the freedoms, the contradictions, and the stories that rarely make it into the mainstream.",
          "Rose holds the editorial line at Advantages of Age — the writers, the magazine, the long-form pieces — and a clear conviction that the way we tell stories about ageing changes the way we live it.",
        ],
      },
    ],
  },
  what: {
    eyebrow: "What we do",
    title: "A community, a magazine, a movement",
    sub: "Four ways we gather, publish and make noise together.",
    items: [
      { icon: "★", title: "The directory", body: "A place to find and be found. AofA Ambassadors and partner organisations, all listed in one searchable home for the 50+ community." },
      { icon: "◆", title: "Events & gatherings", body: "Workshops, retreats, talks and meet-ups — online and in person, with our members and friends, all over the country and beyond." },
      { icon: "✎", title: "The magazine", body: "Original essays, reportage, interviews and opinion from members and contributors — writing that takes later life seriously, and irreverently." },
      { icon: "♪", title: "Newsletter & podcasts", body: "A weekly Substack from the AofA editorial team, plus podcasts including Suzanne's Sex Advice for Seniors — the conversation in your inbox and in your ears." },
    ],
  },
  cta: {
    title: "Join the movement",
    body: "Whether you are fifty, seventy or somewhere in between, an individual rethinking your next chapter or an organisation working with the 50+ community — there is a place for you here.",
  },
};

/* ------------------------------------------------------------------ JOIN */

export const JOIN = {
  eyebrow: "Choose Your Membership",
  title: "Three ways to be part of the movement",
  tagline: "Rethink ageing. Find your people.",
  body: "Advantages of Age is a vibrant community for people and organisations 50+ — sharing ideas, events, opportunities, and the lived experience of doing life on our own terms. Pick the plan that fits where you are right now. You can always change later.",
  plans: [
    {
      id: "individuals",
      name: "Individuals",
      for: "For the curious",
      price: "Free",
      note: "Always free",
      included: [
        "Browse the AofA community directory",
        "Read articles and member stories",
        "Discover events for the 50+ community",
        "Subscribe to the AofA Substack newsletter",
      ],
      excluded: [
        "A fuller member profile — bio, photos and links",
        "Share your articles and stories",
        "List your own events",
        "Post forum discussions",
        "Share videos and photo albums",
        "Homepage visibility",
        "Featured in the Ambassadors directory",
      ],
      cta: "Join Free",
      href: "signup.html?plan=individuals",
    },
    {
      id: "ambassador",
      name: "AofA Ambassador",
      badge: "Most popular",
      for: "For active members of the movement",
      price: "£6.99",
      per: "/month",
      note: "Cancel anytime",
      included: [
        "Everything in Individuals",
        "A fuller member profile — bio, photos and links",
        "Share your articles and stories",
        "List your own events",
        "Post forum discussions",
        "Post photo albums",
        "Share videos",
        "Share offers and promotions",
        "Homepage visibility",
        "Featured in the Ambassadors directory",
        "Ambassador badge on your profile",
      ],
      cta: "Become an Ambassador",
      href: "signup.html?plan=ambassador",
    },
    {
      id: "organisations",
      name: "Organisations",
      for: "For-profit and not-for-profit welcome",
      toggle: [
        { label: "Not-for-profit", price: "£14.99", cta: "Join as a Not-for-profit", href: "signup.html?plan=not-for-profit" },
        { label: "For-profit", price: "£19.99", cta: "Join as a For-profit", href: "signup.html?plan=for-profit" },
      ],
      per: "/month",
      note: "Cancel anytime",
      included: [
        "Everything in Ambassador",
        "Organisation profile with logo",
        "List services, programmes and locations",
        "Publish events, articles and listings",
        "Post forum discussions",
        "Post photo albums",
        "Share videos",
        "Share offers and promotions",
        "Homepage visibility",
        "Priority placement in directory search",
        "Reach an engaged 50+ audience",
      ],
    },
  ],
  fine: "All prices in GBP. Ambassador and Organisations plans renew monthly until cancelled. Cancel anytime from your account.",
  faqTitle: "Frequently asked questions",
  faqs: [
    ["Who is Advantages of Age for?", "Anyone aged 50 and over who is interested in rethinking what later life can look like. Members, ambassadors, organisations, and the merely curious are all welcome."],
    ["What is included with the free Individuals plan?", "The Individuals plan gives you a space to browse the community, read articles, discover events, and subscribe to the AofA Substack newsletter — no card required."],
    ["What does the AofA Ambassador plan add?", "A fuller member profile with bio, photos and links, the ability to publish your own events, share articles, post forum discussions, photo albums, videos and offers, plus homepage visibility and a featured slot in the Ambassadors directory with an Ambassador badge on your profile."],
    ["Can my organisation join even if we are not-for-profit?", "Yes. The Organisations plan welcomes both. Not-for-profits join at £14.99/month and for-profits at £19.99/month — the features are identical; the two rates simply recognise the difference in budget between charities or community groups and commercial organisations."],
    ["Can I switch plans later?", "Yes — you can upgrade or downgrade at any time from your account dashboard. Your access updates immediately and any pro-rata billing is handled automatically."],
    ["How does cancellation work?", "Ambassador and Organisations plans are billed monthly. Cancel anytime from your dashboard — you will keep full access until the end of your current billing period."],
    ["Is Advantages of Age UK-only?", "We are based in the UK and most of our community and events are here, but anyone aged 50+ from anywhere in the world is welcome to join."],
    ["What happens after I sign up?", "You will get a welcome email with login details and a short walkthrough of how to set up your profile, publish your first piece of content, or list your first event."],
  ],
};

export const SIGNUP = {
  title: "Create Account",
  plans: {
    individuals: "Individuals",
    ambassador: "AofA Ambassador",
    "not-for-profit": "Organisations — Not-for-profit",
    "for-profit": "Organisations — For-profit",
  },
  sub: "Enter Email and Create Password",
  consents: [
    ["By creating an account, you agree to our ", { label: "terms & conditions", href: "terms.html" }],
    ["I understand that personal information I enter on this website will be stored and used to contact me in the future. I can change or remove this information at any time."],
    ["I understand that if I make any purchases on this website, billing information will be securely stored with a 3rd party payment processor. I can change or remove this information at any time."],
  ],
};

/* --------------------------------------------------------------- CONTACT */

export const CONTACT = {
  title: "Get in Touch",
  eyebrow: "We read every message",
  heading: "We'd love to hear from you",
  body: "Whether you are thinking of joining, want to share a story, or have an idea to collaborate, the AofA team reads every message. We aim to reply within two working days.",
  helpTitle: "What can we help with?",
  help: [
    { title: "Membership", body: "Questions about joining as an Individual, Ambassador or Organisation, or about switching plans." },
    { title: "Contributing", body: "Got a story to tell, an event to share, or want to pitch an article? We are always listening." },
    { title: "Press & media", body: "Interviews, quotes, podcast invites or press enquiries — get in touch with the founders." },
    { title: "Partnerships", body: "Events, sponsorships and collaborations with organisations that get the 50+ community." },
  ],
  emailTitle: "Prefer email?",
  elsewhere: "Find us elsewhere",
  formTitle: "Send us a message",
  formBody: "We read everything. Tell us as much or as little as you like — we will come back with a real reply.",
  consent: "I understand that all information I enter here will be stored on the website, but will not be publicly visible nor searchable, except for by the Administrators of the website. I understand that I may be contacted by the Administrator of the website.",
};

export const PROFILE_CONSENT =
  "I understand that information I enter will be stored and shared with relevant members of the site and that I may be contacted by these members and/or the admin of the website.";
