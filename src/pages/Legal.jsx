import React from "react";
import { PRIVACY, TERMS } from "../legal.js";
import { Layout, PageHero, RichBlocks } from "../components.jsx";

export default function Legal({ kind }) {
  const isPrivacy = kind === "privacy";
  const blocks = isPrivacy ? PRIVACY : TERMS;
  const toc = blocks.filter((b) => b.h).map((b) => b.h);
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <Layout page={kind}>
      <PageHero eyebrow="Advantages of Age" title={isPrivacy ? "Privacy" : "Terms of"} accent={isPrivacy ? "Policy" : "Use"} crumbs={[{ label: isPrivacy ? "Privacy Policy" : "Terms of Use" }]} tone="blue" />
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
