import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownActive, setDropdownActive] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 1100;

  // Función para abrir el enlace del Curriculum
  const abrirEnlace = (url) => {
    window.open(url, "_blank"); // Abrir el enlace en una nueva pestaña
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}>
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

        {/* Vista móvil */}
        {isMobile ? (
          <div className="sm:hidden flex flex-1 justify-end items-center select-none">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)} // Alternar el estado del menú
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
                          <span>{link.title}</span>
                          <span className="ml-2">{dropdownActive === link.id ? "▾" : "▴"}</span>
                        </li>
                        {dropdownActive === link.id && (
                          <ul className="ml-4 space-y-2">
                            {link.dropdown.map((sublink) => (
                              <li
                                key={sublink.id}
                                onClick={() => {
                                  setActive(sublink.title);
                                  setDropdownActive("");
                                  setToggle(false);
                                }}
                                className="text-secondary hover:text-white cursor-pointer"
                              >
                                <a href={`#${sublink.id}`}>{sublink.title}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <li
                        className={`${
                          active === link.title ? "text-white" : "text-secondary"
                        } font-poppins font-medium cursor-pointer text-[16px]`}
                        onClick={() => {
                          setActive(link.title);
                          setToggle(false); // Cerrar el menú al hacer clic
                        }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    )}
                  </React.Fragment>
                ))}
                {/* Botón de Curriculum en menú móvil */}
                <li className="hover:text-white font-medium cursor-pointer">
                  <button
                    type="button"
                    className="select-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-3 md:mr-0 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() =>
                      abrirEnlace(
                        "https://drive.google.com/file/d/1N5zohwW3XQ4IaGMpdQaHH43mUzwUo479/view?usp=sharing"
                      )
                    }
                  >
                    Curriculum
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          // Vista de escritorio
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <React.Fragment key={link.id}>
                {link.dropdown ? (
                  <li
                    className="relative text-secondary hover:text-white text-[18px] font-medium cursor-pointer select-none flex items-center"
                    onClick={() => setShowDropdown(showDropdown === link.id ? "" : link.id)}
                  >
                    <span>{link.title}</span>
                    <span className="ml-2">{showDropdown === link.id ? "▾" : "▴"}</span>
                    {showDropdown === link.id && (
                      <ul className="absolute top-full left-0 mt-2 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-4 space-y-2 shadow-lg w-[200px] border border-gray-600">
                        {link.dropdown.map((sublink) => (
                          <li
                            key={sublink.id}
                            onClick={() => setActive(sublink.title)}
                            className="text-secondary hover:text-white cursor-pointer transition duration-200 ease-in-out"
                          >
                            <a href={`#${sublink.id}`}>{sublink.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer select-none transition duration-200 ease-in-out`}
                    onClick={() => setActive(link.title)}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )}
              </React.Fragment>
            ))}
            <li className="hover:text-white font-medium cursor-pointer">
              <button
                type="button"
                className="select-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-3 md:mr-0 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() =>
                  abrirEnlace(
                    "https://drive.google.com/file/d/1N5zohwW3XQ4IaGMpdQaHH43mUzwUo479/view?usp=sharing"
                  )
                }
              >
                Curriculum
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
