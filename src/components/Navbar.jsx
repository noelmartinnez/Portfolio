import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 1100; // Cambié la condición aquí

  function abrirEnlace(enlace) {
    window.open(enlace, "_blank");
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 select-none"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain"></img>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Noel &nbsp;
            <span className="sm:block hidden">Martínez&nbsp; Pomares</span>
          </p>
        </Link>
        {isMobile ? (
          // Código para el navbar de móviles
          <div className="sm:hidden flex flex-1 justify-end items-center select-none">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px] `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <li className="font-poppins font-medium cursor-pointer text-[16px]">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-3 md:mr-0 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() =>
                      abrirEnlace(
                        "https://drive.google.com/file/d/1g-BNOosIm4v5k-eI_cynV1qRWpV9xKWg/view?usp=sharing"
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
          // Código para el navbar de escritorio
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer select-none `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li className="hover:text-white font-medium cursor-pointer">
              <button
                type="button"
                className="select-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-3 md:mr-0 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() =>
                  abrirEnlace(
                    "https://drive.google.com/file/d/1g-BNOosIm4v5k-eI_cynV1qRWpV9xKWg/view?usp=sharing"
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
