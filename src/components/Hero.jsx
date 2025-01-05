import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { cara } from '../assets';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [clicked, setClicked] = useState(false); // Estado para manejar el clic en la imagen

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

  // Detecta cambios en isTabletOrMobile y ajusta showImage
  useEffect(() => {
    setShowImage(!isTabletOrMobile);
  }, [isTabletOrMobile]);

  // Manejo de clics en la imagen
  const handleImageClick = () => {
    setClicked(true); // Activamos el clic
    setTimeout(() => setClicked(false), 500); // Volvemos a desactivarlo después de 0.5 segundos
  };

  return (
    <section
      className={`relative w-full ${isMobile ? 'h-auto' : isTabletOrMobile ? 'min-h-[calc(50vh+10px)]' : 'min-h-[calc(85vh+10px)]'} mx-auto flex flex-col items-center mt-32`}
    >
      <div className={`${styles.paddingX} ${isMobile || isTabletOrMobile ? 'pt-20 flex-col items-center justify-center' : 'absolute top-[120px] flex-row items-start gap-12'} max-w-7xl mx-auto flex`}>
        {/* Solo mostrar el gradiente y el círculo en pantallas grandes */}
        {!isMobile && !isTabletOrMobile && (
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
        )}

        {/* Contenedor de texto centrado solo en móvil y tablet */}
        <div className={`${isMobile ? 'text-center flex flex-col justify-center items-center' :
                           isTabletOrMobile ? 'text-center flex flex-col justify-center items-cente mt-10' : ''}`}>
          <h1 className={`${styles.heroHeadText} text-white ${isTabletOrMobile ? 'mt-20' : ''}`}>
            Hola, soy <span className="text-[#915eff]">Noel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Ingeniero Informático <br className="sm:block hidden" />
            especializado en ingeniería de software
          </p>
        </div>

        <AnimatePresence>
          {showImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className={`${isMobile ? 'mt-14 mb-14' : isTabletOrMobile ? 'mt-2 ml-10' : 'ml-10'}`}
            >
              <Tilt
                options={{
                  max: 15,
                  scale: 1.05,
                  speed: 400,
                }}
              >
                <motion.img
                  src={cara}
                  alt="Cara de Noel"
                  className={`rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 
                              ${isMobile ? 'w-36 h-36' : 'w-56 h-56'}`}
                  onClick={handleImageClick}
                  animate={{
                    scale: clicked ? 1.3 : 1, // Escala más grande al hacer clic
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 300, damping: 30 },
                    rotate: { type: "spring", stiffness: 300, damping: 30 },
                  }}
                />
              </Tilt>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
