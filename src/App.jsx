import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLanguage } from "./context/LanguageContext";
import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Skills,
  Works,
  Footer,
  Freelance,
  Formacion,
} from "./components";
import BgController from "./components/fx/BgController";
import LanguageScrollKeeper from "./components/fx/LanguageScrollKeeper";
import Grain from "./components/fx/Grain";
import ParallaxFocus from "./components/fx/ParallaxFocus";
import ErrorBoundary from "./components/fx/ErrorBoundary";

const SpheresCanvas = lazy(() => import("./components/canvas/SpheresCanvas"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Demos = lazy(() => import("./components/Demos"));

const App = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 500 && window.innerWidth <= 1100);
  const [showMessage, setShowMessage] = useState(true);
  const [buttonStyles, setButtonStyles] = useState({ bottom: "8px", right: "8px" });
  const footerRef = useRef(null);
  const pageRef = useRef(null);

  const updateButtonStyles = useCallback(() => {
    if (!footerRef.current) return;
    const footerRect = footerRef.current.getBoundingClientRect();
    const footerIsVisible = footerRect.top < window.innerHeight;

    setButtonStyles((prev) => {
      const next = footerIsVisible
        ? { bottom: "60px", right: "8px" }
        : { bottom: "8px", right: "8px" };
      return prev.bottom === next.bottom ? prev : next;
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
      setIsTablet(window.innerWidth > 500 && window.innerWidth <= 1100);
    };

    updateButtonStyles();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateButtonStyles();
        ticking = false;
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [updateButtonStyles]);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div ref={pageRef} className="relative z-0 flow-root" style={{ backgroundColor: "#050816" }}>
        <Grain />
        <div>
          <div className="relative z-10">
            <ErrorBoundary>
              <Suspense fallback={null}>
                <SpheresCanvas />
              </Suspense>
            </ErrorBoundary>
            <Navbar />
            <Hero />
          </div>
        </div>

        <Experience />
        <Skills />
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Demos />
          </Suspense>
        </ErrorBoundary>
        <ParallaxFocus />
        <Works />
        <Freelance />
        <Formacion />
        <div className="relative z-0">
          <Contact />
          <ErrorBoundary>
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="w-full" ref={footerRef}>
          <Footer />
        </div>

        <BgController targetRef={pageRef} />
        <LanguageScrollKeeper />

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
                  {t("whatsapp.message")}
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
