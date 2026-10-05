import Home from "../containers/home";
import About from "../containers/about";
import Skills from "../containers/skills";
import Resume from "../containers/resume";
import Portfolio from "../containers/portfolio";
import Contact from "../containers/contact";

export const ROUTE_PATHS = {
  HOME: "/",
  HOME_BASE: "/My-Portfolio",
  HOME_BASE_SLASH: "/My-Portfolio/",
  ABOUT: "/My-Portfolio/about",
  ABOUT_ALT: "/about",
  SKILLS: "/My-Portfolio/skills",
  SKILLS_ALT: "/skills",
  RESUME: "/My-Portfolio/resume",
  RESUME_ALT: "/resume",
  PORTFOLIO: "/My-Portfolio/portfolio",
  PORTFOLIO_ALT: "/portfolio",
  CONTACT: "/My-Portfolio/contact",
  CONTACT_ALT: "/contact",
};

export const routesConfig = [
  // Home Routes (matches root, /My-Portfolio, and /My-Portfolio/)
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />,
    exact: true,
  },
  {
    path: ROUTE_PATHS.HOME_BASE,
    element: <Home />,
  },
  {
    path: ROUTE_PATHS.HOME_BASE_SLASH,
    element: <Home />,
  },
  // About Routes
  {
    path: ROUTE_PATHS.ABOUT,
    element: <About />,
  },
  {
    path: ROUTE_PATHS.ABOUT_ALT,
    element: <About />,
  },
  // Skills Routes
  {
    path: ROUTE_PATHS.SKILLS,
    element: <Skills />,
  },
  {
    path: ROUTE_PATHS.SKILLS_ALT,
    element: <Skills />,
  },
  // Resume Routes
  {
    path: ROUTE_PATHS.RESUME,
    element: <Resume />,
  },
  {
    path: ROUTE_PATHS.RESUME_ALT,
    element: <Resume />,
  },
  // Portfolio Routes
  {
    path: ROUTE_PATHS.PORTFOLIO,
    element: <Portfolio />,
  },
  {
    path: ROUTE_PATHS.PORTFOLIO_ALT,
    element: <Portfolio />,
  },
  // Contact Routes
  {
    path: ROUTE_PATHS.CONTACT,
    element: <Contact />,
  },
  {
    path: ROUTE_PATHS.CONTACT_ALT,
    element: <Contact />,
  },
  // Fallback Wildcard Route (ensures page is never blank)
  {
    path: "*",
    element: <Home />,
  },
];

export const isHomePage = (pathname) => {
  return (
    pathname === "/" ||
    pathname === "/My-Portfolio" ||
    pathname === "/My-Portfolio/" ||
    pathname === ""
  );
};
