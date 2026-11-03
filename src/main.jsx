import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";
import Directory, { EmptyDirectory } from "./pages/Directory.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Join from "./pages/Join.jsx";
import { Events, Awards, Conference } from "./pages/WhatsOn.jsx";
import { Signup, Login, ResetPassword, Contact } from "./pages/Forms.jsx";
import Legal from "./pages/Legal.jsx";
import NotFound from "./pages/NotFound.jsx";

// Each .html file sets <body data-page="..."> — this picks the page to render.
const PAGES = {
  home: () => <Home />,
  directory: () => <Directory />,
  profile: () => <Profile />,
  events: () => <Events />,
  awards: () => <Awards />,
  conference: () => <Conference />,
  "resource-hub": () => <EmptyDirectory />,
  about: () => <About />,
  contact: () => <Contact />,
  join: () => <Join />,
  signup: () => <Signup />,
  login: () => <Login />,
  "reset-password": () => <ResetPassword />,
  privacy: () => <Legal kind="privacy" />,
  terms: () => <Legal kind="terms" />,
  accessibility: () => <Legal kind="accessibility" />,
  404: () => <NotFound />,
};

const page = document.body.dataset.page || "home";
const render = PAGES[page] || PAGES[404];
createRoot(document.getElementById("root")).render(render());
