import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Certificados,
  Idiomas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Certificados />
        <Idiomas />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
