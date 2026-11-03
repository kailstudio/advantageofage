import React, { useMemo, useState } from "react";
import { LISTINGS, DIRECTORY_SIDEBAR as S, JOIN_PLANS } from "../data.js";
import { Layout, PageHero, Button, Icon, Avatar, NewsletterModal } from "../components.jsx";

// One directory, three tabs. ?type= keeps each tab shareable.
const TABS = [
  { id: "all", label: "All listings", filter: () => true },
  { id: "members", label: "Members & Ambassadors", filter: (l) => l.type === "member" },
  { id: "organisations", label: "Organisations", filter: (l) => l.type === "organisation" },
];

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
    <article className="result">
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

export default function Directory() {
  const params = new URLSearchParams(window.location.search);
  const initial = TABS.some((t) => t.id === params.get("type")) ? params.get("type") : "all";
  const [type, setType] = useState(initial);
  const [query, setQuery] = useState(params.get("q") || "");
  const [place, setPlace] = useState(params.get("where") || "");
  const [sort, setSort] = useState("");
  const [nl, setNl] = useState(false);

  const pickTab = (id) => {
    setType(id);
    const u = new URL(window.location.href);
    u.searchParams.set("type", id);
    window.history.replaceState(null, "", u.pathname.split("/").pop() + u.search);
  };

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    const p = place.trim().toLowerCase();
    return LISTINGS.filter((l) => {
      const hay = [l.name, l.company, l.summary, l.tagline, ...(l.about || []).map((b) => (typeof b === "string" ? b : ""))].join(" ").toLowerCase();
      return (!q || hay.includes(q)) && (!p || (l.location || "").toLowerCase().includes(p));
    });
  }, [query, place]);

  const tab = TABS.find((t) => t.id === type);
  const results = useMemo(() => sortListings(matches.filter(tab.filter), sort), [matches, type, sort]);

  return (
    <Layout page="directory">
      <PageHero
        title="The AofA"
        accent="Directory"
        sub="Members, Ambassadors and organisations rethinking ageing — all in one place."
        crumbs={[{ label: "Directory" }]}
        img="assets/img/three-friends.jpg"
        tone="turq"
      />
      <section className="section section--tight">
        <div className="container">
          <div className="dir">
            <Sidebar query={query} setQuery={setQuery} place={place} setPlace={setPlace} onNewsletter={() => setNl(true)} />
            <div className="dir__results">
              <div className="dir-tabs" role="group" aria-label="Show listings">
                {TABS.map((t) => (
                  <button key={t.id} type="button" aria-pressed={t.id === type} className={t.id === type ? "is-active" : ""} onClick={() => pickTab(t.id)}>
                    {t.label}
                    <span className="dir-tabs__count">{matches.filter(t.filter).length}</span>
                  </button>
                ))}
              </div>
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

/* Resource Hub keeps the empty-state directory layout until it has guides */
export function EmptyDirectory() {
  const [nl, setNl] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <Layout page="resource-hub">
      <PageHero title="Resource" accent="Hub" crumbs={[{ label: "Magazine" }, { label: "Resource Hub" }]} img="assets/img/conference-hall.jpg" tone="lime" />
      <section className="section section--tight">
        <div className="container">
          <div className="dir">
            <Sidebar searchTitle="Resource Hub Search" fields="keyword" query={query} setQuery={setQuery} onNewsletter={() => setNl(true)} />
            <div className="dir__results">
              <div className="empty empty--big">
                <span className="empty__icon"><Icon name="book" size={30} /></span>
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
