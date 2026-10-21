import React from "react";
import { ABOUT } from "../data.js";
import { Layout, PageHero, Button, Chip, Icon, SectionHead, RotatingBadge } from "../components.jsx";

const WHAT_ICONS = { "★": "star", "◆": "diamond", "✎": "pen", "♪": "music" };
const TONES = ["turq", "pink", "lime", "blue"];

export default function About() {
  const a = ABOUT;
  return (
    <Layout page="about">
      <PageHero eyebrow={a.eyebrow} title="About" accent="Advantages of Age" crumbs={[{ label: "About Us" }]} img="assets/img/suzanne-rose.jpg" tone="pink" />

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="story">
            <div className="story__media" data-reveal>
              <img src="assets/img/rose-asanga.jpg" alt="Rose Rouse and Asanga Judge" loading="lazy" />
              <img src="assets/img/bubbles.jpg" alt="" className="story__media-small" loading="lazy" />
              <RotatingBadge src="assets/logo/badge-turquoise.png" className="story__badge" />
            </div>
            <div className="story__text" data-reveal>
              <Chip dot="var(--pink)">{a.story.eyebrow}</Chip>
              <h2 className="h2">Rethinking ageing <em>since 2016</em></h2>
              {a.story.body.map((p) => <p key={p} className="body-lg">{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow={a.principles.eyebrow} title={<>A different conversation about <em>later life</em></>} sub={a.principles.sub} />
          <div className="principles">
            {a.principles.items.map((p, i) => (
              <article key={p.n} className={`principle principle--${TONES[i]}`} data-reveal style={{ "--d": `${i * 70}ms` }}>
                <span className="principle__n">{p.n}</span>
                <h3 className="h3">{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={a.founders.eyebrow} title={<>The two women <em>behind it all</em></>} sub={a.founders.sub} />
          <div className="founders">
            {a.founders.people.map((f, i) => (
              <article key={f.name} className="founder" data-reveal style={{ "--d": `${i * 90}ms` }}>
                <div className="founder__img">
                  <img src={f.img} alt={f.name} loading="lazy" />
                  <span className="glass-tag">{f.role}</span>
                </div>
                <div className="founder__body">
                  <h3 className="h2">{f.name}</h3>
                  {f.body.map((p) => <p key={p}>{p}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <div className="container">
          <div className="platform platform--alt">
            <div className="platform__head" data-reveal>
              <Chip dot="var(--lime)" tone="glass">{a.what.eyebrow}</Chip>
              <h2 className="h2">A community, a magazine, <em>a movement</em></h2>
              <p className="lead">{a.what.sub}</p>
            </div>
            <div className="platform__grid platform__grid--4">
              {a.what.items.map((it, i) => (
                <div key={it.title} className={`feature feature--${i}`} data-reveal style={{ "--d": `${i * 60}ms` }}>
                  <span className="feature__icon"><Icon name={WHAT_ICONS[it.icon]} size={22} /></span>
                  <h3 className="h4">{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--last">
        <div className="container">
          <div className="final final--turq" data-reveal>
            <div className="final__text">
              <h2 className="display display--md">Join the <em>movement</em></h2>
              <p className="lead">{a.cta.body}</p>
              <div className="hero__ctas">
                <Button href="join.html" variant="dark">See membership plans</Button>
                <Button href="contact.html" variant="outline">Get in touch</Button>
              </div>
            </div>
            <div className="final__collage" aria-hidden="true">
              <img src="assets/img/ingrid.jpg" alt="" loading="lazy" />
              <img src="assets/img/style-king.jpg" alt="" loading="lazy" />
              <img src="assets/img/lena.jpg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
