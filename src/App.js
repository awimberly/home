import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  getInTouch,
  experiences,
} from "./editable-stuff/config.js";

import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <section id="aboutme">
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}
          />
        </section>
      )}
      {experiences.show && (
        <section id="experience">
          <Experience experiences={experiences} />
        </section>
      )}
      {repos.show && (
        <section id="projects">
          <Project
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specfic={repos.specificRepos}
          />
        </section>
      )}
      {skills.show && (
        <section id="skills">
          <Skills
            heading={skills.heading}
            hardSkills={skills.hardSkills}
            softSkills={skills.softSkills}
          />
        </section>
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <HashRouter>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" element={<Home ref={titleRef} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <section id="contact">
            <GetInTouch
              heading={getInTouch.heading}
              message={getInTouch.message}
              email={getInTouch.email}
            />
          </section>
        )}
      </Footer>
    </HashRouter>
  );
};

export default App;
