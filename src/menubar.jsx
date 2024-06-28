import "./menubar.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";

import S_MenuBar from "./components/S_NavBar/S_NavBar.jsx";
import { homeURL, menu } from "./menubar-data.js";

console.clear();

function getSearchRequest() {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  if (searchParams.has("request")) {
    return searchParams.get("request");
  } else {
    return "";
  }
}

const props = {
  homeURL,
  menu,
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".S_NavBar").remove();

  const menubar = document.createElement("div");
  menubar.classList.add("S_NavBar");
  document.body.prepend(menubar);

  const root = createRoot(menubar);
  root.render(<S_MenuBar searchInputValue={getSearchRequest()} {...props} />);
});