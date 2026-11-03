import React from "react";
import { ABOUT, CONTACT, LINKS } from "../data.js";
import { Layout, Button, Icon, SectionHead, CircleText } from "../components.jsx";

const WHAT_ICONS = { "★": "star", "◆": "diamond", "✎": "pen", "♪": "music" };
const TONES = ["turq", "pink", "lime", "blue"];

function AboutHero() {
  const [suzanne, rose] = ABOUT.founders.people;
  return (
    <section className="ahero">
      <div className="glow" aria-hidden="true"><span /><span /><span /></div>
      <div className="container ahero__inner">
        <div className="ahero__text">
          <nav className="crumbs crumbs--light" aria-label="Breadcrumb">
            <a href="index.html">Home</a><span aria-hidden="true">/</span><span aria-current="page">About</span>
          </nav>
          <p className="pill pill--dark">{ABOUT.eyebrow}</p>
          <h1 className="ahero__title">About<br /><em>Advantages</em><br /><em>of Age</em><span className="dot">.</span></h1>
          <p className="ahero__lead">A social enterprise founded in 2016 by Suzanne Noble and Rose Rouse, to demand a different future for older people in an ageist culture.</p>
          <div className="hero__ctas">
            <Button href="#story" variant="dark" icon="arrow">Our story</Button>
            <a className="textlink" href="contact.html">Get in touch <Icon name="arrow" size={15} stroke={2.2} /></a>
          </div>
          <ul className="ahero__facts">
            <li><strong>2016</strong><span>Founded</span></li>
            <li><strong>2</strong><span>Founders, one hot tub</span></li>
            <li><strong>50+</strong><span>Community, free to join</span></li>
          </ul>
        </div>
        <div className="ahero__visual">
          {[suzanne, rose].map((f, i) => (
            <figure key={f.name} className={`ahero__card ahero__card--${i ? "b" : "a"}`}>
              <img src={f.img} alt={f.name} />
              <figcaption className="ahero__tag"><strong>{f.name}</strong><small>{f.role}</small></figcaption>
            </figure>
          ))}
          <CircleText className="ahero__badge" />
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const a = ABOUT;
  return (
    <Layout page="about">
      <AboutHero />

      {/* Story */}
      <section className="section" id="story">
        <div className="container">
          <div className="story">
            <div className="story__media">
              <img src="assets/img/rose-asanga.jpg" alt="Rose Rouse and Asanga Judge" loading="lazy" />
              <img src="assets/img/bubbles.jpg" alt="" className="story__media-small" loading="lazy" />
            </div>
            <div className="story__text">
              <p className="eyebrow">{a.story.eyebrow}</p>
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
              <article key={p.n} className={`principle principle--${TONES[i]}`}>
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
              <article key={f.name} className="founder">
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
            <div className="platform__head">
              <p className="eyebrow" style={{ color: "var(--yellow)", marginBottom: 0 }}>{a.what.eyebrow}</p>
              <h2 className="h2">A community, a magazine, <em>a movement</em></h2>
              <p className="lead">{a.what.sub}</p>
            </div>
            <div className="platform__grid platform__grid--4">
              {a.what.items.map((it, i) => (
                <div key={it.title} className={`feature feature--${i}`}>
                  <span className="feature__icon"><Icon name={WHAT_ICONS[it.icon]} size={22} /></span>
                  <h3 className="h4">{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press & partnerships */}
      <section className="section" id="press">
        <div className="container">
          <SectionHead eyebrow="Press & partnerships" title={<>Work <em>with us</em></>} sub="Interviews, events, sponsorships and collaborations — the founders read every enquiry." action={<Button href="contact.html" variant="outline">Get in touch</Button>} />
          <div className="help-grid help-grid--2">
            {CONTACT.help.filter((h) => /press|partner/i.test(h.title)).map((h, i) => (
              <div key={h.title} className={`help help--${i ? "blue" : "pink"}`}>
                <span className="feature__icon"><Icon name={i ? "heart" : "chat"} size={22} /></span>
                <h3 className="h4">{h.title}</h3>
                <p>{h.body}</p>
                <a className="u-link" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--last">
        <div className="container">
          <div className="final final--turq">
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
