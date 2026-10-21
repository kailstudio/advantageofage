import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";
import Directory, { EmptyDirectory } from "./pages/Directory.jsx";
import Profile from "./pages/Profile.jsx";
import About from "./pages/About.jsx";
import Join from "./pages/Join.jsx";
import { Signup, Login, ResetPassword, Contact } from "./pages/Forms.jsx";
import Legal from "./pages/Legal.jsx";

// Each .html file sets <body data-page="..."> — this picks the page to render.
const PAGES = {
  home: () => <Home />,
  members: () => <Directory kind="members" />,
  organisations: () => <Directory kind="organisations" />,
  search: () => <Directory kind="search" />,
  events: () => <EmptyDirectory kind="events" />,
  "resource-hub": () => <EmptyDirectory kind="resource-hub" />,
  profile: () => <Profile />,
  about: () => <About />,
  join: () => <Join />,
  signup: () => <Signup />,
  login: () => <Login />,
  "reset-password": () => <ResetPassword />,
  contact: () => <Contact />,
  privacy: () => <Legal kind="privacy" />,
  terms: () => <Legal kind="terms" />,
};

const page = document.body.dataset.page || "home";
const render = PAGES[page] || PAGES.home;
createRoot(document.getElementById("root")).render(render());
