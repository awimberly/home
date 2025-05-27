import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import {
  mainBody,
  repos,
  about,
  skills,
  getInTouch,
  experiences,
  navBar,
} from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expanded={expanded}
      expand="lg"
      fixed="top"
      className="nav-theme justify-content-between"
    >
      <Navbar.Brand className="nav-name" href="#home">
        {mainBody.firstName}
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded((prev) => !prev)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto text-center">
          {about.show && (
            <Nav.Link href="#aboutme" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
          )}
          {experiences.show && (
            <Nav.Link href="#experience" onClick={() => setExpanded(false)}>
              Experience
            </Nav.Link>
          )}
          {repos.show && (
            <Nav.Link href="#projects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link href="#skills" onClick={() => setExpanded(false)}>
              Skills
            </Nav.Link>
          )}
          <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
            Contact
          </Nav.Link>
          <Link
            to="/blog"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            Blog
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
