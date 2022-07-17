import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const holders = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return (
  <nav> {holders}</nav>
  )
}

export default NavBar;
