import React, { useState } from "react";
import { JOIN } from "../data.js";
import { Layout, PageHero, Button, Icon } from "../components.jsx";

function Plan({ plan }) {
  const [opt, setOpt] = useState(0);
  const t = plan.toggle ? plan.toggle[opt] : null;
  const price = t ? t.price : plan.price;
  return (
    <article className={`plan ${plan.badge ? "plan--featured" : ""}`} data-reveal>
      <div className="plan__head">
        <h2 className="h3">{plan.name}</h2>
        {plan.badge && <span className="plan__badge"><Icon name="sparkle" size={14} /> {plan.badge}</span>}
      </div>
      <p className="plan__for">{plan.for}</p>
      {plan.toggle && (
        <div className="segmented" role="tablist" aria-label="Organisation type">
          {plan.toggle.map((o, i) => (
            <button key={o.label} role="tab" aria-selected={i === opt} className={i === opt ? "is-active" : ""} onClick={() => setOpt(i)}>{o.label}</button>
          ))}
        </div>
      )}
      <p className="plan__price">
        <span>{price}</span>
        {plan.per && <small>{plan.per}</small>}
      </p>
      <p className="plan__note">{plan.note}</p>
      <Button href={t ? t.href : plan.href} variant={plan.badge ? "turq" : "dark"} className="btn--block">{t ? t.cta : plan.cta}</Button>
      <ul className="plan__list">
        {plan.included.map((f) => (
          <li key={f}><span className="tick"><Icon name="check" size={14} stroke={2.6} /></span>{f}</li>
        ))}
        {(plan.excluded || []).map((f) => (
          <li key={f} className="is-off"><span className="tick tick--off"><Icon name="x" size={13} stroke={2.4} /></span>{f}</li>
        ))}
      </ul>
    </article>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {JOIN.faqs.map(([q, a], i) => (
        <div key={q} className={`faq__item ${open === i ? "is-open" : ""}`}>
          <h3>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{q}</span>
              <span className="faq__icon"><Icon name={open === i ? "minus" : "plus"} size={18} stroke={2.2} /></span>
            </button>
          </h3>
          <div className="faq__a" hidden={open !== i}><p>{a}</p></div>
        </div>
      ))}
    </div>
  );
}

export default function Join() {
  return (
    <Layout page="join">
      <PageHero eyebrow={JOIN.eyebrow} title="Three ways to be part of" accent="the movement" crumbs={[{ label: "Membership" }]} tone="turq">
        <p className="hero-tagline">{JOIN.tagline}</p>
        <p className="lead">{JOIN.body}</p>
      </PageHero>
      <section className="section section--tight">
        <div className="container">
          <div className="plans">
            {JOIN.plans.map((p) => <Plan key={p.id} plan={p} />)}
          </div>
          <p className="fineprint center">{JOIN.fine}</p>
        </div>
      </section>
      <section className="section section--last">
        <div className="container">
          <div className="faq-wrap">
            <div data-reveal>
              <h2 className="h2">Frequently asked <em>questions</em></h2>
              <div className="faq-wrap__media">
                <img className="faq-wrap__img" src="assets/img/caroline-sam.jpg" alt="" loading="lazy" />
              </div>
            </div>
            <Faq />
          </div>
        </div>
      </section>
    </Layout>
  );
}
