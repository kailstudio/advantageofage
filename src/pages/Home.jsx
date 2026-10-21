import React, { useState } from "react";
import { HOME, ARTICLES, LISTINGS, LINKS, JOIN_FREE, JOIN_PLANS } from "../data.js";
import { Layout, Button, ArrowLink, Chip, Icon, SectionHead, Avatar, RotatingBadge, NewsletterModal, Sticker } from "../components.jsx";

const PATHWAY_IMG = ["assets/img/three-friends.jpg", "assets/img/style-king.jpg", "assets/img/joint-winners.jpg", "assets/img/conference-crowd.jpg"];

function Hero() {
  const h = HOME.hero;
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__frame">
          <div className="hero__text">
            <div className="hero__headline">
              <Sticker tone="pink" tilt={-6} className="hero__sticker-a">{h.eyebrow}</Sticker>
              <h1 className="display">
                Join the <em>movement</em>
              </h1>
              <Sticker tone="lime" tilt={5} className="hero__sticker-b" cursor>Free to join</Sticker>
              <Sticker tone="white" tilt={-3} className="hero__sticker-c" bubble>Rethink ageing.</Sticker>
            </div>
            <p className="hero__body">{h.body}</p>
            <div className="hero__ctas">
              <Button href={JOIN_FREE} variant="dark">Join Free</Button>
              <Button href={JOIN_PLANS} variant="outline">List your Organisation</Button>
            </div>
            <div className="hero__pill">
              <div className="avatar-stack" aria-hidden="true">
                <img src="assets/img/suzanne.jpg" alt="" />
                <img src="assets/img/rose.jpg" alt="" />
                <img src="assets/img/charlie.jpg" alt="" />
                <img src="assets/img/suki.jpg" alt="" />
              </div>
              <p>{h.sub}</p>
            </div>
          </div>

          <div className="hero__bento">
            <figure className="bento-tile bento-tile--tall">
              <img src="assets/img/bus-hat.jpg" alt="Advantages of Age members on the top deck of a London bus" />
              <figcaption className="glass-tag">
                <span className="chip__dot" style={{ background: "var(--lime)" }} /> Age with attitude
              </figcaption>
            </figure>
            <figure className="bento-tile bento-tile--pink">
              <img src="assets/img/dancing.jpg" alt="Members dancing at an Advantages of Age party" />
            </figure>
            <a className="bento-tile bento-tile--turq" href="about.html">
              <span className="bento-tile__asterisk" aria-hidden="true"><Icon name="asterisk" size={120} stroke={1.1} /></span>
              <span className="bento-tile__label">Rethinking ageing <em>since 2016</em></span>
              <span className="arrow-circle"><Icon name="arrowUpRight" size={18} stroke={2} /></span>
            </a>
            <RotatingBadge src="assets/logo/badge-turquoise.png" className="hero__badge" />
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
        <div className="head-wrap">
          <SectionHead title={<>Choose how you <em>take part</em></>} sub={p.sub} />
          <Sticker tone="turq" tilt={6} className="head-sticker" cursor>Find your way in</Sticker>
        </div>
        <div className="pathways">
          {p.items.map((it, i) => (
            <article key={it.title} className={`pathway pathway--${it.tone}`} data-reveal style={{ "--d": `${i * 70}ms` }}>
              <div className="pathway__img">
                <img src={PATHWAY_IMG[i]} alt="" loading="lazy" />
              </div>
              <div className="pathway__body">
                <h3 className="h3">{it.title}</h3>
                <p>{it.body}</p>
              </div>
              <Button href={it.href} variant="glass" className="btn--block">{it.cta}</Button>
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
    <section className="section">
      <div className="container">
        <div className="how">
          <div className="how__intro" data-reveal>
            <h2 className="h2">How it <em>works</em></h2>
            <p className="lead">{h.sub}</p>
            <Button href={JOIN_FREE} variant="dark">Join Free</Button>
            <div className="how__photo">
              <img src="assets/img/launch-party.jpg" alt="Guests at the Advantages of Age launch party" loading="lazy" />
            </div>
          </div>
          <ol className="how__steps">
            {h.steps.map((s, i) => (
              <li key={s.n} className="step" data-reveal style={{ "--d": `${i * 90}ms` }}>
                <span className="step__n">{s.n}</span>
                <div>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function ListingCard({ listing, excerpt }) {
  const href = `profile.html?id=${listing.slug}`;
  return (
    <article className="listing-card" data-reveal>
      <a className="listing-card__media" href={href} tabIndex={-1} aria-hidden="true">
        {listing.img && !listing.logo ? (
          <img src={listing.img} alt="" loading="lazy" />
        ) : (
          <span className="listing-card__logo">
            <Avatar listing={listing} size={120} />
          </span>
        )}
        {listing.verified && (
          <span className="glass-tag glass-tag--sm"><Icon name="verified" size={15} /> Verified</span>
        )}
      </a>
      <div className="listing-card__body">
        <p className="kicker">{listing.type === "organisation" ? "Organisation" : "AofA Member"}</p>
        <h3 className="h3"><a href={href}>{listing.name}</a></h3>
        <p className="listing-card__excerpt">{excerpt || listing.summary}</p>
        {listing.shortLocation && (
          <p className="meta">
            <Icon name="pin" size={16} />
            <span><span className="meta__label">Located in</span> {listing.shortLocation.split(",").slice(0, 2).join(",")}</span>
          </p>
        )}
        <ArrowLink href={href}>View listing</ArrowLink>
      </div>
    </article>
  );
}

function Community() {
  const c = HOME.community;
  const items = c.featured.map((s) => LISTINGS.find((l) => l.slug === s));
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHead title={<>Meet the <em>community</em></>} sub={c.sub} action={<Button href="search.html" variant="outline">View All</Button>} />
        <div className="grid-3">
          {items.map((l) => (
            <ListingCard key={l.slug} listing={l} excerpt={c.excerpts[l.slug]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Platform() {
  const p = HOME.platform;
  return (
    <section className="section">
      <div className="container">
        <div className="platform">
          <div className="platform__head" data-reveal>
            <h2 className="h2">More than a <em>directory</em></h2>
            <p className="lead">{p.sub}</p>
            <Button href="about.html" variant="light">Explore the Platform</Button>
          </div>
          <div className="platform__grid">
            {p.items.map((it, i) => (
              <div key={it.title} className={`feature feature--${i}`} data-reveal style={{ "--d": `${i * 60}ms` }}>
                <span className="feature__icon"><Icon name={it.icon} size={22} /></span>
                <h3 className="h4">{it.title}</h3>
                <p>{it.body}</p>
              </div>
            ))}
          </div>
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
        <SectionHead title={<>Awards and <em>Conference</em></>} sub={m.sub} />
        <div className="moments">
          {m.items.map((it, i) => (
            <article key={it.title} className="moment" data-reveal style={{ "--d": `${i * 90}ms` }}>
              <img src={it.img} alt="" loading="lazy" />
              <div className="moment__top">
                {it.date ? <span className="glass-tag"><Icon name="calendar" size={15} /> {it.date}</span> : <span className="glass-tag"><Icon name="award" size={15} /> Awards</span>}
              </div>
              <div className="moment__panel">
                <h3 className="h3">{it.title}</h3>
                <p>{it.body}</p>
                <Button href="events.html" variant="light" size="sm">Explore Events</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyJoin() {
  const w = HOME.why;
  return (
    <section className="section">
      <div className="container">
        <div className="why">
          <div className="why__media" data-reveal>
            <img src="assets/img/flower-crowns.jpg" alt="" className="why__img why__img--small" loading="lazy" />
            <img src="assets/img/sports-god.jpg" alt="Advantages of Age award winner on stage" className="why__img" loading="lazy" />
            <RotatingBadge src="assets/logo/badge-turquoise.png" className="why__badge" />
          </div>
          <div className="why__text">
            <SectionHead title={<>Why <em>join</em></>} sub={w.sub} />
            <ul className="why__list">
              {w.items.map((t, i) => (
                <li key={t} data-reveal style={{ "--d": `${i * 50}ms` }}>
                  <span className="tick"><Icon name="check" size={16} stroke={2.4} /></span>
                  {t}
                </li>
              ))}
            </ul>
            <Button href={JOIN_FREE} variant="dark">Join Free</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const TAG_TONES = ["turq", "pink", "lime", "blue", "ink", "turq"];
export function ArticleCard({ a, i = 0 }) {
  return (
    <a className={`article article--${TAG_TONES[i % TAG_TONES.length]}`} href={a.href} target="_blank" rel="noopener noreferrer" data-reveal style={{ "--d": `${(i % 3) * 70}ms` }}>
      <div className="article__top">
        <span className="glass-tag glass-tag--sm">{a.tag}</span>
        <span className="article__mark" aria-hidden="true">“</span>
        <time className="article__date">{a.date}</time>
      </div>
      <div className="article__body">
        <h3 className="article__title">{a.title}</h3>
        <span className="article__more">
          Read more <Icon name="arrow" size={16} stroke={2} />
        </span>
      </div>
    </a>
  );
}

function Magazine() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHead title={<>Fresh from the <em>magazine</em></>} sub={HOME.magazine.sub} action={<Button href={LINKS.magazineHome} external variant="outline" icon="arrowUpRight">Read the Magazine</Button>} />
        <div className="grid-3">
          {ARTICLES.map((a, i) => (
            <ArticleCard key={a.href} a={a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StayConnected({ onNewsletter }) {
  const s = HOME.connected;
  return (
    <section className="section">
      <div className="container">
        <div className="connected" data-reveal>
          <div className="connected__text">
            <h2 className="h2">Stay <em>connected</em></h2>
            <p className="lead">{s.body}</p>
          </div>
          <div className="connected__ctas">
            <Button variant="dark" icon="mail" onClick={onNewsletter}>Join the Newsletter</Button>
            <Button href={LINKS.facebookGroup} external variant="glass-light" icon="facebook">Join the Facebook Group</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const f = HOME.final;
  return (
    <section className="section section--last">
      <div className="container">
        <div className="final" data-reveal>
          <div className="final__text">
            <h2 className="display display--md">
              The best chapters are <em>still unwritten.</em>
              <Sticker tone="pink" tilt={-5} className="final__sticker" bubble>With attitude</Sticker>
            </h2>
            <p className="lead">{f.body}</p>
            <div className="hero__ctas">
              <Button href={JOIN_FREE} variant="turq">Join Free</Button>
              <Button href={JOIN_PLANS} variant="outline-light">Become an Ambassador</Button>
            </div>
          </div>
          <div className="final__collage" aria-hidden="true">
            <img src="assets/img/suki.jpg" alt="" loading="lazy" />
            <img src="assets/img/charlie.jpg" alt="" loading="lazy" />
            <img src="assets/img/pink-hat.jpg" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [nl, setNl] = useState(false);
  return (
    <Layout page="home">
      <Hero />
      <Pathways />
      <HowItWorks />
      <Community />
      <Platform />
      <Moments />
      <WhyJoin />
      <Magazine />
      <StayConnected onNewsletter={() => setNl(true)} />
      <FinalCta />
      <NewsletterModal open={nl} onClose={() => setNl(false)} />
    </Layout>
  );
}
