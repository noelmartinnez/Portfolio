import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../context/LanguageContext";
import esFlag from "flag-icons/flags/4x3/es.svg";
import gbFlag from "flag-icons/flags/4x3/gb.svg";

// ES/EN switch with flags. Highlights the active language.
const LangSwitch = ({ lang, setLanguage, t }) => (
  <div className="flex items-center gap-2 select-none">
    <button
      type="button"
      onClick={() => setLanguage("es")}
      aria-label={t("lang.es")}
      title={t("lang.es")}
      className={`transition-transform hover:scale-110 ${
        lang === "es" ? "opacity-100 scale-110" : "opacity-50"
      }`}
    >
      <img src={esFlag} alt="ES" className="w-[24px] h-[18px] rounded-[3px] object-cover" />
    </button>
    <button
      type="button"
      onClick={() => setLanguage("en")}
      aria-label={t("lang.en")}
      title={t("lang.en")}
      className={`transition-transform hover:scale-110 ${
        lang === "en" ? "opacity-100 scale-110" : "opacity-50"
      }`}
    >
      <img src={gbFlag} alt="GB" className="w-[24px] h-[18px] rounded-[3px] object-cover" />
    </button>
  </div>
);

const NavBar = () => {
  const { t, lang, setLanguage } = useLanguage();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);

  // Con el menú abierto se bloquea el scroll de detrás y se cierra con Escape.
  useEffect(() => {
    if (!toggle) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => event.key === "Escape" && setToggle(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [toggle]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 1100;

  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 border-b border-white/10 bg-primary transition-[padding] duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 select-none"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className={`object-contain transition-[width,height] duration-300 ${scrolled ? "w-14 h-14" : "w-24 h-24"}`} />
        </Link>

        {isMobile ? (
          <div className="flex flex-1 justify-end items-center gap-4 select-none">
            <LangSwitch lang={lang} setLanguage={setLanguage} t={t} />
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={toggle}
              className="p-2 -m-2"
              onClick={() => setToggle(!toggle)}
            >
              <img src={toggle ? close : menu} alt="" className="w-[28px] h-[28px] object-contain" />
            </button>

            <div
              className={`nav-sheet${toggle ? " is-open" : ""}`}
              onClick={() => setToggle(false)}
              aria-hidden={!toggle}
            >
              <ul>
                {navLinks.map((link, index) => (
                  <li key={link.id} style={{ "--i": index }}>
                    <a
                      href={`#${link.id}`}
                      className={active === link.id ? "is-active" : ""}
                      tabIndex={toggle ? 0 : -1}
                      onClick={() => {
                        setActive(link.id);
                        setToggle(false);
                      }}
                    >
                      <span className="n">{String(index + 1).padStart(2, "0")}</span>
                      {t(link.titleKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <ul className="list-none flex flex-row items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer select-none transition duration-200 ease-in-out`}
                onClick={() => setActive(link.id)}
              >
                <a href={`#${link.id}`}>{t(link.titleKey)}</a>
              </li>
            ))}
            <li>
              <LangSwitch lang={lang} setLanguage={setLanguage} t={t} />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
