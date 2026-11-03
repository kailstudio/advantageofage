import React, { useState } from "react";
import { EVENTS, WHATS_ON, AWARDS, CONFERENCE, HOME, JOIN_AMBASSADOR } from "../data.js";
import { Layout, PageHero, Button, Icon, SectionHead, Chip, NewsletterModal } from "../components.jsx";

/* Shared bits ------------------------------------------------------------ */

function Flagships({ exclude, last }) {
  const items = HOME.moments.items.filter((it) => it.href !== exclude);
  return (
    <section className={`section ${last ? "section--last" : ""}`}>
      <div className="container">
        <SectionHead title={exclude ? <>More from <em>What's On</em></> : <>Flagship <em>moments</em></>} sub={exclude ? null : WHATS_ON.flagshipSub} />
        <div className={`moments ${items.length === 1 ? "moments--one" : ""}`}>
          {items.map((it, i) => (
            <article key={it.title} className="moment fcard">
              <div className="moment__img"><img src={it.img} alt="" loading="lazy" /></div>
              <div className="moment__body">
                {it.date && <p className="moment__date">{it.date}</p>}
                <h3 className="h3">{it.title}<span className="dot">.</span></h3>
                <p>{it.body}</p>
                <a className="textlink" href={it.href}>{it.cta} <Icon name="arrow" size={15} stroke={2.2} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ items }) {
  return (
    <div className={`gallery gallery--${items.length}`}>
      {items.map((g, i) => (
        <figure key={g.img} className="gallery__item">
          <img src={g.img} alt={g.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}

function NewsletterCta({ title, body, onNewsletter }) {
  return (
    <section className="section section--last">
      <div className="container">
        <div className="connected">
          <div className="connected__text">
            <h2 className="h2">{title}</h2>
            <p className="lead">{body}</p>
          </div>
          <div className="connected__ctas">
            <Button variant="dark" icon="mail" onClick={onNewsletter}>Join the Newsletter</Button>
            <Button href="contact.html" variant="glass-light">Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Events & activities (events.html) -------------------------------------- */

export function Events() {
  const [nl, setNl] = useState(false);
  const w = WHATS_ON;
  return (
    <Layout page="events">
      <PageHero eyebrow={w.eyebrow} title="Events &" accent="activities" sub={w.sub} crumbs={[{ label: "What's On" }]} img="assets/img/awards-stage.jpg" tone="blue" />

      <section className="section section--tight">
        <div className="container">
          {EVENTS.length ? (
            <div className="events">
              {EVENTS.map((e) => (
                <article key={e.title} className="result event">
                  <div className="event__date"><Icon name="calendar" size={18} /> {e.date}{e.time ? ` · ${e.time}` : ""}</div>
                  <div className="result__body">
                    <h2 className="h4">{e.href ? <a href={e.href}>{e.title}</a> : e.title}</h2>
                    {e.body && <p className="result__summary">{e.body}</p>}
                    {e.location && <p className="meta"><Icon name="pin" size={16} /> {e.location}</p>}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty empty--big holding">
              <span className="empty__icon"><Icon name="calendar" size={30} /></span>
              <h2 className="h3">{w.emptyTitle}</h2>
              <p className="lead">{w.emptyBody}</p>
              <div className="hero__ctas">
                <Button variant="dark" icon="mail" onClick={() => setNl(true)}>Get the newsletter</Button>
                <Button href={JOIN_AMBASSADOR} variant="outline">List your own events</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Flagships last />
      <NewsletterModal open={nl} onClose={() => setNl(false)} />
    </Layout>
  );
}

/* AofA Awards (awards.html) ---------------------------------------------- */

export function Awards() {
  const [nl, setNl] = useState(false);
  const a = AWARDS;
  return (
    <Layout page="awards">
      <PageHero eyebrow={a.eyebrow} title="Advantages of Age" accent="Awards" sub={a.body} crumbs={[{ label: "What's On", href: "events.html" }, { label: "Awards" }]} img="assets/img/awards-orange.jpg" tone="pink" />

      <section className="section section--tight">
        <div className="container">
          <Gallery items={a.gallery} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Celebrating" title={<>{a.winnersTitle}</>} />
          {a.winners.length ? (
            <div className="grid-3">
              {a.winners.map((w) => (
                <div key={w.name + w.category} className="help help--turq">
                  <span className="feature__icon"><Icon name="award" size={22} /></span>
                  <p className="kicker">{w.category}{w.year ? ` · ${w.year}` : ""}</p>
                  <h3 className="h4">{w.name}</h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty holding">
              <span className="empty__icon"><Icon name="award" size={28} /></span>
              <p>{a.winnersEmpty}</p>
            </div>
          )}
        </div>
      </section>

      <Flagships exclude="awards.html" />
      <NewsletterCta title={<>Hear when <em>nominations open</em></>} body={a.ctaBody} onNewsletter={() => setNl(true)} />
      <NewsletterModal open={nl} onClose={() => setNl(false)} />
    </Layout>
  );
}

/* AofA Conference (conference.html) -------------------------------------- */

function InterestForm() {
  const c = CONFERENCE;
  const [sent, setSent] = useState(false);
  return (
    <div className="panel interest" id="register">
      <h2 className="h2">Register <em>interest</em></h2>
      <p className="lead">{c.interestBody}</p>
      {sent ? (
        <p className="form-status form-status--ok" role="status">Thank you — we'll be in touch when the next conference is announced.</p>
      ) : (
        <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="form-grid">
            <label className="field"><span className="field__label">Name <span className="req">*</span></span><input type="text" required autoComplete="name" /></label>
            <label className="field"><span className="field__label">Email <span className="req">*</span></span><input type="email" required autoComplete="email" /></label>
          </div>
          <fieldset className="field">
            <legend className="field__label">I'm interested in</legend>
            {c.interestAs.map((opt) => (
              <label className="check" key={opt}><input type="checkbox" name="as" value={opt} /><span>{opt}</span></label>
            ))}
          </fieldset>
          <Button type="submit" variant="dark" icon="mail">Register interest</Button>
        </form>
      )}
    </div>
  );
}

export function Conference() {
  const c = CONFERENCE;
  return (
    <Layout page="conference">
      <PageHero eyebrow={c.eyebrow} title="The AofA" accent="Conference" sub={c.body} crumbs={[{ label: "What's On", href: "events.html" }, { label: "Conference" }]} img="assets/img/conference-trio.jpg" tone="lime">
        <div className="hero__ctas">
          <Chip dot="var(--blue)">{c.date}</Chip>
          <Button href="#register" variant="dark">Register interest</Button>
        </div>
      </PageHero>


      <section className="section">
        <div className="container">
          <div className="conf">
            <div className="conf__recap">
              <Chip dot="var(--turq)">{c.date}</Chip>
              <h2 className="h2">{c.recapTitle}</h2>
              {c.recap.length ? c.recap.map((p) => <p key={p} className="body-lg">{p}</p>) : <p className="body-lg muted">{c.recapEmpty}</p>}
            </div>
            <InterestForm />
          </div>
        </div>
      </section>

      <Flagships exclude="conference.html" last />
    </Layout>
  );
}

