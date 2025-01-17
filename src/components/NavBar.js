import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li key="home">
          <a href="#home">Home</a>
        </li>
        <li key="about">
          <a href="#about">About</a>
        </li>
        <li key="projects">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
