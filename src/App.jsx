import { useState, useEffect, useRef } from "react";
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
  SpheresCanvas,
} from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 500 && window.innerWidth <= 1100);
  const [showMessage, setShowMessage] = useState(true);
  const [buttonStyles, setButtonStyles] = useState({ bottom: "8px", right: "8px" });
  const footerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
      setIsTablet(window.innerWidth > 500 && window.innerWidth <= 1100);
    };

    const updateButtonStyles = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const footerIsVisible = footerRect.top < window.innerHeight;

        if (footerIsVisible) {
          setButtonStyles({
            bottom: "60px",
            right: "8px",
          });
        } else {
          setButtonStyles({
            bottom: "8px",
            right: "8px",
          });
        }
      }
    };

    updateButtonStyles();

    // Eventos de actualización
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", updateButtonStyles);

    const timer = setTimeout(() => setShowMessage(false), 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateButtonStyles);
      clearTimeout(timer);
    };
  }, [isMobile, isTablet]);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <div className="relative z-10">
            <SpheresCanvas />
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
        <div className="w-full" ref={footerRef}>
          <Footer />
        </div>

        {/* Botón flotante de WhatsApp */}
        {!isMobile && !isTablet && (
          <div
            className="fixed z-50"
            style={{
              bottom: buttonStyles.bottom,
              right: buttonStyles.right,
            }}
          >
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
                <div className="absolute left-[-130px] bottom-1 bg-white text-green-500 font-bold text-sm px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
                  Can we talk?
                </div>
              )}
            </a>
          </div>
        )}
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
