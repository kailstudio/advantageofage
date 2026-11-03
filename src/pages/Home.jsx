import React, { useState } from "react";
import { HOME, ARTICLES, LISTINGS, LINKS, JOIN_FREE, JOIN_ORGS } from "../data.js";
import { Layout, Button, ArrowLink, Icon, Avatar, Socials, CircleText } from "../components.jsx";

/* Homepage — follows the "Website in action" concept in the AoA Living Brand
   System v4: hero · pathways · how it works · directory + why join ·
   community · awards & events · magazine · closing sign-up. */

const PATHWAY_IMG = [
  "assets/img/brand/portrait-orange-glasses.jpg",
  "assets/img/brand/portrait-straw-hat.jpg",
  "assets/img/brand/portrait-red-hat-bubbles.jpg",
  "assets/img/brand/portrait-mono.jpg",
];

function Hero() {
  const h = HOME.hero;
  const faces = LISTINGS.filter((l) => l.img && !l.logo).slice(0, 5);
  return (
    <section className="ehero ehero--glow">
      <div className="glow" aria-hidden="true"><span /><span /><span /></div>
      <div className="container">
        <div className="ehero__body">
          <div className="ehero__left">
            <a className="pill pill--dark" href={JOIN_FREE}>Join the movement</a>
            <h1 className="ehero__title">Age with<br />attitude<span className="dot">.</span></h1>
            <form className="gsearch" action="directory.html" role="search">
              <Icon name="sparkle" size={20} />
              <label className="sr-only" htmlFor="hero-search">Search the directory</label>
              <input id="hero-search" type="search" name="q" placeholder="Search people, events and organisations…" maxLength={80} />
              <button type="submit" aria-label="Search the directory"><Icon name="arrow" size={20} stroke={2.2} /></button>
            </form>
          </div>
          <CircleText />
          <div className="ehero__right">
            <p className="ehero__intro">{h.body}</p>
            <div className="bento">
              <div className="bento__photo"><img src="assets/img/brand/portrait-straw-hat.jpg" alt="" /></div>
              <a className="bento__faces" href="directory.html">
                <span className="avatar-row" aria-hidden="true">
                  {faces.map((l) => <img key={l.slug} src={l.img} alt="" />)}
                </span>
                <span className="bento__link">Explore the directory <Icon name="arrowUpRight" size={18} stroke={2} /></span>
              </a>
              <div className="bento__stat">
                <span className="bento__icon"><Icon name="people" size={22} /></span>
                <strong>50+</strong>
                <span>An age-positive community, free to join</span>
              </div>
            </div>
            <a className="textlink" href={JOIN_ORGS}>List your organisation <Icon name="arrow" size={15} stroke={2.2} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pathways() {
  const p = HOME.pathways;
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <div>
            <p className="eyebrow"><span className="eyebrow__n">01</span> A welcoming community</p>
            <h2 className="h2">Choose how you <em>take part.</em></h2>
            <p className="lead">{p.sub}</p>
          </div>
        </div>
        <div className="pathways">
          {p.items.map((it, i) => (
            <article key={it.title} className="pathway fcard">
              <div className="pathway__img"><img src={PATHWAY_IMG[i]} alt="" loading="lazy" /></div>
              <div className="pathway__body">
                <h3 className="h4">{it.title}</h3>
                <p>{it.body}</p>
                <a className="textlink textlink--turq" href={it.href}>{it.cta} <Icon name="arrow" size={15} stroke={2.2} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const h = HOME.how;
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-head section-head--center">
          <div>
            <p className="eyebrow"><span className="eyebrow__n">02</span> Simple to join</p>
            <h2 className="h2">How it works<span className="dot">.</span></h2>
          </div>
        </div>
        <ol className="steps">
          {h.steps.map((s) => (
            <li key={s.n} className="step">
              <span className="step__n">{s.n}</span>
              <h3 className="h4">{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DirectoryAndWhy() {
  const p = HOME.platform;
  const w = HOME.why;
  return (
    <section className="section">
      <div className="container">
        <div className="pair">
          <div className="pair__panel pair__panel--turq">
            <p className="eyebrow"><span className="eyebrow__n">03</span> Explore the community</p>
            <h2 className="h2">More than a directory<span className="dot">.</span></h2>
            <p className="lead">{p.sub}</p>
            <div className="benefits">
              {p.items.map((it) => (
                <div key={it.title} className="benefit">
                  <span className="round"><Icon name={it.icon} size={20} /></span>
                  <div>
                    <strong>{it.title}</strong>
                    <p>{it.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button href="directory.html" variant="dark">Explore the directory</Button>
          </div>
          <div className="pair__panel pair__panel--yellow">
            <p className="eyebrow"><span className="eyebrow__n">04</span> Why be part of AofA?</p>
            <h2 className="h2">A few good reasons<span className="dot">.</span></h2>
            <p className="lead">{w.sub}</p>
            <div className="why-inner">
              <ul className="ticks">
                {w.items.map((t) => (
                  <li key={t}><span className="tick"><Icon name="check" size={14} stroke={2.6} /></span>{t}</li>
                ))}
              </ul>
              <img className="why-photo" src="assets/img/brand/portrait-orange-suit.jpg" alt="" loading="lazy" />
            </div>
            <Button href={JOIN_FREE} variant="dark">Join free</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Profile card: framed photo, centred name, detail row, pill tags, stacked
   ghost cards behind and a round tab on the bottom edge. */
export function ListingCard({ listing, excerpt }) {
  const href = `profile.html?id=${listing.slug}`;
  const isOrg = listing.type === "organisation";
  const place = (listing.shortLocation || listing.location || "").split(",").slice(0, 2).join(",");
  const tags = [isOrg ? "Organisation" : "AofA Member", listing.verified && "Verified", listing.offers ? `Offers (${listing.offers})` : null].filter(Boolean);
  return (
    <article className="pcard">
      <div className="pcard__frame">
        <a className="pcard__media" href={href} tabIndex={-1} aria-hidden="true">
          {listing.img && !listing.logo ? (
            <img src={listing.img} alt="" loading="lazy" />
          ) : (
            <span className="pcard__logo"><Avatar listing={listing} size={120} /></span>
          )}
        </a>
        <div className="pcard__body">
          <h3 className="pcard__name">
            <a href={href}>{listing.name}</a>
            {listing.verified && <span className="pcard__verified" title="Verified"><Icon name="verified" size={17} /><span className="sr-only"> (verified)</span></span>}
          </h3>
          <p className="pcard__meta">
            {place && <span><Icon name="pin" size={15} /> {place}</span>}
            <span><Icon name={isOrg ? "people" : "user"} size={15} /> {isOrg ? "Organisation" : "Member"}</span>
          </p>
          {excerpt && <p className="pcard__excerpt">{excerpt}</p>}
          <ul className="pcard__tags">{tags.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
      <a className="pcard__tab" href={href} aria-label={`View ${listing.name}'s listing`}>
        <span className="pcard__tab-ring"><Icon name="arrowUpRight" size={20} stroke={2.2} /></span>
      </a>
    </article>
  );
}

function Community() {
  const c = HOME.community;
  const items = c.featured.map((s) => LISTINGS.find((l) => l.slug === s)).filter(Boolean);
  return (
    <section className="section section--purple">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow"><span className="eyebrow__n">05</span> People are the brand</p>
            <h2 className="h2">Meet the<br />community<span className="dot">.</span></h2>
            <p className="lead">{c.sub}</p>
          </div>
          <div className="section-head__action"><Button href="directory.html" variant="light">View all</Button></div>
        </div>
        <div className="grid-3">
          {items.map((l) => <ListingCard key={l.slug} listing={l} excerpt={c.excerpts[l.slug]} />)}
        </div>
      </div>
    </section>
  );
}

function Moments() {
  const m = HOME.moments;
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <div>
            <p className="eyebrow"><span className="eyebrow__n">06</span> The age revolution</p>
            <h2 className="h2">More life. <em>More possibilities.</em></h2>
            <p className="lead">{m.sub}</p>
          </div>
        </div>
        <div className="moments">
          {m.items.map((it) => (
            <article key={it.title} className="moment fcard">
              <div className="moment__img"><img src={it.img} alt="" loading="lazy" /></div>
              <div className="moment__body">
                {it.date && <p className="moment__date">{it.date}</p>}
                <h3 className="h3">{it.title}<span className="dot">.</span></h3>
                <p>{it.body}</p>
                <a className="textlink" href={it.href}>{it.cta} <Icon name="arrowUpRight" size={15} stroke={2.2} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const TAG_TONES = ["turq", "pink", "lime", "blue", "ink", "turq"];
export function ArticleCard({ a, i = 0 }) {
  return (
    <a className={`article article--${TAG_TONES[i % TAG_TONES.length]}`} href={a.href} target="_blank" rel="noopener noreferrer">
      <div className="article__top">
        <span className="glass-tag glass-tag--sm">{a.tag}</span>
        <time className="article__date">{a.date}</time>
      </div>
      <div className="article__body">
        <h3 className="article__title">{a.title}</h3>
        <span className="article__more">Read more <Icon name="arrow" size={15} stroke={2.2} /><span className="sr-only"> (opens the magazine in a new tab)</span></span>
      </div>
    </a>
  );
}

function Magazine() {
  return (
    <section className="section section--warm">
      <div className="container maglayout">
        <div className="magintro">
          <p className="eyebrow" style={{ marginBottom: 0 }}><span className="eyebrow__n">07</span> Magazine</p>
          <h2 className="h2">A life in<br />progress<span className="dot">.</span></h2>
          <p className="lead">{HOME.magazine.sub}</p>
          <a className="textlink" href={LINKS.magazine} target="_blank" rel="noopener noreferrer">Read the magazine <Icon name="arrowUpRight" size={15} stroke={2.2} /></a>
        </div>
        {ARTICLES.slice(0, 5).map((a, i) => <ArticleCard key={a.href} a={a} i={i} />)}
      </div>
    </section>
  );
}

function Closing() {
  const [done, setDone] = useState(false);
  return (
    <section className="gclose">
      <div className="glow glow--warm" aria-hidden="true"><span /><span /><span /></div>
      <div className="container">
        <div className="gpanel">
          <div className="gpanel__main">
            <p className="eyebrow"><span className="eyebrow__n">08</span> Stay connected</p>
            <h2 className="h2">The best chapters are still unwritten<span className="dot">.</span></h2>
            <p className="lead">{HOME.connected.body}</p>
            {done ? (
              <p className="form-status form-status--ok" role="status">Thank you — you're on the list.</p>
            ) : (
              <form className="gsearch gsearch--email" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
                <Icon name="mail" size={20} />
                <label className="sr-only" htmlFor="closing-email">Email address</label>
                <input id="closing-email" type="email" required autoComplete="email" placeholder="Your email address" maxLength={180} />
                <button type="submit" aria-label="Subscribe to the newsletter"><Icon name="arrow" size={20} stroke={2.2} /></button>
              </form>
            )}
            <p className="signup-note">We respect your privacy. Unsubscribe at any time. <a className="u-link" href="privacy.html">Privacy policy</a></p>
          </div>
          <div className="gpanel__side">
            <img className="gpanel__photo" src="assets/img/brand/closing-hands.jpg" alt="" loading="lazy" />
            <p className="gpanel__label">Join the conversation</p>
            <Socials className="socials--glass" />
            <a className="textlink" href={LINKS.facebookGroup} target="_blank" rel="noopener noreferrer">Facebook group <Icon name="arrowUpRight" size={15} stroke={2.2} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout page="home">
      <Hero />
      <Pathways />
      <HowItWorks />
      <DirectoryAndWhy />
      <Community />
      <Moments />
      <Magazine />
      <Closing />
    </Layout>
  );
}
