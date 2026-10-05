import "./App.scss";
import { useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "./components/navBar";
import ParticleConfig from "./helpers/particlesConfig";
import Theme from "./components/theme";
import AppRoutes from "./routes";
import { isHomePage } from "./config/routes";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();

  const renderParticleJsIfCurrentPageIsHomePage = isHomePage(location.pathname);

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
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;

