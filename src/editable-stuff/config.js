// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Arthur",
  middleName: "",
  lastName: "Wimberly",
  message: `"Anything is possible if you just believe. But if you want to start believing, start with yourself." - Dulara Perera`,
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/awimberly",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ThisIsArthurWimberly2x",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/cornbreadandcalculus/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/awimberly/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/awimberly.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/e/2PACX-1vTkR5UpbzNYOagP0wKvcqdU4_Eix0JX0IP3_0u_KtJKJNMD9pqAb27jrr81ROeXoQ/pub",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "",//require("../editable-stuff/selfportrait.png"),
  imageSize: 350,
  message:
    "I'm a full stack developer with deep experience in .NET, JavaScript, SQL Server, and a long track record of building everything from enterprise systems to internal tools. I enjoy solving tough problems, learning new technologies, and helping teams deliver solid, scalable software. I'm currently looking for new opportunities where I can contribute, grow, and build things that matter.",
  resume: "https://docs.google.com/document/d/e/2PACX-1vRITxIro4empF_2Du4T7tp9m954I7ZwQbhE_WGbknZlgekWiqn7BsKAvRruMpw7kg/pub",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "awimberly",
  reposLength: 0,
  specificRepos: ["snake-game"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 90 },    
    { name: "SQL", value: 85 },    
    { name: "Javascript", value: 90 },
    { name: "ReactJS", value: 60 },
    { name: "ASP.NET MVC", value: 90 },
    { name: "ASP.NET Web Forms", value: 80 },
    { name: "REST API", value: 70 },
    { name: "HTML/CSS/SCSS", value: 80 },
    { name: "Neo4J", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 95 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 60 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently open to full-time, part-time, and contract opportunities in Software Development. If you have any questions, collaboration ideas, or just want to say hello, feel free to reach out — I'd love to connect.",
  email: "arthur.wimberly@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
const blog = {
  show: true,
};

export { navBar, mainBody, about, repos, skills , getInTouch, experiences, blog };
