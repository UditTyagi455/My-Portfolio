import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Navbar from "./components/navBar";
import ParticleConfig from "./helpers/particlesConfig";
import Theme from "./components/theme";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import app from "./firebase";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
 
  const renderParticleJsIfCurrentPageIsHomePage = location.pathname === "/My-Portfolio";

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsIfCurrentPageIsHomePage && (
        <Particles
          id="particles"
          options={ParticleConfig}
          init={particlesInit}
        />
      )}
      {/* navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      {/* main page content */}
      <div className="App__main-content-wrapper">
        <Theme />
        <Routes>
          {/* create all routes */}
          <Route path="/My-Portfolio" index element={<Home />} />
          <Route path="/My-Portfolio/about" element={<About />} />
          <Route path="/My-Portfolio/skills" element={<Skills />} />
          <Route path="/My-Portfolio/resume" element={<Resume />} />
          <Route path="/My-Portfolio/portfolio" element={<Portfolio />} />
          <Route path="/My-Portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
