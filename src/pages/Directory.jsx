import React, { useMemo, useState } from "react";
import { LISTINGS, DIRECTORY_SIDEBAR as S, JOIN_PLANS } from "../data.js";
import { Layout, PageHero, Button, Icon, Avatar, NewsletterModal } from "../components.jsx";

const CONFIG = {
  members: {
    title: "Individual & Ambassadors",
    accent: "Directory",
    crumb: "AofA Members",
    filter: (l) => l.type === "member",
    img: "assets/img/three-friends.jpg",
    tone: "turq",
  },
  organisations: {
    title: "Organisations",
    accent: "Directory",
    crumb: "AofA Organisations",
    filter: (l) => l.type === "organisation",
    img: "assets/img/joint-winners.jpg",
    tone: "pink",
  },
  search: {
    title: "Member",
    accent: "Directory",
    crumb: "Search",
    filter: () => true,
    img: "assets/img/conference-trio.jpg",
    tone: "lime",
  },
};

const lastName = (n) => n.split(" ").slice(-1)[0];

function sortListings(list, sort) {
  const copy = [...list];
  switch (sort) {
    case "name-asc": return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc": return copy.sort((a, b) => b.name.localeCompare(a.name));
    case "last-asc": return copy.sort((a, b) => lastName(a.name).localeCompare(lastName(b.name)));
    case "last-desc": return copy.sort((a, b) => lastName(b.name).localeCompare(lastName(a.name)));
    default: return copy;
  }
}

export function ResultRow({ l }) {
  const href = `profile.html?id=${l.slug}`;
  return (
    <article className="result" data-reveal>
      <a href={href} className="result__avatar" tabIndex={-1} aria-hidden="true">
        <Avatar listing={l} size={96} />
      </a>
      <div className="result__body">
        <div className="result__title">
          <h2 className="h4"><a href={href}>{l.name}</a></h2>
          {l.company && <span className="result__company">{l.company}</span>}
          {l.verified && <span className="badge-verified"><Icon name="verified" size={15} /> Verified</span>}
        </div>
        {l.summary && <p className="result__summary">{l.summary}</p>}
        {(l.location) && (
          <p className="meta"><Icon name="pin" size={16} /> {l.location}</p>
        )}
      </div>
      <div className="result__actions">
        <Button href={href} variant="dark" size="sm">View Listing</Button>
        <Button href={`${href}#contact`} variant="outline" size="sm" icon="mail">Send Message</Button>
      </div>
    </article>
  );
}

export function Sidebar({ searchTitle = S.searchTitle, query, setQuery, place, setPlace, onSubmit, onNewsletter, fields = "members" }) {
  return (
    <aside className="sidebar">
      <form className="side-card side-card--search" onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(); }}>
        <h2 className="h4">{searchTitle}</h2>
        {fields === "members" && (
          <>
            <label className="field">
              <span className="field__label">{S.what}</span>
              <span className="input-icon"><Icon name="search" size={18} /><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name, skill or keyword" /></span>
            </label>
            <label className="field">
              <span className="field__label">{S.where}</span>
              <span className="input-icon"><Icon name="pin" size={18} /><input type="search" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Town, city or postcode" /></span>
            </label>
          </>
        )}
        {fields === "keyword" && (
          <label className="field">
            <span className="field__label">Keyword</span>
            <span className="input-icon"><Icon name="search" size={18} /><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} /></span>
          </label>
        )}
        {fields === "events" && (
          <>
            <label className="field">
              <span className="field__label">Keyword</span>
              <span className="input-icon"><Icon name="search" size={18} /><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} /></span>
            </label>
            <label className="field">
              <span className="field__label">Location</span>
              <span className="input-icon"><Icon name="pin" size={18} /><input type="search" value={place} onChange={(e) => setPlace(e.target.value)} /></span>
            </label>
            <label className="field">
              <span className="field__label">Date</span>
              <input type="date" />
            </label>
          </>
        )}
        <Button type="submit" variant="dark" icon="search" className="btn--block">Search Now</Button>
      </form>

      <div className="side-card side-card--turq">
        <span className="side-card__icon"><Icon name="mail" size={22} /></span>
        <h2 className="h4">{S.newsletter.title}</h2>
        <Button variant="dark" size="sm" onClick={onNewsletter}>{S.newsletter.cta}</Button>
      </div>

      <div className="side-card side-card--blue">
        <h2 className="h4">{S.community.title}</h2>
        <ol className="side-steps">
          {S.community.steps.map((s, i) => (
            <li key={s}><span>{i + 1}</span>{s}</li>
          ))}
        </ol>
        <Button href={JOIN_PLANS} variant="turq" size="sm">{S.community.cta}</Button>
      </div>
    </aside>
  );
}

export default function Directory({ kind }) {
  const cfg = CONFIG[kind];
  const params = new URLSearchParams(window.location.search);
  const [query, setQuery] = useState(params.get("q") || "");
  const [place, setPlace] = useState(params.get("where") || "");
  const [sort, setSort] = useState("");
  const [nl, setNl] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const p = place.trim().toLowerCase();
    const base = LISTINGS.filter(cfg.filter).filter((l) => {
      const hay = [l.name, l.company, l.summary, l.tagline, ...(l.about || []).map((b) => (typeof b === "string" ? b : ""))].join(" ").toLowerCase();
      return (!q || hay.includes(q)) && (!p || (l.location || "").toLowerCase().includes(p));
    });
    return sortListings(base, sort);
  }, [query, place, sort, kind]);

  return (
    <Layout page={kind === "search" ? null : kind}>
      <PageHero title={cfg.title} accent={cfg.accent} crumbs={[{ label: cfg.crumb }]} img={cfg.img} tone={cfg.tone} />
      <section className="section section--tight">
        <div className="container">
          <div className="dir">
            <Sidebar query={query} setQuery={setQuery} place={place} setPlace={setPlace} onNewsletter={() => setNl(true)} />
            <div className="dir__results">
              <div className="toolbar">
                <p className="toolbar__count" aria-live="polite">
                  Showing {results.length ? 1 : 0} - {results.length} of {results.length} Results
                </p>
                <label className="select">
                  <span className="sr-only">Sort results</span>
                  <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    {S.sort.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </label>
              </div>
              {results.length ? (
                <div className="results">
                  {results.map((l) => <ResultRow key={l.slug} l={l} />)}
                </div>
              ) : (
                <div className="empty">
                  <Icon name="search" size={28} />
                  <p>Sorry, we did not find any results for your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <NewsletterModal open={nl} onClose={() => setNl(false)} />
    </Layout>
  );
}

/* Events + Resource Hub share the empty-state directory layout */
export function EmptyDirectory({ kind }) {
  const [nl, setNl] = useState(false);
  const [query, setQuery] = useState("");
  const [place, setPlace] = useState("");
  const isEvents = kind === "events";
  return (
    <Layout page={kind}>
      <PageHero
        title={isEvents ? "Upcoming Events" : "Resource"}
        accent={isEvents ? "& Activities" : "Hub"}
        crumbs={[{ label: isEvents ? "Events" : "Resource Hub" }]}
        img={isEvents ? "assets/img/awards-stage.jpg" : "assets/img/conference-hall.jpg"}
        tone={isEvents ? "blue" : "lime"}
      />
      <section className="section section--tight">
        <div className="container">
          <div className="dir">
            <Sidebar
              searchTitle={isEvents ? "Event Search" : "Resource Hub Search"}
              fields={isEvents ? "events" : "keyword"}
              query={query} setQuery={setQuery} place={place} setPlace={setPlace}
              onNewsletter={() => setNl(true)}
            />
            <div className="dir__results">
              <div className="empty empty--big">
                <span className="empty__icon"><Icon name={isEvents ? "calendar" : "book"} size={30} /></span>
                <p className="h4">Sorry, we did not find any results for your search.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsletterModal open={nl} onClose={() => setNl(false)} />
    </Layout>
  );
}
