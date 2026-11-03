import React from "react";
import { NOT_FOUND } from "../data.js";
import { Layout, PageHero, Button } from "../components.jsx";

export default function NotFound() {
  return (
    <Layout page="404">
      <PageHero eyebrow="Page not found" title={NOT_FOUND.title} accent={NOT_FOUND.accent} sub={NOT_FOUND.body} tone="pink">
        <div className="hero__ctas">
          <Button href="index.html" variant="dark">Go to the homepage</Button>
          <Button href="directory.html" variant="outline">Search the directory</Button>
          <Button href="contact.html" variant="outline">Contact us</Button>
        </div>
      </PageHero>
    </Layout>
  );
}
