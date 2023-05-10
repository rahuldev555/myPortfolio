import { BrowserRouter } from "react-router-dom";
import {
  About,
  EarthCanvas,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import { Footer } from "./components/Footer";

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
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
