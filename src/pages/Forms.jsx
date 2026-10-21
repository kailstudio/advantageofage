import React, { useState } from "react";
import { SIGNUP, CONTACT, LINKS } from "../data.js";
import { Layout, PageHero, Button, Icon, Chip } from "../components.jsx";

function AuthShell({ title, accent, eyebrow, img, children, crumbs }) {
  return (
    <Layout>
      <section className="auth">
        <div className="container">
          <div className="auth__card">
            <div className="auth__media">
              <img src={img} alt="" />
              <img className="auth__logo" src="assets/logo/aoa-white.png" alt="Advantages of Age" />
            </div>
            <div className="auth__form">
              {crumbs && (
                <nav className="crumbs" aria-label="Breadcrumb">
                  <a href="index.html">Home</a>
                  {crumbs.map((c) => (<React.Fragment key={c.label}><span>/</span>{c.href ? <a href={c.href}>{c.label}</a> : <span aria-current="page">{c.label}</span>}</React.Fragment>))}
                </nav>
              )}
              {eyebrow && <Chip dot="var(--turq)">{eyebrow}</Chip>}
              <h1 className="h1">{title} {accent && <em>{accent}</em>}</h1>
              {children}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function Signup() {
  const plan = new URLSearchParams(window.location.search).get("plan") || "individuals";
  const label = SIGNUP.plans[plan] || SIGNUP.plans.individuals;
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  return (
    <AuthShell title="Create" accent="Account" eyebrow={label} img="assets/img/three-friends.jpg" crumbs={[{ label: "Membership", href: "join.html" }, { label: "Create Account" }]}>
      <p className="lead">{SIGNUP.sub}</p>
      {done ? (
        <p className="form-status form-status--ok" role="status">Thanks for joining — check your inbox for your welcome email.</p>
      ) : (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            if (f.get("email") !== f.get("email2")) return setErr("Email addresses do not match.");
            if (f.get("password") !== f.get("password2")) return setErr("Passwords do not match.");
            setErr("");
            setDone(true);
          }}
        >
          <div className="form-grid">
            <label className="field"><span className="field__label">Enter Email <span className="req">*</span></span><input type="email" name="email" required autoComplete="email" /></label>
            <label className="field"><span className="field__label">Confirm Email <span className="req">*</span></span><input type="email" name="email2" required autoComplete="email" /></label>
            <label className="field"><span className="field__label">Create Password <span className="req">*</span></span><input type="password" name="password" required minLength={6} autoComplete="new-password" /></label>
            <label className="field"><span className="field__label">Confirm Password <span className="req">*</span></span><input type="password" name="password2" required minLength={6} autoComplete="new-password" /></label>
          </div>
          {SIGNUP.consents.map((c, i) => (
            <label className="check" key={i}>
              <input type="checkbox" required />
              <span>{c[0]}{c[1] && <a href={c[1].href}>{c[1].label}</a>}</span>
            </label>
          ))}
          {err && <p className="form-status form-status--err" role="alert">{err}</p>}
          <Button type="submit" variant="dark" className="btn--block">Create Account</Button>
          <p className="muted small center">Already a member? <a href="login.html">Log in</a></p>
        </form>
      )}
    </AuthShell>
  );
}

export function Login() {
  const [msg, setMsg] = useState(false);
  return (
    <AuthShell title="Log Into" accent="Your Account" eyebrow="Welcome Members" img="assets/img/caroline-sam.jpg" crumbs={[{ label: "Member Login" }]}>
      <form className="form" onSubmit={(e) => { e.preventDefault(); setMsg(true); }}>
        <h2 className="h4">Member Login</h2>
        <label className="field"><span className="field__label">Email Address <span className="req">*</span></span><input type="email" required autoComplete="email" /></label>
        <label className="field"><span className="field__label">Password <span className="req">*</span></span><input type="password" required autoComplete="current-password" /></label>
        {msg && <p className="form-status form-status--ok" role="status">Logging you in…</p>}
        <Button type="submit" variant="dark" icon="lock" className="btn--block">Log In</Button>
        <p className="small"><a href="reset-password.html">Forgot Password? Click to Reset Password</a></p>
        <p className="small">Don't Have an Account? <a href="join.html">Get Listed Today</a></p>
      </form>
    </AuthShell>
  );
}

export function ResetPassword() {
  const [sent, setSent] = useState(false);
  return (
    <AuthShell title="Password" accent="Retrieval" img="assets/img/kath.jpg" crumbs={[{ label: "Member Login", href: "login.html" }, { label: "Password Retrieval" }]}>
      {sent ? (
        <p className="form-status form-status--ok" role="status">If an account exists for that address, you'll receive a reset link shortly.</p>
      ) : (
        <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label className="field"><span className="field__label">Enter Email Address <span className="req">*</span></span><input type="email" required autoComplete="email" /></label>
          <Button type="submit" variant="dark" className="btn--block">Submit</Button>
        </form>
      )}
      <p className="small"><a href="login.html">Back to Login Page</a></p>
    </AuthShell>
  );
}

const HELP_ICONS = ["people", "pen", "chat", "heart"];
const HELP_TONES = ["turq", "pink", "lime", "blue"];

export function Contact() {
  const c = CONTACT;
  const [sent, setSent] = useState(false);
  return (
    <Layout page="contact">
      <PageHero eyebrow={c.eyebrow} title="Get in" accent="Touch" crumbs={[{ label: "About Us", href: "about.html" }, { label: "Contact Us" }]} img="assets/img/portrait-scarf.jpg" tone="lime">
        <p className="hero-tagline">{c.heading}</p>
        <p className="lead">{c.body}</p>
      </PageHero>

      <section className="section section--tight">
        <div className="container">
          <h2 className="h3 mb">{c.helpTitle}</h2>
          <div className="help-grid">
            {c.help.map((h, i) => (
              <div key={h.title} className={`help help--${HELP_TONES[i]}`} data-reveal style={{ "--d": `${i * 60}ms` }}>
                <span className="feature__icon"><Icon name={HELP_ICONS[i]} size={22} /></span>
                <h3 className="h4">{h.title}</h3>
                <p>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--last">
        <div className="container">
          <div className="contact">
            <aside className="contact__side">
              <div className="side-card side-card--blue">
                <h2 className="h4">{c.emailTitle}</h2>
                <a className="contact__email" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              </div>
              <div className="side-card">
                <h2 className="h4">{c.elsewhere}</h2>
                <ul className="elsewhere">
                  <li><a href={LINKS.substack} target="_blank" rel="noopener noreferrer"><Icon name="substack" size={18} /> Substack <Icon name="arrowUpRight" size={14} /></a></li>
                  <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram" size={18} /> Instagram <Icon name="arrowUpRight" size={14} /></a></li>
                  <li><a href={LINKS.facebook} target="_blank" rel="noopener noreferrer"><Icon name="facebook" size={18} /> Facebook <Icon name="arrowUpRight" size={14} /></a></li>
                </ul>
              </div>
            </aside>
            <div className="panel contact__form">
              <h2 className="h2">Send us a <em>message</em></h2>
              <p className="lead">{c.formBody}</p>
              {sent ? (
                <p className="form-status form-status--ok" role="status">Thank you — we'll come back to you within two working days.</p>
              ) : (
                <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className="form-grid">
                    <label className="field"><span className="field__label">Name <span className="req">*</span></span><input type="text" required autoComplete="name" /></label>
                    <label className="field"><span className="field__label">Email <span className="req">*</span></span><input type="email" required autoComplete="email" /></label>
                  </div>
                  <label className="field"><span className="field__label">Phone Number</span><input type="tel" autoComplete="tel" /></label>
                  <label className="field"><span className="field__label">Enter A Message <span className="req">*</span></span><textarea rows={6} required /></label>
                  <label className="check"><input type="checkbox" required /><span>{c.consent}</span></label>
                  <Button type="submit" variant="dark" icon="mail">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
