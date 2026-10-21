import React, { useState } from "react";
import { LISTINGS, PROFILE_CONSENT } from "../data.js";
import { Layout, Button, Icon, Avatar, RichBlocks } from "../components.jsx";

function ContactForm({ name }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="side-card" id="contact">
      <h2 className="h4">Contact {name}</h2>
      {sent ? (
        <p className="form-status form-status--ok" role="status">Thank you — your message has been sent.</p>
      ) : (
        <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label className="field"><span className="field__label">Name</span><input type="text" name="name" autoComplete="name" /></label>
          <label className="field"><span className="field__label">Email <span className="req">*</span></span><input type="email" name="email" required autoComplete="email" /></label>
          <label className="field"><span className="field__label">Phone Number</span><input type="tel" name="phone" autoComplete="tel" /></label>
          <label className="field"><span className="field__label">Location</span><input type="text" name="location" /></label>
          <label className="field"><span className="field__label">Message</span><textarea name="message" rows={4} /></label>
          <label className="check"><input type="checkbox" required /><span>{PROFILE_CONSENT}</span></label>
          <Button type="submit" variant="turq" icon="mail" className="btn--block">Send Message</Button>
        </form>
      )}
    </div>
  );
}

function Share() {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;
  return (
    <div className="side-card">
      <h2 className="h4">Share This Page</h2>
      <div className="share">
        <a className="social" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><Icon name="facebook" size={18} /></a>
        <a className="social" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><Icon name="linkedin" size={18} /></a>
        <a className="social" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X"><Icon name="twitter" size={18} /></a>
        <button className="btn btn--outline btn--sm" onClick={() => { navigator.clipboard?.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); }}>
          <span className="btn__label">{copied ? "Copied" : "Copy"}</span>
          <span className="btn__icon"><Icon name={copied ? "check" : "copy"} size={16} /></span>
        </button>
      </div>
    </div>
  );
}

export default function Profile() {
  const id = new URLSearchParams(window.location.search).get("id");
  const l = LISTINGS.find((x) => x.slug === id);

  if (!l) {
    return (
      <Layout>
        <section className="section">
          <div className="container narrow">
            <div className="empty empty--big">
              <p className="h3">Listing not found</p>
              <Button href="search.html" variant="dark">Browse the directory</Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  document.title = `${l.name} — ${l.category} | Advantages of Age`;
  const isOrg = l.type === "organisation";
  const listHref = isOrg ? "organisations.html" : "members.html";

  return (
    <Layout page={isOrg ? "organisations" : "members"}>
      <section className="profile-hero">
        <div className="container">
          <div className={`profile-hero__card ${isOrg ? "is-org" : ""}`}>
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a><span>/</span>
              <a href={listHref}>{l.category}</a><span>/</span>
              <span aria-current="page">{l.name}</span>
            </nav>
            <div className="profile-hero__main">
              <Avatar listing={l} size={168} className="profile-hero__avatar" />
              <div>
                <p className="kicker">{l.category}</p>
                <h1 className="h1">{l.name}</h1>
                {(l.role || l.company) && <p className="profile-hero__role">{l.role || l.company}</p>}
                <div className="profile-hero__chips">
                  {l.verified && <span className="badge-verified"><Icon name="verified" size={15} /> Verified</span>}
                  {l.shortLocation || l.location ? <span className="chip chip--white"><Icon name="pin" size={15} /> {l.shortLocation || l.location}</span> : null}
                  {l.offers ? <span className="chip chip--white">Offers ({l.offers})</span> : null}
                </div>
              </div>
              <div className="profile-hero__cta">
                <Button href="#contact" variant="dark" icon="mail">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="profile">
            <div className="profile__main">
              {l.tagline && (
                <div className="panel">
                  <h2 className="panel__title">Overview</h2>
                  <p className="quote">“{l.tagline}”</p>
                </div>
              )}

              {(l.details || l.location) && (
                <div className="panel">
                  <h2 className="panel__title">{isOrg ? "Contact Information" : "More Details"}</h2>
                  <dl className="details">
                    {l.location && !isOrg && (
                      <div><dt>Location</dt><dd>{l.location}</dd></div>
                    )}
                    {(l.details || []).map(([k, v]) => (
                      <div key={k}><dt>{k}</dt><dd>{v.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}</dd></div>
                    ))}
                  </dl>
                </div>
              )}

              {l.about && l.about.length > 0 && (
                <div className="panel">
                  <h2 className="panel__title">About</h2>
                  <RichBlocks blocks={l.about} />
                </div>
              )}

              <div className="panel panel--flat">
                <h2 className="panel__title">Related Searches</h2>
                <div className="related">
                  {(l.related || [`All ${l.category}`]).map((r) => (
                    <a key={r} className="chip chip--white" href={listHref}>{r}</a>
                  ))}
                </div>
              </div>
            </div>
            <aside className="profile__side">
              <ContactForm name={l.name} />
              <Share />
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
