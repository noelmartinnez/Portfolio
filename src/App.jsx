import { useState, useEffect } from "react";
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
  SpheresCanvas
} from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    /*const timer = setTimeout(() => setShowMessage(false), 3000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };*/
    
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div >
            <div className="relative z-10">
            <SpheresCanvas /> {/* Fondo animado */}
              <Navbar />
              <Hero />
            </div>
        </div>

        <div className={`mt-${isMobile ? "20" : "0"}`}>
          <About />
        </div>

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

        {/* WhatsApp Button
        <div className="fixed bottom-4 right-4 z-50">
          <a
            href="https://wa.link/xzujgs"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-8 h-8"
            />
            {showMessage && (
              <div className="absolute bottom-14 right-0 bg-black text-white text-sm px-3 py-2 rounded-md shadow-md">
                Ponte en contacto
              </div>
            )}
          </a>
        </div>*/}
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
