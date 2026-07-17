import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../context/LanguageContext";

// ES/EN switch with flags. Highlights the active language.
const LangSwitch = ({ lang, setLanguage, t }) => (
  <div className="flex items-center gap-2 select-none">
    <button
      type="button"
      onClick={() => setLanguage("es")}
      aria-label={t("lang.es")}
      title={t("lang.es")}
      className={`text-[22px] leading-none transition-transform hover:scale-110 ${
        lang === "es" ? "opacity-100 scale-110" : "opacity-50"
      }`}
    >
      🇪🇸
    </button>
    <button
      type="button"
      onClick={() => setLanguage("en")}
      aria-label={t("lang.en")}
      title={t("lang.en")}
      className={`text-[22px] leading-none transition-transform hover:scale-110 ${
        lang === "en" ? "opacity-100 scale-110" : "opacity-50"
      }`}
    >
      🇬🇧
    </button>
  </div>
);

const NavBar = () => {
  const { t, lang, setLanguage } = useLanguage();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownActive, setDropdownActive] = useState("");

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 1100;

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary border-b border-white/10`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 select-none"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
        </Link>

        {isMobile ? (
          <div className="flex flex-1 justify-end items-center gap-4 select-none">
            <LangSwitch lang={lang} setLanguage={setLanguage} t={t} />
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <React.Fragment key={link.id}>
                    {link.dropdown ? (
                      <>
                        <li
                          className="font-poppins font-medium cursor-pointer text-[16px] flex items-center text-secondary"
                          onClick={() =>
                            setDropdownActive(dropdownActive === link.id ? "" : link.id)
                          }
                        >
                          <span>{t(link.titleKey)}</span>
                          <span className="ml-2">{dropdownActive === link.id ? "▾" : "▴"}</span>
                        </li>
                        {dropdownActive === link.id && (
                          <ul className="ml-4 space-y-2">
                            {link.dropdown.map((sublink) => (
                              <li
                                key={sublink.id}
                                onClick={() => {
                                  setActive(sublink.id);
                                  setDropdownActive("");
                                  setToggle(false);
                                }}
                                className="text-secondary hover:text-white cursor-pointer"
                              >
                                <a href={`#${sublink.id}`}>{t(sublink.titleKey)}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <li
                        className={`${
                          active === link.id ? "text-white" : "text-secondary"
                        } font-poppins font-medium cursor-pointer text-[16px]`}
                        onClick={() => {
                          setActive(link.id);
                          setToggle(false);
                        }}
                      >
                        <a href={`#${link.id}`}>{t(link.titleKey)}</a>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <ul className="list-none flex flex-row items-center gap-10">
            {navLinks.map((link) => (
              <React.Fragment key={link.id}>
                {link.dropdown ? (
                  <li
                    className="relative text-secondary hover:text-white text-[18px] font-medium cursor-pointer select-none flex items-center"
                    onClick={() => setShowDropdown(showDropdown === link.id ? "" : link.id)}
                  >
                    <span>{t(link.titleKey)}</span>
                    <span className="ml-2">{showDropdown === link.id ? "▾" : "▴"}</span>
                    {showDropdown === link.id && (
                      <ul className="absolute top-full left-0 mt-2 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-4 space-y-2 shadow-lg w-[200px] border border-gray-600">
                        {link.dropdown.map((sublink) => (
                          <li
                            key={sublink.id}
                            onClick={() => setActive(sublink.id)}
                            className="text-secondary hover:text-white cursor-pointer transition duration-200 ease-in-out"
                          >
                            <a href={`#${sublink.id}`}>{t(sublink.titleKey)}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li
                    className={`${
                      active === link.id ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer select-none transition duration-200 ease-in-out`}
                    onClick={() => setActive(link.id)}
                  >
                    <a href={`#${link.id}`}>{t(link.titleKey)}</a>
                  </li>
                )}
              </React.Fragment>
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
