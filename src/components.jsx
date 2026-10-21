import React, { useEffect, useRef, useState } from "react";
import { NAV, FOOTER, LINKS, JOIN_FREE, NEWSLETTER_MODAL, LISTINGS } from "./data.js";

/* ------------------------------------------------------------------ Icons */

const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  people: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" /><circle cx="17" cy="9" r="2.5" /><path d="M16.5 14.6c2.6.2 4.4 1.9 5 5.4" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="3" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  pen: <><path d="M4 20h4L19 9l-4-4L4 16v4Z" /><path d="m13.5 6.5 4 4" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
  chat: <path d="M4 5.5h16v11H9l-5 4v-15Z" />,
  book: <><path d="M4 5c2.5-1.3 5.5-1.3 8 0v15c-2.5-1.3-5.5-1.3-8 0V5Z" /><path d="M12 5c2.5-1.3 5.5-1.3 8 0v15c-2.5-1.3-5.5-1.3-8 0" /></>,
  verified: <><path d="M12 2.8 14.4 5l3.2-.4.6 3.2 2.8 1.6-1.4 2.9 1.4 2.9-2.8 1.6-.6 3.2-3.2-.4L12 21.2 9.6 19l-3.2.4-.6-3.2L3 14.6l1.4-2.9L3 8.8l2.8-1.6.6-3.2 3.2.4Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4.2 4.1-6.5 8-6.5s7 2.3 8 6.5" /></>,
  lock: <><rect x="4.5" y="10.5" width="15" height="10" rx="2.5" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /></>,
  share: <><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" /></>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2.5" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
  sparkle: <path d="M12 3c.6 4.8 3.2 7.4 8 8-4.8.6-7.4 3.2-8 8-.6-4.8-3.2-7.4-8-8 4.8-.6 7.4-3.2 8-8Z" />,
  star: <path d="m12 3.5 2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.8l6-.7Z" />,
  diamond: <path d="M12 3 21 12 12 21 3 12Z" />,
  music: <><path d="M9 18V6l11-2v12" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="17.5" cy="16" r="2.5" /></>,
  award: <><circle cx="12" cy="9" r="5.5" /><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" /></>,
  cursor: <path d="M5 3l14 8.5-6.2 1.3L9.6 19 5 3Z" fill="currentColor" stroke="#fff" strokeWidth="1.4" />,
  asterisk: <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" />,
  heart: <path d="M12 20s-8-4.7-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.3 12 20 12 20Z" />,
};

const brand = {
  facebook: <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6C16.6 2.5 15.6 2.4 14.5 2.4 12.1 2.4 10.6 3.9 10.6 6.5v2H8v3.2h2.6V21.6H14V11.7h2.7l.4-3.2H14Z" />,
  instagram: <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21.3 8.1c-.1-1.5-.4-2.8-1.5-3.9S17.4 2.8 15.9 2.7c-1.5-.1-6.3-.1-7.8 0-1.5.1-2.8.4-3.9 1.5S2.8 6.6 2.7 8.1c-.1 1.5-.1 6.3 0 7.8.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.5.1 6.3.1 7.8 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.5.1-6.3 0-7.8Zm-2 9.5a3.2 3.2 0 0 1-1.8 1.8c-1.2.5-4.2.4-5.5.4s-4.3.1-5.5-.4a3.2 3.2 0 0 1-1.8-1.8c-.5-1.2-.4-4.2-.4-5.6s-.1-4.3.4-5.5a3.2 3.2 0 0 1 1.8-1.8c1.2-.5 4.2-.4 5.5-.4s4.3-.1 5.5.4a3.2 3.2 0 0 1 1.8 1.8c.5 1.2.4 4.2.4 5.5s.1 4.4-.4 5.6Z" />,
  twitter: <path d="M17.8 3h3.1l-6.8 7.7 8 10.3h-6.2l-4.9-6.3L5.4 21H2.3l7.2-8.3L1.9 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />,
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5c0-1.2 0-2.75-1.67-2.75-1.68 0-1.94 1.3-1.94 2.66V21H9.5V9.75Z" />,
  youtube: <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12c0 1.3.1 2.6.4 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />,
  substack: <path d="M4 3h16v2.6H4V3Zm0 4.8h16v2.6H4V7.8ZM4 12.6h16V22l-8-4.4L4 22v-9.4Z" />,
};

export function Icon({ name, size = 20, stroke = 1.8, className = "" }) {
  if (brand[name]) {
    return (
      <svg className={"icon " + className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {brand[name]}
      </svg>
    );
  }
  return (
    <svg className={"icon " + className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/* --------------------------------------------------------------- Buttons */

export function Button({ href, children, variant = "dark", size, icon = "arrow", external, onClick, type, className = "", ...rest }) {
  const cls = `btn btn--${variant}${size ? " btn--" + size : ""} ${className}`;
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {icon && (
        <span className="btn__icon">
          <Icon name={icon} size={16} stroke={2} />
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} onClick={onClick} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} type={type || "button"} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}

export function ArrowLink({ href, children, external }) {
  return (
    <a className="arrow-link" href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <span>{children}</span>
      <span className="arrow-link__circle">
        <Icon name="arrowUpRight" size={16} stroke={2} />
      </span>
    </a>
  );
}

export function Chip({ children, tone = "light", dot }) {
  return (
    <span className={`chip chip--${tone}`}>
      {dot && <span className="chip__dot" style={{ background: dot }} />}
      {children}
    </span>
  );
}

/* ------------------------------------------------------- Section heading */

export function SectionHead({ eyebrow, title, sub, align = "left", action }) {
  return (
    <div className={`section-head section-head--${align}`} data-reveal>
      <div>
        {eyebrow && <Chip dot="var(--turq)">{eyebrow}</Chip>}
        <h2 className="h2">{title}</h2>
        {sub && <p className="lead">{sub}</p>}
      </div>
      {action && <div className="section-head__action">{action}</div>}
    </div>
  );
}

/* --------------------------------------------------------------- Avatars */

const TONES = ["turq", "pink", "lime", "blue"];
export function initials(name = "") {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}
export function Avatar({ listing, size = 72, className = "" }) {
  const idx = LISTINGS.findIndex((l) => l.slug === listing.slug);
  const tone = TONES[(idx < 0 ? 0 : idx) % TONES.length];
  if (listing.img) {
    return (
      <span className={`avatar ${listing.logo ? "avatar--logo" : ""} ${className}`} style={{ width: size, height: size }}>
        <img src={listing.img} alt={listing.name} loading="lazy" />
      </span>
    );
  }
  return (
    <span className={`avatar avatar--initials avatar--${tone} ${className}`} style={{ width: size, height: size, fontSize: size * 0.36 }} aria-hidden="true">
      {initials(listing.name)}
    </span>
  );
}

let badgeId = 0;
export function RotatingBadge({ src = "assets/logo/badge-white.png", className = "", text = "Age with attitude • Advantages of Age • " }) {
  const [id] = useState(() => `ring-${++badgeId}`);
  return (
    <div className={`rotating-badge ${className}`} aria-hidden="true">
      <svg className="rotating-badge__ring" viewBox="0 0 200 200">
        <defs>
          <path id={id} d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
        </defs>
        <text textLength="512" lengthAdjust="spacing">
          <textPath href={`#${id}`} startOffset="0">{text}</textPath>
        </text>
      </svg>
      <img src={src} alt="" />
    </div>
  );
}

/* Sticker labels and speech bubbles that float around headlines */
export function Sticker({ children, tone = "lime", tilt = -4, className = "", bubble, cursor, style }) {
  return (
    <span className={`sticker sticker--${tone} ${bubble ? "sticker--bubble" : ""} ${className}`} style={{ "--tilt": `${tilt}deg`, ...style }} aria-hidden="true">
      {children}
      {cursor && <span className="sticker__cursor"><Icon name="cursor" size={22} stroke={0} /></span>}
    </span>
  );
}

/* ----------------------------------------------------------- Reveal hook */

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* -------------------------------------------- Pointer spotlight on cards */

const SPOT = ".spot, .listing-card, .article, .pathway, .feature, .step, .result, .plan, .side-card, .help, .principle, .founder, .faq__item, .panel, .why__list li, .moment__panel, .connected, .bento-tile--turq";
export function useSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      const el = e.target.closest && e.target.closest(SPOT);
      if (!el) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}

/* ---------------------------------------------------------------- Header */

export function Header({ page }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="container">
        <div className="nav-bar">
          <a className="brand" href="index.html" aria-label="Advantages of Age — home">
            <img src="assets/logo/aoa-charcoal.png" alt="Advantages of Age" width="168" height="63" />
          </a>
          <nav className="nav-links" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className={`nav-link ${n.page === page ? "is-active" : ""}`} aria-current={n.page === page ? "page" : undefined} {...(n.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {n.label}
                {n.external && <Icon name="arrowUpRight" size={13} stroke={2} />}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="nav-login" href="login.html">
              <Icon name="user" size={18} />
              <span>Log in</span>
            </a>
            <Button href={JOIN_FREE} variant="dark" size="sm">Join Free</Button>
            <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
              <Icon name={open ? "x" : "menu"} size={22} />
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((n, i) => (
            <a key={n.label} href={n.href} style={{ transitionDelay: `${i * 30}ms` }} className={n.page === page ? "is-active" : ""} {...(n.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {n.label}
              <Icon name={n.external ? "arrowUpRight" : "arrow"} size={20} />
            </a>
          ))}
        </nav>
        <div className="mobile-menu__ctas">
          <Button href={JOIN_FREE} variant="turq">Join Free</Button>
          <Button href="login.html" variant="outline" icon="user">Log in</Button>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- Footer */

export function Socials({ className = "" }) {
  const items = [
    ["facebook", LINKS.facebookGroup.replace("www.", "").replace(/\/$/, ""), "Facebook"],
    ["twitter", LINKS.twitter, "X (Twitter)"],
    ["linkedin", LINKS.linkedin, "LinkedIn"],
    ["youtube", LINKS.youtube, "YouTube"],
    ["instagram", LINKS.instagram, "Instagram"],
  ];
  return (
    <div className={`socials ${className}`}>
      {items.map(([icon, href, label]) => (
        <a key={icon} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social">
          <Icon name={icon} size={18} />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-card">
          <div className="footer-top">
            <div className="footer-about">
              <img className="footer-logo" src="assets/logo/aoa-white.png" alt="Advantages of Age" width="220" height="82" />
              <h3 className="footer-head">About Advantages of Age</h3>
              <p>{FOOTER.about} <a className="u-link" href="about.html">Read more</a></p>
              <Socials />
            </div>
            <div className="footer-col">
              <h3 className="footer-head">Website</h3>
              <ul>
                {FOOTER.website.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-head">Support</h3>
              <ul>
                {FOOTER.support.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-badge" aria-hidden="true">
              <RotatingBadge src="assets/logo/badge-white.png" />
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Advantages of Age. All Rights Reserved</p>
            <div className="footer-legal">
              <a href="terms.html">Terms of Use</a>
              <a href="privacy.html">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------------------------------------- Page hero */

export function PageHero({ eyebrow, title, accent, sub, crumbs = [], tone = "turq", img, children }) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="container">
        <div className={`page-hero__card ${img ? "has-img" : ""}`}>
          <div className="page-hero__text">
            {crumbs.length > 0 && (
              <nav className="crumbs" aria-label="Breadcrumb">
                <a href="index.html">Home</a>
                {crumbs.map((c, i) => (
                  <React.Fragment key={i}>
                    <span aria-hidden="true">/</span>
                    {c.href ? <a href={c.href}>{c.label}</a> : <span aria-current="page">{c.label}</span>}
                  </React.Fragment>
                ))}
              </nav>
            )}
            {eyebrow && <Sticker tone="lime" tilt={-3}>{eyebrow}</Sticker>}
            <h1 className="h1">
              {title} {accent && <em>{accent}</em>}
            </h1>
            {sub && <p className="lead">{sub}</p>}
            {children}
          </div>
          {img && (
            <div className="page-hero__media">
              <img src={img} alt="" />
            </div>
          )}
          <span className="page-hero__shape page-hero__shape--a" aria-hidden="true" />
          <span className="page-hero__shape page-hero__shape--b" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ Newsletter modal */

export function NewsletterModal({ open, onClose }) {
  const [status, setStatus] = useState(null);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    setStatus(null);
    document.body.classList.add("modal-open");
    const prev = document.activeElement;
    setTimeout(() => dialogRef.current?.querySelector("input")?.focus(), 30);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
      prev && prev.focus && prev.focus();
    };
  }, [open]);
  if (!open) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="nl-title">
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__dialog" ref={dialogRef}>
        <button className="modal__close" onClick={onClose} aria-label="Close newsletter sign-up">
          <Icon name="x" size={20} />
        </button>
        <span className="modal__icon"><Icon name="mail" size={26} /></span>
        <h2 id="nl-title" className="h3">{NEWSLETTER_MODAL.title}</h2>
        <p className="modal__desc">{NEWSLETTER_MODAL.body}</p>
        {status === "ok" ? (
          <p className="form-status form-status--ok" role="status">Thank you — you're on the list.</p>
        ) : (
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("ok");
            }}
          >
            <label className="field">
              <span className="field__label">First name <span className="muted">(optional)</span></span>
              <input type="text" name="firstname" autoComplete="given-name" maxLength={80} />
            </label>
            <label className="field">
              <span className="field__label">Email address</span>
              <input type="email" name="email" autoComplete="email" required maxLength={180} placeholder="you@example.com" />
            </label>
            <Button type="submit" variant="turq" className="btn--block">Subscribe</Button>
          </form>
        )}
        <p className="fineprint">
          {NEWSLETTER_MODAL.fine} Read our <a href="privacy.html">privacy policy</a>.
        </p>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- Rich content */

export function RichBlocks({ blocks }) {
  return (
    <div className="rich">
      {blocks.map((b, i) => {
        if (typeof b === "string") return <p key={i}>{b}</p>;
        if (b.p) return <p key={i}>{b.p}</p>;
        return (
          <React.Fragment key={i}>
            {b.h && <h3>{b.h}</h3>}
            {b.h4 && <h4>{b.h4}</h4>}
            {b.list && (
              <ul>
                {b.list.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ----------------------------------------------------------- Layout */

export function Layout({ page, children }) {
  useReveal();
  return (
    <>
      <Header page={page} />
      <div className="bg-blobs" aria-hidden="true"><span /><span /><span /><span /></div>
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
