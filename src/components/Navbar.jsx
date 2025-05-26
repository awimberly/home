import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { Link } from "react-router-dom";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ currPos }) => {
      if (ref?.current && navbarDimensions?.bottom != null) {
        const offset =
          currPos.y + ref.current.offsetTop - navbarDimensions.bottom;
        setIsTop(offset > 5);
        setScrollPosition(currPos.y);
      }
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (ref?.current && navbarDimensions?.bottom != null) {
      const offset = ref.current.offsetTop;
      setIsTop(!(navBottom - scrollPosition >= offset));
    }
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand
        className="navbar-brand"
        href={process.env.PUBLIC_URL + "/#home"}
      >
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          <Nav.Link as={Link} to="/blog" className="nav-item lead">
            Blog
          </Nav.Link>

          {repos.show && (
            <Nav.Link as={Link} to="/#projects" className="nav-item lead">
              Projects
            </Nav.Link>
          )}

          <Nav.Link
            href={about.resume}
            target="_self"
            rel="noreferrer noopener"
            className="nav-item lead"
          >
            Resume
          </Nav.Link>

          {about.show && (
            <Nav.Link as={Link} to="/#aboutme" className="nav-item lead">
              About
            </Nav.Link>
          )}

          {skills.show && (
            <Nav.Link as={Link} to="/#skills" className="nav-item lead">
              Skills
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
