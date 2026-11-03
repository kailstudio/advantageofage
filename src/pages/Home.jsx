import React, { useState } from "react";
import { HOME, ARTICLES, LISTINGS, LINKS, JOIN_FREE, JOIN_ORGS } from "../data.js";
import { Layout, Button, ArrowLink, Icon, Avatar } from "../components.jsx";

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
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Advantages of Age</p>
          <h1 className="display">Age with attitude<span className="dot">.</span></h1>
          <span className="rule" aria-hidden="true" />
          <p className="lead">{h.body}</p>
          <div className="hero__ctas">
            <Button href={JOIN_FREE} variant="turq">Join the movement</Button>
            <a className="textlink" href={JOIN_ORGS}>List your organisation</a>
          </div>
        </div>
        <div className="hero__media">
          <img src="assets/img/brand/hero-people.jpg" alt="Three Advantages of Age members: a man in a blue shirt, a woman in a red hat blowing bubbles, and a man in an orange jacket and beret" />
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
            <p className="eyebrow">A welcoming community</p>
            <h2 className="h2">Choose how you <em>take part.</em></h2>
            <p className="lead">{p.sub}</p>
          </div>
        </div>
        <div className="pathways">
          {p.items.map((it, i) => (
            <article key={it.title} className="pathway">
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
            <p className="eyebrow">Simple to join</p>
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
            <p className="eyebrow">Explore the community</p>
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
            <p className="eyebrow">Why be part of AofA?</p>
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

export function ListingCard({ listing, excerpt }) {
  const href = `profile.html?id=${listing.slug}`;
  return (
    <article className="listing-card">
      <a className="listing-card__media" href={href} tabIndex={-1} aria-hidden="true">
        {listing.img && !listing.logo ? (
          <img src={listing.img} alt="" loading="lazy" />
        ) : (
          <span className="listing-card__logo"><Avatar listing={listing} size={120} /></span>
        )}
        {listing.verified && <span className="glass-tag glass-tag--sm"><Icon name="verified" size={14} /> Verified</span>}
      </a>
      <div className="listing-card__body">
        <p className="kicker">{listing.type === "organisation" ? "Organisation" : "AofA Member"}</p>
        <h3 className="h3"><a href={href}>{listing.name}</a></h3>
        <p className="listing-card__excerpt">{excerpt || listing.summary}</p>
        {listing.shortLocation && (
          <p className="meta"><Icon name="pin" size={16} /><span>{listing.shortLocation.split(",").slice(0, 2).join(",")}</span></p>
        )}
        <ArrowLink href={href}>View listing</ArrowLink>
      </div>
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
            <p className="eyebrow">People are the brand</p>
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
            <p className="eyebrow">The age revolution</p>
            <h2 className="h2">More life. <em>More possibilities.</em></h2>
            <p className="lead">{m.sub}</p>
          </div>
        </div>
        <div className="moments">
          {m.items.map((it) => (
            <article key={it.title} className="moment">
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
    <section className="section section--tint">
      <div className="container maglayout">
        <div className="magintro">
          <p className="eyebrow" style={{ marginBottom: 0 }}>Magazine</p>
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
  const f = HOME.final;
  const [done, setDone] = useState(false);
  return (
    <section className="closing">
      <div className="container closing__inner">
        <div className="closing__text">
          <p className="eyebrow">Stay connected</p>
          <h2 className="display display--md">The best chapters are still unwritten<span className="dot">.</span></h2>
          <p className="lead">{HOME.connected.body}</p>
          {done ? (
            <p className="form-status form-status--ok" role="status">Thank you — you're on the list.</p>
          ) : (
            <form className="signup" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <label className="sr-only" htmlFor="closing-email">Email address</label>
              <input id="closing-email" type="email" required autoComplete="email" placeholder="Your email address" maxLength={180} />
              <Button type="submit" variant="turq">Subscribe</Button>
            </form>
          )}
          <p className="signup-note">We respect your privacy. Unsubscribe at any time. <a className="u-link" href="privacy.html">Privacy policy</a></p>
          <p className="closing__alt">
            <a className="textlink" href={LINKS.facebookGroup} target="_blank" rel="noopener noreferrer">Join the Facebook group <Icon name="arrowUpRight" size={15} stroke={2.2} /></a>
          </p>
        </div>
      </div>
      <div className="closing__media" aria-hidden="true">
        <img src="assets/img/brand/closing-hands.jpg" alt="" loading="lazy" />
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
