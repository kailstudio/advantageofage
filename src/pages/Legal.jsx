import React from "react";
import { PRIVACY, TERMS, ACCESSIBILITY } from "../legal.js";
import { Layout, PageHero, RichBlocks } from "../components.jsx";

export default function Legal({ kind }) {
  const KINDS = {
    privacy: { blocks: PRIVACY, title: "Privacy", accent: "Policy", crumb: "Privacy Policy" },
    terms: { blocks: TERMS, title: "Terms of", accent: "Use", crumb: "Terms of Use" },
    accessibility: { blocks: ACCESSIBILITY, title: "Accessibility", accent: "statement", crumb: "Accessibility" },
  };
  const k = KINDS[kind];
  const blocks = k.blocks;
  const toc = blocks.filter((b) => b.h).map((b) => b.h);
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <Layout page={kind}>
      <PageHero eyebrow="Advantages of Age" title={k.title} accent={k.accent} crumbs={[{ label: k.crumb }]} tone="blue" />
      <section className="section section--last">
        <div className="container">
          <div className="legal">
            <nav className="legal__toc" aria-label="On this page">
              <p className="kicker">On this page</p>
              <ol>
                {toc.map((t) => <li key={t}><a href={`#${slug(t)}`}>{t}</a></li>)}
              </ol>
            </nav>
            <article className="panel legal__body">
              <div className="rich">
                {blocks.map((b, i) =>
                  b.h ? <h2 key={i} id={slug(b.h)}>{b.h}</h2> : <RichBlocks key={i} blocks={[b]} />
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
