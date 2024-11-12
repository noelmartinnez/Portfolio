import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { cara } from '../assets';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section
      className={`relative w-full ${isMobile ? 'h-auto' : 'h-screen'} mx-auto flex flex-col items-center mt-32`}
    >
      <div className={`${styles.paddingX} ${isMobile ? 'pt-20' : 'absolute inset-0 top-[120px]'} max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, soy <span className="text-[#915eff]">Noel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Ingeniero Informático <br className="sm:block hidden" />
            especializado en ingeniería de software.
          </p>
        </div>

        {/* Imagen de mi cara */}
        {!isMobile && (
          <div className="ml-10">
            <img 
              src={cara}
              // Opciones de tamaño 32 36 40 48 56 64 
              className="w-48 h-48 rounded-full object-cover shadow-lg" 
            />
          </div>
        )}
      </div>

      {!isMobile && <ComputersCanvas />}
    </section>
  );
};

export default Hero;
