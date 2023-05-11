import {
  carrent,
  git,
  javascript,
  jobit,
  mobile,
  reactjs,
  redux,
  tailwind,
  tripguide,
  web,
  materialui,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: web,
  },

  {
    title: "Next JS Developer",
    icon: web,
  },
  {
    title: "UI / UX Designer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
];

const experiences = [
  {
    title: "UI Developer",
    company_name: "ACERT IT Solutions Pvt Ltd",
    icon: reactjs,
    iconBg: "#383E56",
    date: "May 2019 - April 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.JS Developer",
    company_name: "ACERT IT Solutions Pvt Ltd",
    icon: redux,
    iconBg: "#E6DEDD",
    date: "May 202 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "myGames",
    description:
      "Web-based app that allows users to search all games belongs to all platforms and genres related information",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "chakraUI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rahuldev555/myGames",
    source_app_link: "https://rahul-darla-games.vercel.app/",
  },
  {
    name: "myLibrary",
    description:
      "A comprehensive library platform made with googlebooks API, that allows users to browse and read samples of different books.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rahuldev555/myLibrary",
    source_app_link: "https://my-librarybooks.vercel.app/",
  },
  {
    name: "myFilms",
    description:
      "Web application that enables users to search for all movies, belongs to different genre movie related information ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rahuldev555/filmsStore",
    source_app_link: "https://rahuldarla-film-store.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
