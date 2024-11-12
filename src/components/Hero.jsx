import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { cara } from '../assets';
import { fadeIn } from '../utils/motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletOrMobileQuery = window.matchMedia("(min-width: 500px) and (max-width: 1100px)");

    setIsMobile(mobileQuery.matches);
    setIsTabletOrMobile(tabletOrMobileQuery.matches);

    const handleMobileChange = (event) => setIsMobile(event.matches);
    const handleTabletOrMobileChange = (event) => setIsTabletOrMobile(event.matches);

    mobileQuery.addEventListener("change", handleMobileChange);
    tabletOrMobileQuery.addEventListener("change", handleTabletOrMobileChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletOrMobileQuery.removeEventListener("change", handleTabletOrMobileChange);
    };
  }, []);

  return (
    <section
      className={`relative w-full ${isMobile ? 'h-auto' : 'h-screen'} mx-auto flex flex-col items-center mt-32`}
    >
      <div className={`${styles.paddingX} ${isMobile ? 'pt-20 flex-col items-center' : 'absolute inset-0 top-[120px] flex-row items-start gap-5'} max-w-7xl mx-auto flex`}>
        {!isMobile && <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>}
        <div className={`${isMobile ? 'text-center' : ''}`}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, soy <span className="text-[#915eff]">Noel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Ingeniero Informático <br className="sm:block hidden" />
            especializado en ingeniería de software.
          </p>
        </div>

        {/* Imagen con transición y efecto Tilt */}
        {!isTabletOrMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className={`mt-10 ${isMobile ? '' : 'ml-10'}`}
          >
            <Tilt
              options={{
                max: 15,
                scale: 1.05,
                speed: 400,
              }}
            >
              <img 
                src={cara}
                alt="Cara de Noel" // Añadido un alt para accesibilidad
                className="w-48 h-48 rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </Tilt>
          </motion.div>
        )}
      </div>

      {!isMobile && <ComputersCanvas />}
    </section>
  );
};

export default Hero;
