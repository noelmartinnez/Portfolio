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
  const [showMessage, setShowMessage] = useState(true);
  const [buttonStyles, setButtonStyles] = useState({ bottom: "16px", right: "16px" });
  const footerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    const updateButtonStyles = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const footerIsVisible = footerRect.top < window.innerHeight;

        if (footerIsVisible) {
          setButtonStyles({
            bottom: isMobile ? "95px" : "60px",
            right: "8px",
          });
        } else {
          setButtonStyles({
            bottom: "16px",
            right: "16px",
          });
        }
      }
    };

    // Ejecutar al montar la página
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
  }, [isMobile]); // Dependencia para actualizar estilos si cambia `isMobile`

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
              <div className="absolute bottom-14 right-0 bg-black text-white text-sm px-3 py-2 rounded-md shadow-md">
                Ponte en contacto
              </div>
            )}
          </a>
        </div>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
