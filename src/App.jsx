import { BrowserRouter } from "react-router-dom";
import {
  About,
  ComputersCanvas,
  Contact,
  EarthCanvas,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <StarsCanvas />
        <EarthCanvas />
        <About />
        <Experience />
        <Tech />
        <Works />
        <ComputersCanvas />

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
